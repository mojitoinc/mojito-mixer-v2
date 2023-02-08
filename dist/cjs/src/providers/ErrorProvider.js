'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ErrorContext = React.createContext({ error: null });
const ErrorProvider = ({ children, }) => {
    const [error, setError] = React.useState();
    const values = React.useMemo(() => {
        return { error, setError };
    }, [error, setError]);
    return (React__default["default"].createElement(ErrorContext.Provider, { value: values }, children));
};
const useError = () => {
    return React.useContext(ErrorContext);
};

exports["default"] = ErrorProvider;
exports.useError = useError;
//# sourceMappingURL=ErrorProvider.js.map
