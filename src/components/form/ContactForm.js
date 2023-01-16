import React, { useState } from 'react';
import styled from 'styled-components';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Github } from '@styled-icons/boxicons-logos/Github';
import './form.css';

const ThankYouText = styled.h5`
    display: flex;
    justify-content: center;
    font-size: 1.75rem;
    font-family: darkmode-on, sans-serif;
    font-weight: 100;
    font-style: normal;
    margin: .8rem auto;
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
    margin-bottom: 124px;
    display: flex;
    justify-content: center;

    &:hover {
        color: #11526c;
        opacity: .7;
    }
    
    @media (min-width: 1000px) {
        width: 150px;
        height: 150px;
    }
`;
const InstagramStyle = styled(Instagram)`
    margin: auto 1rem;
    width: 5rem;
`;
const LinkedinStyle = styled(LinkedinSquare)`
    margin: auto 1rem;
    width: 5rem;
`;
const GithubStyle = styled(Github)`
    margin: auto 1rem;
    width: 5rem;
`;

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/3767b440-5edd-11ed-b82c-5d75eaa7ccff';

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 300);
    };
    if (submitted) {
        return (
            <>
                <ThankYouText>Thank you!</ThankYouText>
                <ThankYouText>We will be in touch soon.</ThankYouText>
            </>
        )
    }

    return (
        <>
            <form id='contctForm' action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_self">
                <div className='input-wrapper'>
                    <div className='label-float'>
                        <input required placeholder=' ' name='name' type='text' />
                        <label>Name</label>
                    </div>
                    <div className='label-float'>
                        <input required placeholder=' ' name="email" type='email' />
                        <label>Email</label>
                    </div>
                    <div className='label-float'>
                        <input placeholder=' ' name='business' type='text' />
                        <label>Business</label>
                    </div>
                    <div className='label-float'>
                        <textarea required placeholder=' ' name='details' />
                        <label>Project Details</label>
                    </div>
                </div>
                <Submit type='submit' value='Submit' />
            </form>

            <SocialWrapper>
                <SocialLink href='https://www.instagram.com/hackap/'><InstagramStyle /></SocialLink>
                <SocialLink href='https://www.linkedin.com/in/alexander-hacker-4b3ab9235/'><LinkedinStyle /></SocialLink>
                <SocialLink href='https://github.com/hackpres'><GithubStyle /></SocialLink>
            </SocialWrapper>
        </>
    )
}

export default ContactForm