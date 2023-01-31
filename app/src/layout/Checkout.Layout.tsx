import MojitoCheckout from '@lib/public/MojitoCheckout';
import React, { useCallback } from 'react';
import { Box, Stack, Button, Typography, Checkbox, FormGroup, FormControlLabel, Grid } from '@mui/material';
import Dropdown from 'component/shared/DropDown';
import TextInput from 'component/shared/TextInput';

interface CheckboxOptions {
  field: string;
  label: string;
  checked: boolean;
}

interface CheckoutProps {
  show: boolean;
  onOpen: ()=>void;
  isAuthenticated: boolean;
  organizationOptions: {
    label: string;
    value: string;
  }[];
  handleChange: (fieldName:string, value: string | boolean)=> void;
  values: any;
}

export const CheckoutLayout: React.FC<CheckoutProps> = ({ show, onOpen, isAuthenticated, organizationOptions, handleChange, values }:CheckoutProps) => {
  const expressOptions = [{ field: 'express.gpay', label: 'Gpay', checked: true }, { field: 'express.applepay', label: 'Applepay', checked: true }, { field: 'express.walletconnect', label: 'Wallet Connect', checked: true }, { field: 'express.metamask', label: 'Metamask', checked: true }];
  const paymentOptions = [{ field: 'gpay', label: 'Gpay', checked: true }, { field: 'applepay', label: 'Applepay', checked: true }, { field: 'walletconnect', label: 'Wallet Connect', checked: true }, { field: 'wire', label: 'Wire Transfer', checked: true }, { field: 'creditcard', label: 'Credit Card', checked: true }];
  const renderCheckbox = useCallback((label: string, isChecked: boolean, fieldName: string, handleFieldChange:(fieldName:string, value:boolean)=>void) => {
    return (
      <FormGroup>
        <FormControlLabel control={ <Checkbox checked={ isChecked } onChange={ (_, checked) => handleFieldChange(fieldName, checked) } /> } label={ label } />
      </FormGroup>
    );
  }, []);
  console.log(values, 'values');

  return (
    <>
      <Box sx={{ my: 4 }}>
        <Stack spacing={ 2 } direction="row">
          <Button variant="contained" onClick={ onOpen } disabled={ !isAuthenticated }>Open Checkout Modal</Button>
        </Stack>
        <Box sx={{ my: 2 }}>
          <Dropdown
            title="Organization"
            sx={{ width: '50%' }}
            options={ organizationOptions }
            value={ values.organization }
            onChange={ (val:string) => handleChange('organization', val) } />
          {
            values.organization === 'custom-org-id' && <TextInput placeholder="Custom Org ID" sx={{ width: '50%', marginTop: 2 }} value={ values.customOrganization ?? '' } onChange={ (val:string) => handleChange('customOrganization', val) } />
          }
          <Typography variant="body2" sx={{ marginTop: 1 }}>If left empty, the modal will fail to load your saved payment methods and at making a purchase.</Typography>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography fontSize="18px">Lot Data</Typography>
          <Stack flexDirection="row" alignItems="center">
            <TextInput title="Lot ID" placeholder="Lot ID" value={ values.lotId } onChange={ (val:string) => handleChange('lotId', val) } sx={{ width: '250px' }} />
            <TextInput title="Lot Units" placeholder="Lot Units" value={ values.lotUnits } onChange={ (val:string) => handleChange('lotUnits', val) } sx={{ width: '120px', marginLeft: 2 }} type="number" />
          </Stack>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          { renderCheckbox('Express Checkout', values.express, 'express', handleChange) }
          {
            values.express && (
            <Grid container>
                { expressOptions.map(({ field, label, checked }:CheckboxOptions) => (
                  <Grid item xs={ 3 }>
                    { renderCheckbox(label, values[field] ?? checked, field, handleChange) }
                  </Grid>
                )) }
            </Grid>
            )
          }
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography fontSize="18px">Payment Methods</Typography>
          <Grid container>
            { paymentOptions.map(({ field, label, checked }:CheckboxOptions) => (
              <Grid item xs={ 3 }>
                { renderCheckbox(label, values[field] ?? checked, field, handleChange) }
              </Grid>
            )) }
          </Grid>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          { renderCheckbox('Discount Code', values.discountCode, 'discountCode', handleChange) }
        </Box>
      </Box>
      { isAuthenticated && (
      <MojitoCheckout
        deliveryConfiguration={{
          orgId: values.customOrganization ? values.customOrganization : values.organization,
          lotId: values.lotId,
          itemCount: values.lotUnits,
        }}
        uiConfiguration={{
          billing: {
            hideExpressCheckout: Boolean(!values.express ?? true),
            expressCheckoutConfig: {
              gpay: Boolean(values['express.gpay'] ?? true),
              applepay: Boolean(values['express.applepay'] ?? true),
              walletConnect: Boolean(values['express.walletconnect'] ?? true),
              metaMask: Boolean(values['express.metamask'] ?? true),
            },
            paymentMethods: {
              creditCard: Boolean(values.creditcard ?? true),
              gpay: Boolean(values.gpay ?? true),
              applepay: Boolean(values.applepay ?? true),
              walletConnect: Boolean(values.walletconnect ?? true),
              wire: Boolean(values.wire ?? true),

            },
            showDiscountCode: Boolean(values.discountCode ?? true)
          },
        }}
        show={ show } />
      ) }
    </>
  );
};
