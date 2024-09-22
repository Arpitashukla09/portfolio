import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactDetails>
        <ContactItem>
          <strong>Email: </strong>
          <ContactLink href="mailto:arpitashukla0911@gmail.com">arpitashukla0911@gmail.com</ContactLink>
        </ContactItem>
        <ContactItem>
          <strong>LinkedIn: </strong>
          <ContactLink href="https://www.linkedin.com/in/arpitashukla0911/" target="_blank">
            LinkedIn Profile
          </ContactLink>
        </ContactItem>
      </ContactDetails>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  background-color: #1a1a1a; /* Dark background */
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
`;

const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 0 auto; /* Center the grid */
`;

const ContactItem = styled.div`
  background-color: #2a2a2a; /* Lighter card background */
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }
`;

const ContactLink = styled.a`
  color: #61dafb; /* Use a light color for links */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Contact;
