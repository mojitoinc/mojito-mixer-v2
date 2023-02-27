// import { MojitoCheckout } from '@mojitonft/mojito-mixers';
import React, { useCallback, useMemo } from 'react';
import {
  Box,
  Stack,
  Button,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
} from '@mui/material';
import Dropdown, { DropdownOptions } from 'component/shared/DropDown';
import TextInput from 'component/shared/TextInput';
import {
  ConfigurationValues,
  ExpressCheckoutPayment,
  PaymentMethodTypes,
} from 'pages';
import { FormikErrors } from 'formik';
import { useRouter } from 'next/router';
import { MojitoCheckout } from 'lib';
import { useAuth0 } from '@auth0/auth0-react';
import { RuntimeConfiguration } from '../constant/RuntimeConfiguration';

export interface CheckboxOptions {
  field: string;
  label: string;
  checked: boolean;
}

interface CheckoutProps {
  show: boolean;
  onOpen: () => void;
  getAuthenticationToken: () => Promise<string>;
  isAuthenticated: boolean;
  organizationOptions: DropdownOptions[];
  handleChange: any;
  values: ConfigurationValues & ExpressCheckoutPayment & PaymentMethodTypes;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<
          ConfigurationValues & ExpressCheckoutPayment & PaymentMethodTypes
        >
      >;
}

