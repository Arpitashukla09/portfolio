import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/profile.jpg'; // Add your profile picture here

const Hero = () => {
  return (
    <HeroSection>
      <ProfileContainer>
        <ProfilePhoto src={profilePic} alt="Profile Photo" />
      </ProfileContainer>
      <HeroText>
        <h1>Hi, I'm Arpita Shukla</h1>
        <p>A passionate developer creating modern Web solutions.</p>
        <Button href="#contact">Contact Me</Button>
      </HeroText>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 2rem; /* Added padding for spacing */
`;

const ProfileContainer = styled.div`
  margin-bottom: 2rem; /* Space below the profile photo */
`;

const ProfilePhoto = styled.img`
  border-radius: 50%;
  width: 250px; /* Increased profile photo size */
  height: 250px; /* Maintain aspect ratio */
  border: 5px solid #007acc; /* Blue border */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7); /* Deeper shadow for depth */
  transition: transform 0.3s; /* Animation for scaling */
  
  &:hover {
    transform: scale(1.05); /* Scale effect on hover */
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 4rem; /* Larger heading */
    animation: fadeIn 1.5s ease;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8); /* Enhanced shadow */
  }

  p {
    margin: 1rem 0;
    font-size: 1.5rem; /* Increased size */
    animation: fadeIn 2s ease;
    max-width: 600px; /* Limit width for better readability */
  }

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

const Button = styled.a`
  background-color: #007acc;
  padding: 0.75rem 2rem;
  margin-top: 1.5rem;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #005999; /* Darker shade on hover */
  }
`;

export default Hero;
