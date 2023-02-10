import { createContext, useContext } from "react";

export interface EventConfig {
  onError?: (e: any) => void;
  onEvent?: (e: any) => void;
  onCatch?: (e: any) => void;
}

export const EventContext = createContext< EventConfig >({});

export const useEvents = (): EventConfig => {
  return useContext<EventConfig>(EventContext);
};
