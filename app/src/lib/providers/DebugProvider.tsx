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

  return (
    <DebugContext.Provider value={{ debug, log: handleLog } as DebugState}>
      { children }
    </DebugContext.Provider>
  );
};

export default DebugProvider;


export const useDebug = (tag: string) => {
  const state: DebugState = useContext(DebugContext);

  const handleInfo = useCallback((method?: ErrorMessage, message?: ErrorMessage) => {
    state.log('🟠', tag, method, message);
  }, [tag, state]);

  const handleSuccess = useCallback((method?: string, message?: ErrorMessage) => {
    state.log('🟢', tag, method, message);
  }, [tag, state]);

  const handleError = useCallback((method?: string, message?: ErrorMessage) => {
    state.log('🔴', tag, method, message);
  }, [tag, state]);

  return useMemo(() => ({ success: handleSuccess, info: handleInfo, error: handleError }), [handleSuccess, handleInfo, handleError]);
};
