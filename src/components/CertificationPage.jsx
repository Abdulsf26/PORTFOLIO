import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { motion, AnimatePresence } from "motion/react";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitlte from "../subComponents/BigTitlte";
import { Certifications } from "../data/CertificationData";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
    align-items: flex-start;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75vw;
  height: 65vh;
  position: absolute;
  left: calc(5rem + 5vw);
  top: 15rem;
  z-index: 3;

  @media (max-width: 1024px) {
    width: 80vw;
    left: calc(4rem + 3vw);
    top: 12rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 75vh;
    top: 9rem;
    left: 5%;
    width: 90%;
    gap: 1.5rem;
  }
`;

const CertList = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
  padding-right: 1.5rem;

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

  @media (max-width: 768px) {
    width: 100%;
    height: 48%;
    padding-right: 0.5rem;
  }
`;

const CertCard = styled(motion.div)`
  border: 2px solid ${(props) => (props.$active ? props.theme.text : `rgba(${props.theme.textRgba}, 0.2)`)};
  background-color: ${(props) => (props.$active ? `rgba(${props.theme.textRgba}, 0.15)` : `rgba(${props.theme.textRgba}, 0.03)`)};
  color: ${(props) => props.theme.text};
  padding: 1.5rem;
  cursor: pointer;
  border-radius: 4px;
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  min-height: 8rem;

  &:hover {
    border-color: ${(props) => props.theme.text};
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};
  }

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 6rem;
  }
`;

const CardTitle = styled.h3`
  font-family: "Karla", sans-serif;
  font-size: calc(0.85rem + 0.4vw);
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Ubuntu Mono", monospace;
  font-size: calc(0.65rem + 0.3vw);
  opacity: 0.7;
`;

const DetailsBox = styled(motion.div)`
  width: 45%;
  height: 100%;
  border: 2px solid ${(props) => props.theme.text};
  background-color: rgba(${(props) => props.theme.bodyRgba}, 0.65);
  backdrop-filter: blur(6px);
  z-index: 3;
  border-radius: 6px;
  box-shadow: 0px 8px 32px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 48%;
  }
`;

const CertImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.5rem;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const detailsVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 70 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const CertificationPage = () => {
  const [selectedCert, setSelectedCert] = useState(Certifications[0]);

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Container>
          <CertList
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {Certifications.map((cert) => (
              <CertCard
                key={cert.id}
                variants={cardVariants}
                $active={selectedCert.id === cert.id}
                onClick={() => setSelectedCert(cert)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CardTitle>{cert.name}</CardTitle>
                <CardMeta>
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </CardMeta>
              </CertCard>
            ))}
          </CertList>

          <AnimatePresence mode="wait">
            <DetailsBox
              key={selectedCert.id}
              variants={detailsVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {selectedCert.image && (
                <CertImage src={selectedCert.image} alt={selectedCert.name} />
              )}
            </DetailsBox>
          </AnimatePresence>
        </Container>

        <BigTitlte text="CERTS" top="10%" right="15%" />
      </Box>
    </ThemeProvider>
  );
};

export default CertificationPage;
