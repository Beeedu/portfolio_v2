import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import React from 'react';

export function NavDrawer({ open, onClose }) {
    const theme = useTheme();
    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    boxShadow: 'none',
                    backgroundImage: 'none',
                    backgroundColor: theme.palette.background.default,
                },
            }}
        >
            <Stack p={3} gap={3}>
                <Typography>About</Typography>
                <Typography>Projects</Typography>
                <Typography>Experience</Typography>
            </Stack>
        </Drawer>
    );
}
