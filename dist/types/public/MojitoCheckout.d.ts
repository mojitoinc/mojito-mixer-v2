import React from 'react';
import { ConfigurationType } from '../providers/ConfigurationProvider';
import { ThemeConfiguration } from '../interfaces';
import { Delivery } from '../providers';
import { SardineEnvironment } from '../config';
import { ProvidersInjectorProps } from '../providers/ProvidersInjector';
declare global {
    interface Window {
        _Sardine: any;
    }
}
interface MojitoCheckoutProps {
    uiConfiguration?: ConfigurationType;
    deliveryConfiguration: Delivery;
    theme?: ThemeConfiguration;
    show: boolean;
    debug?: boolean;
    sardineEnvironment?: SardineEnvironment;
    enableSardine?: boolean;
}
export type PUICheckoutProps = MojitoCheckoutProps & ProvidersInjectorProps;
declare const PUIMojitoCheckout: React.FC<PUICheckoutProps>;
export default PUIMojitoCheckout;
