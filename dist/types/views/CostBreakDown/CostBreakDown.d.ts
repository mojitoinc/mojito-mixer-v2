/// <reference types="react" />
import { CollectionItem, Taxes } from '../../interfaces';
interface CostBreakDownProps {
    taxes?: Taxes;
    collectionData?: CollectionItem;
    quantity?: number;
    vertexEnabled?: boolean;
    taxablePrice?: number;
}
declare const CostBreakDown: ({ taxes, collectionData, quantity, vertexEnabled, taxablePrice }: CostBreakDownProps) => JSX.Element;
export default CostBreakDown;
