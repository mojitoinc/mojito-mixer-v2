'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
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
require('../../../node_modules/@mui/material/Card/Card.js');
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
var FormControl = require('../../../node_modules/@mui/material/FormControl/FormControl.js');
require('../../../node_modules/@mui/material/FormControl/FormControlContext.js');
require('../../../node_modules/@mui/material/FormControl/formControlClasses.js');
var FormControlLabel = require('../../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js');
require('../../../node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js');
require('../../../node_modules/@mui/material/FormGroup/FormGroup.js');
require('../../../node_modules/@mui/material/FormGroup/formGroupClasses.js');
require('../../../node_modules/@mui/material/FormHelperText/FormHelperText.js');
require('../../../node_modules/@mui/material/FormHelperText/formHelperTextClasses.js');
var FormLabel = require('../../../node_modules/@mui/material/FormLabel/FormLabel.js');
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
var Radio = require('../../../node_modules/@mui/material/Radio/Radio.js');
require('../../../node_modules/@mui/material/Radio/radioClasses.js');
var RadioGroup = require('../../../node_modules/@mui/material/RadioGroup/RadioGroup.js');
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
var index = require('../../constants/index.js');
var index$1 = require('../../assets/index.js');
var Dropdown = require('../../components/Dropdown.js');
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
require('../../providers/UserInfoProvider.js');
require('../../components/Stepper.js');
var TextInput = require('../../components/TextInput.js');
require('@mui/icons-material/ContentCopy');
require('../../components/shared/ErrorBoundary.js');
require('../../service/CookieService.js');
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
var useDropdowns = require('../../hooks/useDropdowns.js');
require('uuidv4');
require('../../config/paymentConfiguration.js');
require('../../queries/invoiceDetails.js');
require('../../queries/Payment.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Countries = {
    US: 'US',
    INTERNATIONAL: 'International',
};
const WireTransferForm = ({ values, handleChange, setFieldValue, errors, }) => {
    var _a, _b;
    const countryOptions = useDropdowns.useCountryOptions();
    const theme = useTheme["default"]();
    const formatAccountNumber = React.useCallback((value) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _c;
        const accountNumberLength = (values === null || values === void 0 ? void 0 : values.accountNumber)
            ? (_c = values === null || values === void 0 ? void 0 : values.accountNumber) === null || _c === void 0 ? void 0 : _c.length
            : 0;
        if (accountNumberLength > value.length) {
            yield setFieldValue('accountNumber', value);
            return;
        }
        const isValid = value.match(/^[\d\s]+$/);
        if (isValid) {
            const accountNumber = value.split(' ').join('');
            yield setFieldValue('accountNumber', accountNumber.replace(/\d{4}(?=.)/g, '$& '));
        }
    }), [setFieldValue, values]);
    const formatRouterNumber = React.useCallback((value) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _d;
        const abaLength = (values === null || values === void 0 ? void 0 : values.aba) ? (_d = values === null || values === void 0 ? void 0 : values.aba) === null || _d === void 0 ? void 0 : _d.length : 0;
        if (abaLength > value.length) {
            yield setFieldValue('aba', value);
            return;
        }
        const aba = value.split(' ').join('');
        yield setFieldValue('aba', aba.replace(/^(.{4})(.*)$/, '$1 $2'));
    }), [setFieldValue, values]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(Typography["default"], { variant: "body2", sx: { marginTop: 2 } }, "Third-party wire transfers are not accepted."),
        React__default["default"].createElement(FormControl["default"], { sx: {
                marginTop: '16px',
            } },
            React__default["default"].createElement(FormLabel["default"], { id: "country", sx: {
                    color: 'text.primary',
                } }, "Country"),
            React__default["default"].createElement(RadioGroup["default"], { row: true, "aria-labelledby": "country", name: "country", value: values.country, onChange: handleChange('country') },
                React__default["default"].createElement(FormControlLabel["default"], { value: Countries.US, control: React__default["default"].createElement(Radio["default"], null), label: Countries.US }),
                React__default["default"].createElement(FormControlLabel["default"], { value: Countries.INTERNATIONAL, control: React__default["default"].createElement(Radio["default"], null), label: Countries.INTERNATIONAL }))),
        values.country && (React__default["default"].createElement(React__default["default"].Fragment, null,
            values.country === Countries.US
                ? (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement(TextInput["default"], { value: values.accountNumber, title: "Account Number", onChange: formatAccountNumber, sx: {
                            marginTop: '16px',
                        }, placeholder: "Enter account number", type: "text", error: errors.accountNumber }),
                    React__default["default"].createElement(TextInput["default"], { value: values.aba, title: "Routing Number (ABA)", onChange: formatRouterNumber, sx: {
                            marginTop: '16px',
                        }, inputProps: {
                            maxLength: 10,
                        }, placeholder: "Enter routing number", type: "text", error: errors.aba })))
                : (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement(TextInput["default"], { value: values.iban, title: "Internation Bank Account Number", onChange: handleChange('iban'), sx: {
                            marginTop: '16px',
                        }, placeholder: "Enter routing number", type: "text", error: errors.iban }),
                    React__default["default"].createElement(Dropdown["default"], { value: values.bankCountry, onChange: handleChange('bankCountry'), title: "Bank Country", sx: { marginRight: '8px', marginTop: 2 }, placeholder: "Select one", options: countryOptions, error: errors.bankCountry }))),
            React__default["default"].createElement(TextInput["default"], { value: values.bankName, onChange: handleChange('bankName'), title: "Bank Name", placeholder: "Enter Bank name", sx: { marginRight: '8px', marginTop: 2 }, error: errors.bankName }),
            React__default["default"].createElement(TextInput["default"], { value: values.city, onChange: handleChange('city'), title: "Bank City", placeholder: "Enter Bank city", sx: { marginRight: '8px', marginTop: 2 }, error: errors.city }))),
        React__default["default"].createElement(Typography["default"], { variant: "body2", sx: {
                color: (_a = theme.global) === null || _a === void 0 ? void 0 : _a.cardGrayedText,
                padding: '12px 16px',
                marginTop: 2,
                backgroundColor: (_b = theme.global) === null || _b === void 0 ? void 0 : _b.grayBackground,
                borderRadius: '4px',
            } }, "Please note that wire transfers usually take 1-3 business days to complete and your NFT will not be transferred until payment has been settled."),
        React__default["default"].createElement(Box["default"], { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", margin: "20px 0px" },
            React__default["default"].createElement(Typography["default"], null, "Payments powered by"),
            React__default["default"].createElement("a", { href: index.CIRCLE_URL, target: "_blank", rel: "noreferrer" },
                React__default["default"].createElement("img", { src: index$1.Icons.circle, alt: "visa", style: {
                        width: 100,
                        height: 20,
                        marginLeft: '8px',
                    } })))));
};

exports.Countries = Countries;
exports.WireTransferForm = WireTransferForm;
//# sourceMappingURL=WireTransferForm.js.map
