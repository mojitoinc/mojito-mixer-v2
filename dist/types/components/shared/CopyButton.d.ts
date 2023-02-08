/// <reference types="react" />
import { SxProps, Theme } from '@mui/material';
interface CopyProps {
    copyValue: string;
    sx?: SxProps<Theme>;
}
declare const CopyButton: ({ copyValue, sx }: CopyProps) => JSX.Element;
export default CopyButton;
