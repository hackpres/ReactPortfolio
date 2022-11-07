import React from 'react';
import styled from 'styled-components';

const CVHeading = styled.h4`
    font-size: 2rem;
    font-weight: 400;
    color: #243637;
    margin: .75rem 0 0 15vw;
`;
const CVItem = styled.p`
    font-size: 1.46rem;
    font-weight: 100;
    color: #245637;
    margin: .25rem 0 .25rem 19vw;
    text-align: left;
`;
const CVDownloadLabel = styled.h6`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.65rem;
    font-weight: 100;
    color: #245637;
    text-align: right;
    margin-bottom: 104px;
`;
const CVDownloadButton = styled.button`
    border: 4px solid #243637;
    border-radius: 10px;
    background-color: #11526c;
    color: #dfebe8;
    width: 42vw;
    font-size: 1.25rem;
    padding-block: .5rem;
    margin: .5rem;

    &:hover {
        backgroud-color: #11526c;
        opacity: .7;
    }
`;

function CV() {
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
            <CVDownloadButton>DOWNLOAD</CVDownloadButton>
        </CVDownloadLabel>
    </>
  )
}

export default CV