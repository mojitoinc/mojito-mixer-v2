/// <reference types="react" />
interface RowItemProps {
    title: string;
    children?: JSX.Element;
    value?: string;
    copyValue?: string;
    showCopy?: boolean;
}
declare const RowItem: ({ showCopy, title, children, copyValue, value, }: RowItemProps) => JSX.Element;
export default RowItem;
