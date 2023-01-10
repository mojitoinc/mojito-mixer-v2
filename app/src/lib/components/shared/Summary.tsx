import { Icons } from '@lib/assets';
import { Box } from '@mui/material';
import React from 'react';

const SummaryContainer = () => {
  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        backgroundImage: `url(${ Icons.background })`,
        backgroundSize: '100%',
      }} />
  );
};
export default SummaryContainer;
