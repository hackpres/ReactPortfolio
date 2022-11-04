import React from 'react';
import styled from "styled-components";
import UseWindowWidth from '../../utils/UseWindowWidth';


const NameHeading = styled.h3`
    justify-content: right;
    margin-right: 2rem;

    @media (min-width: 768px) {
        margin-right: 4rem;
        font-size: 2rem;
    }
`;
export const BioText = styled.p`
    font-size: 1.24rem;
    width; 30vw;
    margin: 1.5rem auto 1rem auto;

    @media (min-width: 768px) {
        font-size: 1.25rem;
        width: 30vw;
        margin: auto auto auto 1.25rem;
    }
    @media (min-width: 1000px) {
        font-size: 38px;
        width: 50%;
    }
`;
const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const ImageFrame = styled.div`
    position: absolute;
    display: flex;
    bottom: 81px;
    width: 100%;
    background-color: #a3b1af;

    @media (min-width: 1000px) {
        position: relative;
        display: flex;
        justify-content: space-around;
        margin-top: 10rem;
        padding-block: 3rem;
    }
`;
const Photo = styled.img`
    width: 8rem;
    display: flex;
    margin: auto;
    @media (min-width: 768px) {
        display: flex;
        width: 10rem;
        margin: auto 1.25rem auto auto;
    }
    @media (min-width: 1000px) {
        width: 300px;
    }
`;

const getBioTextMobile = (props) => {
    if (UseWindowWidth() < 768) {
        return <BioText>{props}</BioText>
    } else {
        return;
    }
};
const getBioTextDesktop = (props) => {
    if (UseWindowWidth() < 768) {
        return;
    } else {
        return <BioText>{props}</BioText>
    }
};

const Bio = ({ bioInfo }) => {
    return (
        <>
            <NameHeading>{bioInfo.name}</NameHeading>
            {getBioTextMobile(bioInfo.bio)}
            <ImageWrapper>
                <ImageFrame>
                    <Photo src={bioInfo.image} alt="Mr. Hacker" />
                    {getBioTextDesktop(bioInfo.bio)}
                </ImageFrame>
            </ImageWrapper>
        </>
    )
}

export default Bio;