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

  const props = useMemo(() => {
    const isConfirmation = containerState === ContainerTypes.CONFIRMATION;
    if (isConfirmation) {
      return {
        taxes: taxData,
        collectionData: collection,
        quantity: totalQuanity,
        taxablePrice: price,
        vertexEnabled: vertex,
      };
    }

    return {
      taxes,
      collectionData,
      quantity,
      taxablePrice,
      vertexEnabled,
    };
  }, [containerState, taxData, taxes, collection, collectionData, totalQuanity, quantity, price, taxablePrice, vertex, vertexEnabled]);


  return (
    <CostBreakDownLayout { ...props } />
  );
};

export default CostBreakdownContainer;
