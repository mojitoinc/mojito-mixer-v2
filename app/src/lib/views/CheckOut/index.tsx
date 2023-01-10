import { UserType, useUser } from '@lib/providers/UserProvider';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useCityOptions, useCountryOptions, useStateOptions } from '@lib/utils/dropdowns';
import CheckOutLayout from './CheckOutLayout';

const CheckOutContainer = () => {
  const userData = useUser();

  const [isEditing, setIsEditing] = useState<boolean>(true);
  const countriesList = useCountryOptions();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: userData?.email,
      city: userData?.city,
      country: userData?.country,
      state: userData?.state,
      zipcode: userData?.zipcode,
      phoneNumber: userData?.phoneNumber,
    } as UserType,
    onSubmit: () => undefined,
  });

  const statesList = useStateOptions(values?.country);
  const citiesList = useCityOptions(values?.country, values?.state);


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
    <CheckOutLayout
      isEditing={ isEditing }
      values={ values }
      errors={ errors }
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }
      countriesList={ countriesList }
      statesList={ statesList }
      citiesList={ citiesList } />
  );
};

export default CheckOutContainer;
