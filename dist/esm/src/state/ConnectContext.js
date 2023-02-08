import React__default, { createContext, useState, useMemo, useContext } from 'react';

const Context = createContext({});
const useConnect = () => {
    return useContext(Context);
};
const ConnectProvider = ({ children }) => {
    const [connect, setConnect] = useState({
        connected: false,
        account: '',
        chainId: 4,
    });
    const values = useMemo(() => {
        return {
            connect, setConnect,
        };
    }, [connect, setConnect]);
    return (React__default.createElement(Context.Provider, { value: values }, children));
};

export { ConnectProvider, useConnect };
//# sourceMappingURL=ConnectContext.js.map
