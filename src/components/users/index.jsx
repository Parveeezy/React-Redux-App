import React, {useState} from 'react';
import {
    UserInput,
    UsersContainer,
    UsersInputBlock,
    UsersItem,
    UsersItems,
    UsersWrapper
} from "./components";

import {CustomButton} from "../../ui";
import {useDispatch, useSelector} from "react-redux";
import {addUser, getUser} from "../../store/reducers/users/actions";

const Users = () => {

    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()

    const [user, setUser] = useState('')

    const onChangeHandler = (e) => {
        e.currentTarget.value && setUser(e.currentTarget.value)
    }

    const addUserHandler = (user) => {
        user && dispatch(addUser(user))
        setUser('')
    }

    const getUserHandler = (id) => {
        dispatch(getUser(id))
    }

    return (
        <UsersWrapper>
            <UsersContainer>
                <UsersInputBlock>
                    <UserInput
                        type="text"
                        onChange={onChangeHandler}
                        value={user}
                    />
                    <CustomButton
                        variant='contained' onClick={() => addUserHandler(user)
                    }>
                        Add
                    </CustomButton>
                </UsersInputBlock>
                <UsersItems>
                    {users ? (
                        users.map((u, index) => {
                            return (
                                <UsersItem key={index}>
                                    {index + 1}. {u.name}
                                    <CustomButton variant='contained' onClick={() => getUserHandler(u.id)}>
                                        Delete
                                    </CustomButton>
                                </UsersItem>
                            )
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