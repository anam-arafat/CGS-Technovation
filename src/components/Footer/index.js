import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <SocialIconLink href="https://facebook.com/events/s/cgs-technovation-2023/700550878306876/" target="_blank" aria-label="facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <FooterLink to="https://facebook.com/events/s/cgs-technovation-2023/700550878306876/">Facebook</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <SocialIconLink href="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_u%2Fcgstechnovation2023&h=AT3JooeHubV5pZWVci80M6c5EXzX0xbecISZG6iRb7T24PZmYFRA2aYtOP_FaSwm_sFfEUoMq92whRPUWqRIkkH18lMxyelMThmmALBVcd6W84wx32lWdSYe6FdwMmPSBxdddxO6MMHIfKNr" target="_blank" aria-label="instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <FooterLink to="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_u%2Fcgstechnovation2023&h=AT3JooeHubV5pZWVci80M6c5EXzX0xbecISZG6iRb7T24PZmYFRA2aYtOP_FaSwm_sFfEUoMq92whRPUWqRIkkH18lMxyelMThmmALBVcd6W84wx32lWdSYe6FdwMmPSBxdddxO6MMHIfKNr">Instagram</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #000000;
`;

const FooterWrap = styled.div`
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterLinksWrapper = styled.div`
  display: flex;
`;

const FooterLinkItems = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  text-align: center;
  color: white;

  @media screen and (max-width: 420px){
    margin: 0 5px;
  }
`;

const FooterLink = styled(Link)`
  padding: 5px;
  color: white;
  text-decoration: none;
  height: auto;
  margin-left: 2px;
  font-size: 20px;

  &:hover {
    color: #5B8FB9;
    transition: 0.3s ease-out;
  }
`;

const SocialIconLink = styled.a`
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-right: 2px;

  &:hover {
    color: #5B8FB9;
    transition: 0.3s ease-out;
  }
`;
