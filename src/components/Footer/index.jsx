import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle><h2>About Us</h2></FooterLinkTitle>
                <FooterLink to=''>A⚙️T</FooterLink>
                
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle><h2>Contents</h2></FooterLinkTitle>
            
                <FooterLink to='/'>Editorial </FooterLink>
                <FooterLink to='/'>Abohoman </FooterLink>
                <FooterLink to='/'>Prayukti </FooterLink>
                <FooterLink to='/'>Gallery</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle><h2>Links</h2></FooterLinkTitle>
                <FooterLink to='/'>Latest Posts</FooterLink>
                <FooterLink to='/'>Submit For Abohoman</FooterLink>
                <FooterLink to='/'>Submit For Prayukti</FooterLink>
               
            </FooterLinkItems>
            
          </FooterLinkWrapper>
          
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            Ingenium
            </SocialLogo>
            <WebsiteRights>Ingenium © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='#' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
