import React from 'react';
import { TitleWrapper, TitleShadow, TitleText } from './titleStyles';

function Title(props) {
    return (
        <TitleWrapper>
            <TitleShadow shadow={props.shadow}/>
            <TitleText title={props.title}/>
        </TitleWrapper>
    )
}

export default Title;