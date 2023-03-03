import React, { useCallback } from 'react';
import { FormikErrors } from 'formik';
import { Box, FormHelperText, Typography, useTheme } from '@mui/material';
import Icon from '@mdi/react';
import { mdiEthereum } from '@mdi/js';
import { ethers } from 'ethers';
import { MixTheme } from '../../theme';
import { Button, CopyButton } from '../../components';
import { OnChainForm } from '../../providers';
import { Icons } from '../../assets';

interface OnChainProps {
  values: OnChainForm;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<OnChainForm>>;
  errors: FormikErrors<OnChainForm>;
}

const OnChainView = ({ values, setFieldValue, errors }: OnChainProps) => {
  const onClickMetaMask = useCallback(async () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setFieldValue('walletAddress', address);
  }, [setFieldValue]);


  const theme = useTheme<MixTheme>();
  return (
    <>
      { !values?.walletAddress ? (
        <>
          <Button
            backgroundColor={ theme.global?.black }
            onClick={ onClickMetaMask }
            sx={{
              width: { xs: '100%', md: '180px' },
              margin: '16px 0px',
              border: `1px solid ${ theme.global?.black }`,
            }}
            title="Metamask">
            <Icon path={ mdiEthereum } size="20px" />
          </Button>
          {
            errors?.walletAddress &&
            <FormHelperText error>{ errors?.walletAddress }</FormHelperText>
        }
        </>
      ) : (
        <>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            border={ `1px solid ${ theme.global?.cardBorder }` }
            padding="16px"
            sx={{
              background: theme.global?.background,
              margin: '16px 0px',
            }}>
            <Box display="flex" flexDirection="row" alignItems="center">
              <img src={ Icons.walletAddress } alt="wallet address" />
              <Typography
                fontSize="16px"
                marginLeft="12px"
                width="150px"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                { values?.walletAddress }
              </Typography>
              <CopyButton
                copyValue={ values?.walletAddress }
                sx={{
                  alignSelf: 'center',
                }} />
            </Box>
            <Button
              title="Change"
              textColor={ theme.global?.highlightedText }
              backgroundColor={ theme.global?.white }
              variant="outlined"
              sx={{
                justifySelf: 'flex-end',
              }}
              onClick={ onClickMetaMask } />
          </Box>
          <Typography fontSize={ 16 }>
            NFT will be delivered to same address
          </Typography>
        </>
      ) }
    </>
  );
};
export default OnChainView;
