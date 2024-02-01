import React from 'react';
import Grid from '@mui/material/Grid';
import { Subject, SubjectDetails, Title } from '../chrome/Typography';
import Stack from '@mui/material/Stack';
import { SecondaryDivider } from '../chrome/Divider';

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

export function Projects() {
    return (
        <Stack gap={3}>
            <Title>Projects</Title>
            <SecondaryDivider />
            <ProjectsGrid>
                <ProjectItem>
                    <ProjectShepherd />
                </ProjectItem>
                <ProjectItem>
                    <ProjectShepherd />
                </ProjectItem>
                <ProjectItem>
                    <ProjectShepherd />
                </ProjectItem>
                <ProjectItem>
                    <ProjectShepherd />
                </ProjectItem>
            </ProjectsGrid>
        </Stack>
    );
}

function Project({
    title,
    thumbnail,
    thumbnailLink,
    description,
    links,
    skills,
}) {
    return (
        <Stack gap={1}>
            <Subject>{title}</Subject>
            {thumbnail}
            <SubjectDetails>{description}</SubjectDetails>
        </Stack>
    );
}

function ProjectShepherd() {
    return (
        <Project
            title="Shepherd"
            thumbnail={
                <img
                    src="./shepherd_thumbnail.png"
                    alt="shepherd game menu screen"
                    width="100%"
                />
            }
            thumbnailLink={undefined}
            description="Play as a shepherd guiding his sheep past viscious wolves in this fun web game"
            links={[
                'https://github.com/kvietcong/shepherd',
                'https://www.youtube.com/watch?v=c-rvziL7_Z8',
            ]}
            skills={[]}
        />
    );
}
