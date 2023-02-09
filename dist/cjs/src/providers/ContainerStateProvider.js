'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DebugProvider = require('./DebugProvider.js');
var RootContainer = require('../interfaces/ContextInterface/RootContainer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ContainerStateContext = React.createContext({});
const ContainerStateProvider = ({ paymentId, success, children, }) => {
    const debug = DebugProvider.useDebug('ContainerStateProvider');
    const [containerState, setContainerState] = React.useState(success ? RootContainer.ContainerTypes.CONFIRMATION : RootContainer.ContainerTypes.CHECKOUT);
    React.useEffect(() => {
        debug.info('paymentId', { paymentId, success });
        if (paymentId || success)
            setContainerState(RootContainer.ContainerTypes.CONFIRMATION);
    }, [debug, paymentId, success]);
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
