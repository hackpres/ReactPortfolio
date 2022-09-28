import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: flex,
    position: relative,
    font-family: apparat, sans-serif;
`;

export const TitleShadow = styled.div`
    font-weight: 900;
    font-style: italic;
    font-size: 6rem;
    margin-left: -2rem;
    color: #dfebe8;
    content: ${props => props.shadow};
    overflow-x: hidden;
`;

export const TitleText = styled.div`
    font-weight: 800;
    font-style: normal;
    font-size: 3rem;
    color: #11526c;
    position: absolute;
    top: 10.25rem;
    left: 2rem;
    content: ${props => props.title};
`;