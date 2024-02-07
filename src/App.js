import React from 'react';
import { PortfolioPage } from './portfolio/PortfolioPage';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutOutlet } from './portfolio/AboutOutlet';
import { ContactOutlet } from './portfolio/ContactOutlet';
import { ProjectsOutlet } from './portfolio/projects/ProjectsOutlet';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<PortfolioPage />}>
                        <Route index element={<AboutOutlet />} />
                        <Route path="about" element={<AboutOutlet />} />
                        <Route path="projects" element={<ProjectsOutlet />} />
                        <Route path="contact" element={<ContactOutlet />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
