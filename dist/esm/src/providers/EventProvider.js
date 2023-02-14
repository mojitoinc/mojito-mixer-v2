import { createContext, useContext } from 'react';

const EventContext = createContext({});
const useEvents = () => {
    return useContext(EventContext);
};

export { EventContext, useEvents };
//# sourceMappingURL=EventProvider.js.map
