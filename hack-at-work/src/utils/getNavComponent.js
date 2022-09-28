import { NavLink } from '../components/navbar/navbarStyles';
import { InfoSquare } from '@styled-icons/bootstrap/InfoSquare';
import { Portfolio } from '@styled-icons/zondicons/Portfolio';
import { PaperPlane } from '@styled-icons/entypo/PaperPlane';
import { PersonLinesFill } from '@styled-icons/bootstrap/PersonLinesFill';
import { ReactComponent as AHlogo } from '../assets/icons/AHlogo.svg';
import UseWindowWidth from './UseWindowWidth';

export default function getNavComponent(menuOption, page) {
    const iconStyle = {
        padding: '.5rem',
    }
    const hlightIconStyle = {
        padding: '.5rem',
        border: 'solid 2px #dfebe8',
        borderRadius: '8px',
    }
    const hlightLinkStyle = {
        color: '#11526c',
    }
    if (UseWindowWidth() < 768) {
        switch (menuOption) {
            case 'About':
                if (page === 'about') {
                    return <NavLink href='/about'><InfoSquare size="12vw" style={hlightIconStyle}/></NavLink>
                }
                return <NavLink href='/about'><InfoSquare size="12vw" style={iconStyle}/></NavLink>
            case 'Portfolio':
                if (page === 'portfolio') {
                    return <NavLink href='/'><Portfolio size="12vw" style={hlightIconStyle}/></NavLink>
                }
                return <NavLink href='/'><Portfolio size="12vw" style={iconStyle}/></NavLink>
            case 'Contact':
                if (page === 'contact') {
                    return <NavLink href='/contact'><PaperPlane size="13vw" style={hlightIconStyle}/></NavLink>
                }
                return <NavLink href='/contact'><PaperPlane size="13vw" style={iconStyle}/></NavLink>
            case 'Resume':
                if (page === 'resume') {
                    return <NavLink href='/resume'><PersonLinesFill size="13vw" style={hlightIconStyle}/></NavLink>
                }
                return <NavLink href='/resume'><PersonLinesFill size="13vw" style={iconStyle}/></NavLink>
            default:
                return;
        }
        
    } else {
        switch (menuOption) {
            case 'About':
                if (page === 'about') {
                    return <NavLink href='/about' style={hlightLinkStyle}>About</NavLink>
                }
                return <NavLink href='/about'>About</NavLink>
            case 'Contact':
                if (page === 'contact') {
                    return <NavLink href='/contact' style={hlightLinkStyle}>Contact</NavLink>
                }
                return <NavLink href='/contact'>Contact</NavLink>
            case 'Portfolio':
                if (page === 'portfolio') {
                    return <NavLink href='/' style={hlightLinkStyle}>Portfolio</NavLink>
                }
                return <NavLink href='/'>Portfolio</NavLink>
            case 'Resume':
                if (page === 'resume') {
                    return <NavLink href='/resume' style={hlightLinkStyle}>Resume</NavLink>
                }
                return <NavLink href='/resume'>Resume</NavLink>
            default:
                return<NavLink href='/'><AHlogo width="225" height="155"/></NavLink>
        }
    }
}