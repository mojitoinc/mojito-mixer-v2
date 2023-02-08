import React__default, { useCallback } from 'react';
import '../../../node_modules/@mui/utils/esm/elementAcceptingRef.js';
import '../../../node_modules/@mui/utils/esm/elementTypeAcceptingRef.js';
import 'react-is';
import '../../../node_modules/@mui/utils/esm/ponyfillGlobal.js';
import '../../../node_modules/@mui/utils/esm/refType.js';
import '../../../node_modules/@mui/utils/esm/integerPropType.js';
import '@emotion/styled';
import '@emotion/react';
import '../../../node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js';
import '../../../node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js';
import '../../../node_modules/@mui/system/esm/borders.js';
import 'prop-types';
import '../../../node_modules/@mui/system/esm/display.js';
import '../../../node_modules/@mui/system/esm/flexbox.js';
import '../../../node_modules/@mui/system/esm/cssGrid.js';
import '../../../node_modules/@mui/system/esm/palette.js';
import '../../../node_modules/@mui/system/esm/positions.js';
import '../../../node_modules/@mui/system/esm/shadows.js';
import '../../../node_modules/@mui/system/esm/sizing.js';
import '../../../node_modules/@mui/system/esm/spacing.js';
import '../../../node_modules/@mui/system/esm/responsivePropType.js';
import '../../../node_modules/@mui/system/esm/typography.js';
import '../../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js';
import '../../../node_modules/@mui/system/esm/getThemeValue.js';
import '../../../node_modules/@mui/system/esm/Box/Box.js';
import '../../../node_modules/@mui/system/esm/useTheme.js';
import 'react/jsx-runtime';
import '../../../node_modules/@mui/system/esm/createStyled.js';
import '../../../node_modules/@mui/system/esm/styled.js';
import '../../../node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js';
import '../../../node_modules/@mui/private-theming/useTheme/ThemeContext.js';
import '../../../node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js';
import '../../../node_modules/@mui/system/esm/Container/createContainer.js';
import '../../../node_modules/@mui/system/esm/Container/Container.js';
import '../../../node_modules/@mui/system/esm/Container/containerClasses.js';
import '../../../node_modules/@mui/system/esm/Unstable_Grid/Grid.js';
import '../../../node_modules/@mui/system/esm/Unstable_Grid/createGrid.js';
import '../../../node_modules/@mui/system/esm/Unstable_Grid/gridClasses.js';
import '../../../node_modules/@mui/system/esm/Stack/Stack.js';
import '../../../node_modules/@mui/system/esm/Stack/createStack.js';
import '../../../node_modules/@mui/system/esm/Stack/stackClasses.js';
import '../../../node_modules/@mui/material/styles/createPalette.js';
import '../../../node_modules/@mui/material/styles/shadows.js';
import useTheme from '../../../node_modules/@mui/material/styles/useTheme.js';
import '../../../node_modules/@mui/material/styles/defaultTheme.js';
import '../../../node_modules/@mui/material/styles/styled.js';
import '../../../node_modules/@mui/material/styles/CssVarsProvider.js';
import '../../../node_modules/@mui/material/styles/experimental_extendTheme.js';
import '../../../node_modules/@mui/material/SvgIcon/SvgIcon.js';
import '../../../node_modules/@mui/material/SvgIcon/svgIconClasses.js';
import '../../../node_modules/@mui/material/Accordion/Accordion.js';
import '../../../node_modules/@mui/material/Accordion/accordionClasses.js';
import '../../../node_modules/@mui/material/AccordionActions/AccordionActions.js';
import '../../../node_modules/@mui/material/AccordionActions/accordionActionsClasses.js';
import '../../../node_modules/@mui/material/AccordionDetails/AccordionDetails.js';
import '../../../node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js';
import '../../../node_modules/@mui/material/AccordionSummary/AccordionSummary.js';
import '../../../node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js';
import '../../../node_modules/@mui/material/Alert/Alert.js';
import '../../../node_modules/@mui/material/Alert/alertClasses.js';
import '../../../node_modules/@mui/material/AlertTitle/AlertTitle.js';
import '../../../node_modules/@mui/material/AlertTitle/alertTitleClasses.js';
import '../../../node_modules/@mui/material/AppBar/AppBar.js';
import '../../../node_modules/@mui/material/AppBar/appBarClasses.js';
import '../../../node_modules/@mui/material/Autocomplete/Autocomplete.js';
import '../../../node_modules/@mui/material/Autocomplete/autocompleteClasses.js';
import '../../../node_modules/@mui/material/Avatar/Avatar.js';
import '../../../node_modules/@mui/material/Avatar/avatarClasses.js';
import '../../../node_modules/@mui/material/AvatarGroup/AvatarGroup.js';
import '../../../node_modules/@mui/material/AvatarGroup/avatarGroupClasses.js';
import '../../../node_modules/@mui/material/Backdrop/Backdrop.js';
import '../../../node_modules/@mui/material/Backdrop/backdropClasses.js';
import '../../../node_modules/@mui/material/Badge/Badge.js';
import '../../../node_modules/@mui/material/Badge/badgeClasses.js';
import '../../../node_modules/@mui/material/BottomNavigation/BottomNavigation.js';
import '../../../node_modules/@mui/material/BottomNavigation/bottomNavigationClasses.js';
import '../../../node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js';
import '../../../node_modules/@mui/material/BottomNavigationAction/bottomNavigationActionClasses.js';
import Box from '../../../node_modules/@mui/material/Box/Box.js';
import '../../../node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js';
import '../../../node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js';
import '../../../node_modules/@mui/material/Button/Button.js';
import '../../../node_modules/@mui/material/Button/buttonClasses.js';
import '../../../node_modules/@mui/material/ButtonBase/ButtonBase.js';
import '../../../node_modules/@mui/material/ButtonBase/buttonBaseClasses.js';
import '../../../node_modules/@mui/material/ButtonBase/touchRippleClasses.js';
import '../../../node_modules/@mui/material/ButtonGroup/ButtonGroup.js';
import '../../../node_modules/@mui/material/ButtonGroup/buttonGroupClasses.js';
import '../../../node_modules/@mui/material/Card/Card.js';
import '../../../node_modules/@mui/material/Card/cardClasses.js';
import '../../../node_modules/@mui/material/CardActionArea/CardActionArea.js';
import '../../../node_modules/@mui/material/CardActionArea/cardActionAreaClasses.js';
import '../../../node_modules/@mui/material/CardActions/CardActions.js';
import '../../../node_modules/@mui/material/CardActions/cardActionsClasses.js';
import '../../../node_modules/@mui/material/CardContent/CardContent.js';
import '../../../node_modules/@mui/material/CardContent/cardContentClasses.js';
import '../../../node_modules/@mui/material/CardHeader/CardHeader.js';
import '../../../node_modules/@mui/material/CardHeader/cardHeaderClasses.js';
import '../../../node_modules/@mui/material/CardMedia/CardMedia.js';
import '../../../node_modules/@mui/material/CardMedia/cardMediaClasses.js';
import '../../../node_modules/@mui/material/Checkbox/Checkbox.js';
import '../../../node_modules/@mui/material/Checkbox/checkboxClasses.js';
import '../../../node_modules/@mui/material/Chip/Chip.js';
import '../../../node_modules/@mui/material/Chip/chipClasses.js';
import '../../../node_modules/@mui/material/CircularProgress/CircularProgress.js';
import '../../../node_modules/@mui/material/CircularProgress/circularProgressClasses.js';
import '../../../node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js';
import '../../../node_modules/@mui/material/Collapse/Collapse.js';
import '../../../node_modules/@mui/material/Collapse/collapseClasses.js';
import '../../../node_modules/@mui/material/Container/Container.js';
import '../../../node_modules/@mui/material/Container/containerClasses.js';
import '../../../node_modules/@mui/material/CssBaseline/CssBaseline.js';
import '../../../node_modules/@mui/material/Dialog/Dialog.js';
import '../../../node_modules/@mui/material/Dialog/dialogClasses.js';
import '../../../node_modules/@mui/material/DialogActions/DialogActions.js';
import '../../../node_modules/@mui/material/DialogActions/dialogActionsClasses.js';
import '../../../node_modules/@mui/material/DialogContent/DialogContent.js';
import '../../../node_modules/@mui/material/DialogContent/dialogContentClasses.js';
import '../../../node_modules/@mui/material/DialogContentText/DialogContentText.js';
import '../../../node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js';
import '../../../node_modules/@mui/material/DialogTitle/DialogTitle.js';
import '../../../node_modules/@mui/material/DialogTitle/dialogTitleClasses.js';
import '../../../node_modules/@mui/material/Divider/Divider.js';
import '../../../node_modules/@mui/material/Divider/dividerClasses.js';
import '../../../node_modules/@mui/material/Drawer/Drawer.js';
import '../../../node_modules/@mui/material/Drawer/drawerClasses.js';
import '../../../node_modules/@mui/material/Fab/Fab.js';
import '../../../node_modules/@mui/material/Fab/fabClasses.js';
import '../../../node_modules/@mui/material/Fade/Fade.js';
import '../../../node_modules/@mui/material/FilledInput/FilledInput.js';
import '../../../node_modules/@mui/material/FilledInput/filledInputClasses.js';
import FormControl from '../../../node_modules/@mui/material/FormControl/FormControl.js';
import '../../../node_modules/@mui/material/FormControl/FormControlContext.js';
import '../../../node_modules/@mui/material/FormControl/formControlClasses.js';
import '../../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js';
import '../../../node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js';
import '../../../node_modules/@mui/material/FormGroup/FormGroup.js';
import '../../../node_modules/@mui/material/FormGroup/formGroupClasses.js';
import FormHelperText from '../../../node_modules/@mui/material/FormHelperText/FormHelperText.js';
import '../../../node_modules/@mui/material/FormHelperText/formHelperTextClasses.js';
import '../../../node_modules/@mui/material/FormLabel/FormLabel.js';
import '../../../node_modules/@mui/material/FormLabel/formLabelClasses.js';
import '../../../node_modules/@mui/material/Grid/Grid.js';
import '../../../node_modules/@mui/material/Grid/gridClasses.js';
import '../../../node_modules/@mui/material/Unstable_Grid2/Grid2.js';
import '../../../node_modules/@mui/material/Unstable_Grid2/grid2Classes.js';
import '../../../node_modules/@mui/material/Grow/Grow.js';
import '../../../node_modules/@mui/material/Hidden/Hidden.js';
import '../../../node_modules/@mui/material/Icon/Icon.js';
import '../../../node_modules/@mui/material/Icon/iconClasses.js';
import '../../../node_modules/@mui/material/IconButton/IconButton.js';
import '../../../node_modules/@mui/material/IconButton/iconButtonClasses.js';
import '../../../node_modules/@mui/material/ImageList/ImageList.js';
import '../../../node_modules/@mui/material/ImageList/imageListClasses.js';
import '../../../node_modules/@mui/material/ImageListItem/ImageListItem.js';
import '../../../node_modules/@mui/material/ImageListItem/imageListItemClasses.js';
import '../../../node_modules/@mui/material/ImageListItemBar/ImageListItemBar.js';
import '../../../node_modules/@mui/material/ImageListItemBar/imageListItemBarClasses.js';
import '../../../node_modules/@mui/material/Input/Input.js';
import '../../../node_modules/@mui/material/Input/inputClasses.js';
import '../../../node_modules/@mui/material/InputAdornment/InputAdornment.js';
import '../../../node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js';
import '../../../node_modules/@mui/material/InputBase/InputBase.js';
import '../../../node_modules/@mui/material/InputBase/inputBaseClasses.js';
import '../../../node_modules/@mui/material/InputLabel/InputLabel.js';
import '../../../node_modules/@mui/material/InputLabel/inputLabelClasses.js';
import '../../../node_modules/@mui/material/LinearProgress/LinearProgress.js';
import '../../../node_modules/@mui/material/LinearProgress/linearProgressClasses.js';
import '../../../node_modules/@mui/material/Link/Link.js';
import '../../../node_modules/@mui/material/Link/linkClasses.js';
import '../../../node_modules/@mui/material/List/List.js';
import '../../../node_modules/@mui/material/List/listClasses.js';
import '../../../node_modules/@mui/material/ListItem/ListItem.js';
import '../../../node_modules/@mui/material/ListItem/listItemClasses.js';
import '../../../node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js';
import '../../../node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js';
import '../../../node_modules/@mui/material/ListItemButton/ListItemButton.js';
import '../../../node_modules/@mui/material/ListItemButton/listItemButtonClasses.js';
import '../../../node_modules/@mui/material/ListItemIcon/ListItemIcon.js';
import '../../../node_modules/@mui/material/ListItemIcon/listItemIconClasses.js';
import '../../../node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js';
import '../../../node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js';
import '../../../node_modules/@mui/material/ListItemText/ListItemText.js';
import '../../../node_modules/@mui/material/ListItemText/listItemTextClasses.js';
import '../../../node_modules/@mui/material/ListSubheader/ListSubheader.js';
import '../../../node_modules/@mui/material/ListSubheader/listSubheaderClasses.js';
import '../../../node_modules/@mui/material/Menu/Menu.js';
import '../../../node_modules/@mui/material/Menu/menuClasses.js';
import MenuItem from '../../../node_modules/@mui/material/MenuItem/MenuItem.js';
import '../../../node_modules/@mui/material/MenuItem/menuItemClasses.js';
import '../../../node_modules/@mui/material/MenuList/MenuList.js';
import '../../../node_modules/@mui/material/MobileStepper/MobileStepper.js';
import '../../../node_modules/@mui/material/MobileStepper/mobileStepperClasses.js';
import '../../../node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js';
import '../../../node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js';
import '../../../node_modules/@mui/material/Modal/Modal.js';
import '../../../node_modules/@mui/material/NativeSelect/NativeSelect.js';
import '../../../node_modules/@mui/material/NativeSelect/nativeSelectClasses.js';
import '../../../node_modules/@mui/base/NoSsr/NoSsr.js';
import '../../../node_modules/@mui/material/OutlinedInput/OutlinedInput.js';
import '../../../node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js';
import '../../../node_modules/@mui/material/Pagination/Pagination.js';
import '../../../node_modules/@mui/material/Pagination/paginationClasses.js';
import '../../../node_modules/@mui/material/PaginationItem/PaginationItem.js';
import '../../../node_modules/@mui/material/PaginationItem/paginationItemClasses.js';
import '../../../node_modules/@mui/material/Paper/Paper.js';
import '../../../node_modules/@mui/material/Paper/paperClasses.js';
import '../../../node_modules/@mui/material/Popover/Popover.js';
import '../../../node_modules/@mui/material/Popover/popoverClasses.js';
import '../../../node_modules/@mui/material/Popper/Popper.js';
import '../../../node_modules/@mui/base/Portal/Portal.js';
import '../../../node_modules/@mui/material/Radio/Radio.js';
import '../../../node_modules/@mui/material/Radio/radioClasses.js';
import '../../../node_modules/@mui/material/RadioGroup/RadioGroup.js';
import '../../../node_modules/@mui/material/RadioGroup/RadioGroupContext.js';
import '../../../node_modules/@mui/material/Rating/Rating.js';
import '../../../node_modules/@mui/material/Rating/ratingClasses.js';
import '../../../node_modules/@mui/material/ScopedCssBaseline/ScopedCssBaseline.js';
import '../../../node_modules/@mui/material/ScopedCssBaseline/scopedCssBaselineClasses.js';
import Select from '../../../node_modules/@mui/material/Select/Select.js';
import '../../../node_modules/@mui/material/Select/selectClasses.js';
import '../../../node_modules/@mui/material/Skeleton/Skeleton.js';
import '../../../node_modules/@mui/material/Skeleton/skeletonClasses.js';
import '../../../node_modules/@mui/material/Slide/Slide.js';
import '../../../node_modules/@mui/material/Slider/Slider.js';
import '../../../node_modules/@mui/material/Snackbar/Snackbar.js';
import '../../../node_modules/@mui/material/Snackbar/snackbarClasses.js';
import '../../../node_modules/@mui/material/SnackbarContent/SnackbarContent.js';
import '../../../node_modules/@mui/material/SnackbarContent/snackbarContentClasses.js';
import '../../../node_modules/@mui/material/SpeedDial/SpeedDial.js';
import '../../../node_modules/@mui/material/SpeedDial/speedDialClasses.js';
import '../../../node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js';
import '../../../node_modules/@mui/material/SpeedDialAction/speedDialActionClasses.js';
import '../../../node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js';
import '../../../node_modules/@mui/material/SpeedDialIcon/speedDialIconClasses.js';
import Stack from '../../../node_modules/@mui/material/Stack/Stack.js';
import '../../../node_modules/@mui/material/Step/Step.js';
import '../../../node_modules/@mui/material/Step/stepClasses.js';
import '../../../node_modules/@mui/material/Step/StepContext.js';
import '../../../node_modules/@mui/material/StepButton/StepButton.js';
import '../../../node_modules/@mui/material/StepButton/stepButtonClasses.js';
import '../../../node_modules/@mui/material/StepConnector/StepConnector.js';
import '../../../node_modules/@mui/material/StepConnector/stepConnectorClasses.js';
import '../../../node_modules/@mui/material/StepContent/StepContent.js';
import '../../../node_modules/@mui/material/StepContent/stepContentClasses.js';
import '../../../node_modules/@mui/material/StepIcon/StepIcon.js';
import '../../../node_modules/@mui/material/StepIcon/stepIconClasses.js';
import '../../../node_modules/@mui/material/StepLabel/StepLabel.js';
import '../../../node_modules/@mui/material/StepLabel/stepLabelClasses.js';
import '../../../node_modules/@mui/material/Stepper/Stepper.js';
import '../../../node_modules/@mui/material/Stepper/stepperClasses.js';
import '../../../node_modules/@mui/material/Stepper/StepperContext.js';
import '../../../node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js';
import '../../../node_modules/@mui/material/Switch/Switch.js';
import '../../../node_modules/@mui/material/Switch/switchClasses.js';
import '../../../node_modules/@mui/material/Tab/Tab.js';
import '../../../node_modules/@mui/material/Tab/tabClasses.js';
import '../../../node_modules/@mui/material/Table/Table.js';
import '../../../node_modules/@mui/material/Table/tableClasses.js';
import '../../../node_modules/@mui/material/TableBody/TableBody.js';
import '../../../node_modules/@mui/material/TableBody/tableBodyClasses.js';
import '../../../node_modules/@mui/material/TableCell/TableCell.js';
import '../../../node_modules/@mui/material/TableCell/tableCellClasses.js';
import '../../../node_modules/@mui/material/TableContainer/TableContainer.js';
import '../../../node_modules/@mui/material/TableContainer/tableContainerClasses.js';
import '../../../node_modules/@mui/material/TableFooter/TableFooter.js';
import '../../../node_modules/@mui/material/TableFooter/tableFooterClasses.js';
import '../../../node_modules/@mui/material/TableHead/TableHead.js';
import '../../../node_modules/@mui/material/TableHead/tableHeadClasses.js';
import '../../../node_modules/@mui/material/TablePagination/TablePagination.js';
import '../../../node_modules/@mui/material/TablePagination/tablePaginationClasses.js';
import '../../../node_modules/@mui/material/TableRow/TableRow.js';
import '../../../node_modules/@mui/material/TableRow/tableRowClasses.js';
import '../../../node_modules/@mui/material/TableSortLabel/TableSortLabel.js';
import '../../../node_modules/@mui/material/TableSortLabel/tableSortLabelClasses.js';
import '../../../node_modules/@mui/material/Tabs/Tabs.js';
import '../../../node_modules/@mui/material/Tabs/tabsClasses.js';
import '../../../node_modules/@mui/material/TabScrollButton/TabScrollButton.js';
import '../../../node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js';
import '../../../node_modules/@mui/material/TextField/TextField.js';
import '../../../node_modules/@mui/material/TextField/textFieldClasses.js';
import '../../../node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js';
import '../../../node_modules/@mui/material/ToggleButton/ToggleButton.js';
import '../../../node_modules/@mui/material/ToggleButton/toggleButtonClasses.js';
import '../../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js';
import '../../../node_modules/@mui/material/ToggleButtonGroup/toggleButtonGroupClasses.js';
import '../../../node_modules/@mui/material/Toolbar/Toolbar.js';
import '../../../node_modules/@mui/material/Toolbar/toolbarClasses.js';
import '../../../node_modules/@mui/material/Tooltip/Tooltip.js';
import '../../../node_modules/@mui/material/Tooltip/tooltipClasses.js';
import Typography from '../../../node_modules/@mui/material/Typography/Typography.js';
import '../../../node_modules/@mui/material/Typography/typographyClasses.js';
import '../../../node_modules/@mui/material/Zoom/Zoom.js';
import '../../../node_modules/@mui/material/GlobalStyles/GlobalStyles.js';
import '../../../node_modules/@mui/base/FocusTrap/FocusTrap.js';
import { Icons } from '../../assets/index.js';

