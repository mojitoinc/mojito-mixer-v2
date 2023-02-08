import { Box, Typography } from '@mui/material';
import React from 'react';
import { Icons } from '../../assets';

const LoadingContainer = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100%">
      <img alt="loading" src={ Icons.loading } style={{}} />
      <Typography
        sx={{
          width: '280px',
          textAlign: 'center',
          marginTop: '24px',
        }}>
        We are processing your payment. Do not close or reload the page...
      </Typography>
    </Box>
  );
};
export default LoadingContainer;
