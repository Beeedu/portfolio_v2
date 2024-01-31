import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

export function NavDrawer({ open }) {
    return (
        <Drawer variant="temporary" open={open}>
            <Stack>
                <Typography>Itroduction</Typography>
                <Typography>Experience</Typography>
                <Typography>Projects</Typography>
                <Typography>Skills</Typography>
            </Stack>
        </Drawer>
    );
}
