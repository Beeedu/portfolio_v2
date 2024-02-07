import Stack from '@mui/material/Stack';
import React from 'react';
import { Sidebar, SidebarAside, SidebarMain } from '../chrome/Sidebar';
import { ExternalLinkButton } from '../chrome/Button';
import { Subject, SubjectDetails, Title } from '../chrome/Typography';
import Box from '@mui/material/Box';
import { SecondaryDivider } from '../chrome/Divider';

export function AboutOutlet() {
    return (
        <Stack gap={3}>
            <Stack>
                <Title>About</Title>
                <SecondaryDivider />
            </Stack>
            <Sidebar sx={{ gap: 3 }}>
                <SidebarMain>
                    <Introduction />
                </SidebarMain>
                <SidebarAside>
                    <ProfilePicture />
                </SidebarAside>
            </Sidebar>
        </Stack>
    );
}

function ProfilePicture() {
    return (
        <Box width="100%" maxWidth="350rem">
            <img
                src="/resources/portrait.jpg"
                alt="profile"
                width="100%"
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
                and anything cool. In my freetime I'm cooking, rock climbing, or
                playing video games.
            </SubjectDetails>
            <ExternalLinkButton url="Brandon_Lynch_Resume.pdf">
                Résumé
            </ExternalLinkButton>
        </Stack>
    );
}
