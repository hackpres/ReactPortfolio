import React, { useState } from 'react';
import styled from 'styled-components';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Github } from '@styled-icons/boxicons-logos/Github';

const InputLabel = styled.h5`
    display: flex;
    justify-content: center;
    font-size: 1.75rem;
    font-family: darkmode-on, sans-serif;
    font-weight: 100;
    font-style: normal;
    margin: .8rem auto;
`;
const Input = styled.input`
    display: flex;
    justify-content: center;
    border: 1px solid #11526c;
    border-radius: 10px;
    background-color: #dfebe8;
    width: 60%;
    font-size: 1.25rem;
    padding-block: .5rem;
    margin: 0 auto 0 auto;
`;
const TextArea = styled.textarea`
    display: flex;
    justify-content: center;
    border: 1px solid #11526c;
    border-radius: 10px;
    background-color: #dfebe8;
    width: 60%;
    font-size: 1.25rem;
    padding-block: .5rem;
    margin: 0 auto 0 auto;
`;
const Submit = styled.input`
    display: flex;
    justify-content: center;
    border: 2px solid #11526c;
    border-radius: 10px;
    background-color: #11526c;
    color: #dfebe8;
    width: 30%;
    font-size: 1.5rem;
    padding-block: .5rem;
    margin: 1rem auto;
`;
const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #243637;
    margin-top: 3rem;
`;
const SocialLink = styled.a`
    color: inherit;
    text-decoration: none;

    &:hover {
        color: #11526c;
        opacity: .7;
    }
`;
const FormWrapper = styled.div`
    overflowX: hidden;
`;
const logoStyle = {
    margin: 'auto 2rem',
}

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [business, setBusiness] = useState('');
    const [details, setDetails] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleBusinessChange = (event) => {
        setBusiness(event.target.value)
    }
    const handleDetailsChange = (event) => {
        setDetails(event.target.value)
    }
    const handleSubmit = (event) => {
        const formData = [
            name,
            email,
            business,
            details
        ];
        return formData;
    }
    return (
        <FormWrapper>
            <InputLabel>Name:</InputLabel>
                <Input name='name' type='text' defaultValue={name} onChange={handleNameChange} />
            <InputLabel>Email:</InputLabel>
                <Input name="email" type='text' defaultValue={email} onChange={handleEmailChange} />
            <InputLabel>Business:</InputLabel>
                <Input name='business' type='text' defaultValue={business} onChange={handleBusinessChange} />
            <InputLabel>Project Details:</InputLabel>
                <TextArea name='details' defaultValue={details} onChange={handleDetailsChange} />
            
            <Submit type='submit' value='Submit' onClick={handleSubmit} />
            <SocialWrapper>
                <SocialLink href='https://www.instagram.com/hackap/'><Instagram size='12vw' style={logoStyle} /></SocialLink>
                <SocialLink href='https://www.linkedin.com/in/alexander-hacker-4b3ab9235/'><LinkedinSquare size='12vw' style={logoStyle} /></SocialLink>
                <SocialLink href='https://github.com/hackpres'><Github size='12vw' style={logoStyle} /></SocialLink>
            </SocialWrapper>
        </FormWrapper>
    )
}

export default ContactForm