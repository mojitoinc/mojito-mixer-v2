import React, { createContext, useContext, useState, useMemo } from 'react';


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
 // const

  return (
    <ErrorContext.Provider value={{ error, setError } as ErrorState}>
      { children }
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;


export const useError = () => {
  return useContext(ErrorContext);
};
