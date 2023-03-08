import React, { useCallback, useEffect } from 'react';
import { FormikErrors } from 'formik';
import { Box, FormHelperText, Typography, useTheme } from '@mui/material';
import { MixTheme } from '../../theme';
import { Button, CopyButton } from '../../components';
import { OnChainForm } from '../../providers';
import { Icons } from '../../assets';
import { useWeb3ModalConnect } from '../../providers/Web3ModalConnect';

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
  const {
    connect,
    onWalletConnect,
    onDisconnect,
  } = useWeb3ModalConnect();

  useEffect(() => {
    if (connect) {
      setFieldValue('walletAddress', connect.account);
    }
  }, [setFieldValue, connect]);

  const onClickMetaMask = useCallback(async () => {
    await onDisconnect();
    await onWalletConnect();
  }, [onDisconnect,onWalletConnect]);


  const theme = useTheme<MixTheme>();
  return (
    <>
      { !values?.walletAddress ? (
        <Box
          display="flex"
          flexDirection="column">
          <Button
            backgroundColor={ theme.global?.black }
            onClick={ onClickMetaMask }
            sx={{
              width: { xs: '100%', md: '180px' },
              margin: '16px 0px',
              border: `1px solid ${ theme.global?.black }`,
              alignSelf: 'center',
            }}
            title="Walletconnect">
            <img
              src={ Icons.walletConnect }
              alt={"wallet connect"}
              style={{
                width: '20px',
                height: '20px',
                marginRight: '8px',
              }} />
          </Button>
          {
            errors?.walletAddress &&
            <FormHelperText error>{ errors?.walletAddress }</FormHelperText>
        }
        </Box>
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
