import React__default, { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { useDebug } from './DebugProvider.js';
import { ContainerTypes } from '../interfaces/ContextInterface/RootContainer.js';

const ContainerStateContext = createContext({});
const ContainerStateProvider = ({ paymentId, success, children, }) => {
    const debug = useDebug('ContainerStateProvider');
    const [containerState, setContainerState] = useState(success ? ContainerTypes.CONFIRMATION : ContainerTypes.CHECKOUT);
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
