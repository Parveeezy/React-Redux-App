import React from 'react';
import { HeaderBlock, HeaderWrapper } from './components';
import { RoutesBlock, RoutesElements, RoutesLink, RoutesLinks, RoutesWrapper } from '../../routes/components';

const Header = () => {


    const activeClass = {
        color: 'gold',
    };


    return (
        <HeaderBlock>
            <HeaderWrapper>
                <RoutesBlock>
                    <RoutesWrapper>
                        <RoutesElements>
                            <RoutesLink>
                                <RoutesLinks style={({ isActive }) => isActive ? activeClass : {}}
                                             to='/*/App'
                                >
                                    Home
                                </RoutesLinks>
                            </RoutesLink>
                            <RoutesLink>
                                <RoutesLinks style={({ isActive }) => isActive ? activeClass : {}}
                                             to='components/counter'
                                >
                                    Counter
                                </RoutesLinks>
                            </RoutesLink>
                            <RoutesLink>
                                <RoutesLinks style={({ isActive }) => isActive ? activeClass : {}}
                                             to='components/users'
                                >
                                    Users
                                </RoutesLinks>
                            </RoutesLink>
                        </RoutesElements>
                    </RoutesWrapper>
                </RoutesBlock>
            </HeaderWrapper>
        </HeaderBlock>
    );
};

export default Header;