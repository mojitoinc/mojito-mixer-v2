import { Box, Card, Typography, useTheme } from '@mui/material';
import React from 'react';
import { BillingFormData } from '../../providers';
import { MixTheme } from '../../theme';

interface BillingFormProps {
  values: BillingFormData;
  onClickEdit : ()=>void;
}

const BillingDetails = ({ values, onClickEdit }: BillingFormProps) => {
  const theme = useTheme<MixTheme>();

  return (
    <Card
      sx={{
        border: `1px solid ${ theme.global?.cardBorder }`,
        backgroundColor: theme.global?.cardBackground,
        boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
        margin: '24px 0px',
      }}>
      <Box
        padding="14px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box>
          <Typography
            color={ theme.palette?.text?.primary }
            fontWeight="500"
            fontSize="20px">
            Billing Info
          </Typography>
          <Typography
            color={ theme.palette?.text?.primary }
            fontWeight="500"
            fontSize="16px"
            marginTop="16px">
            { `${ values?.firstName } ${ values?.lastName }\n`}
            <br />
            { `${ values?.country },${ values?.state }\n` }
            <br />
            { `${ values?.city },${ values?.postalCode }\n` }
            <br />
            {values?.street1}
            <br />
            { values?.phoneNumber }
          </Typography>
        </Box>
        <Box
          padding="5px"
          sx={{
            cursor: 'pointer',
          }}
          onClick={ onClickEdit }>
          <Typography
            color={ theme.global?.linksText }
            fontWeight="700">
            Edit
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
export default BillingDetails;
