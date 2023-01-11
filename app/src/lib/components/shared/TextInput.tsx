import { MixTheme } from '@lib/theme/ThemeOptions';
import { Box, SxProps, TextField, Theme, Typography, useTheme } from '@mui/material';
import React, { useCallback } from 'react';

interface TextInputProps {
  value?: string;
  title?: string;
  onChange?: (val:string) => void;
  placeholder?: string;
  error?: string;
  sx:SxProps<Theme>;
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
}:TextInputProps) => {
  const theme = useTheme<MixTheme>();

  const onChangeText = useCallback((e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onChange?.(e.target.value);
  }, [onChange]);

  return (
    <Box
      sx={{
        ...sx,
        width: '100%',
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
      <TextField
        value={ value }
        error={ Boolean(error) }
        placeholder={ placeholder }
        onChange={ onChangeText }
        fullWidth
        sx={{
          marginTop: '6px',
        }}
        helperText={ error }
        type={ type } />
    </Box>
  );
};
export default TextInput;
