import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Cluster = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'gap',
})(({ theme, gap }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: `calc(${theme.spacing(parseFloat('' + gap))} / 2 * -1)`,
    '> *': {
        margin: `calc(${theme.spacing(parseFloat('' + gap))} / 2)`,
    },
}));
