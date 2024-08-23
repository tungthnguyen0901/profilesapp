import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: tungthnguyen@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/tungthnguyen0901?tab=repositories/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/tung-nguyen-a48b61235/",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/eric.nguyen.3994/",
  },
  {
    icon: faStackOverflow,
    url: "https://www.linkedin.com/in/tung-nguyen-a48b61235/",
  },
];

const Header = () => {
const headerRef = useRef(null);

useEffect(() => {
  let prevscrollPos = window.scrollY;

  const handleScroll = ()  => {
    const currentScrollPos = window.scrollY;
    const headerElement = headerRef.current;
    if (!headerElement)
    {
 return;
    }
    if (prevscrollPos > currentScrollPos)
    {
headerElement.style.transform = "translateY(0)";
    }
    else 
    {
headerElement.style.transform = "translateY(-200px)";
    }
    prevscrollPos = currentScrollPos;
  };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll',handleScroll);
  }
}, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"      
      ref={headerRef} 
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {    
            <HStack spacing = {8}>
            {
              socials.map((social) => 
              <a href={social.url} key={social.url} target="_blank" rel="noreferrer"
              >
                <FontAwesomeIcon icon={social.icon}
                size="2x" />
              </a>)
            }
          </HStack>
            /* Add social media links based on the `socials` data */}
          </nav>
          <nav>
          <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section" onClick={handleClick("projects")}>Projects</a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
