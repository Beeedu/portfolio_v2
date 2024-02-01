import React from 'react';
import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Measure, Page } from '../chrome/Page';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

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
    return (
        <Stack p={5} gap={5}>
            <About />
            <Projects />
            <Experience />
        </Stack>
    );
}
