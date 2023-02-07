/// <reference types="react" />
import { ConfigurationType } from '../providers/ConfigurationProvider';
import { ThemeConfiguration } from '../interfaces';
import { Delivery } from '../providers';
import { SardineEnvironment } from '../config';
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
declare const MojitoCheckout: ({ uiConfiguration, theme, show, debug, deliveryConfiguration, enableSardine, sardineEnvironment, }: MojitoCheckoutProps) => JSX.Element;
export default MojitoCheckout;
