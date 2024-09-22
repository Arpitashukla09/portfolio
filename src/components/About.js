import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <AboutText>
        <h1>About Me</h1>
        <p>
          I am Arpita Shukla, a final-year B.Tech student in Electronics and Communication Engineering at PSIT.
          Keen on learning and applying my skills in real-world settings, particularly in IoT, AI, and telecommunications.
        </p>
        <InteractiveButton onClick={() => alert('Thanks for your interest!')}>
          Learn More
        </InteractiveButton>
      </AboutText>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, #2e2e2e, #121212);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  animation: fadeIn 1.5s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AboutText = styled.div`
  max-width: 600px; /* Limit text width for better readability */
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
`;

const InteractiveButton = styled.button`
  background-color: #61dafb;
  color: #282c34;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #21a1f1;
    transform: translateY(-3px);
  }
`;

export default About;
