import React from 'react';
import { PortfolioPage } from './portfolio/PortfolioPage';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <PortfolioPage />
        </ThemeProvider>
    );
}

export default App;
