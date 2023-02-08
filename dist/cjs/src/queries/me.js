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

const meQuery = index.gql `
    query Me {
        me {
        id
        user {
            id
            username
            name
            email
            __typename
        }
        userOrgs {
            organization {
            id
            name
            __typename
            }
            __typename
        }
        wallets {
            id
            name
            address
            __typename
        }
        __typename
        }
    }
`;

exports.meQuery = meQuery;
//# sourceMappingURL=me.js.map
