import React from 'react';
import { Subject, SubjectDetails } from '../../chrome/Typography';
import Stack from '@mui/material/Stack';
import { ExternalLinkButton } from '../../chrome/Button';
import {
    AndroidSkill,
    JavaScriptSkill,
    JavaSkill,
    PostmanSkill,
    PythonSkill,
    TensorflowSkill,
} from './Skills';
import { Cluster } from '../../chrome/Cluster';
import { styled } from '@mui/material/styles';

function ExternalLink({ url, children }) {
    return (
        <HoverLink href={url} target="_blank" rel="noopener noreferrer">
            {children}
        </HoverLink>
    );
}

const HoverLink = styled('a')(({ theme }) => ({
    '&:hover': {
        transform: 'translate(1px, 1px)',
    },
}));

function Thumbnail({ src, alt, ...props }) {
    return <img src={src} alt={alt} width="100%" {...props} />;
}

export function Project({
    title,
    thumbnail,
    thumbnailLink,
    description,
    links,
    skills,
}) {
    return (
        <Stack gap={1}>
            <Cluster gap={1}>
                <Subject>{title}</Subject>
                {skills.map((skill, i) => (
                    <div key={i}>{skill}</div>
                ))}
            </Cluster>
            <ExternalLink url={thumbnailLink}>{thumbnail}</ExternalLink>
            <SubjectDetails>{description}</SubjectDetails>
            <Cluster flexDirection="row-reverse" gap={3}>
                {links.map((link, i) => (
                    <ExternalLinkButton key={i} url={link.url}>
                        {link.name}
                    </ExternalLinkButton>
                ))}
            </Cluster>
        </Stack>
    );
}

export function ProjectShepherd() {
    return (
        <Project
            title="Shepherd"
            thumbnail={
                <Thumbnail
                    src="./resources/shepherd_thumbnail.png"
                    alt="shepherd game menu screen"
                />
            }
            thumbnailLink="https://www.youtube.com/watch?v=c-rvziL7_Z8"
            description="Play as a shepherd guiding his sheep past viscious wolves in this fun web game"
            links={[
                {
                    url: 'https://github.com/kvietcong/shepherd',
                    name: 'GitHub',
                },
                {
                    url: 'https://www.youtube.com/watch?v=c-rvziL7_Z8',
                    name: 'Youtube',
                },
            ]}
            skills={[<JavaScriptSkill />]}
        />
    );
}

export function ProjectChatterbug() {
    return (
        <Project
            title="Chatterbug"
            thumbnail={
                <Thumbnail
                    src="./resources/chatterbug_thumbnail.png"
                    alt="chatterbug login screen"
                />
            }
            thumbnailLink="https://youtu.be/YfD_GqHwWZg"
            description="A fully-fleged messaging and weather mobile app for Android"
            links={[
                {
                    url: 'https://github.com/TCSS450-Team7-MobileApp',
                    name: 'GitHub',
                },
                {
                    url: 'https://youtu.be/YfD_GqHwWZg',
                    name: 'Youtube',
                },
            ]}
            skills={[
                <JavaSkill />,
                <JavaScriptSkill />,
                <AndroidSkill />,
                <PostmanSkill />,
            ]}
        />
    );
}

export function ProjectCardGenerator() {
    return (
        <Project
            title="MTG Card Generator"
            thumbnail={
                <Thumbnail
                    src="./resources/thesis_thumbnail.png"
                    alt="thesis presentation slide"
                />
            }
            thumbnailLink="https://www.youtube.com/watch?v=vNRrNw_zk6Y"
            description="Honors research project and thesis using RNNs to generate new Magic: The Gathering cards"
            links={[
                {
                    url: 'https://github.com/rsakpal/499Brandon',
                    name: 'GitHub',
                },
                {
                    url: 'https://www.youtube.com/watch?v=vNRrNw_zk6Y',
                    name: 'Youtube',
                },
            ]}
            skills={[<PythonSkill />, <TensorflowSkill />]}
        />
    );
}

export function ProjectTriviaMaze() {
    return (
        <Project
            title="Trivia Maze"
            thumbnail={
                <Thumbnail
                    src="./resources/trivia_maze_thumbnail.png"
                    alt="trivia maze menu screen"
                />
            }
            thumbnailLink="https://github.com/kvietcong/tcss360-trivia-maze"
            description="Blindly navigate through a maze of rooms by answering trivia questions"
            links={[
                {
                    url: 'https://github.com/kvietcong/tcss360-trivia-maze',
                    name: 'GitHub',
                },
            ]}
            skills={[<JavaSkill />]}
        />
    );
}
