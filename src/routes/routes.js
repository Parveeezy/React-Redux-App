import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counter from '../components/counter';
import Users from '../components/users';
import App from '../App';

export const AppRoutes = () => {

    return (
            <Routes>
                <Route exact path='App' element={<App />}>Home</Route>
                <Route path='components/counter' element={<Counter />}>Counter</Route>
                <Route path='components/users' element={<Users />}>Users</Route>
            </Routes>
    );
};

export default AppRoutes;