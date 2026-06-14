import { motion } from 'motion/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
    ;


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
width: 100%;
height: 100%;
position: relative;

@media (max-width: 768px) {
  display: none;
}
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;

@media (max-width: 768px) {
  display: none;
}
`;

const CERTIFICATIONS = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 35%;
  right: calc(1rem + 2vw);
  transform: translate(50%, -50%) rotate(90deg);
  text-decoration: none;
  z-index:1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BLOG = styled(NavLink)`
  color: ${props => props.$click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 58%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index:1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const WORK = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 58%;
  right: calc(1rem + 2vw);
  transform: translate(50%, -50%) rotate(90deg);
  text-decoration: none;
  z-index:1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const EDUCATION = styled(NavLink)`
  color: ${props => props.$click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 35%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index:1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;

@media (max-width: 768px) {
  display: none;
}
`

const ABOUT = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.$click ? '85%' : '50%'};
left: ${props => props.$click ? '92%' : '50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.$click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}

@media (max-width: 768px) {
  display: none;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.$click ? '50%' : '0%'};
height: ${props => props.$click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;

@media (max-width: 768px) {
  display: none;
}
`

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100dvh;
    background: linear-gradient(135deg, ${props => props.theme.body} 0%, #e2dcd9 100%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`

const Main = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const isMobile = window.innerWidth <= 768;

    return (
        <MainContainer>
            {/* DESKTOP LAYOUT */}
            <DarkDiv $click={click} />
            <Container className="desktop-container">
                <PowerButton theme={click ? 'dark' : 'light'} />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />

                <Center $click={click}>
                    <YinYang onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                    <span>CLICK HERE</span>
                </Center>

                <CERTIFICATIONS to="/certifications">
                    <motion.h2 initial={{ y: -200 }} animate={{ y: 0 }} transition={{ type: 'spring', duration: 1.5, delay: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        CERTIFICATIONS
                    </motion.h2>
                </CERTIFICATIONS>

                <Contact to="/contact">
                    <motion.h2 initial={{ y: -200 }} animate={{ y: 0 }} transition={{ type: 'spring', duration: 1.5, delay: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        CONTACT ME
                    </motion.h2>
                </Contact>
                
                <BLOG to="/blog" $click={click}>
                    <motion.h2 initial={{ y: -200 }} animate={{ y: 0 }} transition={{ type: 'spring', duration: 1.5, delay: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        BLOG
                    </motion.h2>
                </BLOG>
                
                <WORK to="/work">
                    <motion.h2 initial={{ y: -200 }} animate={{ y: 0 }} transition={{ type: 'spring', duration: 1.5, delay: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        WORK
                    </motion.h2>
                </WORK>
                
                <EDUCATION to="/education" $click={click}>
                    <motion.h2 initial={{ y: -200 }} animate={{ y: 0 }} transition={{ type: 'spring', duration: 1.5, delay: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        EDUCATION
                    </motion.h2>
                </EDUCATION>

                <BottomBar>
                    <ABOUT to="/about" $click={click}>
                        <motion.h2 initial={{ y: 200 }} animate={{ y: 0 }} transition={{ type: 'spring', duration: 1.5, delay: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            ABOUT
                        </motion.h2>
                    </ABOUT>
                    <SKILLS to="/skills">
                        <motion.h2 initial={{ y: 200 }} animate={{ y: 0 }} transition={{ type: 'spring', duration: 1.5, delay: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            MY SKILLS.
                        </motion.h2>
                    </SKILLS>
                </BottomBar>

            </Container>
            
            {/* Render Intro only on Desktop when clicked */}
            {!isMobile && click ? <Intro click={click} /> : null}

            {/* MOBILE ONLY LAYOUT */}
            {isMobile && (
              <MobileContainer>
                 <PowerButton theme="light" />
                 <LogoComponent theme="light" />
                 <Intro isMobile={true} />
              </MobileContainer>
            )}

        </MainContainer>
    )
}

export default Main

