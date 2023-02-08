/// <reference types="react" />
import { DropdownOptions } from '../../components';
import { BillingFormData, PaymentData } from '../../providers';
import { ConnectType } from '../../providers/ConnectContext';
interface DeliveryProps {
    onWalletChange: (val: string) => void;
    walletOptions: DropdownOptions[];
    selectedDeliveryAddress: string;
    onClickConfirmPurchase: () => void;
    organizationName: string;
    billingInfo: BillingFormData | undefined;
    paymentInfo: PaymentData | undefined;
    onClickConnectWallet: () => void;
    connect: ConnectType;
    onDisconnect: () => void;
    error?: string;
}
declare const Delivery: ({ onWalletChange, walletOptions, selectedDeliveryAddress, onClickConfirmPurchase, organizationName, billingInfo, paymentInfo, onClickConnectWallet, connect, onDisconnect, error, }: DeliveryProps) => JSX.Element;
export default Delivery;
