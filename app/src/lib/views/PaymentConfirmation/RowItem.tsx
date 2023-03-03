import { Box, SxProps, Theme, Typography, useTheme } from '@mui/material';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import React, { useCallback } from 'react';
import { MixTheme } from '../../theme';

interface RowItemProps {
  title: string;
  children?: JSX.Element;
  value?: string;
  copyValue?: string;
  showCopy?: boolean;
  isWire?: boolean;
  sx?: SxProps<Theme>;
}

const RowItem = ({
  showCopy,
  title,
  children,
  copyValue,
  value,
  isWire,
  sx,
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
        margin: '16px 0px',
        border: `1px solid ${ theme.global?.cardBorder }`,
        marginBottom: isWire ? '0' : undefined,
        borderBottom: isWire ? 'none' : undefined,
        borderRadius: isWire ? '4px 4px 0 0' : '4px',
        ...sx,
      }}>
      <Typography fontSize="16px" width="40%" variant="body1">
        { title }
      </Typography>
      <Typography fontSize="16px" variant="body1" textOverflow="ellipsis" overflow="hidden" margin="0px 8px">
        { value
          ? <Typography>{ value }</Typography>
          : children }
      </Typography>
      { showCopy && (
        <FileCopyOutlinedIcon
          width="12px"
          height="12px"
          onClick={ onClickCopy }
          sx={{
            color: theme.global?.paymentConfirmation?.copyIconColor,
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
