import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { motion } from "motion/react";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import { Github } from "./AllSvgs";

import { Work } from "../data/WorkData";

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 8rem 4rem 4rem 4rem;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 5rem 1rem 3rem 1rem;
    height: auto;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 450px));
  gap: 2rem;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const Card = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 100%;
  min-height: 350px;
  height: auto;
  box-sizing: border-box;
  z-index: 2;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`;

const CardTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: calc(1em + 0.7vw);
  margin-bottom: 1rem;
`;

const NumberBadge = styled.span`
  font-size: 0.7rem;
  letter-spacing: 3px;
  opacity: 0.4;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 0.8vw);
  padding: 0.5rem 0;
  flex: 1;

  ${Card}:hover & {
    color: ${props => props.theme.body};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => `rgba(${props.theme.textRgba}, 0.2)`};

  ${Card}:hover & {
    border-top: 1px solid ${props => `rgba(${props.theme.bodyRgba}, 0.3)`};
  }
`;

const Tag = styled.span`
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  opacity: 0.7;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const PreviewBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0.55rem 1rem;
  font-size: calc(0.5em + 0.7vw);
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid currentColor;
  color: inherit;
  letter-spacing: 0.5px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const NoPreview = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0.55rem 1rem;
  font-size: calc(0.5em + 0.6vw);
  font-family: 'Ubuntu Mono', monospace;
  opacity: 0.35;
  border: 1px dashed currentColor;
  letter-spacing: 0.5px;
`;

const GitBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid currentColor;
  color: inherit;
  text-decoration: none;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    opacity: 0.7;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

const WorkPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <GridContainer
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {Work.map((d) => (
            <Card key={d.id} variants={item} whileHover={{ scale: 1.01 }}>
              <div>
                <NumberBadge>Project 0{d.id}</NumberBadge>
                <CardTitle>{d.name}</CardTitle>
                <Description>{d.description}</Description>
                <Tags>
                  {d.tags.map((t, idx) => (
                    <Tag key={idx}>#{t}</Tag>
                  ))}
                </Tags>
              </div>
              <Footer>
                {d.hasDemo ? (
                  <PreviewBtn href={d.demo} target="_blank" rel="noopener noreferrer">
                    ↗ PREVIEW
                  </PreviewBtn>
                ) : (
                  <NoPreview>IN PROGRESS</NoPreview>
                )}
                {d.hasGithub && (
                  <GitBtn href={d.github} target="_blank" rel="noopener noreferrer">
                    <Github width={20} height={20} />
                  </GitBtn>
                )}
              </Footer>
            </Card>
          ))}
        </GridContainer>

        <BigTitle text="WORK" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
