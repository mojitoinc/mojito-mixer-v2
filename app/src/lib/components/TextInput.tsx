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
import { MixTheme } from '../theme';

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
  disabled?: boolean;
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
  disabled,
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
          <Typography
            variant="body1"
            color={ theme.palette?.text?.primary }
            fontSize="16px">
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
        disabled={ disabled }
        helperText={ error }
        type={ type } />
    </Box>
  );
};
export default TextInput;
