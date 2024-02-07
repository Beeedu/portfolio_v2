import React from 'react';
import Grid from '@mui/material/Grid';
import { Title } from '../../chrome/Typography';
import Stack from '@mui/material/Stack';
import { SecondaryDivider } from '../../chrome/Divider';
import {
    ProjectCardGenerator,
    ProjectChatterbug,
    ProjectShepherd,
    ProjectTriviaMaze,
} from './Projects';

function ProjectsGrid({ children }) {
    return (
        <Grid container spacing={5}>
            {children}
        </Grid>
    );
}

function ProjectItem({ children }) {
    return (
        <Grid item xs={12} sm={6}>
            {children}
        </Grid>
    );
}

export function ProjectsOutlet() {
    return (
        <Stack gap={3}>
            <Stack>
                <Title>Projects</Title>
                <SecondaryDivider />
            </Stack>
            <ProjectsGrid>
                <ProjectItem>
                    <ProjectShepherd />
                </ProjectItem>
                <ProjectItem>
                    <ProjectChatterbug />
                </ProjectItem>
                <ProjectItem>
                    <ProjectCardGenerator />
                </ProjectItem>
                <ProjectItem>
                    <ProjectTriviaMaze />
                </ProjectItem>
            </ProjectsGrid>
        </Stack>
    );
}

export function Thumbnail({ src, alt, ...props }) {
    return <img src={src} alt={alt} width="100%" {...props} />;
}
