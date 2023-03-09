/// <reference types="react" />
import { DropdownOptions } from '../../components';
import { BillingFormData, PaymentData } from '../../providers';
interface DeliveryProps {
    onWalletChange: (val: string) => void;
    walletOptions: DropdownOptions[];
    selectedDeliveryAddress: string;
    onClickConfirmPurchase: () => void;
    organizationName: string;
    billingInfo: BillingFormData | undefined;
    paymentInfo: PaymentData | undefined;
    onClickConnectWallet: () => void;
    onDisconnect: () => void;
    error?: string;
    isLoading: boolean;
    connectedWalletAddress?: string;
}
declare const Delivery: ({ onWalletChange, walletOptions, selectedDeliveryAddress, onClickConfirmPurchase, organizationName, billingInfo, paymentInfo, onClickConnectWallet, onDisconnect, error, isLoading, connectedWalletAddress, }: DeliveryProps) => JSX.Element;
export default Delivery;
