import { createContext, useContext } from 'react';

const UserInfoContext = createContext({});
const useUserInfo = () => {
    return useContext(UserInfoContext);
};

export { UserInfoContext, useUserInfo };
//# sourceMappingURL=UserInfoProvider.js.map
