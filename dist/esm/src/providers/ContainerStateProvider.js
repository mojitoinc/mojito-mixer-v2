import React__default, { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { useDebug } from './DebugProvider.js';
import { ContainerTypes } from '../interfaces/ContextInterface/RootContainer.js';
import { useEvents } from './EventProvider.js';

const ContainerStateContext = createContext({});
const ContainerStateProvider = ({ paymentId, success, children, }) => {
    const debug = useDebug('ContainerStateProvider');
    const [containerState, setContainerState] = useState(success ? ContainerTypes.CONFIRMATION : ContainerTypes.CHECKOUT);
    const { onEvent } = useEvents();
    useEffect(() => {
        onEvent === null || onEvent === void 0 ? void 0 : onEvent(containerState);
    }, [onEvent, containerState]);
    useEffect(() => {
        debug.info('paymentId', { paymentId, success });
        if (paymentId || success)
            setContainerState(ContainerTypes.CONFIRMATION);
    }, [debug, paymentId, success]);
    const value = useMemo(() => {
        return { containerState, setContainerState };
    }, [containerState, setContainerState]);
    return (React__default.createElement(ContainerStateContext.Provider, { value: value }, children));
};
const useContainer = () => {
    return useContext(ContainerStateContext);
};

export { ContainerStateProvider, useContainer };
//# sourceMappingURL=ContainerStateProvider.js.map
