import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Ingenium</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='Editorial'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Editorial</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Abohoman'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Abohoman</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Prayukti'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Prayukti</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Gallery</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Subscribe</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
