import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/astronaut.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;

@media (max-width: 768px) {
  height: auto;
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}

@media (max-width: 768px) {
  width: 40vw;
  top: 2%;
  right: 2%;
  opacity: 0.3;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  @media (max-width: 768px) {
    position: relative;
    left: unset;
    top: unset;
    width: 90vw;
    height: auto;
    margin: 6rem auto 2rem auto;
    font-size: 0.95rem;
    padding: 1.5rem;
  }
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                <Main>
                    Skilled in Data Analytics, Web Application Penetration Testing, and Full-Stack Web Development, with hands-on experience in building and securing web applications.<br /> <br />
                    Experienced in analyzing data, identifying security vulnerabilities, and developing scalable solutions to address real-world challenges.<br /> <br />
                    Strong team player with excellent analytical, communication, and technical skills, eager to contribute to impactful technology projects.

                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" />


            </Box>

        </ThemeProvider>

    )
}

export default AboutPage
