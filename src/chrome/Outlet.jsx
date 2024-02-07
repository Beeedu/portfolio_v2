import Slide from '@mui/material/Slide';
import React from 'react';
import theme from '../theme';

export function SlideOutlet({ children }) {
    return (
        <div style={{ overflow: 'hidden', width: '100%' }}>
            <Slide
                direction="left"
                easing={theme.transitions.easing.easeOut}
                in
                mountOnEnter
                unmountOnExit
            >
                {children}
            </Slide>
        </div>
    );
}
