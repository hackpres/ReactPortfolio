import { NavLink } from '../components/navbar/navbarStyles';
import { InfoSquare } from '@styled-icons/bootstrap/InfoSquare';
import { Portfolio } from '@styled-icons/zondicons/Portfolio';
import { PaperPlane } from '@styled-icons/entypo/PaperPlane';
import { PersonLinesFill } from '@styled-icons/bootstrap/PersonLinesFill';
import { ReactComponent as AHlogo } from '../assets/icons/AHlogo.svg';
import UseWindowWidth from './UseWindowWidth';

export default function getNavComponent(menuOption) {
    if (UseWindowWidth() < 768) {
        switch (menuOption) {
            case 'About':
                return <NavLink href='/about'><InfoSquare size="12vw"/></NavLink>
            case 'Contact':
                return <NavLink href='/contact'><Portfolio size="12vw"/></NavLink>
            case 'Portfolio':
                return <NavLink href='/'><PaperPlane size="13vw"/></NavLink>
            case 'Resume':
                return <NavLink href='/resume'><PersonLinesFill size="13vw"/></NavLink>
            default:
                return;
        }
        
    } else {
        switch (menuOption) {
            case 'About':
                return <NavLink href='/about'>About</NavLink>
            case 'Contact':
                return <NavLink href='/contact'>Contact</NavLink>
            case 'Portfolio':
                return <NavLink href='/'>Portfolio</NavLink>
            case 'Resume':
                return <NavLink href='/resume'>Resume</NavLink>
            default:
                return<NavLink href='/'><AHlogo width="225" height="155"/></NavLink>
        }
    }
}