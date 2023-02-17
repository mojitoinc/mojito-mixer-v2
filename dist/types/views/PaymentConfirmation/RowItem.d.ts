/// <reference types="react" />
import { SxProps, Theme } from '@mui/material';
interface RowItemProps {
    title: string;
    children?: JSX.Element;
    value?: string;
    copyValue?: string;
    showCopy?: boolean;
    isWire?: boolean;
    sx?: SxProps<Theme>;
}
declare const RowItem: ({ showCopy, title, children, copyValue, value, isWire, sx, }: RowItemProps) => JSX.Element;
export default RowItem;
