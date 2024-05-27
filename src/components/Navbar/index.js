import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>CGS Technovation</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="stem" smooth={true} duration={500} spy={true} exact='true' offset={-80}>STEM</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="business" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Business & Recreation</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="esports" smooth={true} duration={500} spy={true} exact='true' offset={-80}>eSports</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="speakers" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Speakers</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="partner" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Partner</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="faq" smooth={true} duration={500} spy={true} exact='true' offset={-80}>FAQs</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: #5B8FB9;
        transition: 0.2s ease-in-out;
    };
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #B6EADA;
    }

    &:hover {
        color: #5B8FB9;
        transition: 0.2s ease-in-out;
    };
`

export default Navbar;
