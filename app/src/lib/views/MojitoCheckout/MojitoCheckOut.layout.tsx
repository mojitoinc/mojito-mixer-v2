import { Box } from '@mui/material';
import React from 'react';
import CheckOutContainer from '../CheckOut';
import { ContainerTypes } from '../../constants/states';

interface MojitoCheckoutProps {
  containerState: ContainerTypes;
}

const MojitoCheckoutLayout = ({ containerState }: MojitoCheckoutProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
      }}>
      { containerState === ContainerTypes.CHECKOUT && <CheckOutContainer /> }
    </Box>
  );
};
export default MojitoCheckoutLayout;
