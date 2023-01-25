import React, { useCallback, useState } from 'react'
import { PaymentInfoCards } from './InfoCards'
import { useTheme, Card, Typography, Box } from '@mui/material'
import { MixTheme } from '@lib/theme/ThemeOptions'
import { PaymentMethod } from './PaymentMethod.layout'
import { PaymentTypes } from '@lib/constants/states'
import { Icons } from '@lib/assets'
import Button from '@components/shared/Button'
import { CreditCardForm } from './CreditCardForm'
import { WireTransferForm } from './WireTransferForm'
import { useFormik } from 'formik'
import { object, string } from 'yup'

export const PaymentCheckout = () => {
  const theme = useTheme<MixTheme>();
  const [paymentType, setPaymentType] = useState<string>('');
  const onChoosePaymentType = useCallback((name:string, value: boolean) => {
    setPaymentType(value ? name : paymentType);
  }, []);

    const validationSchema = object().shape({
        accountNumber: string().matches(/^[\d\s]+$/, 'Invalid account number').min(14, 'Invalid account number'),
        aba: string().matches(/^[\d\s]+$/, 'Invalid aba').min(14, 'Invalid aba'),
        bankCountry: string(),
        bankName: string()
    })

    const { values : wireTransferFormValues,
            handleChange: onChangeWireTransferField,
            setFieldValue: onSetWireTransferField,
            errors: wireTransferFormErrors } = useFormik({
        initialValues: {
            accountNumber: '',
            aba: '',
            bankCountry: '',
            bankName: ''
        },
        validationSchema: validationSchema,
        onSubmit: ()=> undefined
    })

    return (<>
    <PaymentInfoCards />
    <Card sx={{
            border: `1px solid ${ theme.global?.cardBorder }`,
            backgroundColor: theme.global?.cardBackground,
            boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
            padding: '24px',
        }}>
            <Typography sx={{fontSize: '20px'}}>Payment Method</Typography>
            <PaymentMethod logo={Icons.creditCards} isSelected={paymentType} name={PaymentTypes.CREDIT_CARD} bodyContent={<CreditCardForm />} onChoosePaymentType={onChoosePaymentType}/>
            <PaymentMethod logo={Icons.walletConnect} isSelected={paymentType} name={PaymentTypes.WALLET_CONNECT} bodyContent={<>Test</>} onChoosePaymentType={onChoosePaymentType}/>
            <PaymentMethod logo={Icons.applepayDark} isSelected={paymentType} name={PaymentTypes.APPLE_PAY} bodyContent={<>Test</>} onChoosePaymentType={onChoosePaymentType}/>
            <PaymentMethod logo={Icons.gpayDark} isSelected={paymentType} name={PaymentTypes.GOOGLE_PAY} bodyContent={<>Test</>} onChoosePaymentType={onChoosePaymentType}/>
            <PaymentMethod logo={Icons.wireTransfer} isSelected={paymentType} name={PaymentTypes.WIRE_TRANSFER} bodyContent={<WireTransferForm values={wireTransferFormValues} handleChange={onChangeWireTransferField} setFieldValue={onSetWireTransferField} errors={wireTransferFormErrors}/>} onChoosePaymentType={onChoosePaymentType}/>
            <Box display={'flex'} marginTop={2} alignItems={'center'}>
                <img src={Icons.lock} height={28} width={28}/>
                <Typography variant='body2' sx={{marginLeft: 1}}>We protect your payment information using encryption to provide bank-level security</Typography>
            </Box>        
    </Card>
    <Box
        display="flex"
        justifyContent="flex-end">

        <Button
          title="Continue to Delivery"
          backgroundColor={ theme.global?.checkOutColors?.continueButtonBackground }
          textColor={ theme.global?.checkOutColors?.continueButtonTextColor }
          onClick={ () => undefined }
          sx={{
            margin: '24px 0',
          }} />
      </Box>
    </>
  );
};
