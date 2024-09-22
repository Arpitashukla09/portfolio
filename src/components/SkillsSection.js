import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const SkillsSection = () => {
  return (
    <SkillsContainer>
      <SectionTitle>My Skills</SectionTitle>
      <SkillsGrid>
        <SkillCard>
          <FontAwesomeIcon icon={faHtml5} size="3x" />
          <SkillText>HTML</SkillText>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faCss3Alt} size="3x" />
          <SkillText>CSS</SkillText>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faReact} size="3x" />
          <SkillText>React</SkillText>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faNodeJs} size="3x" />
          <SkillText>Node.js</SkillText>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faPython} size="3x" />
          <SkillText>Python</SkillText>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faBrain} size="3x" />
          <SkillText>Internet of Things</SkillText>
        </SkillCard>
      </SkillsGrid>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
  background-color: #121212;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 auto 4rem; /* Center with auto left/right margins */
  text-align: center; /* Center text */
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background-color: #1e1e1e;
  border: 2px solid #4a90e2;
  border-radius: 8px;
  padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }

  font-size: 1.2rem;
  color: #e0e0e0;
`;

const SkillText = styled.span`
  display: block; /* Ensures text is below the icon */
  margin-top: 0.5rem; /* Space between icon and text */
`;

export default SkillsSection;
