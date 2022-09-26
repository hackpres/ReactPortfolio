import React from 'react';
import UseWindowWidth from '../utils/UseWindowWidth';

export const AHlogo = (props) => {
    return (
        <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width={props.width}
            height={props.height}
            viewBox="0 0 225 155"
            fill="none"
            stroke="#243637"
            strokeWidth="4.5"
            strokeMiterlimit="10">
            <g>
                <line
                    className="st0"
                    x1="140.32"
                    y1="58.02"
                    x2="140.32"
                    y2="133.74"
                />
                <line
                    className="st0"
                    x1="191.74"
                    y1="58.02"
                    x2="191.74"
                    y2="133.74"
                />
                <polygon
                    className="st0"
                    points="124.34,23.31 70.29,99.83 33.38,152.09 31.58,152.09 68.68,99.83 122.96,23.34 	"
                />
                <polyline
                    className="st0"
                    points="70.29,99.83 140.32,99.83 191.74,99.83 	"
                />
                <path
                    className="st0"
                    d="M31.56,152.12l0.02-0.03l-14.86,0.03c-7.31,0-13.22-5.91-13.22-13.23V16.11c0-7.29,5.91-13.23,13.22-13.23
                    h191.56c7.31,0,13.22,5.94,13.22,13.23v122.78c0,7.32-5.91,13.23-13.22,13.23H67.12"
                />
            </g>
        </svg>
    )
}

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