import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#26a69a',
      main: '#00796b',
      dark: '#004d40',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ec407a',
      main: '#d81b60',
      dark: '#ad1457',
      contrastText: '#fff',
    },
  },
});

export default theme;