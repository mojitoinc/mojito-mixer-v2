import { Icons } from '@lib/assets';
import { MixTheme } from '@lib/theme';
import { Box, FormHelperText, useTheme } from '@mui/material';
import React from 'react';

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
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: '8px 0px',
        border: `1px solid ${ theme.global?.cardBorder }`,
        borderRadius: '4px',
      }}>
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
    </Box>
  );
};
export default ErrorContainer;
