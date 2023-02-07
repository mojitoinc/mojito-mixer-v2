import React, { createContext, useContext, useCallback, useMemo } from 'react';

type ErrorMessage = string | object | undefined | null;

export interface DebugState {
  debug: boolean,
  log: (emoji: string, tag: string, method?: ErrorMessage, message?: ErrorMessage) => void
}

export interface DebugProps{
  debug: boolean,
  children?: React.ReactNode;
}

const DebugContext = createContext<DebugState>({ debug: false } as DebugState);

const DebugProvider = ({
  debug,
  children,
}: DebugProps) => {
  const handleLog = useCallback((emoji: string, tag: string, method?: ErrorMessage, message?: ErrorMessage) => {
    const id = typeof method === 'string' ? method : '';
    const content = message || (method || '');
    if (debug) console.log(`${ emoji } [${ tag }]--${ id }--`, content);
  }, [debug]);

  const values = useMemo<DebugState>(() => {
    return { debug, log: handleLog } as DebugState;
  }, [debug, handleLog]);

  return (
    <DebugContext.Provider value={ values }>
      { children }
    </DebugContext.Provider>
  );
};

export default DebugProvider;


export const useDebug = (tag: string) => {
  const state: DebugState = useContext(DebugContext);

  const handleWarn = useCallback((method?: ErrorMessage, message?: ErrorMessage) => {
    state.log('🟡', tag, method, message);
  }, [tag, state]);
  
  const handleInfo = useCallback((method?: ErrorMessage, message?: ErrorMessage) => {
    state.log('🔵', tag, method, message);
  }, [tag, state]);

  const handleSuccess = useCallback((method?: string, message?: ErrorMessage) => {
    state.log('🟢', tag, method, message);
  }, [tag, state]);

  const handleError = useCallback((method?: string, message?: ErrorMessage) => {
    state.log('🔴', tag, method, message);
  }, [tag, state]);

  return useMemo(() => ({ success: handleSuccess, info: handleInfo, error: handleError, warn: handleWarn }), [handleSuccess, handleInfo, handleError]);
};
