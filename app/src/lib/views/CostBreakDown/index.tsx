import usePaymentInfo from '@lib/hooks/usePaymentInfo';
import { useBilling } from '@lib/providers/BillingProvider';
import React from 'react';
import CostBreakDownLayout from './CostBreakDownLayout';

const CostBreakdownContainer = () => {
  const { taxes, collectionData } = useBilling();
  const { taxData, collection } = usePaymentInfo();

  return (
    <CostBreakDownLayout
      taxes={ taxData ?? taxes }
      collectionData={ collection ?? collectionData } />
  );
};

export default CostBreakdownContainer;
