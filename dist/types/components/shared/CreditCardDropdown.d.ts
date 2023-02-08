/// <reference types="react" />
import { SxProps, Theme } from '@mui/material';
import { PaymentMethod } from '../../interfaces';
export interface DropdownOptions {
    label: string | JSX.Element;
    value: string;
    data?: any;
}
interface DropdownProps {
    value?: string;
    title?: string;
    onChange?: (val: string) => void;
    options?: PaymentMethod[];
    error?: string;
    sx: SxProps<Theme>;
    required?: boolean;
    placeholder?: string;
}
declare const CreditCardDropdown: ({ value, title, onChange, options, sx, error, required, placeholder, }: DropdownProps) => JSX.Element;
export default CreditCardDropdown;
