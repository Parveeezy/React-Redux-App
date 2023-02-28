import { styled } from '@mui/material';

export const UsersWrapper = styled('div')(() => ({
    margin: '15px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#59677c',
    maxWidth: 360,
    color: '#ffffff',
    borderRadius: 10,
}));
export const UsersContainer = styled('div')(() => ({
    padding: '15px 0',
}));

export const UsersInputBlock = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 0',
    textAlign: 'center',
}));

export const UserInput = styled('input')(() => ({
    padding: 5,
    '::placeholder': { color: 'black' },


}));

export const UsersItems = styled('div')(() => ({}));

export const UsersItem = styled('div')(() => ({
    fontWeight: 'bold',
    marginTop: 10,
}));