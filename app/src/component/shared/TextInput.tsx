import { MixTheme } from '@lib/theme';
import {
  Box,
  InputBaseProps,
  SxProps,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useCallback } from 'react';

interface TextInputProps {
  value?: string;
  title?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  error?: string;
  sx?: SxProps<Theme>;
  inputProps?: InputBaseProps['inputProps'];
  required?: boolean;
  type?: React.InputHTMLAttributes<unknown>['type'];
}

const TextInput = ({
  value,
  title,
  onChange,
  placeholder,
  sx,
  error,
  required,
  type,
  inputProps,
}: TextInputProps) => {
  const theme = useTheme<MixTheme>();

  const onChangeText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  return (
    <Box
      sx={{
        width: '100%',
        ...sx,
      }}>
      { title && (
        <Box
          display="flex"
          flexDirection="row"
          sx={{
            marginBottom: '6px',
          }}>
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
      <TextField
        value={ value }
        error={ Boolean(error) }
        placeholder={ placeholder }
        onChange={ onChangeText }
        fullWidth
        inputProps={ inputProps }
        size="small"
        helperText={ error }
        type={ type } />
    </Box>
  );
};
export default TextInput;
