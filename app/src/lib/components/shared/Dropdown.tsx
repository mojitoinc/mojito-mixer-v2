import React from 'react';

import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import { MixTheme } from '@lib/theme/ThemeOptions';
import { SelectOption } from '@lib/interfaces/Components';


interface DropdownProps {
  value?: string;
  title?: string;
  onChange?: (val: string) => void;
  options?: SelectOption[];
  error?: string;
  sx: SxProps<Theme>;
  required?: boolean;
}

const Dropdown = ({
  value = '',
  title,
  onChange,
  options = [],
  sx,
  error,
  required,
}: DropdownProps) => {
  const theme = useTheme<MixTheme>();

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
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={ e => onChange?.(e.target.value) }>
          <MenuItem disabled value="">
            <Typography color={ theme.palette.text?.disabled }>
              Select One...
            </Typography>
          </MenuItem>
          { options.map((item: SelectOption) => {
            return <MenuItem value={ item.value }>{ item.label }</MenuItem>;
          }) }
        </Select>
        { error && <FormHelperText>{ error }</FormHelperText> }
      </FormControl>
    </Box>
  );
};

export default Dropdown;
