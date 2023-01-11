import React, { useCallback } from 'react';

import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import { MixTheme } from '@lib/theme/ThemeOptions';

export interface DropdownOptions {
  label: string;
  value: string;
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
}: DropdownProps) => {
  const theme = useTheme<MixTheme>();

  const onChangeValue = useCallback((e: SelectChangeEvent<string>) => {
    onChange?.(e.target.value);
  }, [onChange]);

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
            return <MenuItem value={ item.value }>{ item.label }</MenuItem>;
          }) }
        </Select>
        { error && <FormHelperText>{ error }</FormHelperText> }
      </FormControl>
    </Box>
  );
};

export default Dropdown;
