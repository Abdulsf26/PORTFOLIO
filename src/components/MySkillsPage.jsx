import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Design, Develope, Chart, Shield, CodeIcon } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
padding: 8rem 4rem 4rem 4rem;
box-sizing: border-box;
overflow-y: auto;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 450px));
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 100%;
min-height: 350px;
height:auto;
box-sizing: border-box;
z-index: 2;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <GridContainer>
                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> FULL STACK WEB DEVELOPER
                        </Title>
                        <Description>
                            I CREATE EFFICIENT,SECURE AND BEAUTIFUL WEBSITES.
                        </Description>
                        <Description>
                            <strong>MY TECH STACK</strong>
                            <ul>
                                <li>
                                    HTML,CSS,JS,PAYMENT GATEWAY,SEO,SERVER MANAGMENT,LOAD BALANCING.
                                </li>
                                <li>
                                    FRONTEND,BACKEND,DJANGO
                                </li>
                            </ul>
                        </Description>
                        <Description>
                            <strong>TOOLS</strong>
                            <ul>
                                <li>
                                    VERCEL,RENDER,SUPABASE,
                                    GITHUB,FIREBASE,AI TOOLS.
                                </li>

                            </ul>
                        </Description>

                    </Main>
                    <Main>
                        <Title>
                            <Chart width={40} height={40} /> DATA SCIENTIST.
                        </Title>
                        <Description>
                            I TURN DATA INTO ACTIONABLE INSIGHTS AND PREDICTIVE MODELS.
                        </Description>
                        <Description>
                            <strong>SKILLS</strong>
                            <p>
                                PYTHON,NUMPY,PANDAS,MATLAB,
                                SQL,STATISTICS,DATA VISUALIZATION.
                            </p>
                        </Description>
                        <Description>
                            <strong>TOOLS</strong>
                            <p>
                                POWER BI,TABLEAU,GOOGLE COLLAB,AI TOOLS.
                            </p>
                        </Description>

                    </Main>
                    <Main>
                        <Title>
                            <Shield width={40} height={40} /> CYBER SECURITY
                        </Title>
                        <Description>
                            SECURE YOUR DIGITAL FRONTIERS WITH EXPERT CYBERSECURITY SOLUTIONS.
                        </Description>
                        <Description>
                            <strong>SKILLS</strong>
                            <p>
                                LINUX,NETWORKING,WEB PENTESTING
                                ATTACK/DEFENSE,FORENSICS,AI TOOLS.
                            </p>
                        </Description>
                        <Description>
                            <strong>TOOLS</strong>
                            <p>
                                BURP,ZAP,NMAP,MALTEGO,
                                WIRESHARK,METASPLOIT,KALI LINUX.
                            </p>
                        </Description>

                    </Main>
                    <Main>
                        <Title>
                            <CodeIcon width={40} height={40} /> OTHERS
                        </Title>

                        <Description>
                            <strong>LANGUAGES</strong>
                            <p>
                                C,C++,JAVA,HTML,
                                CSS,JS,PYTHON,
                                SQL,DART,OOPS,DSA,
                                DJANGO,REACT.JS,NODE.JS,
                                ALGORITHMS,UI/UX.
                            </p>
                        </Description>
                        <Description>
                            <strong>APPS</strong>
                            <p>
                                GITHUB,
                                TEMPLATES,
                                LINUX COMMANDS.
                            </p>
                        </Description>

                    </Main>
                </GridContainer>

                <BigTitle text="SKILLS" top="80%" right="30%" />

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
