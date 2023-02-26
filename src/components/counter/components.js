import {styled} from "@mui/material";

export const CounterWrapper = styled('div')(() => ({
    margin: '15px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#59677c',
    maxWidth: 360,
    color: '#ffffff',
    borderRadius: 10
}));

export const CounterBlock = styled('div')(() => ({
    margin: '15px 0',

}));

export const CounterText = styled("p")(() => ({
    fontSize: 36,
    fontWeight: 600,
    padding: '10px 0px',
    margin: 0,
}));