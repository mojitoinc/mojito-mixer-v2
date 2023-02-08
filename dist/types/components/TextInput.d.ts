import { InputBaseProps, SxProps, Theme } from '@mui/material';
import React from 'react';
interface TextInputProps {
    value?: string;
    title?: string;
    onChange?: (val: string) => void;
    placeholder?: string;
    error?: string;
    sx?: SxProps<Theme>;
    inputProps?: InputBaseProps['inputProps'];
    required?: boolean;
    type?: React.InputHTMLAttributes<unknown>['type'];
}
declare const TextInput: ({ value, title, onChange, placeholder, sx, error, required, type, inputProps, }: TextInputProps) => JSX.Element;
export default TextInput;
