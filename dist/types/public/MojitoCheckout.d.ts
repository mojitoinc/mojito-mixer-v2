import React from 'react';
import { MojitoThemeConfiguration } from '../interfaces';
import { EventConfig } from '../providers';
import { SardineEnvironment } from '../config';
import { ProvidersInjectorProps } from '../providers/ProvidersInjector';
import { CheckoutOptions, MojitoUIConfiguration, UserInfo } from '../interfaces/ContextInterface';
declare global {
    interface Window {
        _Sardine: any;
    }
}
interface MojitoCheckoutProps {
    uiConfiguration?: MojitoUIConfiguration;
    checkoutOptions: CheckoutOptions;
    theme?: MojitoThemeConfiguration;
    success?: boolean;
    show: boolean;
    debug?: boolean;
    sardineEnvironment?: SardineEnvironment;
    enableSardine?: boolean;
    events?: EventConfig;
    userInfo: UserInfo;
}
export type PUICheckoutProps = MojitoCheckoutProps & ProvidersInjectorProps;
declare const PUIMojitoCheckout: React.FC<PUICheckoutProps>;
export default PUIMojitoCheckout;
