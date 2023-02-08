/// <reference types="react" />
import { SxProps, Theme } from '@mui/material';
interface ButtonProps {
    title?: string;
    onClick?: () => void;
    backgroundColor?: string;
    textColor?: string;
    sx?: SxProps<Theme>;
    children?: JSX.Element;
    variant?: 'text' | 'outlined' | 'contained';
    disabled?: boolean;
}
declare const Button: ({ title, onClick, backgroundColor, textColor, sx, children, variant, disabled, }: ButtonProps) => JSX.Element;
export default Button;
