import React__default, { useMemo } from 'react';
import '../../../node_modules/@mui/utils/esm/elementAcceptingRef.js';
import '../../../node_modules/@mui/utils/esm/elementTypeAcceptingRef.js';
import 'react-is';
import '../../../node_modules/@mui/utils/esm/ponyfillGlobal.js';
import '../../../node_modules/@mui/utils/esm/refType.js';
import '../../../node_modules/@mui/utils/esm/integerPropType.js';
import '@emotion/styled';
import '../../../node_modules/@emotion/react/dist/emotion-react.esm.js';
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
import Card from '../../../node_modules/@mui/material/Card/Card.js';
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
import '../../../node_modules/@mui/material/FormControl/FormControl.js';
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
import '../../../node_modules/@mui/material/MenuItem/MenuItem.js';
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
import '../../../node_modules/@mui/material/Select/Select.js';
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
import Button from '../../components/Button.js';
import Dropdown from '../../components/Dropdown.js';
import { Icons } from '../../assets/index.js';
import '../../components/Stepper.js';
import CopyButton from '../../components/shared/CopyButton.js';
import { PaymentTypes } from '../../constants/index.js';
import { DeliveryInfoCard } from './DeliveryInfoCard.js';
import { NEW_MULTI_SIG } from './index.js';

const Delivery = ({ onWalletChange, walletOptions, selectedDeliveryAddress, onClickConfirmPurchase, organizationName, billingInfo, paymentInfo, onClickConnectWallet, connect, onDisconnect, error, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const theme = useTheme();
    const isCreditCard = useMemo(() => (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === PaymentTypes.CREDIT_CARD, [paymentInfo]);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(DeliveryInfoCard, { billingInfo: billingInfo, paymentInfo: paymentInfo }),
        React__default.createElement(Card, { sx: {
                border: `1px solid ${(_a = theme.global) === null || _a === void 0 ? void 0 : _a.cardBorder}`,
                backgroundColor: (_b = theme.global) === null || _b === void 0 ? void 0 : _b.cardBackground,
                boxShadow: `0px 4px 16px ${(_c = theme.global) === null || _c === void 0 ? void 0 : _c.cardShadow}`,
                margin: '24px 0px',
                padding: '24px',
            } },
            React__default.createElement(Typography, { sx: { fontSize: '20px', fontWeight: 500 } }, "Delivery Address"),
            React__default.createElement(Typography, { variant: "body2", sx: { marginTop: 1, marginBottom: 2 } }, isCreditCard
                ? `All related purchase and delivery fees will be covered by ${organizationName}.
                  NFTs purchased by credit card can only be transferred to your multi-sig wallet and cannot be transferred 
                  out for 14 days.`
                : `All related NFT purchase and delivery fees will be covered by ${organizationName}.`),
            !(connect === null || connect === void 0 ? void 0 : connect.connected)
                ? (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(Dropdown, { value: selectedDeliveryAddress, onChange: onWalletChange, placeholder: "Select or Enter Wallet Address", sx: { marginRight: '8px' }, options: walletOptions }),
                    selectedDeliveryAddress === NEW_MULTI_SIG && (React__default.createElement(Typography, { variant: "body2", sx: { marginTop: '6px', color: (_d = theme.global) === null || _d === void 0 ? void 0 : _d.cardGrayedText } }, "A new multi-sig wallet will be created for you when purchase is complete")),
                    React__default.createElement(Stack, { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" },
                        React__default.createElement(Button, { title: "Connect Wallet", textColor: (_e = theme.global) === null || _e === void 0 ? void 0 : _e.highlightedText, backgroundColor: (_f = theme.global) === null || _f === void 0 ? void 0 : _f.white, variant: "outlined", sx: { marginTop: 2 }, onClick: onClickConnectWallet }))))
                : (React__default.createElement(Box, { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", border: `1px solid ${(_g = theme.global) === null || _g === void 0 ? void 0 : _g.cardBorder}`, padding: "16px", sx: {
                        background: (_h = theme.global) === null || _h === void 0 ? void 0 : _h.background,
                    } },
                    React__default.createElement(Box, { display: "flex", flexDirection: "row", alignItems: "center" },
                        React__default.createElement("img", { src: Icons.walletAddress, alt: "wallet address" }),
                        React__default.createElement(Typography, { fontSize: "16px", marginLeft: "12px", width: "150px", sx: {
                                overflow: 'hidden', textOverflow: 'ellipsis',
                            } }, connect === null || connect === void 0 ? void 0 : connect.account),
                        React__default.createElement(CopyButton, { copyValue: connect === null || connect === void 0 ? void 0 : connect.account, sx: {
                                alignSelf: 'center',
                            } })),
                    React__default.createElement(Button, { title: "Disconnect", textColor: (_j = theme.global) === null || _j === void 0 ? void 0 : _j.highlightedText, backgroundColor: (_k = theme.global) === null || _k === void 0 ? void 0 : _k.white, variant: "outlined", sx: {
                            justifySelf: 'flex-end',
                        }, onClick: onDisconnect })))),
        React__default.createElement(Box, { display: "flex", flexDirection: "row", justifyContent: "space-between" },
            React__default.createElement(FormHelperText, { error: true }, error),
            React__default.createElement(Button, { title: "Confirm purchase", backgroundColor: (_m = (_l = theme.global) === null || _l === void 0 ? void 0 : _l.checkOutColors) === null || _m === void 0 ? void 0 : _m.continueButtonBackground, textColor: (_p = (_o = theme.global) === null || _o === void 0 ? void 0 : _o.checkOutColors) === null || _p === void 0 ? void 0 : _p.continueButtonTextColor, disabled: !((connect === null || connect === void 0 ? void 0 : connect.connected) || selectedDeliveryAddress), onClick: onClickConfirmPurchase }))));
};

export { Delivery as default };
//# sourceMappingURL=Delivery.js.map
