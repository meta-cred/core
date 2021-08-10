import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { useEffect, useState } from 'react';

function getDisplayName<T>(WrappedComponent: React.ComponentType<T>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function deferComponentRender<T>(
  WrappedComponent: React.ComponentType<T>,
  placeholder: React.ReactElement | null = null,
): React.FC<T> {
  const DeferredRenderWrapper: React.FC<T> = (props) => {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
      let frame2Id: number;
      const frame1Id = requestAnimationFrame(() => {
        frame2Id = requestAnimationFrame(() => setShouldRender(true));
      });
      return () => {
        if (frame1Id) cancelAnimationFrame(frame1Id);
        if (frame2Id) cancelAnimationFrame(frame2Id);
      };
    }, []);

    if (!shouldRender) {
      return placeholder || <>{props.children}</>;
    }

    return <WrappedComponent {...props} />;
  };

  DeferredRenderWrapper.displayName = `Deferred(${getDisplayName(
    WrappedComponent,
  )})`;

  hoistNonReactStatics(DeferredRenderWrapper, WrappedComponent);
  return DeferredRenderWrapper;
}

export function useDeferComponentRender(deps: Array<unknown> = []): boolean {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  useEffect(() => {
    let frame2Id: number;
    const frame1Id = requestAnimationFrame(() => {
      frame2Id = requestAnimationFrame(() => setShouldRender(true));
    });
    return () => {
      if (frame1Id) cancelAnimationFrame(frame1Id);
      if (frame2Id) cancelAnimationFrame(frame2Id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  return shouldRender;
}
