import { Icons } from '@lib/assets';
import { Box, FormHelperText } from '@mui/material';
import React from 'react';

interface ErrorContainerProps {
  error: string;
}
const ErrorContainer = ({ error }: ErrorContainerProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100%">
      <img
        alt="loading"
        src={ Icons.ErrorLoader }
        style={{
          height: 200,
        }} />
      <FormHelperText
        error
        sx={{
          width: '280px',
          textAlign: 'center',
          fontSize: '14px',
        }}>
        { error }
      </FormHelperText>
    </Box>
  );
};
export default ErrorContainer;
