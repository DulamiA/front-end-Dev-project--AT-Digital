import React from 'react'
import { Nav, NavLink, Bars, NavMenue, NavLogoLink } from './NavBarElements'
import NavLogo from './NavLogo.svg';

function NavBar() {
  return (
    <>
      <Nav>
        <NavLogoLink to="/">
            <img 
              src={NavLogo} 
              className='nav-logo' 
              alt='navLogo'
            />
        </NavLogoLink>
        <Bars />
        <NavMenue>
            <NavLink to="/services" activeStyle>
                SERVICES
            </NavLink>
            <NavLink to="/aboutUs" activeStyle>
                ABOUT US
            </NavLink>
            <NavLink to="/contactUs" activeStyle>
                CONTACT US
            </NavLink>
            <NavLink to="/careers" activeStyle>
                CAREERS
            </NavLink>
        </NavMenue>
      </Nav>
    </>
  )
}

export default NavBar
