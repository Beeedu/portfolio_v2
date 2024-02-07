import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Tab({ to, children, ...props }) {
    const location = useLocation();
    const theme = useTheme();
    console.log('location: ', location);
    return (
        <Link
            to={to}
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:
                    to === location.pathname
                        ? theme.palette.primary.main
                        : theme.palette.background.default,
                textDecoration: 'none',
                color: 'white',
                padding: theme.spacing(3),
            }}
            {...props}
        >
            <Typography>{children}</Typography>
        </Link>
    );
}

export function SectionTabs({ direction }) {
    return (
        <Stack
            direction={direction || 'row'}
            justifyContent="center"
            alignItems="center"
            height={direction === 'row' ? '100%' : 'auto'}
            width={direction === 'column' ? '100%' : 'auto'}
        >
            <Tab to="/about">About</Tab>
            <Tab to="/projects">Projects</Tab>
            <Tab to="/contact">Contact</Tab>
        </Stack>
    );
}
