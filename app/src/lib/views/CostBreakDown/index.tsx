import React, { useMemo } from 'react';
import { usePaymentInfo } from '../../hooks';
import CostBreakDownLayout from './CostBreakDown';
import { ContainerTypes } from '../../interfaces/ContextInterface';
import {
  useContainer,
  useCheckout,
  useBilling,
} from '../../providers';

const CostBreakdownContainer = () => {
  const { taxes, collectionData } = useBilling();
  const { quantity, vertexEnabled } = useCheckout();
  const { taxablePrice } = useBilling();

  const { taxData, collection, vertexEnabled: vertex, taxablePrice: price, quantity: totalQuanity } = usePaymentInfo();
  const { containerState } = useContainer();

  const isConfirmation = useMemo<boolean>(() => {
    return containerState === ContainerTypes.CONFIRMATION;
  }, [containerState]);

  return (
    <CostBreakDownLayout
      taxes={ isConfirmation ? taxData : taxes }
      collectionData={ isConfirmation ? collection : collectionData }
      quantity={ isConfirmation ? totalQuanity : quantity }
      taxablePrice={ isConfirmation ? price : taxablePrice }
      vertexEnabled={ isConfirmation ? vertex : vertexEnabled } />
  );
};

export default CostBreakdownContainer;
