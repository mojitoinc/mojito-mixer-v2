'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

exports.ContainerTypes = void 0;
(function (ContainerTypes) {
    ContainerTypes["CHECKOUT"] = "CHECKOUT";
    ContainerTypes["PAYMENT"] = "PAYMENT";
    ContainerTypes["DELIVERY"] = "DELIVERY";
    ContainerTypes["CONFIRMATION"] = "CONFIRMATION";
    ContainerTypes["LOADING"] = "LOADING";
})(exports.ContainerTypes || (exports.ContainerTypes = {}));
const ContainerStateContext = React.createContext({});
const ContainerStateProvider = ({ paymentId, children, }) => {
    const [containerState, setContainerState] = React.useState(exports.ContainerTypes.CHECKOUT);
    React.useEffect(() => {
        if (paymentId)
            setContainerState(exports.ContainerTypes.CONFIRMATION);
    }, [paymentId]);
    const value = React.useMemo(() => {
        return { containerState, setContainerState };
    }, [containerState, setContainerState]);
    return (React__default["default"].createElement(ContainerStateContext.Provider, { value: value }, children));
};
const useContainer = () => {
    return React.useContext(ContainerStateContext);
};

exports.ContainerStateProvider = ContainerStateProvider;
exports.useContainer = useContainer;
//# sourceMappingURL=ContainerStateProvider.js.map
