import React from 'react';
import BillingView from '@lib/views/Billing/BillingView';

export const BillingViewStories = () => {
  return (
    <BillingView
      errors={{}}
      isEditing
      onChange={ () => undefined }
      onClickContinue={ () => undefined }
      onClickEdit={ () => undefined }
      values={{}} />
  );
};
const stories = {
  title: 'views/BillingView',
  component: BillingView,
};
export default stories;
