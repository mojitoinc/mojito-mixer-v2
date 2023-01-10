import { GlobalStylesProps } from '@mui/material';

export const styles: GlobalStylesProps['styles'] = {
  'html, body': {
    fontFamily: 'Sneak',
    minHeight: '100vh',
    margin: 0,
  },

  body: {
    fontFamily: 'Sneak',
    overflowY: 'scroll',
  },
  '.token-modal .MuiDialog-paper': {
    width: '80%',
    maxWidth: '80%',
  },
};
