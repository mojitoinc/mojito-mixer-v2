import { Icons } from '@lib/assets';
import { PaymentTypes } from '@lib/constants/states';
import { MixTheme } from '@lib/theme/ThemeOptions';
import { Card, Typography, useTheme, Box, Radio, CardContent } from '@mui/material';
import React, { useMemo } from 'react';

interface PaymentMethodProps {
    isSelected: boolean;
    name:string;
    logo: string | null;
    bodyContent: JSX.Element;
    onChoosePaymentType: (name:string, value: boolean)=>void;
}

export const PaymentMethod = ({isSelected =false, name, logo, bodyContent, onChoosePaymentType }:PaymentMethodProps)=>{
    const isCreditCard = useMemo(()=> name === PaymentTypes.CREDIT_CARD, [name])
    const theme = useTheme<MixTheme>()
    const handleChange = (e:any)=> {
        onChoosePaymentType(name, e.target.checked)
    }
    return (
        <Card sx={{padding: 2, marginTop: 2,border: `1px solid ${isSelected ? theme.global?.highlightedText : theme.global?.cardBorder}`}}>
            <Box display={'flex'} alignItems={'center'}  justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'}>
                    <Radio sx={{padding: '0 9px'}} checked={isSelected} onChange={handleChange}/>
                    {!Boolean(isCreditCard) && <Box sx={{border: `1px solid ${theme.global?.cardBorder}`}} width={'48px'} height={'24px'} display={'flex'} justifyContent={'center'}><img src={logo ?? Icons.item} width={32}/></Box>}
                    <Typography variant='subtitle1' sx={{marginLeft: 1, fontWeight: 700}}>{name}</Typography>
                </Box>
                {Boolean(isCreditCard) && <img src={logo ?? Icons.item}/>}
            </Box>
            {isSelected &&
                <CardContent>
                    {bodyContent}
                </CardContent>
            }
        </Card>
    )
}