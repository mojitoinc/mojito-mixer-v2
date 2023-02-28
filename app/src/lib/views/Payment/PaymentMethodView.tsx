import {
  Card,
  Typography,
  useTheme,
  Box,
  Radio,
  CardContent,
} from '@mui/material';
import React, { useMemo } from 'react';
import { Icons } from '../../assets';
import { PaymentTypes } from '../../constants';
import { MixTheme } from '../../theme';

interface PaymentMethodProps {
  isSelected: string;
  name: string;
  logo: string | JSX.Element |null;
  bodyContent: JSX.Element;
  onChoosePaymentType: (name: PaymentTypes, value: boolean) => void;
  type: PaymentTypes;
  endAdornment?:JSX.Element
}

export const PaymentMethodView = ({
  isSelected = '',
  name,
  logo,
  bodyContent,
  onChoosePaymentType,
  type,
  endAdornment,
}: PaymentMethodProps) => {
  const isCreditCard = useMemo(() => type === PaymentTypes.CREDIT_CARD, [type]);
  const theme = useTheme<MixTheme>();
  const handleChange = (e: any) => {
    onChoosePaymentType(type, e.target.checked);
  };
  return (
    <Card
      sx={{
        padding: 2,
        marginTop: 2,
        border: `1px solid ${
          isSelected === type
            ? theme.global?.highlightedText
            : theme.global?.cardBorder
        }`,
      }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Radio
            sx={{ padding: '0 9px 0 0' }}
            checked={ isSelected === type }
            onChange={ handleChange } />
          { !isCreditCard && (
            <Box
              sx={{ border: `1px solid ${ theme.global?.cardBorder }` }}
              width="48px"
              height="24px"
              display="flex"
              justifyContent="center">
                {
                  typeof logo === 'string' &&
                  <img src={ logo ?? Icons.item } width={ 32 } alt="logo" />
                }
                {
                  logo && typeof logo !== 'string' && (
                  <>
                    { logo }
                  </>
                  )
}
            </Box>
          ) }
          <Typography
            variant="subtitle1"
            sx={{ marginLeft: isCreditCard ? 0 : 1, fontWeight: 700 }}>
            { name }
          </Typography>
        </Box>
        { endAdornment }
      </Box>
      { isSelected === type && (
        <CardContent sx={{ padding: 0 }}>{ bodyContent }</CardContent>
      ) }
    </Card>
  );
};
