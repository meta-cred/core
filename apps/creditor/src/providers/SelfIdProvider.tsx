import { Core } from '@self.id/core';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { CONFIG } from '../config';

export type ISelfIdContext = {
  core: Core;
};

export const SelfIdContext = createContext<ISelfIdContext>({
  core: new Core({ ceramic: CONFIG.ceramicEndpoint }),
});

type SelfIdProviderProps = {
  children: React.ReactNode;
};

export const SelfIdProvider: React.FC<SelfIdProviderProps> = ({ children }) => {
  const [core, setCore] = useState<Core>(
    new Core({ ceramic: CONFIG.ceramicEndpoint }),
  );

  // Reset 3ID Connect every time address changes
  useEffect(() => {
    setCore(new Core({ ceramic: CONFIG.ceramicEndpoint }));
  }, []);

  return (
    <SelfIdContext.Provider
      value={{
        core,
      }}
    >
      {children}
    </SelfIdContext.Provider>
  );
};

export const useSelfId = (): ISelfIdContext => useContext(SelfIdContext);
