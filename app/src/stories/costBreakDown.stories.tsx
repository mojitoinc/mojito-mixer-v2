import React from 'react';
import CostBreakDownLayout from '@views/CostBreakDown/CostBreakDown';

export const CostBreakDownStories = () => {
  return (
    <CostBreakDownLayout
      collectionData={{
        name: 'Item',
        details: {
          totalAvailableUnits: 100,
        },
      }}
      taxes={{
        __typename: 'taxes',
        taxablePrice: 20,
        totalTaxAmount: 20,
        totalTaxedPrice: 20,
        verifiedAddress: {
          city: '',
          __typename: 'address',
          country: 'US',
          postalCode: '23123',
          state: 'CA',
          street1: '23 1231',
        },
      }} />
  );
};
const stories = {
  title: 'views/CostBreakDown',
  component: CostBreakDownLayout,
};
export default stories;
