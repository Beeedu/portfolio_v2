const { default: Button } = require('@mui/material/Button');
const { styled } = require('@mui/material/styles');

export const PrimaryButton = styled(Button)(({ theme }) => ({
    color: 'white',
    borderRadius: 0,
    width: 'fit-content',
    boxShadow: 'none',
}));
