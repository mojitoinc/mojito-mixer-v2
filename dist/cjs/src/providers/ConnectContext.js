'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Context = React.createContext({});
const useConnect = () => {
    return React.useContext(Context);
};
const ConnectProvider = ({ children }) => {
    const [connect, setConnect] = React.useState({
        connected: false,
        account: '',
        chainId: 4,
    });
    const values = React.useMemo(() => {
        return {
            connect, setConnect,
        };
    }, [connect, setConnect]);
    return (React__default["default"].createElement(Context.Provider, { value: values }, children));
};

exports.ConnectProvider = ConnectProvider;
exports.useConnect = useConnect;
//# sourceMappingURL=ConnectContext.js.map
