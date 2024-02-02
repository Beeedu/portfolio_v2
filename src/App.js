import React from 'react';
import { PortfolioPage } from './portfolio/PortfolioPage';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PortfolioPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
