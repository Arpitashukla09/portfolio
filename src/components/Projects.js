// Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #0d0d0d; /* Dark background */
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff; /* White text */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Shadow for depth */
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 2rem; /* Space between cards */
`;

const ProjectCard = styled.div`
  background: linear-gradient(135deg, #2e2e2e, #404040); /* Neutral gradient background */
  border-radius: 12px; /* Rounded corners */
  padding: 2rem;
  text-align: left;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5); /* Shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transition for smooth hover effects */
  
  /* Pop-up effect */
  transform: scale(0.95); /* Initial scale */
  
  &:hover {
    transform: scale(1.05) translateY(-10px); /* Scale up and lift on hover */
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7); /* Increase shadow on hover */
  }
`;

const ProjectName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #dcdcdc; /* Light grey for titles */
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: #b0b0b0; /* Medium grey text */
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectName>Real-time Smart “SURAKSHA”</ProjectName>
          <ProjectDescription>
            A smart safety device with fingerprint authentication, location-based emergency alerts, and a built-in self-defense shockwave generator, supported by an Android app.
            <br /> <strong>Tech Stack:</strong> VC-02, ESP32, GPS/GSM Module, Google Maps API.
          </ProjectDescription>
        </ProjectCard>
        
        <ProjectCard>
          <ProjectName>Guardian AI</ProjectName>
          <ProjectDescription>
            A machine learning solution to combat hate speech on social media, fostering a more respectful online environment.
            <br /> <strong>Tech Stack:</strong> Python, Pandas/NumPy.
          </ProjectDescription>
        </ProjectCard>
        
        <ProjectCard>
          <ProjectName>Smart Door Locking System</ProjectName>
          <ProjectDescription>
            An IoT-based door locking system utilizing a keypad and password for secure access, ideal for homes and offices.
            <br /> <strong>Tech Stack:</strong> Arduino IDE.
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard>
          <ProjectName>Arduino Bulwark</ProjectName>
          <ProjectDescription>
            A GPS tracking device designed to aid in the safety of dementia patients, utilizing smartphone technology and Arduino UNO.
            <br /> <strong>Tech Stack:</strong> Arduino IDE, Embedded Programming.
          </ProjectDescription>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
