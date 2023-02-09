import { Box, Typography, useTheme } from '@mui/material';
import CopyIcon from '@mui/icons-material/ContentCopy';
import React, { useCallback } from 'react';
import { MixTheme } from '../../theme';

interface RowItemProps {
  title: string;
  children?: JSX.Element;
  value?: string;
  copyValue?: string;
  showCopy?: boolean;
}

const RowItem = ({
  showCopy,
  title,
  children,
  copyValue,
  value,
}: RowItemProps) => {
  const theme = useTheme<MixTheme>();

  const onClickCopy = useCallback(() => {
    navigator.clipboard.writeText(copyValue ?? '');
  }, [copyValue]);

  return (
    <Box
      sx={{
        backgroundColor: theme.global?.background,
        padding: '16px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '8px 0px',
        border: `1px solid ${ theme.global?.cardBorder }`,
        borderRadius: '4px',
      }}>
      <Typography fontSize="16px" width="40%">
        { title }
      </Typography>
      <Typography fontSize="16px">{ value || children }</Typography>
      { showCopy && (
        <CopyIcon
          width="12px"
          height="12px"
          onClick={ onClickCopy }
          sx={{
            color: theme.global?.paymentConfirmation?.copyIconColor,
            marginLeft: '8px',
            alignSelf: 'flex-end',
            '&:active': {
              transform: 'scale(0.85, 0.85)',
              opacity: [0.9, 0.8, 0.7],
            },
          }} />
      ) }
    </Box>
  );
};
export default RowItem;
