import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import Counter from "../components/counter";
import Users from "../components/users";
import App from "../App";
import {AppLinks} from "./components";

export const AppRoutes = () => {

    const activeClass = {
        color: 'gold'
    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <AppLinks style={({isActive}) => isActive ? activeClass : {}}
                                  to="/*/App"
                        >
                            Home
                        </AppLinks>
                    </li>
                    <li>
                        <AppLinks style={({isActive}) => isActive ? activeClass : {}}
                                  to="components/counter"
                        >
                            Counter
                        </AppLinks>
                    </li>
                    <li>
                        <AppLinks style={({isActive}) => isActive ? activeClass : {}}
                                  to="components/users"
                        >
                            Users
                        </AppLinks>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route exact path="App" element={<App/>}>Home</Route>
                <Route path='components/counter' element={<Counter/>}>Counter</Route>
                <Route path='components/users' element={<Users/>}>Users</Route>
            </Routes>
        </div>

    );
};

export default AppRoutes;