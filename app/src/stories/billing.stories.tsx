import BillingView from '@lib/views/Billing/BillingView';

export const BillingViewStories = () => {
    return <BillingView 
        errors={{}}
        isEditing={true}
        onChange={()=>{}}
        onClickContinue={()=>{}}
        onClickEdit={()=>{}}
        values={{}}
    />;
};
const stories = {
    title: 'views/BillingView',
    component: BillingView,
};
export default stories;
