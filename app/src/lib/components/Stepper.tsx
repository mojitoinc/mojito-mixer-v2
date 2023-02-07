import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Icons } from '../assets';
import { MixTheme } from '../theme';
import { ContainerTypes } from '../providers';

interface StepsType {
  title: string;
  value: string;
}
const steps: StepsType[] = [
  {
    title: 'Info',
    value: ContainerTypes.CHECKOUT,
  },
  {
    title: 'Payment',
    value: ContainerTypes.PAYMENT,
  },
  {
    title: 'Delivery',
    value: ContainerTypes.DELIVERY,
  },
];
interface StepperProps {
  currentState: string;
}
const Stepper = ({
  currentState,
}:StepperProps) => {
  const theme = useTheme<MixTheme>();
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.global?.background,
        display: 'flex',
        flexDirection: 'row',
        margin: '8px 0px',
      }}>
      { steps.map((item: StepsType, index: number) => {
        return (
          <Box display="flex" flexDirection="row" alignItems="center" key={ item.value }>
            <Typography
              fontWeight="700"
              fontSize="12px"
              color={ item.value === currentState
                ? theme.global?.highlightedText
                : theme.global?.unHighlightedText }>
              { item.title }
            </Typography>
            { index !== steps.length - 1 && (
              <img
                src={ Icons.rightArrow }
                width="14px"
                height="14px"
                style={{
                  margin: '0px 10px',
                }}
                alt="arrow"
                color={ item.value === currentState
                  ? theme.global?.highlightedText
                  : theme.global?.unHighlightedText } />
            ) }
          </Box>
        );
      }) }
    </Box>
  );
};

export default Stepper;
