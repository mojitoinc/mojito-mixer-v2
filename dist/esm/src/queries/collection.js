import '../../node_modules/@apollo/client/core/index.js';
import '../../node_modules/@apollo/client/utilities/globals/index.js';
import 'react';
import '../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../node_modules/@apollo/client/utilities/common/canUse.js';
import '../../node_modules/@apollo/client/react/hooks/useQuery.js';
import '../../node_modules/@apollo/client/react/parser/index.js';
import '../../node_modules/@apollo/client/errors/index.js';
import { gql } from '../../node_modules/graphql-tag/lib/index.js';

const collectionByIdQuery = gql `
    query($id:UUID1!){
        collectionItemById(id: $id){
            id
            marketplaceTokenId
            collectionId
            saleType
            name
            slug
            details{
                ... on MarketplaceBuyNowOutput {
                        id,
                                startDate,
                        endDate,
                        unitPrice,
                        totalUnits,
                        totalAvailableUnits,
                        remainingCount,
                        sortNumber,
                                                
                }
            }
        }
    }
`;

export { collectionByIdQuery };
//# sourceMappingURL=collection.js.map
