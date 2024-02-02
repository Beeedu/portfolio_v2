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
import { SectionTabs } from './Navigation';
import Divider from '@mui/material/Divider';

const MEASURE = '140ch';

export function Measure({ ...props }) {
    return <Box width="100%" maxWidth={MEASURE} {...props} />;
}

const PageMain = styled('main')(({ theme }) => ({
    display: 'block',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    overflowY: 'auto',
}));

export function Page({ children }) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();

    const toggleDrawer = () => setOpenDrawer(!openDrawer);

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    '&.MuiAppBar-root': {
                        boxShadow: 'none',
                        backgroundImage: 'none',
                    },
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Toolbar
                    sx={{
                        height: '64px',
                        '&.MuiToolbar-root': {
                            pl: 0,
                        },
                    }}
                >
                    {isMobile ? (
                        <IconButton onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <SectionTabs direction="row" />
                    )}
                </Toolbar>
                <Divider />
            </AppBar>
            <NavDrawer open={openDrawer} onClose={toggleDrawer} />
            <PageMain>
                <Toolbar
                    sx={{
                        height: '64px',
                        '&.MuiToolbar-root': {
                            pl: 0,
                        },
                    }}
                />
                {children}
            </PageMain>
        </Box>
    );
}
