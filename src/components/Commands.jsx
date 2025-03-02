import { motion } from 'framer-motion';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaGamepad, FaLaugh, FaMicrophone, FaMusic, FaRobot, FaShieldAlt, FaStar, FaTools } from 'react-icons/fa';
import styled from 'styled-components';

const CommandsSection = styled.section`
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
    background: radial-gradient(circle at 70% 30%, rgba(0, 102, 255, 0.1) 0%, rgba(0, 26, 51, 0) 70%);
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

const CommandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CategoryContainer = styled(motion.div)`
  background: rgba(0, 26, 51, 0.5);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 102, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 102, 255, 0.3);
    border-color: rgba(0, 102, 255, 0.5);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 102, 255, 0.3);
  padding-bottom: 1rem;
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 102, 255, 0.3);
  
  svg {
    font-size: 1.8rem;
    color: var(--white);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--light);
  display: flex;
  flex-direction: column;
`;

const CategoryDescription = styled.span`
  font-size: 1rem;
  opacity: 0.8;
  font-weight: normal;
`;

const CommandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CommandCard = styled.div`
  background: rgba(0, 26, 51, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(0, 102, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 102, 255, 0.5);
    box-shadow: 0 8px 20px rgba(0, 102, 255, 0.2);
  }
`;

const CommandName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-light);
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
`;

const CommandDescription = styled.p`
  font-size: 0.9rem;
  color: var(--light);
  opacity: 0.9;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const CommandSyntax = styled.code`
  display: block;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.75rem;
  border-radius: 5px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
  word-break: break-all;
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

