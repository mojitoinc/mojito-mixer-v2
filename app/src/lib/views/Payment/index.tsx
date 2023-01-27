import React, { useCallback, useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import PaymentLayout from './Payment.layout';

export const PaymentContainer = () => {
  const [paymentType, setPaymentType] = useState<string>('');
  const onChoosePaymentType = useCallback((name: string, value: boolean) => {
    setPaymentType(value ? name : paymentType);
  }, [paymentType]);

  const validationSchema = object().shape({
    accountNumber: string().matches(/^[\d\s]+$/, 'Invalid account number').min(14, 'Invalid account number'),
    aba: string().matches(/^[\d\s]+$/, 'Invalid aba').min(14, 'Invalid aba'),
    bankCountry: string(),
    bankName: string(),
  });

  const {
    values: wireTransferFormValues,
    handleChange: onChangeWireTransferField,
    setFieldValue: onSetWireTransferField,
    errors: wireTransferFormErrors,
  } = useFormik({
    initialValues: {
      accountNumber: '',
      aba: '',
      bankCountry: '',
      bankName: '',
    },
    validationSchema,
    onSubmit: () => undefined,
  });

  return (
    <PaymentLayout 
    paymentType={paymentType}
    onChoosePaymentType={onChoosePaymentType}
    wireTransferFormValues={wireTransferFormValues}
    onChangeWireTransferField={onChangeWireTransferField}
    onSetWireTransferField={onSetWireTransferField}
    wireTransferFormErrors={wireTransferFormErrors}
    />
  );
};
