import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { SectionTabs } from './Navigation';

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
            <SectionTabs direction="column" />
        </Drawer>
    );
}
