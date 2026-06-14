import { motion } from 'motion/react';
import React from 'react';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1.5px solid ${props => `rgba(${props.theme.textRgba}, 0.15)`};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
  min-height: 280px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.theme.text};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${props => `rgba(${props.theme.textRgba}, 0.4)`};
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
    transform: translateY(-6px);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const NumberBadge = styled.span`
  font-family: 'Ubuntu Mono', monospace;
  font-size: 0.7rem;
  color: ${props => `rgba(${props.theme.textRgba}, 0.35)`};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  display: block;
`;

const Title = styled.h2`
  font-size: 1.05rem;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.text};
`;

const Description = styled.p`
  font-size: 0.83rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  line-height: 1.65;
  color: ${props => `rgba(${props.theme.textRgba}, 0.65)`};
  flex: 1;
  margin-bottom: 1.25rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.4rem;
`;

const Tag = styled.span`
  font-size: 0.65rem;
  font-family: 'Ubuntu Mono', monospace;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid ${props => `rgba(${props.theme.textRgba}, 0.2)`};
  color: ${props => `rgba(${props.theme.textRgba}, 0.55)`};
  letter-spacing: 0.5px;
  background: ${props => `rgba(${props.theme.textRgba}, 0.04)`};
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => `rgba(${props.theme.textRgba}, 0.1)`};
`;

const PreviewBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  font-size: 0.8rem;
  font-family: 'Karla', sans-serif;
  font-weight: 600;
  letter-spacing: 0.4px;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.82;
    transform: translateY(-1px);
  }
`;

const NoPreview = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: ${props => `rgba(${props.theme.textRgba}, 0.3)`};
  padding: 0.5rem 1rem;
  border-radius: 7px;
  font-size: 0.75rem;
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  border: 1px dashed ${props => `rgba(${props.theme.textRgba}, 0.18)`};
`;

const GitBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 1.5px solid ${props => `rgba(${props.theme.textRgba}, 0.2)`};
  color: ${props => props.theme.text};
  text-decoration: none;
  transition: all 0.2s ease;
  flex-shrink: 0;
  background: transparent;

  &:hover {
    border-color: ${props => props.theme.text};
    background: ${props => `rgba(${props.theme.textRgba}, 0.06)`};
    transform: translateY(-1px);
  }
`;

// Framer motion config
const Item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
    }
  }
};

const Card = (props) => {
  const { id, name, description, tags, demo, github, hasDemo, hasGithub } = props.data;

  return (
    <Box variants={Item} whileHover={{ scale: 1.01 }}>
      <div>
        <NumberBadge>Project 0{id}</NumberBadge>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Tags>
          {tags.map((t, idx) => (
            <Tag key={idx}>#{t}</Tag>
          ))}
        </Tags>
      </div>
      <Footer>
        {hasDemo ? (
          <PreviewBtn href={demo} target="_blank" rel="noopener noreferrer">
            ↗ Preview
          </PreviewBtn>
        ) : (
          <NoPreview>In Progress</NoPreview>
        )}
        {hasGithub && (
          <GitBtn href={github} target="_blank" rel="noopener noreferrer">
            <Github width={18} height={18} fill="currentColor" />
          </GitBtn>
        )}
      </Footer>
    </Box>
  );
};

export default Card;
