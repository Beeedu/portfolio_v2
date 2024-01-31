import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#17D6B4',
        },
        secondary: {
            main: '#F95528',
        },
        background: {
            default: '#7c978f',
            paper: '#93aaa3',
        },
    },
    typography: {
        fontSize: 14,
        fontFamily: 'Roboto, sans-serif',
    },
});

export default theme;
