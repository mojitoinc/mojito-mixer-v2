'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var UIConfiguration = require('../config/UIConfiguration.js');

const UIConfigurationContext = React.createContext(UIConfiguration.DefaultUIConfiguration);
const useUIConfiguration = () => {
    return React.useContext(UIConfigurationContext);
};

exports.UIConfigurationContext = UIConfigurationContext;
exports.useUIConfiguration = useUIConfiguration;
//# sourceMappingURL=UIConfigurationProvider.js.map
