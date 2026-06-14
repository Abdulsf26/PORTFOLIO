import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { motion } from "motion/react";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import { Education } from "../data/EducationData";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65vw;
  height: 70vh;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    width: 85vw;
  }
`;

const Timeline = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 2rem 1rem;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(${(props) => props.theme.textRgba}, 0.05);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(${(props) => props.theme.textRgba}, 0.3);
    border-radius: 3px;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: ${(props) => props.theme.text};
  transform: translateX(-50%);
  opacity: 0.2;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${(props) => (props.$align === "left" ? "flex-end" : "flex-start")};
  width: 100%;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 45px;
  }
`;

const TimelineDot = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 1.5rem;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.text};
  border: 4px solid ${(props) => props.theme.body};
  z-index: 4;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const Card = styled(motion.div)`
  width: 45%;
  border: 2px solid ${(props) => props.theme.text};
  background-color: rgba(${(props) => props.theme.bodyRgba}, 0.8);
  color: ${(props) => props.theme.text};
  padding: 1.5rem;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    border-color: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DateText = styled.span`
  font-family: "Ubuntu Mono", monospace;
  font-size: calc(0.7rem + 0.3vw);
  font-weight: 700;
  opacity: 0.8;
  
  ${Card}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const Degree = styled.h3`
  font-family: "Karla", sans-serif;
  font-size: calc(0.9rem + 0.4vw);
  font-weight: 600;
  line-height: 1.3;
  
  ${Card}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const School = styled.h4`
  font-family: "Karla", sans-serif;
  font-size: calc(0.8rem + 0.3vw);
  font-weight: 500;
  opacity: 0.9;
  
  ${Card}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const Location = styled.span`
  font-family: "Ubuntu Mono", monospace;
  font-size: calc(0.65rem + 0.2vw);
  opacity: 0.7;
  
  ${Card}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const Details = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: calc(0.75rem + 0.2vw);
  line-height: 1.4;
  margin-top: 0.5rem;
  
  ${Card}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const Notes = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: calc(0.75rem + 0.2vw);
  font-style: italic;
  opacity: 0.85;
  margin-top: 0.25rem;
  
  ${Card}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 85,
    },
  },
};

const EducationPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Container>
          <Timeline
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <TimelineLine />
            {Education.map((edu, idx) => {
              const align = idx % 2 === 0 ? "left" : "right";
              return (
                <TimelineItem key={edu.id} $align={align} variants={itemVariants}>
                  <TimelineDot whileHover={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 300 }} />
                  <Card whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <DateText>{edu.date}</DateText>
                    <Degree>{edu.degree}</Degree>
                    <School>{edu.school}</School>
                    <Location>{edu.location}</Location>
                    {edu.details && <Details>{edu.details}</Details>}
                    {edu.notes && <Notes>{edu.notes}</Notes>}
                  </Card>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Container>

        <BigTitle text="EDUCATION" top="8%" left="15%" />
      </Box>
    </ThemeProvider>
  );
};

export default EducationPage;
