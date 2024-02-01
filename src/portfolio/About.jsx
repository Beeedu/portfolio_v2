import Stack from '@mui/material/Stack';
import React from 'react';
import { Sidebar, SidebarAside, SidebarMain } from '../chrome/Sidebar';
import { PrimaryButton } from '../chrome/Button';
import { Subject, SubjectDetails, Title } from '../chrome/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

export function About() {
    const theme = useTheme();
    return (
        <>
            <Title color="primary">ABOUT</Title>
            <Divider color={theme.palette.secondary.main} />
            <Sidebar sx={{ gap: 3 }}>
                <SidebarMain>
                    <Introduction />
                </SidebarMain>
                <SidebarAside>
                    <ProfilePicture />
                </SidebarAside>
            </Sidebar>
        </>
    );
}

function ProfilePicture() {
    return (
        <Box>
            <img
                src="./portrait.jpg"
                alt="profile"
                width="350rem"
                style={{ borderRadius: '50%' }}
            />
        </Box>
    );
}

function Introduction() {
    return (
        <Stack gap={3}>
            <Subject>Hi, I'm Brandon Lynch</Subject>
            <Subject color="primary">Software Engineer</Subject>
            <SubjectDetails>
                Passionate about writing clean, elegant code for the web, games,
                and anything cool. I like cooking, rock climbing, and video
                games.
            </SubjectDetails>
            <PrimaryButton>Résumé</PrimaryButton>
            <PrimaryButton color="secondary">Résumé</PrimaryButton>
        </Stack>
    );
}
