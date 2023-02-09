'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const CheckoutContext = React.createContext({});
const useCheckout = () => {
    return React.useContext(CheckoutContext);
};

exports.CheckoutContext = CheckoutContext;
exports.useCheckout = useCheckout;
//# sourceMappingURL=CheckoutProvider.js.map
