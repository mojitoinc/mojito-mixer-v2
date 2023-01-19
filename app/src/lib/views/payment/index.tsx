import React, { useCallback, useState } from 'react'
import { PaymentInfoCards } from './infoCards'
import { useTheme, Card, Typography, Box } from '@mui/material'
import { MixTheme } from '@lib/theme/ThemeOptions'
import { PaymentMethod } from './paymentMethod.layout'
import { PaymentTypes } from '@lib/constants/states'
import { Icons } from '@lib/assets'
import Button from '@components/shared/Button'
import { CreditCardForm } from './creditCardForm'

interface paymentTypes {
    creditCard: boolean;
    walletConnect: boolean;
    applePay: boolean;
    googlePay: boolean;
    wireTransfer: boolean
}

export const PaymentCheckout = ()=> {
    const theme = useTheme<MixTheme>()
    const [paymentType, setPaymentType] = useState<paymentTypes>({
        creditCard: false,
        walletConnect: false,
        applePay:false,
        googlePay: false,
        wireTransfer: false
    })

    const onChoosePaymentType = useCallback((name:string, value: boolean)=> {
        let copiedType = {...paymentType}
        if (name == PaymentTypes.CREDIT_CARD) {
            copiedType = {
                creditCard: !!value,
                walletConnect: false,
                applePay:false,
                googlePay: false,
                wireTransfer: false
            }
        }
        if (name == PaymentTypes.WALLET_CONNECT) {
            copiedType = {
                creditCard: false,
                walletConnect: !!value,
                applePay:false,
                googlePay: false,
                wireTransfer: false
            }
        }
        if (name == PaymentTypes.APPLE_PAY) {
            copiedType = {
                creditCard: false,
                walletConnect: false,
                applePay:!!value,
                googlePay: false,
                wireTransfer: false
            }
        }
        if (name == PaymentTypes.GOOGLE_PAY) {
            copiedType = {
                creditCard: false,
                walletConnect: false,
                applePay:false,
                googlePay: !!value,
                wireTransfer: false
            }
        }
        if (name == PaymentTypes.WIRE_TRANSFER) {
            copiedType = {
                creditCard: false,
                walletConnect: false,
                applePay:false,
                googlePay: false,
                wireTransfer: !!value
            }
        }
        setPaymentType(copiedType)
    },[])

    return (<>
    <PaymentInfoCards />
    <Card sx={{
            border: `1px solid ${ theme.global?.cardBorder }`,
            backgroundColor: theme.global?.cardBackground,
            boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
            padding: '24px',
        }}>
            <Typography sx={{fontSize: '20px'}}>Payment Method</Typography>
            <PaymentMethod logo={Icons.creditCards} isSelected={paymentType.creditCard} name={PaymentTypes.CREDIT_CARD} bodyContent={<CreditCardForm />} onChoosePaymentType={onChoosePaymentType}/>
            <PaymentMethod logo={Icons.walletConnect} isSelected={paymentType.walletConnect} name={PaymentTypes.WALLET_CONNECT} bodyContent={<>Test</>} onChoosePaymentType={onChoosePaymentType}/>
            <PaymentMethod logo={Icons.applepayDark} isSelected={paymentType.applePay} name={PaymentTypes.APPLE_PAY} bodyContent={<>Test</>} onChoosePaymentType={onChoosePaymentType}/>
            <PaymentMethod logo={Icons.gpayDark} isSelected={paymentType.googlePay} name={PaymentTypes.GOOGLE_PAY} bodyContent={<>Test</>} onChoosePaymentType={onChoosePaymentType}/>
            <PaymentMethod logo={Icons.wireTransfer} isSelected={paymentType.wireTransfer} name={PaymentTypes.WIRE_TRANSFER} bodyContent={<>Test</>} onChoosePaymentType={onChoosePaymentType}/>
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
            onClick={ ()=> undefined }
            sx={{
                margin: '24px 0',
            }} />
    </Box>
    </>
    )
}