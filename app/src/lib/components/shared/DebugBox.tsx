import { Theme, SxProps } from '@mui/material/styles';
import { Box, BoxProps, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useDebug } from '../../providers';

const SM_BORDER_RADIUS = 6;

const DEBUG_BOX_OUTER_SX: SxProps<Theme> = {
  position: 'relative',
  borderRadius: `${ SM_BORDER_RADIUS }px`,
  backgroundColor: theme => theme.palette.grey['50'],
  border: theme => `1px solid ${ theme.palette.grey['300'] }`,
  color: theme => theme.palette.grey['800'],
  overflow: 'hidden',
};

const DEBUG_BOX_INNER_COMPACT_SX: SxProps<Theme> = {
  p: 1,
  pr: 6,
  m: 0,
};

const DEBUG_BOX_INNER_SCROLL_SX: SxProps<Theme> = {
  p: 2,
  pt: 3,
  m: 0,
  overflow: 'scroll',
  whiteSpace: 'pre-wrap',
  maxHeight: '256px',
};

const DEBUG_LABEL_COMPACT_SX: SxProps<Theme> = {
  position: 'absolute',
  top: 0,
  right: 0,
  borderBottomLeftRadius: `${ SM_BORDER_RADIUS }px`,
  px: 0.5,
  borderLeft: theme => `1px solid ${ theme.palette.grey['100'] }`,
  borderBottom: theme => `1px solid ${ theme.palette.grey['100'] }`,
  pointerEvents: 'none',
};

const DEBUG_LABEL_SCROLL_SX: SxProps<Theme> = {
  ...DEBUG_LABEL_COMPACT_SX,
  pr: 2.5,
  color: '#fff',
  backgroundColor: '#000',
};

export interface DebugBoxProps extends BoxProps {
  compact?: boolean;
  value?: any | undefined;
}

export const DebugBox: React.FC<DebugBoxProps> = ({
  compact,
  value,
  sx,
  children,
  ...props
}) => {
  const {  debug } = useDebug('');
  
  const stringValue = useMemo(()=>{
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch (e: any) {
        return e?.message;
      }
    }
    return `${ value }`;
  }, [value]);

  return debug ? (
    <Box style={{ paddingBottom: 40 }}>
      <Box { ...props } sx={{ ...DEBUG_BOX_OUTER_SX, ...sx }}>
        <Typography
          component="span"
          variant="caption"
          sx={ compact ? DEBUG_LABEL_COMPACT_SX : DEBUG_LABEL_SCROLL_SX }>
          DEBUG
        </Typography>
        <Box
          component="pre"
          sx={ compact ? DEBUG_BOX_INNER_COMPACT_SX : DEBUG_BOX_INNER_SCROLL_SX }>
          { children }
          { stringValue }
        </Box>
      </Box>
    </Box>
  ) : null;
};
