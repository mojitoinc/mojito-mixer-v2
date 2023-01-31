import React, { useCallback } from 'react';
import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import { MixTheme } from '@lib/theme/ThemeOptions';
import { Icons } from '@lib/assets';
import { PaymentMethod } from '@lib/interfaces/PaymentMethods';

export interface DropdownOptions {
  label: string | JSX.Element;
  value: string;
  data?: any;
}

interface DropdownProps {
  value?: string;
  title?: string;
  onChange?: (val: string) => void;
  options?: PaymentMethod[];
  error?: string;
  sx: SxProps<Theme>;
  required?: boolean;
  placeholder?: string;
}

const CreditCardDropdown = ({
  value = '',
  title,
  onChange,
  options = [],
  sx,
  error,
  required,
  placeholder,
}: DropdownProps) => {
  const theme = useTheme<MixTheme>();

  const onChangeValue = useCallback((e: SelectChangeEvent<string>) => {
    onChange?.(e.target.value);
  }, [onChange]);

  const getCreditCardType = useCallback((item: PaymentMethod) => {
    if (item?.network === 'MASTERCARD') {
      return Icons.masterCard;
    }
    if (item?.network === 'VISA') {
      return Icons.visaCard;
    }
    if (item?.network === 'americanCard') {
      return Icons.americanExpress;
    }
    return Icons.masterCard;
  }, []);

  const renderOption = useCallback((item:PaymentMethod) => {
    const creditCardType = getCreditCardType(item as PaymentMethod);
    return (
      <Stack flexDirection="row">
        { item?.network &&
          <img src={ creditCardType } width="49px" height="24px" alt="Creditcard" /> }
        <Typography variant="body1" sx={{ marginLeft: '4px' }}>Card ending { item.last4Digit }</Typography>
      </Stack>
    );
  }, [getCreditCardType]);

  return (
    <Box
      sx={{
        width: '100%',
        ...sx,
      }}>
      { title && (
        <Box display="flex" flexDirection="row">
          <Typography color={ theme.palette?.text?.primary } fontSize="16px">
            { title }
          </Typography>

          { required && (
            <Typography
              color={ theme.global?.required }
              fontSize="16px"
              marginLeft="4px">
              *
            </Typography>
          ) }
        </Box>
      ) }
      <FormControl
        fullWidth
        sx={{
          marginTop: '6px',
        }}>
        <Select
          value={ value }
          disabled={ options.length === 0 }
          displayEmpty
          fullWidth
          error={ Boolean(error) }
          size="small"
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={ onChangeValue }>
          <MenuItem disabled value="">
            <Typography color={ theme.palette.text?.disabled }>
              { placeholder }
            </Typography>
          </MenuItem>
          { options.map((item: PaymentMethod) => {
            return <MenuItem value={ item?.id } key={ item?.id }>{ renderOption(item) }</MenuItem>;
          }) }
          <MenuItem value="null">Add new card info</MenuItem>
        </Select>
        { error && <FormHelperText>{ error }</FormHelperText> }
      </FormControl>
    </Box>
  );
};

export default CreditCardDropdown;
