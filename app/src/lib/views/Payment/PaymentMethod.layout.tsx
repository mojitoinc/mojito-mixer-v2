import { Icons } from "@lib/assets";
import { PaymentTypes } from "@lib/constants/states";
import { MixTheme } from "@lib/theme/ThemeOptions";
import {
  Card,
  Typography,
  useTheme,
  Box,
  Radio,
  CardContent,
} from "@mui/material";
import React, { useMemo } from "react";

interface PaymentMethodProps {
    isSelected: string;
    name:string;
    logo: string | null;
    bodyContent: JSX.Element;
    onChoosePaymentType: (name:PaymentTypes, value: boolean)=>void;
    type: PaymentTypes
}

export const PaymentMethodView = ({ isSelected = '', name, logo, bodyContent, onChoosePaymentType, type }:PaymentMethodProps) => {
  const isCreditCard = useMemo(() => type === PaymentTypes.CREDIT_CARD, [type]);
  const theme = useTheme<MixTheme>();
  const handleChange = (e:any) => {
    onChoosePaymentType(type, e.target.checked);
  };
  return (
    <Card sx={{ padding: 2, marginTop: 2, border: `1px solid ${ isSelected === type ? theme.global?.highlightedText : theme.global?.cardBorder }` }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Radio sx={{ padding: '0 9px' }} checked={ isSelected === type } onChange={ handleChange } />
          { !isCreditCard && <Box sx={{ border: `1px solid ${ theme.global?.cardBorder }` }} width="48px" height="24px" display="flex" justifyContent="center"><img src={ logo ?? Icons.item } width={ 32 } alt="logo" /></Box> }
          <Typography variant="subtitle1" sx={{ marginLeft: 1, fontWeight: 700 }}>{ name }</Typography>
        </Box>
        {Boolean(isCreditCard) && <img src={logo ?? Icons.item} alt="logo" />}
      </Box>
      { isSelected === type && (
      <CardContent>
        { bodyContent }
      </CardContent>
      ) }
    </Card>
  );
};
