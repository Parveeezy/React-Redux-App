import {styled} from "@mui/material";
import {NavLink} from "react-router-dom";

export const AppLinks = styled(NavLink)(() => ({
    textDecoration: 'none',
    color: 'white',

    '&&:hover': {
        color: 'red'
    },

    '&&:active': {
        color: 'gold'
    }
}))