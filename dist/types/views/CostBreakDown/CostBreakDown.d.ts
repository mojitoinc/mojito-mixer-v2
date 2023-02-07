/// <reference types="react" />
import { CollectionItem, Taxes } from '../../interfaces';
interface CostBreakDownProps {
    taxes: Taxes;
    collectionData: CollectionItem;
}
declare const CostBreakDown: ({ taxes, collectionData }: CostBreakDownProps) => JSX.Element;
export default CostBreakDown;
