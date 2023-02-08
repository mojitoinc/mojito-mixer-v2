import React__default, { createContext, useState, useMemo, useContext } from 'react';

const ErrorContext = createContext({ error: null });
const ErrorProvider = ({ children, }) => {
    const [error, setError] = useState();
    const values = useMemo(() => {
        return { error, setError };
    }, [error, setError]);
    return (React__default.createElement(ErrorContext.Provider, { value: values }, children));
};
const useError = () => {
    return useContext(ErrorContext);
};

export { ErrorProvider as default, useError };
//# sourceMappingURL=ErrorProvider.js.map
