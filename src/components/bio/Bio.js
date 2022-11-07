import React from 'react';
import styled from "styled-components";
import UseWindowWidth from '../../utils/UseWindowWidth';


const NameHeading = styled.h3`
    justify-content: right;
    margin-right: 2rem;
    z-index: 1000;
    margin-top: 1rem;

    @media (min-width: 768px) {
        font-size: 2.3rem;
        margin: 1vw 5rem 2rem auto;
    }
    @media (min-width: 1000px) {
        margin-right: 12vw;
        font-size: 50px;
        margin-bottom: 50px;
    }
`;
export const BioText = styled.p`
    font-size: .87rem;
    width; 30vw;
    margin: 1.5rem auto 1rem auto;

    @media (min-width: 450px) {
        font-size: 1.02rem;
    }
    @media (min-width: 768px) {
        font-size: 1.25rem;
        width: 40vw;
        margin: auto auto auto 1.25rem;
    }
    @media (min-width: 1000px) {
        font-size: 24px;
        width: 45%;
    }
`;
const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const ImageFrame = styled.div`
    width: 100%;
    background-color: #a3b1af;
    margin-bottom: 100px;

    @media (min-width: 450px) {
        display: flex;
        margin-bottom: 80px;
    }
    @media (min-width: 1000px) {
        justify-content: space-around;
        padding-block: 3rem;
    }
`;
const Photo = styled.img`
    width: 8.5rem;
    display: flex;
    margin: auto;
    @media (min-width: 768px) {
        width: 24rem;
        margin: auto 1.25rem auto auto;
    }
    @media (min-width: 1000px) {
        width: 250px;
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