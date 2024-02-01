import Typography from '@mui/material/Typography';
import React from 'react';

export function Title({ ...props }) {
    return <Typography variant="h4" {...props} />;
}

export function Subject({ ...props }) {
    return <Typography variant="h5" {...props} />;
}

export function SubjectDetails({ ...props }) {
    return <Typography variant="body1" {...props} />;
}
