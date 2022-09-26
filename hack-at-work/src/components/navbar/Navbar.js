import React from 'react';
import { NavWrapper, NavList, NavLink } from './navbarStyles';
import { InfoSquare } from '@styled-icons/bootstrap/InfoSquare';
import { Portfolio } from '@styled-icons/zondicons/Portfolio';
import { PaperPlane } from '@styled-icons/entypo/PaperPlane';
import { PersonLinesFill } from '@styled-icons/bootstrap/PersonLinesFill';
import { AHlogo } from '../Header';
import UseWindowWidth from '../../utils/UseWindowWidth';


function Navbar() {
    function getComponent(menuOption) {
        if (UseWindowWidth() < 768) {
            switch (menuOption) {
                case 'About':
                    return <InfoSquare size="12vw"/>
                case 'Contact':
                    return <Portfolio size="12vw"/>
                case 'Portfolio':
                    return <PaperPlane size="13vw"/>
                case 'Resume':
                    return <PersonLinesFill size="13vw"/>
                default:
                    return 
            }
            
        } else {
            switch (menuOption) {
                case 'About':
                    return <NavLink href='#About'>About</NavLink>
                case 'Contact':
                    return <NavLink href='#Contact'>Contact</NavLink>
                case 'Portfolio':
                    return <NavLink href='#Portfolio'>Portfolio</NavLink>
                case 'Resume':
                    return <NavLink href='#Resume'>Resume</NavLink>
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