import { ThemeConfiguration } from '../interfaces';

const DefaultThemes: ThemeConfiguration = {
  font: {
    primary: 'Sneak',
    secondary: 'Sneak',
  },
  color: {
    primary: '#6663FD',
    secondary: '#FFFFFF',
    background: '#FAFAFC',
    errorBackground: '#FEE3E5',
    text: '#000000',
    cardBackground: '#FFFFFF',
    checkout: {
      continueButtonBackground: '#6663FD',
      continueButtonTextColor: '#FFFFFF',
    },
    placeholder: '#BABEC5',
    costBreakdown: {
      applyButtonBackground: '#DADAE9',
      applyButtonTextColor: '#FFFFFF',
    },
  },
};

export default DefaultThemes;
