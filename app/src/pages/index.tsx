import React, { useState, useCallback, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { meQuery } from 'queries/meQuery';
import { useAuth0 } from '@auth0/auth0-react';
import { UserOrg } from 'interface/meQuery';
import { DropdownOptions } from 'component/shared/DropDown';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { CheckoutLayout } from '../layout/Checkout.Layout';

export interface ConfigurationValues {
  organization?: string;
  customOrganization?: string;
  type?: string;
  lotId?: string;
  itemId?: string;
  invoiceId?: string;
  lotUnits?: string;
  express?: boolean;
  discountCode?: boolean;
}

export interface ExpressCheckoutPayment {
  expressGpay?: boolean;
  expressApplepay?: boolean;
  expressWalletconnect?: boolean;
  expressMetamask?: boolean;
}

export interface PaymentMethodTypes {
  creditcard?: boolean;
  gpay?: boolean;
  applepay?: boolean;
  walletconnect?: boolean;
  wire?: boolean;
}

// const validationSchema = Yup.object().shape({
//   organization: Yup.string().when(["customOrganization", "organization"], {
//     is: (customOrganization: string, organization: string) =>
//       organization !== "custom-org-id" && customOrganization === "",
//     then: Yup.string().required("Organization id is Required"),
//   }),
//   customOrganization: Yup.string().when(
//     ["customOrganization", "organization"],
//     {
//       is: (customOrganization: string, organization: string) =>
//         organization === "custom-org-id" && customOrganization !== "",
//       then: Yup.string().required("Custom organization id is Required"),
//     }
//   ),
//   lotId: Yup.string(),
//   lotUnits: Yup.string(),
//   express: Yup.boolean(),
//   discountCode: Yup.boolean(),
//   expressGpay: Yup.boolean(),
//   expressApplepay: Yup.boolean(),
//   expressWalletconnect: Yup.boolean(),
//   expressMetamask: Yup.boolean(),
//   creditcard: Yup.boolean(),
//   gpay: Yup.boolean(),
//   applepay: Yup.boolean(),
//   walletconnect: Yup.boolean(),
//   wire: Yup.boolean(),
// });

const HomePage: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const { loginWithPopup, isAuthenticated, isLoading: isAuthenticatedLoading, getIdTokenClaims } = useAuth0();

  const getAuthenticationToken = useCallback(async () => {
    const token = await getIdTokenClaims();
    // eslint-disable-next-line no-underscore-dangle
    return token?.__raw || "";
  }, [getIdTokenClaims]);
  
  const { values, handleChange, setFieldValue } = useFormik({
    initialValues: {
      organization: '',
      customOrganization: '',
      type: 'BUY_NOW',
      invoiceId: '',
      lotId: '',
      itemId: '',
      lotUnits: '1',
      express: true,
      discountCode: true,
      expressApplepay: true,
      expressGpay: true,
      expressMetamask: true,
      expressWalletconnect: true,
      applepay: true,
      gpay: true,
      walletconnect: true,
      creditcard: true,
      wire: true,
    } as ConfigurationValues & ExpressCheckoutPayment & PaymentMethodTypes,
    onSubmit: () => undefined,
  });

  const handleOpen = useCallback(() => {
    setShow(true);
  }, []);
  const { data: meData } = useQuery(meQuery, {
    skip: !isAuthenticated,
  });

  const [organizations, setOrganizations] = useState<DropdownOptions[]>([]);

  useEffect(() => {
    if (meData?.me?.userOrgs) {
      const formattedData = meData?.me?.userOrgs.map((item: UserOrg) => ({
        label: item.organization.name,
        value: item.organization.id,
      }));
      formattedData.push({
        label: 'Custom Org ID',
        value: 'custom-org-id',
      });
      setOrganizations(formattedData);
      setFieldValue('organization', formattedData[0].value);
    }
  }, [meData, setFieldValue]);

  useEffect(() => {
    setFieldValue('itemId', localStorage.getItem('itemId') ?? '');
    setFieldValue('lotId', localStorage.getItem('lotId') ?? '');
  }, [setFieldValue]);

  useEffect(() => {
    if (values.itemId !== '') {
      localStorage.setItem('itemId', values.itemId ?? '');
    }
    if (values.lotId !== '') {
      localStorage.setItem('lotId', values.lotId ?? '');
    }
  }, [values]);

  return (
    <CheckoutLayout
      show={ show }
      onOpen={ handleOpen }
      isAuthenticated={ isAuthenticated }
      organizationOptions={ organizations }
      getAuthenticationToken= { getAuthenticationToken }
      handleChange={ handleChange }
      setFieldValue={ setFieldValue }
      values={ values } />
  );
};

export default HomePage;
