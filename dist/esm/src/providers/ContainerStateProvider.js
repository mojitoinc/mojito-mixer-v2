import React__default, { createContext, useState, useEffect, useMemo, useContext } from 'react';

var ContainerTypes;
(function (ContainerTypes) {
    ContainerTypes["CHECKOUT"] = "CHECKOUT";
    ContainerTypes["PAYMENT"] = "PAYMENT";
    ContainerTypes["DELIVERY"] = "DELIVERY";
    ContainerTypes["CONFIRMATION"] = "CONFIRMATION";
    ContainerTypes["LOADING"] = "LOADING";
})(ContainerTypes || (ContainerTypes = {}));
const ContainerStateContext = createContext({});
const ContainerStateProvider = ({ paymentId, children, }) => {
    const [containerState, setContainerState] = useState(ContainerTypes.CHECKOUT);
    useEffect(() => {
        if (paymentId)
            setContainerState(ContainerTypes.CONFIRMATION);
    }, [paymentId]);
    const value = useMemo(() => {
        return { containerState, setContainerState };
    }, [containerState, setContainerState]);
    return (React__default.createElement(ContainerStateContext.Provider, { value: value }, children));
};
const useContainer = () => {
    return useContext(ContainerStateContext);
};

export { ContainerStateProvider, ContainerTypes, useContainer };
//# sourceMappingURL=ContainerStateProvider.js.map
