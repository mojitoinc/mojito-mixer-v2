import React from 'react';
import BillingView from '@lib/views/Billing/BillingView';

export const BillingViewStories = () => {
  return (
    <BillingView
      isEditing
      onClickContinue={ () => undefined }
      onClickEdit={ () => undefined }
      onChangeValues={ () => undefined } />
  );
};
const stories = {
  title: 'views/BillingView',
  component: BillingView,
};
export default stories;
