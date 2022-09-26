import React from 'react';
import { NavWrapper, NavList } from './navbarStyles';
import getNavComponent from '../../utils/getNavComponent';


function Navbar() {
    return (
        <NavWrapper>
            <NavList>
                {getNavComponent('About')}
            </NavList>
            <NavList>
                {getNavComponent('Contact')}
            </NavList>
            {getNavComponent('Home')}
            <NavList>
                {getNavComponent('Portfolio')}
            </NavList>
            <NavList>
                {getNavComponent('Resume')}
            </NavList>
        </NavWrapper>
    );
}

export default Navbar;