const Commands = () => {
  const commandCategories = [
    {
      name: "Artificial Intelligence",
      description: "Innovative AI tools for enhanced functionality.",
      icon: <FaRobot size={28} />,
      commands: [
        {
          name: "talkai",
          syntax: "talkai",
          description: "No help found..."
        },
        {
          name: "generate",
          syntax: "generate",
          description: "Lists all available subcommands."
        },
        {
          name: "generate fill",
          syntax: "generate fill <image (upload a file)> <mask (upload a file)> <prompt>",
          description: "Inpaints the image from the given image and mask."
        },
        {
          name: "generate enhanced",
          syntax: "generate enhanced <image (upload a file)>",
          description: "Enhances the image from the given image."
        },
        {
          name: "generate retouch",
          syntax: "generate retouch <image (upload a file)> <mask (upload a file)>",
          description: "Erase unwanted objects or elements from an image."
        },
        {
          name: "generate resized",
          syntax: "generate resized <image (upload a file)> <mask (upload a file)> <prompt>",
          description: "Outpaints the image from the given image and mask."
        },
        {
          name: "generate background",
          syntax: "generate background <image (upload a file)> <flags>",
          description: "Add backgrounds to transparent images."
        },
        {
          name: "generate backgroundless",
          syntax: "generate backgroundless <image (upload a file)>",
          description: "Removes the background from the given image."
        },
        {
          name: "generate content",
          syntax: "generate content [attachment (upload a file)] <message>",
          description: "Generates content on the given message."
        },
        {
          name: "generate translation",
          syntax: "generate translation [source]",
          description: "Translate the given text or referenced message content."
        },
        {
          name: "generate transparent",
          syntax: "generate transparent <flags>",
          description: "Generates a image with transparent background."
        },
        {
          name: "generate image",
          syntax: "generate image <flags>",
          description: "Generates an image on the given prompt."
        }
      ]
    },
    {
      name: "Moderation",
      description: "Keep your server safe and well-managed.",
      icon: <FaShieldAlt size={28} />,
      commands: [
        {
          name: "purge",
          syntax: "purge <amount> <flags>",
          description: "Clears the specified amount of messages"
        },
        {
          name: "role",
          syntax: "role",
          description: "Lists the available sub-commands."
        },
        {
          name: "role menu",
          syntax: "role menu [users]... [reason=Not Provided]",
          description: "An interactive menu to add or remove roles for users."
        },
        {
          name: "vc",
          syntax: "vc",
          description: "Lists the available sub-commands."
        },
        {
          name: "vc kick",
          syntax: "vc kick [users]...",
          description: "Remove the provided users from the voice channel."
        },
        {
          name: "vc pull",
          syntax: "vc pull [users]...",
          description: "No help found..."
        },
        {
          name: "nick",
          syntax: "nick <user> <flags>",
          description: "Allows to change the nick name of specified member."
        },
        {
          name: "ban",
          syntax: "ban [users]... <flags>",
          description: "Ban one or more users from the server with optional proof and notifications."
        },
        {
          name: "ban remove",
          syntax: "ban remove [users]... <flags>",
          description: "Unban one or more users from the server"
        }
      ]
    },
    {
      name: "Utility",
      description: "Handy commands for various useful tasks and functions.",
      icon: <FaTools size={28} />,
      commands: [
        {
          name: "user",
          syntax: "user",
          description: "Provides commands to retrieve information about a user."
        },
        {
          name: "user banner",
          syntax: "user banner [user=<you>]",
          description: "Shows the banner for a user."
        },
        {
          name: "user avatar",
          syntax: "user avatar [user=<you>]",
          description: "Retrieve the avatar of the specified user."
        },
        {
          name: "server",
          syntax: "server",
          description: "Lists all available sub-commands for this command."
        },
        {
          name: "server icon",
          syntax: "server icon",
          description: "Retrieve the icon of the server."
        },
        {
          name: "server banner",
          syntax: "server banner",
          description: "Retrieves the server banner."
        }
      ]
    },
    {
      name: "Music",
      description: "Enhance your voice channels with music playback.",
      icon: <FaMusic size={28} />,
      commands: [
        {
          name: "play",
          syntax: "play <query>",
          description: "Plays the requested song."
        },
        {
          name: "skip",
          syntax: "skip",
          description: "Skips the playing song."
        },
        {
          name: "nightcore",
          syntax: "nightcore",
          description: "Set the filter to a nightcore style."
        },
        {
          name: "toggle",
          syntax: "toggle",
          description: "Toggle the Player depending on its current state."
        },
        {
          name: "volume",
          syntax: "volume <value>",
          description: "Changes the music volume."
        },
        {
          name: "disconnect",
          syntax: "disconnect",
          description: "Disconnect the voice channel."
        }
      ]
    },
    {
      name: "Mini Games",
      description: "Fun games to entertain your server members.",
      icon: <FaGamepad size={28} />,
      commands: [
        {
          name: "truth",
          syntax: "truth [rating=TODRating.PG]",
          description: "Share a question that has to be answered truthfully."
        },
        {
          name: "dare",
          syntax: "dare [rating=TODRating.PG]",
          description: "Gives a dare that has to be completed."
        },
        {
          name: "truthordare",
          syntax: "truthordare [rating=TODRating.PG]",
          description: "Share a random question from any tod category."
        },
        {
          name: "random",
          syntax: "random [rating=TODRating.PG]",
          description: "Gives a random question from any category."
        },
        {
          name: "paranoia",
          syntax: "paranoia [rating=TODRating.PG]",
          description: "Gives a random paranoia question."
        },
        {
          name: "nhie",
          syntax: "nhie [rating=TODRating.PG]",
          description: "Gives a random Never Have I Ever question"
        },
        {
          name: "wyr",
          syntax: "wyr [rating=TODRating.PG]",
          description: "Gives a random Would You Rather question."
        },
        {
          name: "tictactoe",
          syntax: "tictactoe <user>",
          description: "Starts a tic tac toe game with specified user."
        }
      ]
    },
    {
      name: "Voice Features",
      description: "Manage voice channels and enhance voice interactions.",
      icon: <FaMicrophone size={28} />,
      commands: [
        {
          name: "join",
          syntax: "join",
          description: "Joins the voice channel you are in."
        },
        {
          name: "speak",
          syntax: "speak <text>",
          description: "Speak the provided text in the voice channel."
        }
      ]
    },
    {
      name: "Fun",
      description: "Exciting commands for entertaining interactions.",
      icon: <FaLaugh size={28} />,
      commands: [
        {
          name: "echo",
          syntax: "echo <message>",
          description: "Sends the message provided by the user."
        },
        {
          name: "advice",
          syntax: "advice",
          description: "Shares a random advice."
        },
        {
          name: "compliment",
          syntax: "compliment [user=<you>]",
          description: "Shares a random compliment."
        },
        {
          name: "nationalize",
          syntax: "nationalize <name>",
          description: "Guesses someone's nationality by their name"
        },
        {
          name: "picture",
          syntax: "picture <query>",
          description: "Shows a picture of the requested query."
        },
        {
          name: "wanted",
          syntax: "wanted <user>",
          description: "Shows a wanted poster of the requested user for fun."
        },
        {
          name: "slap",
          syntax: "slap <user>",
          description: "Slaps the specified user."
        },
        {
          name: "hug",
          syntax: "hug <user>",
          description: "Hugs the specified user."
        },
        {
          name: "pat",
          syntax: "pat <user>",
          description: "Pats the specified user."
        },
        {
          name: "kill",
          syntax: "kill <user>",
          description: "Kills (fun) the specified user."
        },
        {
          name: "lick",
          syntax: "lick <user>",
          description: "Licks the specified user."
        },
        {
          name: "wave",
          syntax: "wave <user>",
          description: "Waves at the specified user."
        }
      ]
    },
    {
      name: "Extra Commands",
      description: "Additional useful commands and features.",
      icon: <FaStar size={28} />,
      commands: [
        {
          name: "cricket",
          syntax: "cricket",
          description: "Shares the live cricket information."
        },
        {
          name: "premium",
          syntax: "premium",
          description: "Lists the available subcommands."
        },
        {
          name: "premium purchase",
          syntax: "premium purchase",
          description: "No help found..."
        },
        {
          name: "overview",
          syntax: "overview",
          description: "No help found..."
        },
        {
          name: "news",
          syntax: "news <flags>",
          description: "Shares the news from the BBC Services according to your need"
        },
        {
          name: "affirmation",
          syntax: "affirmation",
          description: "Shares a random affirmation."
        },
        {
          name: "invite",
          syntax: "invite",
          description: "Provides the link to add the app to your server."
        },
        {
          name: "weather",
          syntax: "weather <location>",
          description: "Retrieves weather information in the specified location."
        },
        {
          name: "uptime",
          syntax: "uptime",
          description: "Shows the duration for which the bot has been online since it was last started."
        },
        {
          name: "device",
          syntax: "device [member=<you>]",
          description: "Gives the status of a user is in a Desktop or a Mobile."
        },
        {
          name: "app",
          syntax: "app",
          description: "No help found..."
        },
        {
          name: "app invites",
          syntax: "app invites [user=<you>]",
          description: "Gives a list of app invites."
        },
        {
          name: "app info",
          syntax: "app info",
          description: "Retrieves the app information."
        },
        {
          name: "app ping",
          syntax: "app ping",
          description: "Get instant insights into app stats."
        },
        {
          name: "viewthumbnail",
          syntax: "viewthumbnail <video_url>",
          description: "Retrieves thumbnail of the specified url."
        },
        {
          name: "help",
          syntax: "help [command]",
          description: "Shows help about the app, a command, or a category"
        }
      ]
    }
  ];

  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <CommandsSection id="commands">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Commands
        </SectionTitle>
        
        <CommandsContainer
          as={motion.div}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {commandCategories.map((category, index) => (
            <CategoryContainer key={index} variants={item}>
              <CategoryHeader>
                <CategoryIcon>
                  {category.icon}
                </CategoryIcon>
                <CategoryTitle>
                  {category.name}
                  <CategoryDescription>{category.description}</CategoryDescription>
                </CategoryTitle>
              </CategoryHeader>
              
              <CommandsGrid>
                {category.commands.map((command, cmdIndex) => (
                  <CommandCard key={cmdIndex}>
                    <CommandName>{command.name}</CommandName>
                    <CommandSyntax>{command.syntax}</CommandSyntax>
                    <CommandDescription>{command.description}</CommandDescription>
                  </CommandCard>
                ))}
              </CommandsGrid>
            </CategoryContainer>
          ))}
        </CommandsContainer>
      </CommandsSection>
    </IconContext.Provider>
  );
};

export default Commands;
  
      