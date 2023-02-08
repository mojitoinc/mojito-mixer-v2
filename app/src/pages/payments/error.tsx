import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Icons } from '@lib/assets';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const ErrorPage: NextPage = () => {
  const router = useRouter();
   

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100%">
      <Typography
        sx={{
          width: '280px',
          textAlign: 'center',
          marginTop: '24px',
        }}>
          Please, review your payment information and try again
      </Typography>
    </Box>
  );
};

export default ErrorPage;
