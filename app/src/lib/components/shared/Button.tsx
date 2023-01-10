import { MixTheme } from '@lib/theme/ThemeOptions';
import { Button as MuiButton, SxProps, Theme, useTheme } from '@mui/material';
import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
  backgroundColor?: string;
  textColor?: string;
  sx?: SxProps<Theme>;
}

const Button = ({
  title,
  onClick,
  backgroundColor,
  textColor,
  sx,
}: ButtonProps) => {
  const theme = useTheme<MixTheme>();

  return (
    <MuiButton
      title={ title }
      autoCapitalize="none"
      sx={{
        backgroundColor: backgroundColor ?? theme.palette?.primary?.main,
        color: textColor ?? theme.palette?.secondary?.main,
        textTransform: 'none',
        fontWeight: '700',
        fontSize: '16px',
        padding: '12px 22px',
        ...sx,
      }}
      onClick={ onClick }>{ title }
    </MuiButton>
  );
};
export default Button;
