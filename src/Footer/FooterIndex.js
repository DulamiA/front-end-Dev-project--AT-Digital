import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterElements";
  import NavLogo from '../NavBar/NavLogo.svg';

function Footer() {
  return (
    <Box>
        <Container>
            <div className = "footer">
                <div style={{marginRight:'200px',width:'50%'}}>
                    <div style={{display:'flex',flexDirection:'column',marginTop:'40px'}}>
                        <img 
                        src={NavLogo} 
                        className='nav-logo' 
                        alt='navLogo'
                        />
                        <span style={{color:'white', fontSize:'16px', marginTop: '20px'}}>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</span>
                    </div>
                </div>
                <div style={{width:'50%'}}>
                    <Row>
                        <Column>
                            <Heading>Our Technologies</Heading>
                            <FooterLink href="#">ReactJS</FooterLink>
                            <FooterLink href="#">Gatsby</FooterLink>
                            <FooterLink href="#">NextJS</FooterLink>
                            <FooterLink href="#">NodeJS</FooterLink>
                            <FooterLink href="#">GraphQL</FooterLink>
                            <FooterLink href="#">Laravel</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Our Services</Heading>
                            <FooterLink href="#">Social Media Marketing</FooterLink>
                            <FooterLink href="#">Web & Mobile App Developmetn</FooterLink>
                            <FooterLink href="#">Data & Analytics</FooterLink>
                            <FooterLink href="#">Google Marketing Solutions</FooterLink>
                            <FooterLink href="#">Search Engine Optimization</FooterLink>
                        </Column>
                    </Row>
                </div>
            </div>
            <hr style={{color:'white', width:'50%'}}/> 
            <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'5px', marginBottom:'5px'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <FooterLink>Privacy Policy </FooterLink>
                    <span style={{color:'white',textIndent:'20px'}}> | </span>
                    <FooterLink style={{textIndent:'20px'}}> Terms & Conditions</FooterLink>
                </div>
            </div>
        </Container>
    </Box>
  )
}

export default Footer
