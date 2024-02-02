import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React from 'react';

export const PrimaryButton = styled(Button)(({ theme }) => ({
    color: 'white',
    borderRadius: 0,
    width: 'fit-content',
    boxShadow: 'none',
}));

export function ExternalLinkButton({ url, ...props }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <PrimaryButton {...props} />
        </a>
    );
}
