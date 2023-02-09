## Mixer v1 migration to Mixer v2

|Mixer v1    |Mixer v2    |    |
|:--- | --- | :---:|
|uri| uri|✅|
|lotID| checkoutOptions.lotID |✅|
|getAuthenticationToken| getAuthenticationToken |✅|
|theme | theme |✅ |
|debug | debug |✅ |
|orgID | checkoutOptions.orgID |🔘|
|collectionItemId | checkoutOptions.collectionItemId |🔘|
|units | checkoutOptions.quantity |🔘|
|vertexEnabled| checkoutOptions.vertexEnabled |🔘|
|sardineConfig| sardineEnvironment |🔘|
|sardineConfig| enableSardine |🔘|
|dictionary.wireConfirmationInstruction| paymentConfirmation.wireTransferInstructions |🔘|
| | paymentConfirmation.creditCardInstructions |🔘|
| | paymentConfirmation.goToLabel |🔘|
|onGoTo | paymentConfirmation.onGoTo |🔘|
|hideDiscount | costBreakdown.showDiscountCode |🔘|
|dictionary.goToHref|  | ❌ |
|dictionary.goToLabel|  | ❌ |
|themeOptions|  | ❌ |
|onLogin|  | ❌ |
|isAuthenticated |  | ❌ |
|isAuthenticatedLoading |  | ❌ |
|isAuthenticatedLoadicheckoutItemsng |  | ❌ |
|consentType |  | ❌ |
|productConfirmationEnabled |  | ❌ |
|guestCheckoutEnabled |  | ❌ |
|confirmationType |  | ❌ |
|threeDSEnabled |  | ❌ |
|acceptedPaymentTypes |  | ❌ |
|acceptedCreditCardNetworks |  | ❌ |
|userFormat |  | ❌ |