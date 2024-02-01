import { createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#1ebd95',
        },
        secondary: {
            main: '#f45307',
        },
        background: {
            default: '#1c1c1c',
            paper: '#37474F',
        },
    },
    typography: {
        fontSize: 14,
        fontFamily: 'Roboto, sans-serif',
        h4: {
            textTransform: 'uppercase',
            color: '#1ebd95',
        },
    },
});

export default theme;
