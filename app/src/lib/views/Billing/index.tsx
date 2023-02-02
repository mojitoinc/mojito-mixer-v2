import { BillingFormData, useBilling } from "@lib/providers/BillingProvider";
import React, { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useQuery } from "@apollo/client";
import { paymentMethodsQuery } from "@lib/queries/billing";
import { useDelivery } from "@lib/providers/DeliveryProvider";
import { PaymentMethod } from "@lib/interfaces/PaymentMethods";
import * as Yup from "yup";
import { useContainer } from "@lib/providers/ContainerStateProvider";
import { ContainerTypes } from "@views/MojitoCheckout/MojitoCheckOut.layout";
import { uuid } from "uuidv4";
import { usePayment } from "@lib/providers/PaymentProvider";
import BillingView from "./BillingView";

const BillingContainer = () => {
  const { orgId } = useDelivery();
  const { setBillingInfo, billingInfo } = useBilling();

  const [isEditing, setIsEditing] = useState<boolean>(true);
  const { setContainerState } = useContainer();
  const { setPaymentInfo } = usePayment();

  const { data: paymentData } = useQuery(paymentMethodsQuery, {
    variables: {
      orgID: orgId,
    },
    skip: !orgId,
  });

  const schema = Yup.object().shape({
    country: Yup.string().required("Please select a country"),
    state: Yup.string().required("Please select a state"),
    city: Yup.string().required("Please select a city"),
    postalCode: Yup.string().required("Please enter zipcode"),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Please enter email"),
    phoneNumber: Yup.string().required("Please enter a mobile number"),
  });

  const { values, errors, handleChange, setValues, isValid } = useFormik({
    initialValues: {
      email: "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
      phoneNumber: "",
      street1: "",
      name: "",
    } as BillingFormData,
    onSubmit: () => undefined,
    validationSchema: schema,
  });

  useEffect(() => {
    setPaymentInfo({
      sessionKey: uuid(),
    });
  }, [setPaymentInfo]);

  useEffect(() => {
    if (paymentData) {
      const paymentItem: PaymentMethod =
        paymentData?.getPaymentMethodList?.find(
          (item: PaymentMethod) =>
            item.type === "CreditCard" && item.billingDetails
        );
      if (paymentItem) {
        setIsEditing(false);
        const values: BillingFormData = {
          city: billingInfo?.city ?? paymentItem?.billingDetails?.city,
          country: billingInfo?.country ?? paymentItem?.billingDetails?.country,
          postalCode:
            billingInfo?.postalCode ?? paymentItem?.billingDetails?.postalCode,
          state: billingInfo?.state ?? paymentItem?.billingDetails?.district,
          email: billingInfo?.email ?? paymentItem?.metadata?.email,
          phoneNumber:
            billingInfo?.phoneNumber ?? paymentItem?.metadata?.phoneNumber,
          street1:
            billingInfo?.street1 ?? paymentItem?.billingDetails?.address1,
          name: billingInfo?.name ?? paymentItem?.billingDetails?.name,
        };
        setValues(values);
      } else {
        setIsEditing(true);
      }
    }
  }, [paymentData, setValues]);

  useEffect(() => {
    if (
      Boolean(values?.city) &&
      Boolean(values?.country) &&
      Boolean(values?.state) &&
      Boolean(values?.street1) &&
      Boolean(values?.postalCode)
    ) {
      setBillingInfo(values);
    }
  }, [values]);

  const onClickEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const onClickContinue = useCallback(async () => {
    if (isEditing && !isValid) return;
    if (!isEditing) {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const isValidEmail = emailRegex.test(values?.email ?? "");
      if (!isValidEmail) return;
    }
    setBillingInfo({ ...values });

    setContainerState(ContainerTypes.PAYMENT);
  }, [values, setBillingInfo, isEditing, isValid, setContainerState]);

  return (
    <BillingView
      isEditing={isEditing}
      values={values}
      errors={errors}
      onChange={handleChange}
      onClickEdit={onClickEdit}
      onClickContinue={onClickContinue}
    />
  );
};

export default BillingContainer;
