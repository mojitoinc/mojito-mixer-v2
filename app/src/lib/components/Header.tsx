import { Box, useTheme } from '@mui/material';
import React from 'react';
import { Icons } from '../assets';
import { MixTheme } from '../theme/ThemeOptions';

const Header = () => {
  const theme = useTheme<MixTheme>();
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.global?.background,
      }}>
      <Box
        sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}>
        <img src={ Icons.logo } width="163px" height="37px" alt="logo" />
      </Box>
    </Box>
  );
};

export default Header;
