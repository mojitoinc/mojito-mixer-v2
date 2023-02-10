import { Box, useTheme, Typography } from '@mui/material';
import React from 'react';
import { useUIConfiguration } from '../../providers';
import { MixTheme } from '../../theme';

interface ErrorContainerProps {
  error: string;
}
const ErrorContainer = ({ error }: ErrorContainerProps) => {
  const theme = useTheme<MixTheme>();
  const { global } = useUIConfiguration();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100%">
      <Box
        sx={{
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: '8px 0px',
        }}>
        <img
          alt="error"
          src={ global?.errorImageSrc }
          style={{
            height: 200,
          }} />
        <Typography
          variant="body1"
          sx={{
            backgroundColor: theme.global?.background,
            width: '500px',
            textAlign: 'center',
            fontSize: '14px',
            border: `1px solid ${ theme.global?.cardBorder }`,
            borderRadius: '4px',
            padding: '16px',
            wordBreak: 'break-word',
          }}>
          { error }
        </Typography>
      </Box>
    </Box>
  );
};
export default ErrorContainer;
