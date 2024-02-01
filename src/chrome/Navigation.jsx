import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import React from 'react';

function Tab({ children, ...props }) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            pl={2}
            pr={2}
            {...props}
        >
            <Typography>{children}</Typography>
        </Box>
    );
}

export function SectionTabs() {
    const theme = useTheme();
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <Tab
                onClick={() => console.log('click')}
                sx={{ backgroundColor: theme.palette.primary.main }}
            >
                About
            </Tab>
            <Tab>Projects</Tab>
            <Tab>Experience</Tab>
        </Stack>
    );
}
