import React from 'react';
import UseWindowWidth from '../../utils/UseWindowWidth';
import styled from 'styled-components';
import { ReactComponent as AHLogo } from '../../assets/icons/AHlogo.svg';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { GithubSquare } from '@styled-icons/fa-brands/GithubSquare';

const FooterWrapper = styled.footer`
    position: fixed;
    bottom: 0;
    background-color: #11526c;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    z-index: 50;
`;
const CopyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
`;
const CopyText = styled.p`
    color: #dfebe8;
    display: flex;
    width: auto;
    font-size: 20px;
    margin: auto;
`;
const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-block: 18px;
    width: 280px;
`;
const SocialLogoContainer = styled.div`
    background-color: rgb(207, 218, 221, .7);
    padding: 2px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SocialLink = styled.a`
    color: inherit;
    text-decoration: inherit;
    cursor: inherit;

    &:hover {
        color: #11526c;
        opacity: .7;
    }
`;
const AHLogoStyle = {
    margin: 'auto 40px',
    padding: '4px',
    backgroundColor: 'rgb(207, 218, 221, .7)',
    borderRadius: '8px',
}

function Footer() {
    const renderFooter = () => {
        if (UseWindowWidth() >= 768) {
            return (
                <FooterWrapper>
                    <CopyContainer>
                        <AHLogo width='80px' height='60px' style={AHLogoStyle}/>
                        <CopyText>
                            Design and Development
                        </CopyText>
                    </CopyContainer>
                    <SocialContainer>
                        <SocialLogoContainer>
                            <SocialLink href='https://www.instagram.com/hackap/'>
                                <Instagram width='40px' height='40px' />
                            </SocialLink>
                        </SocialLogoContainer>
                        <SocialLogoContainer>
                            <SocialLink href='https://www.linkedin.com/in/hackap/'>
                                <LinkedinSquare width='40px' height='40px' />
                            </SocialLink>
                        </SocialLogoContainer>
                        <SocialLogoContainer style={{marginRight: '80px'}}>
                            <SocialLink href='https://github.com/hackpres'>
                                <GithubSquare width='35px' height='35px' />
                            </SocialLink>
                        </SocialLogoContainer>
                    </SocialContainer>
                </FooterWrapper>
            )
        }
        return;
    }
  return (
    <>
        {renderFooter()}
    </>
  )
}

export default Footer