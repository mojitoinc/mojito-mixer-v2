import React, { createContext, useContext, useMemo, useState } from 'react';


export interface ErrorState {
  error: string | undefined | null,
  setError: (prev: object) => void;
}

export interface ErrorProps {
  children?: React.ReactNode;
}

const ErrorContext = createContext<ErrorState>({ error: null } as ErrorState);

const ErrorProvider = ({
  children,
}: ErrorProps) => {
  const [error, setError] = useState();

  const values = useMemo<ErrorState>(() => {
    return { error, setError } as ErrorState;
  }, [error, setError]);

  return (
    <ErrorContext.Provider value={ values }>
      { children }
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;


export const useError = () => {
  return useContext(ErrorContext);
};
