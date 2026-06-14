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

@media (max-width: 768px) {
  overflow-y: auto;
  height: auto;
  min-height: 100vh;
}
`

const Container = styled.div`
padding: 2rem;

@media (max-width: 768px) {
  padding: 1rem;
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
  font-size: 0.8rem;
  top: 1rem;
  right: 1rem;
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
  bottom: 0.5rem;
}
`

const ABOUT = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;

@media (max-width: 768px) {
  font-size: 0.85rem;
}
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;

@media (max-width: 768px) {
  font-size: 0.85rem;
}
`

// Mobile nav grid shown only on mobile
const MobileNav = styled.div`
display: none;

@media (max-width: 768px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  padding: 1rem;
  margin-top: 11rem;
  position: relative;
  z-index: 3;
}
`

const MobileNavItem = styled(NavLink)`
  color: ${props => props.$click ? props.theme.body : props.theme.text};
  text-decoration: none;
  border: 1.5px solid ${props => props.$click ? props.theme.body : props.theme.text};
  padding: 0.75rem;
  text-align: center;
  font-family: 'Karla', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
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
  top: ${props => props.$click ? '10%' : '35%'};
  left: 50%;

  &>:first-child {
    width: 100px;
    height: 100px;
  }
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


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <DarkDiv $click={click} />
            <Container>
                <PowerButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />

                <Center $click={click}>
                    <YinYang onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                    <span>CLICK HERE</span>
                </Center>

                {/* Desktop nav items (rotated, side) */}
                <CERTIFICATIONS to="/certifications">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        CERTIFICATIONS
                    </motion.h2>
                </CERTIFICATIONS>

                <Contact to="/contact">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        CONTACT ME
                    </motion.h2>
                </Contact>
                <BLOG to="/blog" $click={click}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        BLOG
                    </motion.h2>
                </BLOG>
                <WORK to="/work">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        WORK
                    </motion.h2>
                </WORK>
                <EDUCATION to="/education" $click={click}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        EDUCATION
                    </motion.h2>
                </EDUCATION>

                {/* Mobile nav grid */}
                <MobileNav>
                    <MobileNavItem to="/about" $click={click}>ABOUT</MobileNavItem>
                    <MobileNavItem to="/skills">MY SKILLS</MobileNavItem>
                    <MobileNavItem to="/work">WORK</MobileNavItem>
                    <MobileNavItem to="/blog" $click={click}>BLOG</MobileNavItem>
                    <MobileNavItem to="/education" $click={click}>EDUCATION</MobileNavItem>
                    <MobileNavItem to="/certifications">CERTIFICATIONS</MobileNavItem>
                    <MobileNavItem to="/contact" style={{ gridColumn: 'span 2' }}>CONTACT ME</MobileNavItem>
                </MobileNav>

                <BottomBar>
                    <ABOUT to="/about" $click={click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ABOUT
                        </motion.h2>
                    </ABOUT>
                    <SKILLS to="/skills">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            MY SKILLS.
                        </motion.h2>
                    </SKILLS>

                </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main
