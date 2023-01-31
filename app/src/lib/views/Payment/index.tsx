import React, { useCallback, useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { usePayment } from '@lib/providers/PaymentProvider';
import { useContainer } from '@lib/providers/ContainerStateProvider';
import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';
import { PaymentTypes } from '@lib/constants/states';
import { useUIConfiguration } from '@lib/providers/ConfigurationProvider';
import PaymentLayout from './Payment.layout';

export const PaymentContainer = () => {
  const [paymentType, setPaymentType] = useState<string>('');
  const { setPaymentInfo, paymentInfo } = usePayment();
  const { setContainerState } = useContainer();
  const onChoosePaymentType = useCallback((name: PaymentTypes, value: boolean) => {
    setPaymentType(value ? name : paymentType);
  }, [paymentType]);
  const { billing } = useUIConfiguration();

  const validationSchema = object().shape({
    accountNumber: string().matches(/^[\d\s]+$/, 'Invalid account number').min(9, 'Invalid account number'),
    aba: string().matches(/^[\d\s]+$/, 'Invalid aba').min(10, 'Invalid aba'),
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

  const onClickDelivery = useCallback(() => {
    if (paymentType === PaymentTypes.WIRE_TRANSFER) {
      setPaymentInfo({
        ...paymentInfo,
        paymentType,
        wireData: {
          accountNumber: wireTransferFormValues.accountNumber.split(' ').join(''),
          routingNumber: wireTransferFormValues.aba.split(' ').join(''),
          bankAddress: {
            bankName: wireTransferFormValues.bankName,
            country: wireTransferFormValues.bankCountry,
          },
        },
      });
    }
    setContainerState(ContainerTypes.DELIVERY);
  }, [paymentType, wireTransferFormValues, setPaymentInfo, setContainerState, paymentInfo]);

  return (
    <PaymentLayout
      paymentType={ paymentType }
      onChoosePaymentType={ onChoosePaymentType }
      wireTransferFormValues={ wireTransferFormValues }
      onChangeWireTransferField={ onChangeWireTransferField }
      onSetWireTransferField={ onSetWireTransferField }
      wireTransferFormErrors={ wireTransferFormErrors }
      onClickDelivery={ onClickDelivery }
      config={ billing.paymentMethods } />
  );
};
