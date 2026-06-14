import React from 'react'
import styled from 'styled-components'
import { motion } from 'motion/react'
import Me from '../assets/Images/Profile.png'


const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height: 55vh;
display: flex;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    z-index:1;

@media (max-width: 768px) {
  width: 90vw;
  height: 60vh;
  min-height: 50vh;
  flex-direction: column;
  top: 50%;
  
  background: linear-gradient(
    to bottom,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) right,
    linear-gradient(
    to bottom,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) left;
  background-repeat: no-repeat;
  background-size: 2px 100%;
  border-left: none;
  border-right: none;
  border-top: 2px solid ${props => props.theme.body};
  border-bottom: 2px solid ${props => props.theme.text};
}
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}

@media (max-width: 768px) {
  width: 100%;
  height: 50%;
  
  &:last-child {
    height: 50%;
    overflow: hidden;
  }
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}

@media (max-width: 768px) {
  font-size: 1rem;
  padding: 1.25rem;

  &>*:last-child {
    font-size: 0.75rem;
  }
}
`

const MobileBox = styled(motion.div)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 85vw;
    height: 70dvh;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 2rem 1rem 0 1rem;
    margin-top: 4rem;
    z-index: 1;
    overflow: hidden;
  }
`

const MobileText = styled.div`
  text-align: center;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 { font-size: 2.5rem; font-weight: bold; }
  h3 { font-size: 1.2rem; margin-top: 0.5rem; }
  h6 { font-size: 0.75rem; margin-top: 1rem; color: rgba(0,0,0,0.7); font-weight: 400; line-height: 1.5; }
`

const MobileImageContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 1rem;
  
  .pic {
    width: 100%;
    max-height: 35vh;
    object-fit: contain;
  }
`

const Intro = ({ isMobile }) => {
    if (isMobile) {
        return (
            <MobileBox
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
            >
                <MobileText>
                    <h1>Hi,</h1>
                    <h3>I'm Abdul Rahuman</h3>
                    <h6>DATA SCIENTIST | FULL STACK DEVELOPER | CYBER SECURITY EXPERT | IT SUPPORT ENGINEER.</h6>
                </MobileText>
                <MobileImageContainer>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                    >
                        <img className="pic" src={Me} alt="Profile Pic" />
                    </motion.div>
                </MobileImageContainer>
            </MobileBox>
        )
    }

    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Abdul Rahuman</h3>
                    <h6>DATA SCIENTIST | FULL STACK DEVELOPER | CYBER SECURITY EXPERT | IT SUPPORT ENGINEER.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
