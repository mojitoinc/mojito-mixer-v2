/// <reference types="react" />
import { SardineEnvironment } from '../config';
interface MojitoCheckoutProps {
    sardineEnvironment: SardineEnvironment;
    enableSardine: boolean;
}
declare const MojitoCheckoutLayout: ({ sardineEnvironment, enableSardine, }: MojitoCheckoutProps) => JSX.Element;
export default MojitoCheckoutLayout;
