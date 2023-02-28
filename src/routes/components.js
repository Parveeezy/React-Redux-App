import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const RoutesBlock = styled('div')(() => ({

}))

export const RoutesWrapper = styled('nav')(() => ({

}))

export const RoutesElements = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
}))

export const RoutesLinks = styled(NavLink)(() => ({
    textDecoration: 'none',
    color: 'white',

    '&&:hover': {
        color: 'red',
    },

    '&&:active': {
        color: 'gold',
    },
}));

export const RoutesLink = styled('nav')(() => ({
    marginLeft: 10
}))