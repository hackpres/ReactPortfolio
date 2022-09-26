import React from 'react';
import UseWindowWidth from '../../utils/UseWindowWidth';
import { ReactComponent as AHlogo } from '../../assets/icons/AHlogo.svg';

const h1Style = {
    display: 'flex',
    justifyContent: 'center',
};

function Header() {
    if (UseWindowWidth() < 768) {
        return (
            <h1 style={h1Style}>
                <AHlogo width="106.5px" height="73px"/>
            </h1>
    );
    } else {
        return;
    }

}

export default Header;