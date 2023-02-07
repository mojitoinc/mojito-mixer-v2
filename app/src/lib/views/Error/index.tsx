import { Icons } from '@lib/assets';
import { Box, Typography } from '@mui/material';
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
      <img alt="loading" src={ Icons.ErrorLoader } style={{}} />
      <Typography
        sx={{
          width: '280px',
          textAlign: 'center',
          marginTop: '24px',
        }}>
        { error }
      </Typography>
    </Box>
  );
};
export default ErrorContainer;
