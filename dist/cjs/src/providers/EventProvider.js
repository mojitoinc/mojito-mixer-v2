'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const EventContext = React.createContext({});
const useEvents = () => {
    return React.useContext(EventContext);
};

exports.EventContext = EventContext;
exports.useEvents = useEvents;
//# sourceMappingURL=EventProvider.js.map
