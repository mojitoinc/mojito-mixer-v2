/// <reference types="react" />
interface RowItemProps {
    title: string;
    children?: JSX.Element;
    value?: string;
    copyValue?: string;
    showCopy?: boolean;
    isWire?: boolean;
}
declare const RowItem: ({ showCopy, title, children, copyValue, value, isWire, }: RowItemProps) => JSX.Element;
export default RowItem;
