import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { MixTheme } from '../theme/ThemeOptions';

interface LinedTextProps {
  text: string;
  capitalize?: boolean;
}

const LinedText = ({ text, capitalize = true }: LinedTextProps) => {
  const theme = useTheme<MixTheme>();
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.global?.lines,
          height: '1px',
        }} />
      <Typography
        color={ theme?.global?.unHighlightedText }
        fontWeight="700"
        fontSize="12px"
        margin="0px 10px"
        minWidth={ `${ text.length * 8 }px` }
        textAlign="center">
        { capitalize ? text.toUpperCase() : text }
      </Typography>

      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.global?.lines,
          height: '1px',
        }} />
    </Box>
  );
};

export default LinedText;
