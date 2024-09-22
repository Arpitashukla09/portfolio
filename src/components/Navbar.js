import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo href="#">MyPortfolio</Logo>
      <Menu>
        <MenuItem href="#about">About</MenuItem>
        <MenuItem href="#skills">Skills</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #222;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 2px;
`;

const Menu = styled.div`
  display: flex;
  gap: 2rem;
`;

const MenuItem = styled.a`
  color: #fff;
  font-size: 1.1rem;
  &:hover {
    color: #61dafb;
    transition: color 0.3s ease;
  }
`;

export default Navbar;
