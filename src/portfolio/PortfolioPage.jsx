import React from 'react';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './projects/ProjectsSection';
import { Measure, Page } from '../chrome/Page';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import useScrollToHashElement from '../util/ScrollToHashElement';
import { ContactSection } from './ContactSection';

const CenteringBox = styled(Box)({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
});

export function PortfolioPage() {
    return (
        <Page>
            <CenteringBox>
                <Measure>
                    <Portfolio />
                </Measure>
            </CenteringBox>
        </Page>
    );
}

function Portfolio() {
    useScrollToHashElement();
    return (
        <Stack p={5} gap={7}>
            <AboutSection id="about" />
            <ProjectsSection id="projects" />
            <ContactSection id="contact" />
        </Stack>
    );
}
