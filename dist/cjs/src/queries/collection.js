'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../node_modules/@apollo/client/core/index.js');
require('../../node_modules/@apollo/client/utilities/globals/index.js');
require('react');
require('../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../node_modules/@apollo/client/utilities/common/canUse.js');
require('../../node_modules/@apollo/client/react/hooks/useQuery.js');
require('../../node_modules/@apollo/client/react/parser/index.js');
require('../../node_modules/@apollo/client/errors/index.js');
var index = require('../../node_modules/graphql-tag/lib/index.js');

const collectionByIdQuery = index.gql `
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

exports.collectionByIdQuery = collectionByIdQuery;
//# sourceMappingURL=collection.js.map
