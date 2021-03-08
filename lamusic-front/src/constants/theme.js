import { createMuiTheme } from '@material-ui/core/styles';
import { greenYellow } from './colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      //light:  greenYellow,
      main: greenYellow,
      //dark:  greenYellow,
      contrastText: '#141414',
      text: 'white',
    },
    
  },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  }
  );

export default theme