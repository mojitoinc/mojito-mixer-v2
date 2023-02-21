'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../node_modules/@mui/utils/esm/elementAcceptingRef.js');
require('../../../node_modules/@mui/utils/esm/elementTypeAcceptingRef.js');
require('react-is');
require('../../../node_modules/@mui/utils/esm/ponyfillGlobal.js');
require('../../../node_modules/@mui/utils/esm/refType.js');
var React = require('react');
require('../../../node_modules/@mui/utils/esm/integerPropType.js');
require('@emotion/styled');
require('@emotion/react');
require('../../../node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js');
require('../../../node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js');
require('../../../node_modules/@mui/system/esm/borders.js');
require('prop-types');
require('../../../node_modules/@mui/system/esm/display.js');
require('../../../node_modules/@mui/system/esm/flexbox.js');
require('../../../node_modules/@mui/system/esm/cssGrid.js');
require('../../../node_modules/@mui/system/esm/palette.js');
require('../../../node_modules/@mui/system/esm/positions.js');
require('../../../node_modules/@mui/system/esm/shadows.js');
require('../../../node_modules/@mui/system/esm/sizing.js');
require('../../../node_modules/@mui/system/esm/spacing.js');
require('../../../node_modules/@mui/system/esm/responsivePropType.js');
require('../../../node_modules/@mui/system/esm/typography.js');
require('../../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js');
require('../../../node_modules/@mui/system/esm/getThemeValue.js');
require('../../../node_modules/@mui/system/esm/Box/Box.js');
require('../../../node_modules/@mui/system/esm/useTheme.js');
require('react/jsx-runtime');
require('../../../node_modules/@mui/system/esm/createStyled.js');
require('../../../node_modules/@mui/system/esm/styled.js');
require('../../../node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js');
require('../../../node_modules/@mui/private-theming/useTheme/ThemeContext.js');
require('../../../node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js');
require('../../../node_modules/@mui/system/esm/Container/createContainer.js');
require('../../../node_modules/@mui/system/esm/Container/Container.js');
require('../../../node_modules/@mui/system/esm/Container/containerClasses.js');
require('../../../node_modules/@mui/system/esm/Unstable_Grid/Grid.js');
require('../../../node_modules/@mui/system/esm/Unstable_Grid/createGrid.js');
require('../../../node_modules/@mui/system/esm/Unstable_Grid/gridClasses.js');
require('../../../node_modules/@mui/system/esm/Stack/Stack.js');
require('../../../node_modules/@mui/system/esm/Stack/createStack.js');
require('../../../node_modules/@mui/system/esm/Stack/stackClasses.js');
require('../../../node_modules/@mui/material/styles/createPalette.js');
require('../../../node_modules/@mui/material/styles/shadows.js');
var useTheme = require('../../../node_modules/@mui/material/styles/useTheme.js');
require('../../../node_modules/@mui/material/styles/defaultTheme.js');
require('../../../node_modules/@mui/material/styles/styled.js');
require('../../../node_modules/@mui/material/styles/CssVarsProvider.js');
require('../../../node_modules/@mui/material/styles/experimental_extendTheme.js');
require('../../../node_modules/@mui/material/SvgIcon/SvgIcon.js');
require('../../../node_modules/@mui/material/SvgIcon/svgIconClasses.js');
require('../../../node_modules/@mui/material/Accordion/Accordion.js');
require('../../../node_modules/@mui/material/Accordion/accordionClasses.js');
require('../../../node_modules/@mui/material/AccordionActions/AccordionActions.js');
require('../../../node_modules/@mui/material/AccordionActions/accordionActionsClasses.js');
require('../../../node_modules/@mui/material/AccordionDetails/AccordionDetails.js');
require('../../../node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js');
require('../../../node_modules/@mui/material/AccordionSummary/AccordionSummary.js');
require('../../../node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js');
require('../../../node_modules/@mui/material/Alert/Alert.js');
require('../../../node_modules/@mui/material/Alert/alertClasses.js');
require('../../../node_modules/@mui/material/AlertTitle/AlertTitle.js');
require('../../../node_modules/@mui/material/AlertTitle/alertTitleClasses.js');
require('../../../node_modules/@mui/material/AppBar/AppBar.js');
require('../../../node_modules/@mui/material/AppBar/appBarClasses.js');
require('../../../node_modules/@mui/material/Autocomplete/Autocomplete.js');
require('../../../node_modules/@mui/material/Autocomplete/autocompleteClasses.js');
require('../../../node_modules/@mui/material/Avatar/Avatar.js');
require('../../../node_modules/@mui/material/Avatar/avatarClasses.js');
require('../../../node_modules/@mui/material/AvatarGroup/AvatarGroup.js');
require('../../../node_modules/@mui/material/AvatarGroup/avatarGroupClasses.js');
require('../../../node_modules/@mui/material/Backdrop/Backdrop.js');
require('../../../node_modules/@mui/material/Backdrop/backdropClasses.js');
require('../../../node_modules/@mui/material/Badge/Badge.js');
require('../../../node_modules/@mui/material/Badge/badgeClasses.js');
require('../../../node_modules/@mui/material/BottomNavigation/BottomNavigation.js');
require('../../../node_modules/@mui/material/BottomNavigation/bottomNavigationClasses.js');
require('../../../node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js');
require('../../../node_modules/@mui/material/BottomNavigationAction/bottomNavigationActionClasses.js');
var Box = require('../../../node_modules/@mui/material/Box/Box.js');
require('../../../node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js');
require('../../../node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js');
require('../../../node_modules/@mui/material/Button/Button.js');
require('../../../node_modules/@mui/material/Button/buttonClasses.js');
require('../../../node_modules/@mui/material/ButtonBase/ButtonBase.js');
require('../../../node_modules/@mui/material/ButtonBase/buttonBaseClasses.js');
require('../../../node_modules/@mui/material/ButtonBase/touchRippleClasses.js');
require('../../../node_modules/@mui/material/ButtonGroup/ButtonGroup.js');
require('../../../node_modules/@mui/material/ButtonGroup/buttonGroupClasses.js');
var Card = require('../../../node_modules/@mui/material/Card/Card.js');
require('../../../node_modules/@mui/material/Card/cardClasses.js');
require('../../../node_modules/@mui/material/CardActionArea/CardActionArea.js');
require('../../../node_modules/@mui/material/CardActionArea/cardActionAreaClasses.js');
require('../../../node_modules/@mui/material/CardActions/CardActions.js');
require('../../../node_modules/@mui/material/CardActions/cardActionsClasses.js');
require('../../../node_modules/@mui/material/CardContent/CardContent.js');
require('../../../node_modules/@mui/material/CardContent/cardContentClasses.js');
require('../../../node_modules/@mui/material/CardHeader/CardHeader.js');
require('../../../node_modules/@mui/material/CardHeader/cardHeaderClasses.js');
require('../../../node_modules/@mui/material/CardMedia/CardMedia.js');
require('../../../node_modules/@mui/material/CardMedia/cardMediaClasses.js');
require('../../../node_modules/@mui/material/Checkbox/Checkbox.js');
require('../../../node_modules/@mui/material/Checkbox/checkboxClasses.js');
require('../../../node_modules/@mui/material/Chip/Chip.js');
require('../../../node_modules/@mui/material/Chip/chipClasses.js');
require('../../../node_modules/@mui/material/CircularProgress/CircularProgress.js');
require('../../../node_modules/@mui/material/CircularProgress/circularProgressClasses.js');
require('../../../node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js');
require('../../../node_modules/@mui/material/Collapse/Collapse.js');
require('../../../node_modules/@mui/material/Collapse/collapseClasses.js');
require('../../../node_modules/@mui/material/Container/Container.js');
require('../../../node_modules/@mui/material/Container/containerClasses.js');
require('../../../node_modules/@mui/material/CssBaseline/CssBaseline.js');
require('../../../node_modules/@mui/material/Dialog/Dialog.js');
require('../../../node_modules/@mui/material/Dialog/dialogClasses.js');
require('../../../node_modules/@mui/material/DialogActions/DialogActions.js');
require('../../../node_modules/@mui/material/DialogActions/dialogActionsClasses.js');
require('../../../node_modules/@mui/material/DialogContent/DialogContent.js');
require('../../../node_modules/@mui/material/DialogContent/dialogContentClasses.js');
require('../../../node_modules/@mui/material/DialogContentText/DialogContentText.js');
require('../../../node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js');
require('../../../node_modules/@mui/material/DialogTitle/DialogTitle.js');
require('../../../node_modules/@mui/material/DialogTitle/dialogTitleClasses.js');
require('../../../node_modules/@mui/material/Divider/Divider.js');
require('../../../node_modules/@mui/material/Divider/dividerClasses.js');
require('../../../node_modules/@mui/material/Drawer/Drawer.js');
require('../../../node_modules/@mui/material/Drawer/drawerClasses.js');
require('../../../node_modules/@mui/material/Fab/Fab.js');
require('../../../node_modules/@mui/material/Fab/fabClasses.js');
require('../../../node_modules/@mui/material/Fade/Fade.js');
require('../../../node_modules/@mui/material/FilledInput/FilledInput.js');
require('../../../node_modules/@mui/material/FilledInput/filledInputClasses.js');
require('../../../node_modules/@mui/material/FormControl/FormControl.js');
require('../../../node_modules/@mui/material/FormControl/FormControlContext.js');
require('../../../node_modules/@mui/material/FormControl/formControlClasses.js');
require('../../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js');
require('../../../node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js');
require('../../../node_modules/@mui/material/FormGroup/FormGroup.js');
require('../../../node_modules/@mui/material/FormGroup/formGroupClasses.js');
require('../../../node_modules/@mui/material/FormHelperText/FormHelperText.js');
require('../../../node_modules/@mui/material/FormHelperText/formHelperTextClasses.js');
require('../../../node_modules/@mui/material/FormLabel/FormLabel.js');
require('../../../node_modules/@mui/material/FormLabel/formLabelClasses.js');
require('../../../node_modules/@mui/material/Grid/Grid.js');
require('../../../node_modules/@mui/material/Grid/gridClasses.js');
require('../../../node_modules/@mui/material/Unstable_Grid2/Grid2.js');
require('../../../node_modules/@mui/material/Unstable_Grid2/grid2Classes.js');
require('../../../node_modules/@mui/material/Grow/Grow.js');
require('../../../node_modules/@mui/material/Hidden/Hidden.js');
require('../../../node_modules/@mui/material/Icon/Icon.js');
require('../../../node_modules/@mui/material/Icon/iconClasses.js');
require('../../../node_modules/@mui/material/IconButton/IconButton.js');
require('../../../node_modules/@mui/material/IconButton/iconButtonClasses.js');
require('../../../node_modules/@mui/material/ImageList/ImageList.js');
require('../../../node_modules/@mui/material/ImageList/imageListClasses.js');
require('../../../node_modules/@mui/material/ImageListItem/ImageListItem.js');
require('../../../node_modules/@mui/material/ImageListItem/imageListItemClasses.js');
require('../../../node_modules/@mui/material/ImageListItemBar/ImageListItemBar.js');
require('../../../node_modules/@mui/material/ImageListItemBar/imageListItemBarClasses.js');
require('../../../node_modules/@mui/material/Input/Input.js');
require('../../../node_modules/@mui/material/Input/inputClasses.js');
require('../../../node_modules/@mui/material/InputAdornment/InputAdornment.js');
require('../../../node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js');
require('../../../node_modules/@mui/material/InputBase/InputBase.js');
require('../../../node_modules/@mui/material/InputBase/inputBaseClasses.js');
require('../../../node_modules/@mui/material/InputLabel/InputLabel.js');
require('../../../node_modules/@mui/material/InputLabel/inputLabelClasses.js');
require('../../../node_modules/@mui/material/LinearProgress/LinearProgress.js');
require('../../../node_modules/@mui/material/LinearProgress/linearProgressClasses.js');
require('../../../node_modules/@mui/material/Link/Link.js');
require('../../../node_modules/@mui/material/Link/linkClasses.js');
require('../../../node_modules/@mui/material/List/List.js');
require('../../../node_modules/@mui/material/List/listClasses.js');
require('../../../node_modules/@mui/material/ListItem/ListItem.js');
require('../../../node_modules/@mui/material/ListItem/listItemClasses.js');
require('../../../node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js');
require('../../../node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js');
require('../../../node_modules/@mui/material/ListItemButton/ListItemButton.js');
require('../../../node_modules/@mui/material/ListItemButton/listItemButtonClasses.js');
require('../../../node_modules/@mui/material/ListItemIcon/ListItemIcon.js');
require('../../../node_modules/@mui/material/ListItemIcon/listItemIconClasses.js');
require('../../../node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js');
require('../../../node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js');
require('../../../node_modules/@mui/material/ListItemText/ListItemText.js');
require('../../../node_modules/@mui/material/ListItemText/listItemTextClasses.js');
require('../../../node_modules/@mui/material/ListSubheader/ListSubheader.js');
require('../../../node_modules/@mui/material/ListSubheader/listSubheaderClasses.js');
require('../../../node_modules/@mui/material/Menu/Menu.js');
require('../../../node_modules/@mui/material/Menu/menuClasses.js');
require('../../../node_modules/@mui/material/MenuItem/MenuItem.js');
require('../../../node_modules/@mui/material/MenuItem/menuItemClasses.js');
require('../../../node_modules/@mui/material/MenuList/MenuList.js');
require('../../../node_modules/@mui/material/MobileStepper/MobileStepper.js');
require('../../../node_modules/@mui/material/MobileStepper/mobileStepperClasses.js');
require('../../../node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js');
require('../../../node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js');
require('../../../node_modules/@mui/material/Modal/Modal.js');
require('../../../node_modules/@mui/material/NativeSelect/NativeSelect.js');
require('../../../node_modules/@mui/material/NativeSelect/nativeSelectClasses.js');
require('../../../node_modules/@mui/base/NoSsr/NoSsr.js');
require('../../../node_modules/@mui/material/OutlinedInput/OutlinedInput.js');
require('../../../node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js');
require('../../../node_modules/@mui/material/Pagination/Pagination.js');
require('../../../node_modules/@mui/material/Pagination/paginationClasses.js');
require('../../../node_modules/@mui/material/PaginationItem/PaginationItem.js');
require('../../../node_modules/@mui/material/PaginationItem/paginationItemClasses.js');
require('../../../node_modules/@mui/material/Paper/Paper.js');
require('../../../node_modules/@mui/material/Paper/paperClasses.js');
require('../../../node_modules/@mui/material/Popover/Popover.js');
require('../../../node_modules/@mui/material/Popover/popoverClasses.js');
require('../../../node_modules/@mui/material/Popper/Popper.js');
require('../../../node_modules/@mui/base/Portal/Portal.js');
require('../../../node_modules/@mui/material/Radio/Radio.js');
require('../../../node_modules/@mui/material/Radio/radioClasses.js');
require('../../../node_modules/@mui/material/RadioGroup/RadioGroup.js');
require('../../../node_modules/@mui/material/RadioGroup/RadioGroupContext.js');
require('../../../node_modules/@mui/material/Rating/Rating.js');
require('../../../node_modules/@mui/material/Rating/ratingClasses.js');
require('../../../node_modules/@mui/material/ScopedCssBaseline/ScopedCssBaseline.js');
require('../../../node_modules/@mui/material/ScopedCssBaseline/scopedCssBaselineClasses.js');
require('../../../node_modules/@mui/material/Select/Select.js');
require('../../../node_modules/@mui/material/Select/selectClasses.js');
require('../../../node_modules/@mui/material/Skeleton/Skeleton.js');
require('../../../node_modules/@mui/material/Skeleton/skeletonClasses.js');
require('../../../node_modules/@mui/material/Slide/Slide.js');
require('../../../node_modules/@mui/material/Slider/Slider.js');
require('../../../node_modules/@mui/material/Slider/sliderClasses.js');
require('../../../node_modules/@mui/material/Snackbar/Snackbar.js');
require('../../../node_modules/@mui/material/Snackbar/snackbarClasses.js');
require('../../../node_modules/@mui/material/SnackbarContent/SnackbarContent.js');
require('../../../node_modules/@mui/material/SnackbarContent/snackbarContentClasses.js');
require('../../../node_modules/@mui/material/SpeedDial/SpeedDial.js');
require('../../../node_modules/@mui/material/SpeedDial/speedDialClasses.js');
require('../../../node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js');
require('../../../node_modules/@mui/material/SpeedDialAction/speedDialActionClasses.js');
require('../../../node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js');
require('../../../node_modules/@mui/material/SpeedDialIcon/speedDialIconClasses.js');
require('../../../node_modules/@mui/material/Stack/Stack.js');
require('../../../node_modules/@mui/material/Step/Step.js');
require('../../../node_modules/@mui/material/Step/stepClasses.js');
require('../../../node_modules/@mui/material/Step/StepContext.js');
require('../../../node_modules/@mui/material/StepButton/StepButton.js');
require('../../../node_modules/@mui/material/StepButton/stepButtonClasses.js');
require('../../../node_modules/@mui/material/StepConnector/StepConnector.js');
require('../../../node_modules/@mui/material/StepConnector/stepConnectorClasses.js');
require('../../../node_modules/@mui/material/StepContent/StepContent.js');
require('../../../node_modules/@mui/material/StepContent/stepContentClasses.js');
require('../../../node_modules/@mui/material/StepIcon/StepIcon.js');
require('../../../node_modules/@mui/material/StepIcon/stepIconClasses.js');
require('../../../node_modules/@mui/material/StepLabel/StepLabel.js');
require('../../../node_modules/@mui/material/StepLabel/stepLabelClasses.js');
require('../../../node_modules/@mui/material/Stepper/Stepper.js');
require('../../../node_modules/@mui/material/Stepper/stepperClasses.js');
require('../../../node_modules/@mui/material/Stepper/StepperContext.js');
require('../../../node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js');
require('../../../node_modules/@mui/material/Switch/Switch.js');
require('../../../node_modules/@mui/material/Switch/switchClasses.js');
require('../../../node_modules/@mui/material/Tab/Tab.js');
require('../../../node_modules/@mui/material/Tab/tabClasses.js');
require('../../../node_modules/@mui/material/Table/Table.js');
require('../../../node_modules/@mui/material/Table/tableClasses.js');
require('../../../node_modules/@mui/material/TableBody/TableBody.js');
require('../../../node_modules/@mui/material/TableBody/tableBodyClasses.js');
require('../../../node_modules/@mui/material/TableCell/TableCell.js');
require('../../../node_modules/@mui/material/TableCell/tableCellClasses.js');
require('../../../node_modules/@mui/material/TableContainer/TableContainer.js');
require('../../../node_modules/@mui/material/TableContainer/tableContainerClasses.js');
require('../../../node_modules/@mui/material/TableFooter/TableFooter.js');
require('../../../node_modules/@mui/material/TableFooter/tableFooterClasses.js');
require('../../../node_modules/@mui/material/TableHead/TableHead.js');
require('../../../node_modules/@mui/material/TableHead/tableHeadClasses.js');
require('../../../node_modules/@mui/material/TablePagination/TablePagination.js');
require('../../../node_modules/@mui/material/TablePagination/tablePaginationClasses.js');
require('../../../node_modules/@mui/material/TableRow/TableRow.js');
require('../../../node_modules/@mui/material/TableRow/tableRowClasses.js');
require('../../../node_modules/@mui/material/TableSortLabel/TableSortLabel.js');
require('../../../node_modules/@mui/material/TableSortLabel/tableSortLabelClasses.js');
require('../../../node_modules/@mui/material/Tabs/Tabs.js');
require('../../../node_modules/@mui/material/Tabs/tabsClasses.js');
require('../../../node_modules/@mui/material/TabScrollButton/TabScrollButton.js');
require('../../../node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js');
require('../../../node_modules/@mui/material/TextField/TextField.js');
require('../../../node_modules/@mui/material/TextField/textFieldClasses.js');
require('../../../node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js');
require('../../../node_modules/@mui/material/ToggleButton/ToggleButton.js');
require('../../../node_modules/@mui/material/ToggleButton/toggleButtonClasses.js');
require('../../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js');
require('../../../node_modules/@mui/material/ToggleButtonGroup/toggleButtonGroupClasses.js');
require('../../../node_modules/@mui/material/Toolbar/Toolbar.js');
require('../../../node_modules/@mui/material/Toolbar/toolbarClasses.js');
require('../../../node_modules/@mui/material/Tooltip/Tooltip.js');
require('../../../node_modules/@mui/material/Tooltip/tooltipClasses.js');
var Typography = require('../../../node_modules/@mui/material/Typography/Typography.js');
require('../../../node_modules/@mui/material/Typography/typographyClasses.js');
require('../../../node_modules/@mui/material/Zoom/Zoom.js');
require('../../../node_modules/@mui/material/GlobalStyles/GlobalStyles.js');
require('../../../node_modules/@mui/base/FocusTrap/FocusTrap.js');
var formik_esm = require('../../../node_modules/formik/dist/formik.esm.js');
require('../../../node_modules/yup/es/mixed.js');
var boolean = require('../../../node_modules/yup/es/boolean.js');
var string = require('../../../node_modules/yup/es/string.js');
require('../../../node_modules/yup/es/locale.js');
require('../../../node_modules/yup/es/schema.js');
require('../../../node_modules/yup/es/date.js');
var object = require('../../../node_modules/yup/es/object.js');
require('../../../node_modules/yup/es/Reference.js');
require('property-expr');
var moment = require('moment');
var index = require('../../constants/index.js');
var index$1 = require('../../assets/index.js');
var Button = require('../../components/Button.js');
require('@mui/icons-material/ArrowBack');
require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
require('../../providers/BillingProvider.js');
require('../../providers/ContainerStateProvider.js');
require('../../providers/UIConfigurationProvider.js');
require('../../providers/CheckoutProvider.js');
require('../../providers/PaymentProvider.js');
require('../../providers/EventProvider.js');
require('../../providers/SecurityOptionsProvider.js');
require('../../components/Stepper.js');
require('@mui/icons-material/ContentCopy');
require('../../components/shared/ErrorBoundary.js');
var InfoCards = require('./InfoCards.js');
var PaymentMethodView = require('./PaymentMethodView.js');
var WireTransferForm = require('./WireTransferForm.js');
var CreditCardForm = require('./CreditCardForm.js');
var DebugBox = require('../../components/shared/DebugBox.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

const validationSchema = object.create().shape({
    country: string.create().required('Please select country'),
    bankCountry: string.create().when('country', {
        is: WireTransferForm.Countries.INTERNATIONAL,
        then: string.create().required('Please select bank country'),
        otherwise: string.create(),
    }),
    accountNumber: string.create().when('country', {
        is: WireTransferForm.Countries.US,
        then: string.create().matches(/^[\d\s]+$/, 'Invalid account number')
            .min(8, 'Invalid account number')
            .required('Please enter account number'),
        otherwise: string.create(),
    }),
    aba: string.create().when('country', {
        is: WireTransferForm.Countries.US,
        then: string.create().matches(/^[\d\s]+$/, 'Invalid aba')
            .min(9, 'Invalid aba')
            .required('Please enter aba'),
        otherwise: string.create(),
    }),
    iban: string.create().when('country', {
        is: WireTransferForm.Countries.INTERNATIONAL,
        then: string.create().matches(/^([0-9]{2})(?=(?:[ -]?[A-Z0-9]){9,30}$)((?:[ -]?[A-Z0-9]{3,5}){2,7})([ -]?[A-Z0-9]{1,3})?$/, 'Invalid International Bank Account Number')
            .min(20, 'Invalid International Bank Account Number')
            .required('Please enter International Bank Account Number'),
        otherwise: string.create(),
    }),
    bankName: string.create().min(2, 'Invalid Bank name').required('Please enter bank name'),
    city: string.create().min(2, 'Invalid city').required('Please enter city'),
});
const creditCardSchema = object.create().shape({
    isNew: boolean.create(),
    expiry: string.create()
        .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Invalid expiry')
        .required('Please enter expiry')
        .test('is-expiry', 'Invalid expiry', value => moment__default["default"](value, 'MM/YY').isValid() && moment__default["default"]().isBefore(moment__default["default"](value, 'MM/YY'))),
    cvv: string.create()
        .matches(/^[\d\s]+$/, 'Invalid account number')
        .min(3, 'Invalid CVV')
        .required('Please enter CVV'),
    cardNumber: string.create().when('isNew', {
        is: true,
        then: string.create()
            .required('Please enter card number')
            .min(12, 'Please enter valid card number'),
        otherwise: string.create(),
    }),
    cardId: string.create().when('isNew', {
        is: (isNew) => !isNew,
        then: string.create().required('Please select a card'),
        otherwise: string.create().nullable(),
    }),
});
const PaymentContainer = ({ paymentType, onChoosePaymentType, creditCardList, config, billingInfo, paymentMethodLimit, screeningError, paymentInfo, onSubmitCreditCard, onSubmitWireTransfer, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16;
    const theme = useTheme["default"]();
    const { values: wireTransferFormValues, handleChange: onChangeWireTransferField, setFieldValue: onSetWireTransferField, errors: wireTransferFormErrors, isValid: isValidWireTransfer, handleSubmit: handleWireTransferSubmit, dirty: wireHasDirty, } = formik_esm.useFormik({
        initialValues: {
            accountNumber: (_b = (_a = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _a === void 0 ? void 0 : _a.accountNumber) !== null && _b !== void 0 ? _b : '',
            aba: (_d = (_c = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _c === void 0 ? void 0 : _c.routingNumber) !== null && _d !== void 0 ? _d : '',
            bankCountry: (_g = (_f = (_e = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _e === void 0 ? void 0 : _e.bankAddress) === null || _f === void 0 ? void 0 : _f.country) !== null && _g !== void 0 ? _g : '',
            bankName: (_k = (_j = (_h = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _h === void 0 ? void 0 : _h.bankAddress) === null || _j === void 0 ? void 0 : _j.bankName) !== null && _k !== void 0 ? _k : '',
            iban: (_m = (_l = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _l === void 0 ? void 0 : _l.iban) !== null && _m !== void 0 ? _m : '',
            city: (_q = (_p = (_o = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _o === void 0 ? void 0 : _o.bankAddress) === null || _p === void 0 ? void 0 : _p.city) !== null && _q !== void 0 ? _q : '',
            country: (_s = (_r = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _r === void 0 ? void 0 : _r.country) !== null && _s !== void 0 ? _s : '',
        },
        validationSchema,
        onSubmit: onSubmitWireTransfer,
    });
    const { values: creditCardFormValues, handleChange: onChangeCreditCardField, setFieldValue: onSetCreditCardField, errors: creditCardFormErrors, isValid: isValidCreditCardValues, handleSubmit: handleCreditCardSubmit, dirty: creditHasDirty, } = formik_esm.useFormik({
        initialValues: {
            isNew: (_v = (_u = (_t = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _t === void 0 ? void 0 : _t.isNew) !== null && _u !== void 0 ? _u : creditCardList.length === 0) !== null && _v !== void 0 ? _v : false,
            cardData: (_x = (_w = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _w === void 0 ? void 0 : _w.cardData) !== null && _x !== void 0 ? _x : undefined,
            cardId: (_1 = (_z = (_y = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _y === void 0 ? void 0 : _y.cardId) !== null && _z !== void 0 ? _z : (_0 = creditCardList[0]) === null || _0 === void 0 ? void 0 : _0.id) !== null && _1 !== void 0 ? _1 : '',
            cardNumber: (_3 = (_2 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _2 === void 0 ? void 0 : _2.cardNumber) !== null && _3 !== void 0 ? _3 : '',
            cvv: (_5 = (_4 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _4 === void 0 ? void 0 : _4.cvv) !== null && _5 !== void 0 ? _5 : '',
            expiry: (_7 = (_6 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _6 === void 0 ? void 0 : _6.expiry) !== null && _7 !== void 0 ? _7 : '',
            save: (_9 = (_8 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _8 === void 0 ? void 0 : _8.save) !== null && _9 !== void 0 ? _9 : false,
        },
        validationSchema: creditCardSchema,
        onSubmit: onSubmitCreditCard,
        enableReinitialize: true,
    });
    const onClickDelivery = React.useCallback(() => {
        if (paymentType === index.PaymentTypes.CREDIT_CARD) {
            handleCreditCardSubmit();
        }
        if (paymentType === index.PaymentTypes.WIRE_TRANSFER) {
            handleWireTransferSubmit();
        }
    }, [paymentType, handleCreditCardSubmit, handleWireTransferSubmit]);
    const buttonDisabled = React.useMemo(() => {
        if (paymentType === index.PaymentTypes.CREDIT_CARD) {
            return !creditHasDirty || !isValidCreditCardValues;
        }
        if (paymentType === index.PaymentTypes.WIRE_TRANSFER) {
            return !wireHasDirty || !isValidWireTransfer;
        }
        return true;
    }, [isValidCreditCardValues, isValidWireTransfer, paymentType, wireHasDirty, creditHasDirty]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(InfoCards.PaymentInfoCards, { billingInfo: billingInfo }),
        React__default["default"].createElement(Card["default"], { sx: {
                border: `1px solid ${(_10 = theme.global) === null || _10 === void 0 ? void 0 : _10.cardBorder}`,
                backgroundColor: (_11 = theme.global) === null || _11 === void 0 ? void 0 : _11.cardBackground,
                boxShadow: `0px 4px 16px ${(_12 = theme.global) === null || _12 === void 0 ? void 0 : _12.cardShadow}`,
                padding: '24px',
            } },
            React__default["default"].createElement(Typography["default"], { sx: { fontSize: '20px', fontWeight: 500 } }, "Payment Method"),
            (config === null || config === void 0 ? void 0 : config.creditCard) && (paymentMethodLimit === null || paymentMethodLimit === void 0 ? void 0 : paymentMethodLimit.exceedCreditCard) && (React__default["default"].createElement(PaymentMethodView.PaymentMethodView, { logo: index$1.Icons.creditCards, isSelected: paymentType, name: "Credit Card", type: index.PaymentTypes.CREDIT_CARD, bodyContent: (React__default["default"].createElement(CreditCardForm.CreditCardForm, { creditCardList: creditCardList, values: creditCardFormValues, handleChange: onChangeCreditCardField, setFieldValue: onSetCreditCardField, errors: creditCardFormErrors, screeningError: screeningError })), onChoosePaymentType: onChoosePaymentType })),
            (config === null || config === void 0 ? void 0 : config.walletConnect) && (React__default["default"].createElement(PaymentMethodView.PaymentMethodView, { logo: index$1.Icons.walletConnect, isSelected: paymentType, name: "Walletconnect", type: index.PaymentTypes.WALLET_CONNECT, bodyContent: React__default["default"].createElement(React__default["default"].Fragment, null, "Test"), onChoosePaymentType: onChoosePaymentType })),
            (config === null || config === void 0 ? void 0 : config.applepay) && (React__default["default"].createElement(PaymentMethodView.PaymentMethodView, { logo: index$1.Icons.applepayDark, isSelected: paymentType, name: "Apple Pay", type: index.PaymentTypes.APPLE_PAY, bodyContent: React__default["default"].createElement(React__default["default"].Fragment, null, "Test"), onChoosePaymentType: onChoosePaymentType })),
            (config === null || config === void 0 ? void 0 : config.gpay) && (React__default["default"].createElement(PaymentMethodView.PaymentMethodView, { logo: index$1.Icons.gpayDark, isSelected: paymentType, name: "Google Pay", type: index.PaymentTypes.GOOGLE_PAY, bodyContent: React__default["default"].createElement(React__default["default"].Fragment, null, "Test"), onChoosePaymentType: onChoosePaymentType })),
            (config === null || config === void 0 ? void 0 : config.wire) && (paymentMethodLimit === null || paymentMethodLimit === void 0 ? void 0 : paymentMethodLimit.exceedWire) && (React__default["default"].createElement(PaymentMethodView.PaymentMethodView, { logo: index$1.Icons.wireTransfer, isSelected: paymentType, name: "Wire Transfer", type: index.PaymentTypes.WIRE_TRANSFER, bodyContent: (React__default["default"].createElement(WireTransferForm.WireTransferForm, { values: wireTransferFormValues, handleChange: onChangeWireTransferField, setFieldValue: onSetWireTransferField, errors: wireTransferFormErrors })), onChoosePaymentType: onChoosePaymentType })),
            React__default["default"].createElement(Box["default"], { display: "flex", marginTop: 2, alignItems: "center" },
                React__default["default"].createElement("img", { src: index$1.Icons.lock, height: 28, width: 28, alt: "lock-icon" }),
                React__default["default"].createElement(Typography["default"], { variant: "body2", sx: { marginLeft: 1 } }, "We protect your payment information using encryption to provide bank-level security"))),
        React__default["default"].createElement(Box["default"], { display: "flex", justifyContent: "flex-end" },
            React__default["default"].createElement(Button["default"], { title: "Continue to Delivery", backgroundColor: (_14 = (_13 = theme.global) === null || _13 === void 0 ? void 0 : _13.checkout) === null || _14 === void 0 ? void 0 : _14.continueButtonBackground, textColor: (_16 = (_15 = theme.global) === null || _15 === void 0 ? void 0 : _15.checkout) === null || _16 === void 0 ? void 0 : _16.continueButtonTextColor, onClick: onClickDelivery, disabled: buttonDisabled, sx: {
                    margin: '24px 0',
                    '&: hover': {
                        backgroundColor: 'rgba(102, 99, 253, 0.8)',
                    },
                } })),
        React__default["default"].createElement(DebugBox.DebugBox, { value: { creditCardFormValues, wireTransferFormValues, creditCardList } })));
};

exports["default"] = PaymentContainer;
//# sourceMappingURL=PaymentContainer.js.map
