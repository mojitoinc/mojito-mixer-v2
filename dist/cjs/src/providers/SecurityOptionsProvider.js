'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const SecurityContext = React.createContext({});
const useSecurityOptions = () => {
    return React.useContext(SecurityContext);
};

exports.SecurityContext = SecurityContext;
exports.useSecurityOptions = useSecurityOptions;
//# sourceMappingURL=SecurityOptionsProvider.js.map
