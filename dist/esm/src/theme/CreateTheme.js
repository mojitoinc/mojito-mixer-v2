import { createTheme } from '@mui/material/styles';
import '../config/RuntimeConfiguration.js';
import DefaultThemes from '../config/themes.js';
import '../config/paymentConfiguration.js';

const makeTheme = (themeConfiguration) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
    return createTheme({
        typography: {
            fontFamily: 'Sneak',
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                @font-face {
                  font-family: ${(_b = (_a = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.font) === null || _a === void 0 ? void 0 : _a.primary) !== null && _b !== void 0 ? _b : (_c = DefaultThemes.font) === null || _c === void 0 ? void 0 : _c.primary};
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                }
                @font-face {
                    font-family: ${(_e = (_d = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.font) === null || _d === void 0 ? void 0 : _d.secondary) !== null && _e !== void 0 ? _e : (_f = DefaultThemes.font) === null || _f === void 0 ? void 0 : _f.secondary};
                    font-style: normal;
                    font-display: swap;
                    font-weight: 400;
                  }
              `,
            },
        },
        palette: {
            primary: {
                main: (_h = (_g = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _g === void 0 ? void 0 : _g.primary) !== null && _h !== void 0 ? _h : (_j = DefaultThemes.color) === null || _j === void 0 ? void 0 : _j.primary,
            },
            secondary: {
                main: (_l = (_k = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _k === void 0 ? void 0 : _k.secondary) !== null && _l !== void 0 ? _l : (_m = DefaultThemes.color) === null || _m === void 0 ? void 0 : _m.secondary,
            },
            background: {
                default: (_p = (_o = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _o === void 0 ? void 0 : _o.background) !== null && _p !== void 0 ? _p : (_q = DefaultThemes.color) === null || _q === void 0 ? void 0 : _q.background,
            },
            text: {
                primary: (_s = (_r = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _r === void 0 ? void 0 : _r.text) !== null && _s !== void 0 ? _s : (_t = DefaultThemes.color) === null || _t === void 0 ? void 0 : _t.text,
                disabled: (_v = (_u = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _u === void 0 ? void 0 : _u.placeholder) !== null && _v !== void 0 ? _v : (_w = DefaultThemes.color) === null || _w === void 0 ? void 0 : _w.placeholder,
            },
        },
        font: {
            primary: 'Sneak',
            secondary: 'Sneak',
            tertiary: 'Sneak',
            sneak: 'Sneak',
        },
        global: {
            background: (_y = (_x = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _x === void 0 ? void 0 : _x.background) !== null && _y !== void 0 ? _y : (_z = DefaultThemes.color) === null || _z === void 0 ? void 0 : _z.background,
            errorBackground: (_1 = (_0 = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _0 === void 0 ? void 0 : _0.errorBackground) !== null && _1 !== void 0 ? _1 : (_2 = DefaultThemes.color) === null || _2 === void 0 ? void 0 : _2.errorBackground,
            highlightedText: '#6663FD',
            unHighlightedText: '#8A8AB9',
            linksText: '#8A8AB9',
            lines: '#CACAE0',
            black: '#000000',
            white: '#FFFFFF',
            border: '#000000',
            cardBackground: (_4 = (_3 = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _3 === void 0 ? void 0 : _3.cardBackground) !== null && _4 !== void 0 ? _4 : (_5 = DefaultThemes.color) === null || _5 === void 0 ? void 0 : _5.cardBackground,
            cardShadow: 'rgba(0,0,0,0.08)',
            cardBorder: '#EAEAF3',
            required: '#CE2818',
            placeholder: (_7 = (_6 = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _6 === void 0 ? void 0 : _6.placeholder) !== null && _7 !== void 0 ? _7 : (_8 = DefaultThemes.color) === null || _8 === void 0 ? void 0 : _8.placeholder,
            checkOutColors: Object.assign(Object.assign({}, (_9 = DefaultThemes.color) === null || _9 === void 0 ? void 0 : _9.checkOutColors), (_10 = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _10 === void 0 ? void 0 : _10.checkOutColors),
            costBreakDownColors: Object.assign(Object.assign({}, (_11 = DefaultThemes.color) === null || _11 === void 0 ? void 0 : _11.costBreakDownColors), (_12 = themeConfiguration === null || themeConfiguration === void 0 ? void 0 : themeConfiguration.color) === null || _12 === void 0 ? void 0 : _12.costBreakDownColors),
            confirmationColors: {
                awaitingPaymentBackground: '#FCFB99',
                awaitingPaymentTextColor: '#F98028',
                processedBackground: '#E7EFE8',
                processedTextColor: '#0B4D12',
                copyIconColor: '#B0AFFE',
            },
            cardGrayedText: '#5C5C9B',
            grayBackground: '#F4F4F5',
        },
    });
};

export { makeTheme };
//# sourceMappingURL=CreateTheme.js.map
