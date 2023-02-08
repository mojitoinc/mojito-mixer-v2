/// <reference types="react" />
import { SxProps, Theme } from '@mui/material';
export interface DropdownOptions {
    label: string | JSX.Element;
    value: string;
    data?: any;
}
interface DropdownProps {
    value?: string;
    title?: string;
    onChange?: (val: string) => void;
    options?: DropdownOptions[];
    error?: string;
    sx: SxProps<Theme>;
    required?: boolean;
    placeholder?: string;
}
declare const Dropdown: ({ value, title, onChange, options, sx, error, required, placeholder, }: DropdownProps) => JSX.Element;
export default Dropdown;
