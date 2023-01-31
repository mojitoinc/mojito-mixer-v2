import React from 'react';
import CostBreakDownLayout from '@lib/views/CostBreakDown/CostBreakDownLayout';

export const CostBreakDownStories = () => {
  return (
    <CostBreakDownLayout
      reserveLotData={{
        invoiceID: '2345',
        items: [],
        status: 'success',
        __typename: '',
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
