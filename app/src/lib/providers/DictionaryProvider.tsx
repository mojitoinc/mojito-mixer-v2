import React, { createContext, useMemo } from "react";
// import { PUIDictionary } from "../domain/dictionary/dictionary.interfaces";

interface PUIDictionary{

}
export const DictionaryContext = createContext<PUIDictionary>({});

export interface DictionaryProviderProps {
  dictionary?: Partial<any>;
  children?: React.ReactNode;
}

export const DictionaryProvider: React.FC<DictionaryProviderProps> = ({
  dictionary,
  children,
}) => {
  const providerDictionary = useMemo(() => ({...dictionary }), [dictionary]);

  return (
    <DictionaryContext.Provider value={ providerDictionary }>
      { children }
    </DictionaryContext.Provider>
  );
};
