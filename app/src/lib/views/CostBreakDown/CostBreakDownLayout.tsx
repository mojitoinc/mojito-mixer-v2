import { Icons } from '@lib/assets';
import { Box } from '@mui/material';
import React from 'react';

const CostBreakDownLayout = () => {
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
export default CostBreakDownLayout;
