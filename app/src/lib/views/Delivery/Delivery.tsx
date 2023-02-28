import React, { useMemo } from 'react';
import {
  Box,
  Card,
  Typography,
  useTheme,
  Stack,
  FormHelperText,
} from '@mui/material';
import Modal from 'react-modal';
import { MixTheme } from '../../theme';
import {
  Button,
  Dropdown,
  DropdownOptions,
  CopyButton,
} from '../../components';
import { BillingFormData, PaymentData, useUIConfiguration } from '../../providers';
import { PaymentTypes } from '../../constants';
import { ConnectType } from '../../providers/ConnectContext';
import { Icons } from '../../assets';
import { DeliveryInfoCard } from './DeliveryInfoCard';
import { NEW_MULTI_SIG } from './index';
import LoadingContainer from '../Loading';

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
  isLoading: boolean;
}

const Delivery = ({
  onWalletChange,
  walletOptions,
  selectedDeliveryAddress,
  onClickConfirmPurchase,
  organizationName,
  billingInfo,
  paymentInfo,
  onClickConnectWallet,
  connect,
  onDisconnect,
  error,
  isLoading,
}: DeliveryProps) => {
  const theme = useTheme<MixTheme>();
  const { delivery } = useUIConfiguration();

  const isCreditCard = useMemo(
    () => paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD,
    [paymentInfo],
  );


  const showConnectWallet = useMemo(() => {
    if (paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD) return delivery.creditCard.multiSig;

    if (paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER) return delivery.wire.multiSig;

    if (paymentInfo?.paymentType === PaymentTypes.COIN_BASE) return delivery.coinbase.multiSig;

    if (paymentInfo?.paymentType === PaymentTypes.GOOGLE_PAY) return delivery.gpay.multiSig;

    if (paymentInfo?.paymentType === PaymentTypes.APPLE_PAY) return delivery.applepay.multiSig;
    if (paymentInfo?.paymentType === PaymentTypes.WALLET_CONNECT) return delivery.walletConnect.multiSig;
    return false;
  }, [delivery, paymentInfo]);

  const showPersonalWallet = useMemo(() => {
    if (paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD) return delivery.creditCard.personalWallet;

    if (paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER) return delivery.wire.personalWallet;

    if (paymentInfo?.paymentType === PaymentTypes.COIN_BASE) return delivery.coinbase.personalWallet;

    if (paymentInfo?.paymentType === PaymentTypes.GOOGLE_PAY) return delivery.gpay.personalWallet;

    if (paymentInfo?.paymentType === PaymentTypes.APPLE_PAY) return delivery.applepay.personalWallet;
    if (paymentInfo?.paymentType === PaymentTypes.WALLET_CONNECT) return delivery.walletConnect.personalWallet;
    return true;
  }, [delivery, paymentInfo]);

  return (
    <>
      <DeliveryInfoCard billingInfo={ billingInfo } paymentInfo={ paymentInfo } />
      <Card
        sx={{
          border: `1px solid ${ theme.global?.cardBorder }`,
          backgroundColor: theme.global?.cardBackground,
          boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
          margin: '24px 0px',
          padding: '24px',
        }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
          Delivery Address
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1, marginBottom: 2 }}>
          { isCreditCard
            ? `All related purchase and delivery fees will be covered by ${ organizationName }.
                  NFTs purchased by credit card can only be transferred to your multi-sig wallet and cannot be transferred 
                  out for 14 days.`
            : `All related NFT purchase and delivery fees will be covered by ${ organizationName }.` }
        </Typography>
        { !connect?.connected ? (
          <>
            {
            showPersonalWallet && (
            <>
              <Dropdown
                value={ selectedDeliveryAddress }
                onChange={ onWalletChange }
                placeholder="Select Wallet Address"
                sx={{ marginRight: '8px' }}
                options={ walletOptions } />
              { selectedDeliveryAddress === NEW_MULTI_SIG && (
              <Typography
                variant="body2"
                sx={{ marginTop: '6px', color: theme.global?.cardGrayedText }}>
                A new multi-sig wallet will be created for you when purchase is
                complete
              </Typography>
              ) }
            </>
            )
}
            {
              showConnectWallet && (
              <Stack
                flexDirection="row"
                alignItems="flex-end"
                justifyContent="flex-end">
                <Button
                  title="Connect Wallet"
                  textColor={ theme.global?.highlightedText }
                  backgroundColor={ theme.global?.white }
                  variant="outlined"
                  sx={{ marginTop: 2 }}
                  onClick={ onClickConnectWallet } />
              </Stack>
              )
            }
          </>
        ) : (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            border={ `1px solid ${ theme.global?.cardBorder }` }
            padding="16px"
            sx={{
              background: theme.global?.background,
            }}>
            <Box display="flex" flexDirection="row" alignItems="center">
              <img src={ Icons.walletAddress } alt="wallet address" />
              <Typography
                fontSize="16px"
                marginLeft="12px"
                width="150px"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                { connect?.account }
              </Typography>
              <CopyButton
                copyValue={ connect?.account }
                sx={{
                  alignSelf: 'center',
                }} />
            </Box>
            <Button
              title="Disconnect"
              textColor={ theme.global?.highlightedText }
              backgroundColor={ theme.global?.white }
              variant="outlined"
              sx={{
                justifySelf: 'flex-end',
              }}
              onClick={ onDisconnect } />
          </Box>
        ) }
      </Card>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <FormHelperText error>{ error }</FormHelperText>
        <Button
          title="Confirm purchase"
          backgroundColor={ theme.global?.checkout?.continueButtonBackground }
          textColor={ theme.global?.checkout?.continueButtonTextColor }
          disabled={ !(connect?.connected || selectedDeliveryAddress) }
          onClick={ onClickConfirmPurchase }
          sx={{
            '&: hover': {
              backgroundColor: 'rgba(102, 99, 253, 0.8)',
            },
          }} />
      </Box>

      <Modal
        ariaHideApp={ false }
        isOpen={ isLoading }
        style={{
          content: {
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            padding: 0,
          },
        }}>
        <LoadingContainer />
      </Modal>
    </>
  );
};

export default Delivery;
