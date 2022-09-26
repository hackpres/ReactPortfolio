import React from 'react';
import { NavWrapper, NavList, NavLink } from './navbarStyles';
import { InfoSquare } from '@styled-icons/bootstrap/InfoSquare';
import { Portfolio } from '@styled-icons/zondicons/Portfolio';
import { PaperPlane } from '@styled-icons/entypo/PaperPlane';
import { PersonLinesFill } from '@styled-icons/bootstrap/PersonLinesFill';
import { AHlogo } from '../../components/header/Header';
import UseWindowWidth from '../../utils/UseWindowWidth';


function Navbar() {
    function getComponent(menuOption) {
        if (UseWindowWidth() < 768) {
            switch (menuOption) {
                case 'About':
                    return <NavLink href='/about'><InfoSquare size="12vw"/></NavLink>
                case 'Contact':
                    return <NavLink href='/contact'><Portfolio size="12vw"/></NavLink>
                case 'Portfolio':
                    return <NavLink href='/portfolio'><PaperPlane size="13vw"/></NavLink>
                case 'Resume':
                    return <NavLink href='/resume'><PersonLinesFill size="13vw"/></NavLink>
                default:
                    return 
            }
            
        } else {
            switch (menuOption) {
                case 'About':
                    return <NavLink href='/about'>About</NavLink>
                case 'Contact':
                    return <NavLink href='/contact'>Contact</NavLink>
                case 'Portfolio':
                    return <NavLink href='/portfolio'>Portfolio</NavLink>
                case 'Resume':
                    return <NavLink href='/resume'>Resume</NavLink>
                default:
                    return <AHlogo width="225" height="155"/>
            }
            
        }
    }
    return (
        <NavWrapper>
            <NavList>
                {getComponent('About')}
            </NavList>
            <NavList>
                {getComponent('Contact')}
            </NavList>
            {getComponent('AHlogo')}
            <NavList>
                {getComponent('Portfolio')}
            </NavList>
            <NavList>
                {getComponent('Resume')}
            </NavList>
        </NavWrapper>
    );
}

export default Navbar;