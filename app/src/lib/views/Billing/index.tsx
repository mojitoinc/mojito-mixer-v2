import { BillingFormData, useUser } from '@lib/providers/UserProvider';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import BillingView from './BillingView';

const BillingContainer = () => {
  const userData = useUser();

  const [isEditing, setIsEditing] = useState<boolean>(true);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: userData?.email,
      city: userData?.city,
      country: userData?.country,
      state: userData?.state,
      zipcode: userData?.zipcode,
      phoneNumber: userData?.phoneNumber,
    } as BillingFormData,
    onSubmit: () => undefined,
  });

  useEffect(() => {
    const hasUserData =
      Boolean(userData?.email) &&
      Boolean(userData?.country) &&
      Boolean(userData?.state) &&
      Boolean(userData?.city) &&
      Boolean(userData?.zipcode) &&
      Boolean(userData?.phoneNumber);
    setIsEditing(!hasUserData);
  }, [userData]);

  return (
    <BillingView
      isEditing={ isEditing }
      values={ values }
      errors={ errors }
      onChange={ handleChange }
      handleSubmit={ handleSubmit } />
  );
};

export default BillingContainer;
