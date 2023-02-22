'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const UserInfoContext = React.createContext({});
const useUserInfo = () => {
    return React.useContext(UserInfoContext);
};

exports.UserInfoContext = UserInfoContext;
exports.useUserInfo = useUserInfo;
//# sourceMappingURL=UserInfoProvider.js.map
