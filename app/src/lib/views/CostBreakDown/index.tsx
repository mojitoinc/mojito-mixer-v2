import { usePaymentInfo } from '../../hooks';
import { useBilling } from '../../providers';
import React from 'react';
import CostBreakDownLayout from './CostBreakDown';

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
