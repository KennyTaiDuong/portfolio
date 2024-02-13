import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

import Hamburger from "../assets/icon/hamburger-icon.svg"

const Container = styled.div`
  padding: 2.5rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: white;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  
  &:hover {
    color: rgb(0, 0, 0);
  }
`

const Icon = styled.img`
  width: 2rem;
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
  }
`

const Header = () => {
  return (
    <Container>
      <StyledNavLink to="/">kennyduong.dev</StyledNavLink>
      <Navbar/>
      <Icon src={Hamburger}/>
    </Container>
  )
}

export default Header