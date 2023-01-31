import React, { useState, useCallback, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { meQuery } from 'queries/meQuery';
import { useAuth0 } from '@auth0/auth0-react';
import { UserOrg } from 'interface/meQuery';
import { CheckoutLayout } from '../layout/Checkout.Layout';

const HomePage: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const { isAuthenticated } = useAuth0();

  const handleOpen = useCallback(() => { setShow(true); }, []);
  const { data: meData } = useQuery(meQuery, {
    skip: !isAuthenticated,
  });
  const [values, setValues] = useState<any>({});

  const [organizations, setOrganizations] = useState<{label:string; value:string}[]>([]);

  const handleChange = useCallback((fieldName: string, value: string | boolean) => {
    setValues({
      ...values,
      [fieldName]: value,
    });
  }, [values]);

  useEffect(() => {
    if (meData?.me?.userOrgs) {
      const formattedData = meData?.me?.userOrgs.map((item:UserOrg) => ({
        label: item.organization.name,
        value: item.organization.id,

      }));
      formattedData.push({
        label: 'Custom Org ID',
        value: 'custom-org-id',
      });
      setOrganizations(formattedData);
    }
  }, [meData]);

  return (
    <CheckoutLayout
      show={ show }
      onOpen={ handleOpen }
      isAuthenticated={ isAuthenticated }
      organizationOptions={ organizations }
      handleChange={ handleChange }
      values={ values } />
  );
};

export default HomePage;
