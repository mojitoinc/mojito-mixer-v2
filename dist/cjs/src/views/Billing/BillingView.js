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
require('../../../node_modules/yup/es/boolean.js');
var string = require('../../../node_modules/yup/es/string.js');
require('../../../node_modules/yup/es/locale.js');
require('../../../node_modules/yup/es/schema.js');
require('../../../node_modules/yup/es/date.js');
var object = require('../../../node_modules/yup/es/object.js');
require('../../../node_modules/yup/es/Reference.js');
require('property-expr');
require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
require('../../providers/BillingProvider.js');
require('../../providers/ContainerStateProvider.js');
var UIConfigurationProvider = require('../../providers/UIConfigurationProvider.js');
require('../../providers/CheckoutProvider.js');
require('../../providers/PaymentProvider.js');
require('../../providers/EventProvider.js');
require('../../providers/SecurityOptionsProvider.js');
var Button = require('../../components/Button.js');
require('@mui/icons-material/ArrowBack');
require('../../components/Stepper.js');
var TextInput = require('../../components/TextInput.js');
require('@mui/icons-material/ContentCopy');
require('../../components/shared/ErrorBoundary.js');
var BillingForm = require('./BillingForm.js');
var ExpressCheckout = require('./ExpressCheckout.js');
var BillingDetails = require('./BillingDetails.js');
var DebugBox = require('../../components/shared/DebugBox.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const schema = object.create().shape({
    country: string.create().required('Please select a country'),
    state: string.create().required('Please select a state'),
    city: string.create().required('Please select a city'),
    postalCode: string.create().min(5, 'Invalid zipcode').required('Please enter zipcode'),
    email: string.create()
        .email('Please enter valid email')
        .required('Please enter email'),
    phoneNumber: string.create().required('Please enter a mobile number'),
    street1: string.create().required('Please enter your address'),
    firstName: string.create().min(2, 'Invalid first name').required('Please enter first name'),
    lastName: string.create().min(2, 'Invalid last name').required('Please enter last name'),
});
const BillingView = ({ isEditing, onClickEdit, onClickContinue, pincodeError, billingInfo, paymentItem, onChangeValues, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
    const { values, errors, handleChange: onChange, isValid, handleSubmit } = formik_esm.useFormik({
        initialValues: {
            email: (_a = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.email) !== null && _a !== void 0 ? _a : (_b = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.metadata) === null || _b === void 0 ? void 0 : _b.email,
            country: (_c = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.country) !== null && _c !== void 0 ? _c : (_d = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _d === void 0 ? void 0 : _d.country,
            state: (_e = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.state) !== null && _e !== void 0 ? _e : (_f = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _f === void 0 ? void 0 : _f.district,
            city: (_g = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.city) !== null && _g !== void 0 ? _g : (_h = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _h === void 0 ? void 0 : _h.city,
            postalCode: (_j = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.postalCode) !== null && _j !== void 0 ? _j : (_k = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _k === void 0 ? void 0 : _k.postalCode,
            phoneNumber: (_l = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.phoneNumber) !== null && _l !== void 0 ? _l : (_m = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.metadata) === null || _m === void 0 ? void 0 : _m.phoneNumber,
            street1: (_o = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.street1) !== null && _o !== void 0 ? _o : (_p = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _p === void 0 ? void 0 : _p.address1,
            name: (_q = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.name) !== null && _q !== void 0 ? _q : (_r = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _r === void 0 ? void 0 : _r.name,
            firstName: (_s = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.lastName) !== null && _s !== void 0 ? _s : (_v = (_u = (_t = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _t === void 0 ? void 0 : _t.name) === null || _u === void 0 ? void 0 : _u.split(' ')) === null || _v === void 0 ? void 0 : _v[0],
            lastName: (_w = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.lastName) !== null && _w !== void 0 ? _w : (_z = (_y = (_x = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _x === void 0 ? void 0 : _x.name) === null || _y === void 0 ? void 0 : _y.split(' ')) === null || _z === void 0 ? void 0 : _z[1],
        },
        onSubmit: onClickContinue,
        validationSchema: schema,
        enableReinitialize: true,
    });
    const isValidBillingForm = React.useMemo(() => {
        return !((errors === null || errors === void 0 ? void 0 : errors.country) ||
            (errors === null || errors === void 0 ? void 0 : errors.state) ||
            (errors === null || errors === void 0 ? void 0 : errors.city) ||
            (errors === null || errors === void 0 ? void 0 : errors.postalCode) ||
            (errors === null || errors === void 0 ? void 0 : errors.phoneNumber) ||
            (errors === null || errors === void 0 ? void 0 : errors.name));
    }, [errors]);
    React.useEffect(() => {
        onChangeValues(isValidBillingForm, values);
    }, [isValidBillingForm, values, onChangeValues]);
    const theme = useTheme["default"]();
    const uiConfiguration = UIConfigurationProvider.useUIConfiguration();
    return (React__default["default"].createElement(Box["default"], { width: "100%" },
        !((_0 = uiConfiguration === null || uiConfiguration === void 0 ? void 0 : uiConfiguration.billing) === null || _0 === void 0 ? void 0 : _0.isEnableExpressCheckout) && (React__default["default"].createElement(ExpressCheckout["default"], { config: uiConfiguration === null || uiConfiguration === void 0 ? void 0 : uiConfiguration.billing })),
        React__default["default"].createElement(Card["default"], { sx: {
                border: `1px solid ${(_1 = theme.global) === null || _1 === void 0 ? void 0 : _1.cardBorder}`,
                backgroundColor: (_2 = theme.global) === null || _2 === void 0 ? void 0 : _2.cardBackground,
                boxShadow: `0px 4px 16px ${(_3 = theme.global) === null || _3 === void 0 ? void 0 : _3.cardShadow}`,
                marginBottom: '24px',
                padding: '24px',
            } },
            React__default["default"].createElement(Typography["default"], { color: (_5 = (_4 = theme.palette) === null || _4 === void 0 ? void 0 : _4.text) === null || _5 === void 0 ? void 0 : _5.primary, fontWeight: "500", fontSize: "20px" }, "Contact info"),
            React__default["default"].createElement(TextInput["default"], { value: values === null || values === void 0 ? void 0 : values.email, onChange: onChange('email'), error: errors === null || errors === void 0 ? void 0 : errors.email, placeholder: "Email", sx: {
                    marginTop: '16px',
                } })),
        isEditing ? (React__default["default"].createElement(BillingForm["default"], { values: values, errors: errors, onChange: onChange, isValid: isValidBillingForm })) : (React__default["default"].createElement(BillingDetails["default"], { values: values, onClickEdit: onClickEdit })),
        React__default["default"].createElement(Box["default"], { display: "flex", justifyContent: "flex-end" },
            React__default["default"].createElement(Button["default"], { title: "Continue to Payment", backgroundColor: (_7 = (_6 = theme.global) === null || _6 === void 0 ? void 0 : _6.checkout) === null || _7 === void 0 ? void 0 : _7.continueButtonBackground, textColor: (_9 = (_8 = theme.global) === null || _8 === void 0 ? void 0 : _8.checkout) === null || _9 === void 0 ? void 0 : _9.continueButtonTextColor, onClick: handleSubmit, sx: {
                    margin: '24px 0px',
                    '&: hover': {
                        backgroundColor: 'rgba(102, 99, 253, 0.8)',
                    },
                }, disabled: !isValid || pincodeError || !isValidBillingForm })),
        React__default["default"].createElement(DebugBox.DebugBox, { value: values })));
};

exports["default"] = BillingView;
//# sourceMappingURL=BillingView.js.map
