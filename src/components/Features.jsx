import { motion } from 'framer-motion';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaGamepad, FaMicrophone, FaMusic, FaRobot, FaShieldAlt, FaTools } from 'react-icons/fa';
import styled from 'styled-components';

    
const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background-color: rgba(0, 26, 51, 0.7);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 30%, rgba(0, 102, 255, 0.1) 0%, rgba(0, 26, 51, 0) 70%);
    z-index: 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(0, 26, 51, 0.5);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 102, 255, 0.2);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 102, 255, 0.3);
    border-color: rgba(0, 102, 255, 0.5);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 102, 255, 0.3);
  
  svg {
    font-size: 2.5rem;
    color: var(--white);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--light);
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: var(--light);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  text-align: left;
  width: 100%;
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
    color: var(--light);
    opacity: 0.9;
    
    &:before {
      content: '•';
      color: var(--primary);
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    <FeaturesSection id="features">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Powerful Features
      </SectionTitle>
      
      <FeaturesContainer
        as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <FeatureCard variants={item}>
          <FeatureIcon>
          <FaRobot size={40} />
          </FeatureIcon>
          <FeatureTitle>Artificial Intelligence</FeatureTitle>
          <FeatureDescription>
            Leverage cutting-edge AI capabilities to enhance your Discord server experience.
          </FeatureDescription>
          <FeatureList>
            <li>Advanced conversation with TalkAI</li>
            <li>Image generation and manipulation</li>
            <li>Image enhancement and retouching</li>
            <li>Inpainting and outpainting capabilities</li>
          </FeatureList>
        </FeatureCard>
        
        <FeatureCard variants={item}>
          <FeatureIcon>
            {React.createElement(FaShieldAlt)}
          </FeatureIcon>
          <FeatureTitle>Moderation</FeatureTitle>
          <FeatureDescription>
            Keep your server safe and well-managed with powerful moderation tools.
          </FeatureDescription>
          <FeatureList>
            <li>Auto-moderation of inappropriate content</li>
            <li>User management and role assignment</li>
            <li>Server security and anti-raid protection</li>
            <li>Customizable warning and mute systems</li>
          </FeatureList>
        </FeatureCard>
        
        <FeatureCard variants={item}>
          <FeatureIcon>
            {React.createElement(FaMusic)}
          </FeatureIcon>
          <FeatureTitle>Music</FeatureTitle>
          <FeatureDescription>
            Enhance your voice channels with high-quality music playback and controls.
          </FeatureDescription>
          <FeatureList>
            <li>Play music from various sources</li>
            <li>Create and manage playlists</li>
            <li>Audio filters and equalizer</li>
            <li>Lyrics display and search</li>
          </FeatureList>
        </FeatureCard>
        
        <FeatureCard variants={item}>
          <FeatureIcon>
            {React.createElement(FaGamepad)}
          </FeatureIcon>
          <FeatureTitle>Mini Games</FeatureTitle>
          <FeatureDescription>
            Entertain your server members with fun and engaging mini-games.
          </FeatureDescription>
          <FeatureList>
            <li>Trivia and quiz competitions</li>
            <li>Economy and currency system</li>
            <li>Interactive challenges</li>
            <li>Multiplayer games for server engagement</li>
          </FeatureList>
        </FeatureCard>
        
        <FeatureCard variants={item}>
          <FeatureIcon>
            {React.createElement(FaTools)}
          </FeatureIcon>
          <FeatureTitle>Utility</FeatureTitle>
          <FeatureDescription>
            Practical tools to enhance server functionality and user experience.
          </FeatureDescription>
          <FeatureList>
            <li>Server statistics and analytics</li>
            <li>Custom commands and automation</li>
            <li>Polls and voting systems</li>
            <li>Reminders and scheduled messages</li>
          </FeatureList>
        </FeatureCard>
        
        <FeatureCard variants={item}>
          <FeatureIcon>
          <FaMicrophone />
          </FeatureIcon>
          <FeatureTitle>Voice Features</FeatureTitle>
          <FeatureDescription>
            Enhance your voice channels with special features and utilities.
          </FeatureDescription>
          <FeatureList>
            <li>Voice activity tracking</li>
            <li>Voice channel management</li>
            <li>Text-to-speech capabilities</li>
            <li>Voice effects and soundboard</li>
          </FeatureList>
        </FeatureCard>
      </FeaturesContainer>
    </FeaturesSection>
    </IconContext.Provider>
  );
};

export default Features;