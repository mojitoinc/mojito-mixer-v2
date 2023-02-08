import React__default, { createContext, useCallback, useMemo, useContext } from 'react';

const DebugContext = createContext({ debug: false });
const DebugProvider = ({ debug, children, }) => {
    const handleLog = useCallback((emoji, tag, method, message) => {
        const id = typeof method === 'string' ? method : '';
        const content = message || (method || '');
        if (debug)
            console.log(`${emoji} [${tag}]--${id}--`, content);
    }, [debug]);
    const values = useMemo(() => {
        return { debug, log: handleLog };
    }, [debug, handleLog]);
    return (React__default.createElement(DebugContext.Provider, { value: values }, children));
};
const useDebug = (tag) => {
    const state = useContext(DebugContext);
    const handleWarn = useCallback((method, message) => {
        state.log('🟡', tag, method, message);
    }, [tag, state]);
    const handleInfo = useCallback((method, message) => {
        state.log('🔵', tag, method, message);
    }, [tag, state]);
    const handleSuccess = useCallback((method, message) => {
        state.log('🟢', tag, method, message);
    }, [tag, state]);
    const handleError = useCallback((method, message) => {
        state.log('🔴', tag, method, message);
    }, [tag, state]);
    return useMemo(() => ({ success: handleSuccess, info: handleInfo, error: handleError, warn: handleWarn }), [handleSuccess, handleInfo, handleError, handleWarn]);
};

export { DebugProvider as default, useDebug };
//# sourceMappingURL=DebugProvider.js.map
