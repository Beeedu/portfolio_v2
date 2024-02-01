import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

export const SecondaryDivider = styled(Divider)(({ theme }) => ({
    borderColor: theme.palette.secondary.main,
}));
