import { useBilling } from '@lib/providers/BillingProvider';
import React from 'react';
import CostBreakDownLayout from './CostBreakDownLayout';

const CostBreakdownContainer = () => {
  const { taxes, reserveLotData } = useBilling();

  return (
    <CostBreakDownLayout
      taxes={ taxes }
      reserveLotData={ reserveLotData } />
  );
};

export default CostBreakdownContainer;
