import Dropdown, { DropdownOptions } from "@components/shared/Dropdown";
import TextInput from "@components/shared/TextInput";
import { MixTheme } from "@lib/theme/ThemeOptions";
import { Box, Checkbox, Typography, useTheme } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";

export const CreditCardForm =  ()=> {
    const [selectedCard, setSelectedCard] = useState<string>()
    const [cardOptions, setCardOptions] = useState<DropdownOptions[]>([{
        label: 'Card ending 4242',
        value: '4242-visa',
        data: {
            cardType: 'visaCard',
        }
    }   
    ,{
        label: 'Add new card info',
        value: 'newCard',
        data: {
            hideCard: true
        }
    }])
    const theme =  useTheme<MixTheme>()

  const isNewCard = useMemo(() => selectedCard === 'newCard', [selectedCard]);

  const handleChange = useCallback((value:string) => {
    setSelectedCard(value);
  }, []);

  return (
    <>
      { isNewCard && (
      <Box display="flex" justifyContent="space-between">
        <TextInput
          value=""
          onChange={ () => undefined }
          title="First name"
          sx={{
            marginTop: '16px',
            width: '48%',
          }}
          required
          placeholder="First name"
          type="text" />
        <TextInput
          value=""
          onChange={ () => undefined }
          title="Last name"
          sx={{
            marginTop: '16px',
            width: '48%',
          }}
          required
          placeholder="Last name"
          type="text" />
      </Box>
      ) }
      {
          isNewCard
            ?
            <TextInput
                value=""
                onChange={ () => undefined }
                title="Card info"
                sx={{
                  marginTop: '16px',
                }}
                placeholder="4242 4242 4242 4242"
                type="text" />
          : 
          <Dropdown
            value={ '' }
            optionType={'card'}
            onChange={ handleChange }
            title="Card info"
            sx={{ marginRight: '8px' }}
            options={ cardOptions } />  
        }
      <Box display="flex" justifyContent="space-between">
        <TextInput
          value=""
          onChange={ () => undefined }
          sx={{
            marginTop: '16px',
            width: '48%',
          }}
          placeholder="MM/YY"
          type="text" />
        <TextInput
          value=""
          onChange={ () => undefined }
          sx={{
            marginTop: '16px',
            width: '48%',
          }}
          placeholder="CVV"
          type="text" />
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: theme.global?.cardGrayedText,
          padding: '12px 16px',
          marginTop: 2,
          backgroundColor: theme.global?.grayBackground,
          borderRadius: '4px',
        }}>NFTs purchased by credit card can only be transferred to your multi-sig wallet and cannot be transferred out for 14 days.
      </Typography>
      {
          isNewCard && (
            <Box display="flex" alignItems="center" marginTop={ 2 }>
              <Checkbox sx={{ padding: 0 }} checked={ false } onChange={ () => undefined } />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>Save my credit card info for faster checkout</Typography>
            </Box>
          )
}
    </>
  );
};
