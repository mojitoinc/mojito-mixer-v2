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
var InfoIcon = require('@mui/icons-material/InfoOutlined');
var Button = require('../../components/Button.js');
require('@mui/icons-material/ArrowBack');
require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
require('../../providers/BillingProvider.js');
require('../../providers/ContainerStateProvider.js');
var UIConfigurationProvider = require('../../providers/UIConfigurationProvider.js');
require('../../providers/CheckoutProvider.js');
require('../../providers/PaymentProvider.js');
require('../../providers/EventProvider.js');
require('../../providers/SecurityOptionsProvider.js');
require('../../providers/UserInfoProvider.js');
require('../../components/Stepper.js');
require('@mui/icons-material/ContentCopy');
require('../../components/shared/ErrorBoundary.js');
var index = require('../../constants/index.js');
var usePaymentInfo = require('../../hooks/usePaymentInfo.js');
require('openpgp');
require('atob');
require('btoa');
require('../../../node_modules/@apollo/client/core/index.js');
require('../../../node_modules/@apollo/client/utilities/globals/index.js');
require('../../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../../node_modules/@apollo/client/utilities/common/canUse.js');
require('../../../node_modules/@apollo/client/react/hooks/useQuery.js');
require('../../../node_modules/@apollo/client/react/parser/index.js');
require('../../../node_modules/@apollo/client/errors/index.js');
require('../../queries/creditCard.js');
require('uuidv4');
require('../../config/paymentConfiguration.js');
require('../../queries/invoiceDetails.js');
require('../../queries/Payment.js');
var RowItem = require('./RowItem.js');
var PaymentDetailsView = require('./PaymentDetailsView.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var InfoIcon__default = /*#__PURE__*/_interopDefaultLegacy(InfoIcon);

const ConfirmationView = ({ paymentStatus }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    const theme = useTheme["default"]();
    const { paymentInfo, billingInfo, txHash } = usePaymentInfo["default"]();
    const { paymentConfirmation: paymentConfiguration } = UIConfigurationProvider.useUIConfiguration();
    const backgroundColor = React.useMemo(() => {
        var _a, _b, _c, _d, _e, _f;
        return paymentStatus === index.PaymentStatus.PENDING
            ? (_b = (_a = theme.global) === null || _a === void 0 ? void 0 : _a.paymentConfirmation) === null || _b === void 0 ? void 0 : _b.awaitingPaymentBackground
            : (paymentStatus === index.PaymentStatus.COMPLETED || paymentStatus === index.PaymentStatus.PAID)
                ? (_d = (_c = theme.global) === null || _c === void 0 ? void 0 : _c.paymentConfirmation) === null || _d === void 0 ? void 0 : _d.processedBackground
                : (_f = (_e = theme.global) === null || _e === void 0 ? void 0 : _e.paymentConfirmation) === null || _f === void 0 ? void 0 : _f.awaitingPaymentBackground;
    }, [paymentStatus, theme]);
    const textColor = React.useMemo(() => {
        var _a, _b, _c, _d, _e, _f;
        return (paymentStatus === index.PaymentStatus.PENDING
            ? (_b = (_a = theme.global) === null || _a === void 0 ? void 0 : _a.paymentConfirmation) === null || _b === void 0 ? void 0 : _b.awaitingPaymentTextColor
            : (paymentStatus === index.PaymentStatus.COMPLETED || paymentStatus === index.PaymentStatus.PAID)
                ? (_d = (_c = theme.global) === null || _c === void 0 ? void 0 : _c.paymentConfirmation) === null || _d === void 0 ? void 0 : _d.processedTextColor
                : (_f = (_e = theme.global) === null || _e === void 0 ? void 0 : _e.paymentConfirmation) === null || _f === void 0 ? void 0 : _f.awaitingPaymentTextColor);
    }, [paymentStatus, theme]);
    const status = React.useMemo(() => {
        return paymentStatus === index.PaymentStatus.PENDING
            ? 'Awaiting Payment'
            : (paymentStatus === index.PaymentStatus.COMPLETED || paymentStatus === index.PaymentStatus.PAID)
                ? 'Processed'
                : 'Inprogress';
    }, [paymentStatus]);
    return (React__default["default"].createElement(Box["default"], { sx: { margin: '24px 0px' } },
        React__default["default"].createElement(Card["default"], { sx: {
                padding: '24px',
                borderRadius: '4px',
            } },
            React__default["default"].createElement(Typography["default"], { fontWeight: "500", fontSize: "20px", marginBottom: "8px" }, "You're all set! We've received your order."),
            React__default["default"].createElement(Typography["default"], { fontSize: "16px", variant: "body1", color: (_a = theme.global) === null || _a === void 0 ? void 0 : _a.unHighlightedText },
                "Order #: ", paymentInfo === null || paymentInfo === void 0 ? void 0 :
                paymentInfo.paymentId),
            (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.WIRE_TRANSFER &&
                (paymentConfiguration === null || paymentConfiguration === void 0 ? void 0 : paymentConfiguration.wireTransferInstructions),
            (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.CREDIT_CARD &&
                (paymentConfiguration === null || paymentConfiguration === void 0 ? void 0 : paymentConfiguration.creditCardInstructions),
            (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.WIRE_TRANSFER &&
                React__default["default"].createElement(PaymentDetailsView["default"], null)),
        React__default["default"].createElement(Card["default"], { sx: {
                padding: '24px 24px 0',
                borderRadius: '4px',
                margin: '24px 0px ',
            } },
            React__default["default"].createElement(Box["default"], { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
                React__default["default"].createElement(Typography["default"], { fontWeight: "500", fontSize: "20px" }, "Order Details"),
                React__default["default"].createElement(Box["default"], { sx: {
                        backgroundColor,
                        padding: '5px 8px',
                        borderRadius: '4px',
                    } },
                    React__default["default"].createElement(Typography["default"], { fontWeight: "700", fontSize: "12px", color: textColor }, status))),
            (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.destinationAddress) === ''
                ? (React__default["default"].createElement(RowItem["default"], { title: "Delivery Address" },
                    React__default["default"].createElement(Box["default"], { display: "flex", flexDirection: "row", alignItems: "center", padding: "4px 12px", borderRadius: "4px", sx: {
                            background: (_b = theme.global) === null || _b === void 0 ? void 0 : _b.multiSigBackground,
                            border: `1px solid ${(_c = theme.global) === null || _c === void 0 ? void 0 : _c.multiSigBorder}`,
                        } },
                        React__default["default"].createElement(Typography["default"], { color: (_d = theme.global) === null || _d === void 0 ? void 0 : _d.multiSigText, fontWeight: "700" }, "MultiSig"),
                        React__default["default"].createElement(InfoIcon__default["default"], { sx: {
                                color: (_e = theme.global) === null || _e === void 0 ? void 0 : _e.multiSigText,
                                marginLeft: '8px',
                            }, fontSize: "small" }))))
                : (React__default["default"].createElement(RowItem["default"], { title: "Delivery Address", value: paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.destinationAddress, copyValue: paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.destinationAddress, showCopy: true, isWire: (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.WIRE_TRANSFER })),
            (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.WIRE_TRANSFER && (React__default["default"].createElement(Typography["default"], { variant: "body2", sx: {
                    color: (_f = theme === null || theme === void 0 ? void 0 : theme.global) === null || _f === void 0 ? void 0 : _f.cardGrayedText,
                    padding: '0 16px 16px',
                    backgroundColor: (_g = theme === null || theme === void 0 ? void 0 : theme.global) === null || _g === void 0 ? void 0 : _g.background,
                    border: `1px solid ${(_h = theme.global) === null || _h === void 0 ? void 0 : _h.cardBorder}`,
                    borderTop: 0,
                    borderRadius: '0 0 4px 4px',
                } }, "If you selected to have your NFT(s) transferred directly to your non-custodial wallet (such as MetaMask), we will do so as soon as payment confirmation is received; otherwise, your NFT(s) will be transferred to a MultiSig wallet (also known as a custodial wallet) for safekeeping. You can view your NFT(s) on your Account page at any time.")),
            (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.COIN_BASE && (React__default["default"].createElement(RowItem["default"], { title: "Payment Method", copyValue: paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentId, showCopy: true },
                React__default["default"].createElement(Typography["default"], { fontSize: "16px" },
                    "Coinbase",
                    React__default["default"].createElement("br", null), paymentInfo === null || paymentInfo === void 0 ? void 0 :
                    paymentInfo.paymentId))),
            (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.WALLET_CONNECT && (React__default["default"].createElement(RowItem["default"], { title: "Transaction Hash", copyValue: txHash !== null && txHash !== void 0 ? txHash : '', showCopy: true },
                React__default["default"].createElement(Typography["default"], { fontSize: "16px" }, txHash))),
            (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.WALLET_CONNECT && (React__default["default"].createElement(RowItem["default"], { title: "Payment Method", copyValue: paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentId, showCopy: true },
                React__default["default"].createElement(Typography["default"], { fontSize: "16px" },
                    "On Chain Payment",
                    React__default["default"].createElement("br", null), paymentInfo === null || paymentInfo === void 0 ? void 0 :
                    paymentInfo.paymentId))),
            (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.WIRE_TRANSFER && (React__default["default"].createElement(RowItem["default"], { title: "Payment Method" },
                React__default["default"].createElement(Typography["default"], { variant: "body1", fontSize: "16px" }, paymentInfo === null || paymentInfo === void 0 ? void 0 :
                    paymentInfo.paymentType,
                    React__default["default"].createElement("br", null),
                    ((_j = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _j === void 0 ? void 0 : _j.iban)
                        ? (React__default["default"].createElement(React__default["default"].Fragment, null, (_k = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _k === void 0 ? void 0 : _k.iban))
                        : (React__default["default"].createElement(React__default["default"].Fragment, null, (_l = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _l === void 0 ? void 0 :
                            _l.accountNumber,
                            React__default["default"].createElement("br", null), (_m = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _m === void 0 ? void 0 :
                            _m.routingNumber)),
                    React__default["default"].createElement("br", null), (_p = (_o = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _o === void 0 ? void 0 : _o.bankAddress) === null || _p === void 0 ? void 0 :
                    _p.country,
                    React__default["default"].createElement("br", null), (_r = (_q = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _q === void 0 ? void 0 : _q.bankAddress) === null || _r === void 0 ? void 0 :
                    _r.bankName))),
            React__default["default"].createElement(Box["default"], { sx: { marginBottom: '24px' } },
                React__default["default"].createElement(RowItem["default"], { title: "Billing Information" },
                    React__default["default"].createElement(Typography["default"], { fontSize: "16px" }, billingInfo === null || billingInfo === void 0 ? void 0 :
                        billingInfo.name,
                        React__default["default"].createElement("br", null), billingInfo === null || billingInfo === void 0 ? void 0 :
                        billingInfo.state,
                        ", ", billingInfo === null || billingInfo === void 0 ? void 0 :
                        billingInfo.postalCode,
                        ' ', billingInfo === null || billingInfo === void 0 ? void 0 :
                        billingInfo.country,
                        React__default["default"].createElement("br", null), billingInfo === null || billingInfo === void 0 ? void 0 :
                        billingInfo.street1,
                        React__default["default"].createElement("br", null), billingInfo === null || billingInfo === void 0 ? void 0 :
                        billingInfo.phoneNumber)))),
        React__default["default"].createElement(Box["default"], { display: "flex", flexDirection: "row", justifyContent: "flex-end" },
            React__default["default"].createElement(Button["default"], { title: "Back To Marketplace", sx: {
                    background: (_s = theme.palette.primary) === null || _s === void 0 ? void 0 : _s.main,
                }, onClick: paymentConfiguration === null || paymentConfiguration === void 0 ? void 0 : paymentConfiguration.onGoTo }))));
};

exports["default"] = ConfirmationView;
//# sourceMappingURL=ConfirmationView.js.map
