import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
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

  const headerRef = useRef({})
  const [scroll, setScroll] = useState()
  const [isHidden, setIsHidden] = useState(false);

  // Sticky Menu Area
  useEffect(() => {
      setScroll(window.scrollY)
      
      const handleScroll = () => {
        const goingDown = window.scrollY > scroll

        if(goingDown !== isHidden){
          setIsHidden(goingDown)
          goingDown ? headerRef.current.style.transform = "translateY(-200px)" : headerRef.current.style.transform = "translateY(0px)"
        }
        setScroll(window.scrollY)
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  });

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
            {/* Add social media links based on the `socials` data */
              socials.map(social => {
              return <a href={social.url} style={{margin: '0 6px'}}><FontAwesomeIcon icon={social.icon} size="2x" /></a>
              })
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */
                <>
                  <a href="/#projects" onClick={handleClick}>Projects</a>
                  <a href="/#contact-me" onClick={handleClick}>Contact Me</a>
                </>
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
