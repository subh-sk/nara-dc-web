import { motion } from 'framer-motion';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaDiscord, FaRobot } from 'react-icons/fa';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.1) 0%, rgba(0, 26, 51, 0) 70%);
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  width: 100%;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--light);
  margin-bottom: 2.5rem;
  max-width: 700px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 102, 255, 0.4);
  }
`;

const SecondaryButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 102, 255, 0.1);
  color: var(--light);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  border: 1px solid rgba(0, 102, 255, 0.3);
  
  &:hover {
    background: rgba(0, 102, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const BotImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin-top: 2rem;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 20px;
    background: radial-gradient(ellipse at center, rgba(0, 102, 255, 0.3) 0%, rgba(0, 26, 51, 0) 70%);
    border-radius: 50%;
    filter: blur(10px);
  }
`;

const BotImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: url('/nara-bot.png') no-repeat center center;
  background-size: contain;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: var(--primary);
  opacity: 0.7;
  z-index: -1;
`;

const Hero = () => {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <HeroSection id="home">
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Meet Nara, Your Ultimate Discord Companion
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Enhance your Discord server with powerful AI tools, moderation features, music commands, and much more.
          </Subtitle>
          
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <PrimaryButton 
              href="https://discord.com/oauth2/authorize?client_id=1200505170300260392"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {React.createElement(FaDiscord, { size: 20 })}
              Add to Discord
            </PrimaryButton>
            
            <SecondaryButton 
              href="https://discord.gg/naravirtual"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {React.createElement(FaDiscord, { size: 20 })}
              Join Support Server
            </SecondaryButton>
          </ButtonGroup>
          
          <BotImageContainer
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <BotImage 
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut" 
              }}
            />
            
            {/* Floating icons around the bot image */}
            {[...Array(12)].map((_, i) => (
              <FloatingIcon
                key={i}
                style={{
                  top: `${Math.random() * 120 - 10}%`,
                  left: `${Math.random() * 120 - 10}%`,
                  fontSize: `${Math.random() * 30 + 15}px`,
                  opacity: Math.random() * 0.5 + 0.3
                }}
                animate={{
                  y: [0, Math.random() * 50 - 25, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  rotate: [0, Math.random() > 0.5 ? 360 : -360],
                  scale: [1, Math.random() * 0.4 + 0.8, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: Math.random() * 8 + 4,
                  ease: "easeInOut"
                }}
              >
                {React.createElement(FaRobot)}
              </FloatingIcon>
            ))}
          </BotImageContainer>
        </HeroContent>
      </HeroSection>
    </IconContext.Provider>
  );
};

export default Hero;