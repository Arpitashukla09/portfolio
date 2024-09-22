import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <p>© 2024 Arpita Shukla. All rights reserved.</p>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  padding: 2rem;
  background: #222;
  color: #fff;
  text-align: center;
`;

export default Footer;
