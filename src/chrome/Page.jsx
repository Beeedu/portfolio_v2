import { styled, useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { NavDrawer } from './Drawer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const PageMain = styled('main')(({ theme }) => ({
    display: 'block',
    backgroundColor: theme.palette.background.default,
}));

export function Page(props) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();

    const toggleDrawer = () => setOpenDrawer(!openDrawer);

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    {isMobile ? (
                        <IconButton onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <SectionTabs />
                    )}
                </Toolbar>
            </AppBar>
            <NavDrawer open={openDrawer} />
            <PageMain {...props} />
        </Box>
    );
}

function SectionTabs() {
    return (
        <Stack direction="row" gap={3}>
            <Typography>Itroduction</Typography>
            <Typography>Experience</Typography>
            <Typography>Projects</Typography>
            <Typography>Skills</Typography>
        </Stack>
    );
}
