import React from 'react';
import styled from 'styled-components';
import resume from '../../assets/images/Resume.pdf';

const CVHeading = styled.h4`
    font-size: 1.5rem;
    font-weight: 400;
    color: #243637;
    margin: .75rem 0 0 15vw;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;
const CVItem = styled.p`
    font-size: 1.25rem;
    font-weight: 100;
    color: #245637;
    margin: .25rem 0 .25rem 19vw;
    text-align: left;

    @media (min-width: 768px) {
        font-size: 1.6rem;
    }
`;
const CVDownloadLabel = styled.h6`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 100;
    color: #245637;
    text-align: right;
    margin-bottom: 124px;
`;
const CVDownloadButton = styled.a`
    display: flex;
    justify-content: center;
    text-decoration: none;
    border: 4px solid #243637;
    border-radius: 10px;
    background-color: #11526c;
    color: #dfebe8;
    width: 35vw;
    font-size: 1rem;
    padding-block: .5rem;
    margin: .5rem;

    &:hover {
        backgroud-color: #11526c;
        opacity: .7;
    }

    @media (min-width: 768px) {
        width: 175px;
        margin-left: 2rem;
    }
`;

function CV() {
    function downloadCV() {

    };
  return (
    <>
        <CVHeading>Frontend Tech</CVHeading>
        <CVItem>HTML</CVItem>
        <CVItem>CSS</CVItem>
        <CVItem>JavaScript es6+</CVItem>
        <CVItem>Responsive Design</CVItem>
        <CVItem>React</CVItem>
        <CVHeading>Backend Tech</CVHeading>
        <CVItem>API's</CVItem>
        <CVItem>Node</CVItem>
        <CVItem>Express</CVItem>
        <CVItem>Sequelize/MySQL</CVItem>
        <CVItem>Mongoose/NoSQL</CVItem>
        <CVItem>GraphQL</CVItem>
        <CVDownloadLabel>
            résumé pdf: 
            <CVDownloadButton href={resume} download>
                DOWNLOAD
            </CVDownloadButton>
        </CVDownloadLabel>
    </>
  )
}

export default CV