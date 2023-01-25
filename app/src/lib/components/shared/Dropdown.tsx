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

export interface DropdownOptions {
  label: string | JSX.Element;
  value: string;
  data?: any;
}

interface DropdownProps {
  value?: string;
  title?: string;
  onChange?: (val: string) => void;
  options?: DropdownOptions[];
  error?: string;
  sx: SxProps<Theme>;
  required?: boolean;
  placeholder?: string;
  optionType?: string;
}

const Dropdown = ({
  value = '',
  title,
  onChange,
  options = [],
  sx,
  error,
  required,
  placeholder,
  optionType
}: DropdownProps) => {
  const theme = useTheme<MixTheme>();

  const onChangeValue = useCallback((e: SelectChangeEvent<string>) => {
    onChange?.(e.target.value);
  }, [onChange]);

  const getCreditCardType = useCallback((item: DropdownOptions)=>{
    if (item?.data?.cardType == 'MasterCard') {
      return Icons.masterCard
    }
    else if (item?.data?.cardType == 'visaCard') {
      return  Icons.visaCard
    }
    else if (item?.data?.cardType == 'americanCard') {
      return Icons.americanExpress
    }
  }, [])

  const renderOption = useCallback((item:DropdownOptions, optionType: string)=> {
    if (optionType == 'card') {
      const creditCardType = getCreditCardType(item)
      return (
        <Stack flexDirection={'row'}>
          {!Boolean(item?.data?.hideCard) &&
          <img src={creditCardType} width={'49px'} height={'24px'}/>}
          <Typography variant="body1" sx={{marginLeft: '4px'}}>{item.label}</Typography>
        </Stack>
      )
    }
    else {
      return item.label
    }
  }, [])

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
          { options.map((item: DropdownOptions) => {
            return <MenuItem value={ item.value }>{ renderOption(item, optionType ?? '') }</MenuItem>;
          }) }
        </Select>
        { error && <FormHelperText>{ error }</FormHelperText> }
      </FormControl>
    </Box>
  );
};

export default Dropdown;
