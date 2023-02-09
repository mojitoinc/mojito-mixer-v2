import React from 'react';
import { ThemeConfiguration } from '../interfaces';
import { SardineEnvironment } from '../config';
import { ProvidersInjectorProps } from '../providers/ProvidersInjector';
import { UIConfiguration, CheckoutOptions } from '../interfaces/ContextInterface';
declare global {
    interface Window {
        _Sardine: any;
    }
}
interface MojitoCheckoutProps {
    uiConfiguration?: UIConfiguration;
    checkoutOptions: CheckoutOptions;
    theme?: ThemeConfiguration;
    show: boolean;
    debug?: boolean;
    sardineEnvironment?: SardineEnvironment;
    enableSardine?: boolean;
}
export type PUICheckoutProps = MojitoCheckoutProps & ProvidersInjectorProps;
declare const PUIMojitoCheckout: React.FC<PUICheckoutProps>;
export default PUIMojitoCheckout;
