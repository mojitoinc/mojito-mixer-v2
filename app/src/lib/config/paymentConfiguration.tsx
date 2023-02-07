import { Typography } from '@mui/material';
import React from 'react';

export const creditCardInstructions: JSX.Element = (
  <Typography marginTop="16px">
    We received your payment and it should be fully processed within the next 24
    hours. As soon as everything is confirmed, we&apos;ll send you an email to
    account@email.com with your order confirmation and receipt.
    <br />
    <br />
    Since you paid with a credit card, your NFT(s) will be transferred to a
    MultiSig wallet (also known as a custodial wallet) for safekeeping.
    Don&apos;t worry, you can still view your NFT(s) on your Account page.
    <br />
    <br />
    After 14 days have passed, you&apos;ll be able to transfer your NFT(s) to a
    non-custodial wallet (like MetaMask) if you&apos;d like!
  </Typography>
);
export const wireTransferInstructions: JSX.Element = (
  <Typography marginTop="16px">
    Thank you for your payment. If you selected to have your NFT(s) transferred
    directly to your non-custodial wallet (such as MetaMask), we will do so as
    soon as payment confirmation is received; otherwise, your NFT(s) will be
    transferred to a MultiSig wallet (also known as a custodial wallet) for
    safekeeping. You can view your NFT(s) on your Account page at any time.
    <br />
    You can transfer your NFT(s) to your own non-custodial wallet (like
    MetaMask) at any time after they have been transferred to the MultiSig
    wallet.
  </Typography>
);