const expressOptions: CheckboxOptions[] = [
  { field: 'expressGpay', label: 'Gpay', checked: true },
  { field: 'expressApplepay', label: 'Applepay', checked: true },
  { field: 'expressWalletconnect', label: 'Wallet Connect', checked: true },
  { field: 'expressMetamask', label: 'Metamask', checked: true },
];
const paymentOptions: CheckboxOptions[] = [
  { field: 'gpay', label: 'Gpay', checked: true },
  { field: 'applepay', label: 'Applepay', checked: true },
  { field: 'walletconnect', label: 'Wallet Connect', checked: true },
  { field: 'wire', label: 'Wire Transfer', checked: true },
  { field: 'creditcard', label: 'Credit Card', checked: true },
  { field: 'coinbase', label: 'Coinbase', checked: true },
];
const PaymentType: DropdownOptions[] = [
  {
    label: 'Buy Now',
    value: 'BUY_NOW',
  }, {
    label: 'Auction',
    value: 'AUCTION',
  },
];
export const CheckoutLayout: React.FC<CheckoutProps> = ({
  show,
  onOpen,
  isAuthenticated,
  organizationOptions,
  handleChange,
  values,
  setFieldValue,
  getAuthenticationToken,
}: CheckoutProps) => {
  const router = useRouter();


  const handleFieldChange = useCallback(
    async (fieldName: string, value: boolean | string) => {
      await setFieldValue(fieldName, value);
    },
    [setFieldValue],
  );

  const orgId = useMemo(() => {
    return values.organization !== undefined &&
      values.organization !== 'custom-org-id'
      ? values.organization
      : values.customOrganization ?? '';
  }, [values]);

  const renderCheckbox = useCallback(
    (label: string, isChecked: boolean, fieldName: string) => {
      return (
        <FormGroup>
          <FormControlLabel
            control={ (
              <Checkbox
                checked={ isChecked }
                onChange={ (_, checked) => handleFieldChange(fieldName, checked) } />
            ) }
            label={ label } />
        </FormGroup>
      );
    },
    [handleFieldChange],
  );

  const onClickGoToMarketPlace = useCallback(() => {
    router.replace('/');
  }, [router]);

  const onEvent = useCallback((e:string) => {
    console.log('EVENT', e);
  }, []);

  const { user } = useAuth0();

  return (
    <>
      <Box sx={{ my: 4 }}>
        <Stack spacing={ 2 } direction="row">
          <Button
            variant="contained"
            onClick={ onOpen }
            disabled={ !isAuthenticated }>
            Open Checkout Modal
          </Button>
        </Stack>
        <Box sx={{ my: 2 }}>
          <Dropdown
            title="Organization"
            sx={{ width: '50%' }}
            options={ organizationOptions }
            value={ values.organization }
            onChange={ handleChange('organization') } />
          { values.organization === 'custom-org-id' && (
            <TextInput
              placeholder="Custom Org ID"
              sx={{ width: '50%', marginTop: 2 }}
              value={ values.customOrganization ?? '' }
              onChange={ handleChange('customOrganization') } />
          ) }
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            If left empty, the modal will fail to load your saved payment
            methods and at making a purchase.
          </Typography>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography fontSize="18px">Lot Data</Typography>
          <Stack flexDirection="row" alignItems="center">
            <Dropdown
              title="Payment Type"
              sx={{ width: '200px' }}
              options={ PaymentType }
              value={ values.type }
              onChange={ handleChange('type') } />
            <TextInput
              title="Lot ID"
              placeholder="Lot ID"
              value={ values.lotId }
              onChange={ handleChange('lotId') }
              sx={{ width: '200px', marginLeft: 2 }} />
            <TextInput
              title="Item ID"
              placeholder="Item ID"
              value={ values.itemId }
              onChange={ handleChange('itemId') }
              sx={{ width: '200px', marginLeft: 2 }} />
            <TextInput
              title="Lot Units"
              placeholder="Lot Units"
              value={ values.lotUnits }
              onChange={ handleChange('lotUnits') }
              sx={{ width: '120px', marginLeft: 2 }}
              type="number" />
            {
                values.type === 'AUCTION' && (
                <TextInput
                  title="Invoice ID"
                  placeholder="Invoice ID"
                  value={ values.invoiceId }
                  onChange={ handleChange('invoiceId') }
                  sx={{ width: '200px', marginLeft: 2 }} />
                )
            }
          </Stack>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          { renderCheckbox(
            'Express Checkout',
            values.express ?? false,
            'express',
          ) }
          { values.express && (
            <Grid container>
              { expressOptions.map(
                (item: CheckboxOptions) => (
                  <Grid item xs={ 3 } key={ item.field.toString() }>
                    { renderCheckbox(
                      item.label,
                      values[item.field as keyof ExpressCheckoutPayment] ?? item.checked,
                      item.field,
                    ) }
                  </Grid>
                ),
              ) }
            </Grid>
          ) }
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography fontSize="18px">Payment Methods</Typography>
          <Grid container>
            { paymentOptions.map(
              (item: CheckboxOptions) => (
                <Grid item xs={ 3 } key={ item.field.toString() }>
                  { renderCheckbox(
                    item.label,
                    values[item.field as keyof PaymentMethodTypes] ?? item.checked,
                    item.field,
                  ) }
                </Grid>
              ),
            ) }
          </Grid>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          { renderCheckbox(
            'Discount Code',
            values?.discountCode ?? true,
            'discountCode',
          ) }
        </Box>
      </Box>
      { isAuthenticated && (
        <MojitoCheckout
          userInfo={{
            email: user?.email ?? '',
          }}
          debug={ false }
          uri={ RuntimeConfiguration.API_HOST_URL ?? '' }
          getAuthenticationToken={ getAuthenticationToken }
          checkoutOptions={{
            orgId,
            lotId: values.lotId ?? '',
            quantity: parseInt(values.lotUnits ?? '1', 10),
            collectionItemId: values.itemId ?? '',
            invoiceId: values?.invoiceId,
            vertexEnabled:true
          }}
          enableSardine={ false }
          uiConfiguration={{

            billing: {
              isEnableExpressCheckout: Boolean(!values.express ?? true),
              gpay: Boolean(values.expressGpay ?? true),
              applepay: Boolean(values.expressApplepay ?? true),
              walletConnect: Boolean(values.expressWalletconnect ?? true),
              metaMask: Boolean(values.expressMetamask ?? true),
            },
            payment: {
              creditCard: Boolean(values.creditcard ?? true),
              gpay: Boolean(values.gpay ?? true),
              applepay: Boolean(values.applepay ?? true),
              walletConnect: Boolean(values.walletconnect ?? true),
              wire: Boolean(values.wire ?? true),
              coinbase: Boolean(values.coinbase ?? true),
            },

            costBreakdown: { showDiscountCode: Boolean(values.discountCode ?? true) },

            paymentConfirmation: {
              onGoTo: onClickGoToMarketPlace,
            },
            global: {
              // logoSrc: require('../../public/img/logos/sotheby-logo.svg'),
            },
          }}
          events={{
            onEvent,
          }}
          show={ show } />
      ) }
    </>
  );
};
