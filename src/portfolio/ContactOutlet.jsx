import Stack from '@mui/material/Stack';
import React from 'react';
import { Title } from '../chrome/Typography';
import { SecondaryDivider } from '../chrome/Divider';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export function ContactOutlet() {
    return (
        <Stack gap={3}>
            <Stack>
                <Title>Contact</Title>
                <SecondaryDivider />
            </Stack>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <EmailIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>lynch.brandon.m@gmail.com</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <PhoneIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>(425) 892-3232</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <LinkedInIcon color="primary" />
                    </ListItemIcon>
                    <ContactLink url="https://www.linkedin.com/in/lynch-brandon/">
                        https://www.linkedin.com/in/lynch-brandon/
                    </ContactLink>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <GitHubIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                        <ContactLink url="https://github.com/Beeedu">
                            https://github.com/Beeedu
                        </ContactLink>
                    </ListItemText>
                </ListItem>
            </List>
        </Stack>
    );
}

function ContactLink({ url, children }) {
    return (
        <a
            href={url}
            rel="noreferrer"
            target="_blank"
            style={{ color: 'white' }}
        >
            {children}
        </a>
    );
}
