/// <reference types="react" />
interface ExpressCheckoutViewProps {
    config?: {
        gpay?: boolean;
        applepay?: boolean;
        walletConnect?: boolean;
        metaMask?: boolean;
    };
}
declare const ExpressCheckoutView: ({ config }: ExpressCheckoutViewProps) => JSX.Element;
export default ExpressCheckoutView;
