/// <reference types="react" />
export interface EventConfig {
    onError?: (e: any) => void;
    onEvent?: (e: any) => void;
    onCatch?: (e: any) => void;
}
export declare const EventContext: import("react").Context<EventConfig>;
export declare const useEvents: () => EventConfig;
