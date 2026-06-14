import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';

const HamburgerButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 100;
    position: fixed;
    top: 1rem;
    right: 1rem;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ theme, $isOpen, $themeProp }) => {
        if ($isOpen) return theme.body;
        if ($themeProp === 'dark') return theme.body;
        return theme.text;
      }};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'rotate(0)'};
      }

      :nth-child(2) {
        opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
        transform: ${({ $isOpen }) => $isOpen ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-child(3) {
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  }
`;

const MenuOverlay = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.text};
    height: 100dvh;
    width: 100vw;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
`;

const MenuLink = styled(NavLink)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: bold;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.body};
  text-decoration: none;
  transition: color 0.3s linear;
  font-family: 'Karla', sans-serif;

  &.active {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const MobileMenu = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <>
      <HamburgerButton $isOpen={isOpen} onClick={toggleMenu} $themeProp={theme}>
        <div />
        <div />
        <div />
      </HamburgerButton>

      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <MenuLink to="/" onClick={toggleMenu}>Home</MenuLink>
            <MenuLink to="/about" onClick={toggleMenu}>About</MenuLink>
            <MenuLink to="/skills" onClick={toggleMenu}>Skills</MenuLink>
            <MenuLink to="/work" onClick={toggleMenu}>Work</MenuLink>
            <MenuLink to="/blog" onClick={toggleMenu}>Blog</MenuLink>
            <MenuLink to="/education" onClick={toggleMenu}>Education</MenuLink>
            <MenuLink to="/certifications" onClick={toggleMenu}>Certs</MenuLink>
            <MenuLink to="/contact" onClick={toggleMenu}>Contact</MenuLink>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
