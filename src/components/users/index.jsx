import React, { useState } from 'react';
import {
    UserInput,
    UsersContainer,
    UsersInputBlock,
    UsersItem,
    UsersItems,
    UsersWrapper,
} from './components';

import { CustomButton } from '../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUser } from '../../reduxToolkit/toolkitReducer';


const Users = () => {

    const users = useSelector(state => state.toolkitCount.users);
    const dispatch = useDispatch();

    const [user, setUser] = useState('');

    const onChangeHandler = (e) => {
        setUser(e.currentTarget.value);
    };

    const addUserHandler = (u) => {
        user && dispatch(addUser(u));
        setUser('');
    };

    const addUserEnterHandler = (e, u) => {
        if (e.key === 'Enter' && user) {
            dispatch(addUser(u));
            setUser('');
        }
    };

    const getUserHandler = (id) => {
        dispatch(getUser(id));
    };

    return (
        <UsersWrapper>
            <UsersContainer>
                <UsersInputBlock>
                    <UserInput
                        type='text'
                        onChange={onChangeHandler}
                        value={user}
                        placeholder={'Enter your name...'}
                        onKeyDown={(e) => addUserEnterHandler(e, user)}
                    />
                    <CustomButton
                        variant='contained' onClick={() => addUserHandler(user)
                    }>
                        Add
                    </CustomButton>
                </UsersInputBlock>
                <UsersItems>
                    {users.length ? (
                        users.map((u, index) => {
                            return (
                                <UsersItem key={index}>
                                    {index + 1}. {u.name}
                                    <CustomButton variant='contained' onClick={() => getUserHandler(u.id)}>
                                        Delete
                                    </CustomButton>
                                </UsersItem>
                            );
                        })
                    ) : (
                        <div>
                            no users...
                        </div>
                    )}
                </UsersItems>
            </UsersContainer>
        </UsersWrapper>
    );
};

export default Users;