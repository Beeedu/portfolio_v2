import React from 'react';
import { PortfolioPage } from './portfolio/PortfolioPage';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <PortfolioPage />
        </ThemeProvider>
    );
}

export default App;