const CreditCardDropdown = ({ value = '', title, onChange, options = [], sx, error, required, placeholder, }) => {
    var _a, _b, _c, _d;
    const theme = useTheme();
    const onChangeValue = useCallback((e) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    }, [onChange]);
    const getCreditCardType = useCallback((item) => {
        if ((item === null || item === void 0 ? void 0 : item.network) === 'MASTERCARD') {
            return Icons.masterCard;
        }
        if ((item === null || item === void 0 ? void 0 : item.network) === 'VISA') {
            return Icons.visaCard;
        }
        if ((item === null || item === void 0 ? void 0 : item.network) === 'americanCard') {
            return Icons.americanExpress;
        }
        return Icons.masterCard;
    }, []);
    const renderOption = useCallback((item) => {
        const creditCardType = getCreditCardType(item);
        return (React__default.createElement(Stack, { flexDirection: "row" },
            (item === null || item === void 0 ? void 0 : item.network) && (React__default.createElement("img", { src: creditCardType, width: "49px", height: "24px", alt: "Creditcard" })),
            React__default.createElement(Typography, { variant: "body1", sx: { marginLeft: '4px' } },
                "Card ending ",
                item.last4Digit)));
    }, [getCreditCardType]);
    return (React__default.createElement(Box, { sx: Object.assign({ width: '100%' }, sx) },
        title && (React__default.createElement(Box, { display: "flex", flexDirection: "row" },
            React__default.createElement(Typography, { color: (_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.primary, fontSize: "16px" }, title),
            required && (React__default.createElement(Typography, { color: (_c = theme.global) === null || _c === void 0 ? void 0 : _c.required, fontSize: "16px", marginLeft: "4px" }, "*")))),
        React__default.createElement(FormControl, { fullWidth: true, sx: {
                marginTop: '6px',
            } },
            React__default.createElement(Select, { value: value, displayEmpty: true, fullWidth: true, error: Boolean(error), size: "small", MenuProps: {
                    PaperProps: {
                        style: {
                            maxHeight: 300,
                        },
                    },
                }, inputProps: { 'aria-label': 'Without label' }, onChange: onChangeValue },
                React__default.createElement(MenuItem, { disabled: true, value: "" },
                    React__default.createElement(Typography, { color: (_d = theme.palette.text) === null || _d === void 0 ? void 0 : _d.disabled }, placeholder)),
                options.map((item) => {
                    return (React__default.createElement(MenuItem, { value: item === null || item === void 0 ? void 0 : item.id, key: item === null || item === void 0 ? void 0 : item.id }, renderOption(item)));
                }),
                React__default.createElement(MenuItem, { value: "null" }, "Add new card info")),
            error && React__default.createElement(FormHelperText, { error: true }, error))));
};

export { CreditCardDropdown as default };
//# sourceMappingURL=CreditCardDropdown.js.map
