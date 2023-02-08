'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const DebugContext = React.createContext({ debug: false });
const DebugProvider = ({ debug, children, }) => {
    const handleLog = React.useCallback((emoji, tag, method, message) => {
        const id = typeof method === 'string' ? method : '';
        const content = message || (method || '');
        if (debug)
            console.log(`${emoji} [${tag}]--${id}--`, content);
    }, [debug]);
    const values = React.useMemo(() => {
        return { debug, log: handleLog };
    }, [debug, handleLog]);
    return (React__default["default"].createElement(DebugContext.Provider, { value: values }, children));
};
const useDebug = (tag) => {
    const state = React.useContext(DebugContext);
    const handleWarn = React.useCallback((method, message) => {
        state.log('🟡', tag, method, message);
    }, [tag, state]);
    const handleInfo = React.useCallback((method, message) => {
        state.log('🔵', tag, method, message);
    }, [tag, state]);
    const handleSuccess = React.useCallback((method, message) => {
        state.log('🟢', tag, method, message);
    }, [tag, state]);
    const handleError = React.useCallback((method, message) => {
        state.log('🔴', tag, method, message);
    }, [tag, state]);
    return React.useMemo(() => ({ success: handleSuccess, info: handleInfo, error: handleError, warn: handleWarn }), [handleSuccess, handleInfo, handleError, handleWarn]);
};

exports["default"] = DebugProvider;
exports.useDebug = useDebug;
//# sourceMappingURL=DebugProvider.js.map
