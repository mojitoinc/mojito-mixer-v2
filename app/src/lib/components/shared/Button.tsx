import { MixTheme } from '@lib/theme/ThemeOptions';
import { Button as MuiButton, SxProps, Theme, useTheme } from '@mui/material';
import React from 'react';

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  sx?: SxProps<Theme>;
  children? : JSX.Element;
  variant?: 'text' | 'outlined' | 'contained';
}

const Button = ({
  title,
  onClick,
  backgroundColor,
  textColor,
  sx,
  children,
  variant,
}: ButtonProps) => {
  const theme = useTheme<MixTheme>();

  return (
    <MuiButton
      title={ title }
      autoCapitalize="none"
      size="small"
      variant={variant}
      sx={{
        backgroundColor: backgroundColor ?? theme.palette?.primary?.main,
        color: textColor ?? theme.palette?.secondary?.main,
        textTransform: 'none',
        fontWeight: '700',
        fontSize: '16px',
        borderRadius: '4px',
        padding: '0px 22px',
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
      onClick={ onClick }>
      { children }
      { title }
    </MuiButton>
  );
};
export default Button;
