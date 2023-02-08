import { Box, useTheme, Typography } from '@mui/material';
import React from 'react';
import { Icons } from '../../assets';
import { MixTheme } from '../../theme';

interface ErrorContainerProps {
  error: string;
}
const ErrorContainer = ({ error }: ErrorContainerProps) => {
  const theme = useTheme<MixTheme>();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100%">

      <Box
        sx={{
          backgroundColor: theme.global?.background,
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: '8px 0px',
         
        }}>
        <img
          alt="loading"
          src={ Icons.ErrorLoader }
          style={{
            height: 200,
          }} />
          <Typography sx={{
            width: '280px',
            textAlign: 'center',
            fontSize: '14px',
            border: `1px solid ${ theme.global?.cardBorder }`,
            borderRadius: '4px',
            padding: '30px',
          }}>{ error }</Typography>
      </Box>
    </Box>
  );
};
export default ErrorContainer;
