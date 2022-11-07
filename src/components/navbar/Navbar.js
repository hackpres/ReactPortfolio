import { NavWrapper, NavList } from './navbarStyles';
import getNavComponent from '../../utils/getNavComponent';


function Navbar(props) {
    return (
        <NavWrapper>
            <NavList>
                {getNavComponent('About', props.page)}
            </NavList>
            <NavList>
                {getNavComponent('Portfolio', props.page)}
            </NavList>
            {getNavComponent('')}
            <NavList>
                {getNavComponent('Contact', props.page)}
            </NavList>
            <NavList>
                {getNavComponent('Resume', props.page)}
            </NavList>
        </NavWrapper>
    );
}

export default Navbar;