import { gql } from "@apollo/client";

export const collectionByIdQuery = gql`
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
`