import { ButtonGroup, ButtonGroupProps, useRadioGroup } from '@chakra-ui/react';
import * as React from 'react';
import { ReactElement } from 'react';

import { ToggleButtonProps } from './ToggleButton';

interface ToggleButtonGroupProps<T> extends Omit<ButtonGroupProps, 'onChange'> {
  name?: string;
  value: T;
  defaultValue?: string;
  onChange?: (value: T) => void;
}

export const ToggleButtonGroup = <T extends string>({
  children,
  name,
  defaultValue,
  value,
  onChange,
  ...rest
}: ToggleButtonGroupProps<T>): ReactElement => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    value,
    onChange,
  });

  const buttons = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter<React.ReactElement<ToggleButtonProps>>(React.isValidElement)
        .map((button, index, array) => {
          const isFirstItem = index === 0;
          const isLastItem = array.length === index + 1;

          const styleProps = {
            ...(isFirstItem && !isLastItem ? { borderRightRadius: 0 } : {}),
            ...(!isFirstItem && isLastItem ? { borderLeftRadius: 0 } : {}),
            ...(!isFirstItem && !isLastItem ? { borderRadius: 0 } : {}),
            ...(!isLastItem ? { mr: '-px', borderRightWidth: 0 } : {}),
          };

          return React.cloneElement(button, {
            ...styleProps,
            radioProps: getRadioProps({
              value: button.props.value,
              disabled: rest.isDisabled || button.props.isDisabled,
            }),
          });
        }),
    [children, getRadioProps, rest.isDisabled],
  );
  return <ButtonGroup {...getRootProps(rest)}>{buttons}</ButtonGroup>;
};
