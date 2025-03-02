import { motion } from 'framer-motion';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaDiscord } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 26, 51, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 102, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background: rgba(0, 36, 71, 0.85);
    border-bottom: 1px solid rgba(0, 122, 255, 0.3);
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    filter: drop-shadow(0 0 8px rgba(0, 102, 255, 0.5));
    transition: all 0.3s ease;
    
    &:hover {
      transform: rotate(10deg);
      filter: drop-shadow(0 0 12px rgba(0, 122, 255, 0.7));
    }
  }
  
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    
    .highlight {
      color: #00a8ff;
      font-weight: 400;
      font-size: 1.5rem;
      margin-left: 0.2rem;
      opacity: 0.9;
    }
  }
`;

const LogoLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(motion.a)`
  font-size: 1rem;
  font-weight: 500;
  color: var(--light);
  position: relative;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient);
    transition: width 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 122, 255, 0.5);
  }
  
  &:hover {
    background: rgba(0, 102, 255, 0.1);
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 0 8px rgba(0, 122, 255, 0.5);
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const AddBotButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient);
  color: var(--white);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 122, 255, 0.6);
    
    &:before {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink 
        href="#home"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo>
          <img src="/nara-logo.png" alt="Nara Virtual Bot Logo" />
          <h1>
            Nara <span className="highlight">Virtual</span>
          </h1>
        </Logo>
      </LogoLink>
      
      <Nav>
        <NavLink
          href="#home"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          whileHover={{ scale: 1.05 }}
        >
          Home
        </NavLink>
        
        <NavLink
          href="#features"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ scale: 1.05 }}
        >
          Features
        </NavLink>
        
        <NavLink
          href="#commands"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          Commands
        </NavLink>
        
        <NavLink
          href="https://discord.gg/naravirtual"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          Support
        </NavLink>
        
        <AddBotButton
          href="https://discord.com/oauth2/authorize?client_id=1200505170300260392"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            {React.createElement(FaDiscord, { size: 20 })}
          </IconContext.Provider>
          Add to Discord
        </AddBotButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;