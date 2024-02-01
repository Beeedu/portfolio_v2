const { styled } = require('@mui/material/styles');

export const Sidebar = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
});

export const SidebarMain = styled('div')({
    flexBasis: 0,
    flexGrow: 999,
    minWidth: '50%',
});

export const SidebarAside = styled('div')({
    flexBasis: '20em',
    flexGrow: 1,
});
