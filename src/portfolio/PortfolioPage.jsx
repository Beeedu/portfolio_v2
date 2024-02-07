import React from 'react';
import { Measure, Page } from '../chrome/Page';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

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
        <Stack p={5} gap={7}>
            <Outlet />
        </Stack>
    );
}
