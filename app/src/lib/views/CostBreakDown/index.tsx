import usePaymentInfo from '@lib/hooks/usePaymentInfo';
import { useBilling } from '@lib/providers/BillingProvider';
import React from 'react';
import CostBreakDownLayout from './CostBreakDownLayout';

const CostBreakdownContainer = () => {
  const { taxes, reserveLotData } = useBilling();
  const { taxData, lotData } = usePaymentInfo();

  return (
    <CostBreakDownLayout
      taxes={ taxData ?? taxes }
      reserveLotData={ lotData ?? reserveLotData } />
  );
};

export default CostBreakdownContainer;
