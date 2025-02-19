import { Heading, Image, Text, Link, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, techstack, imageSrc, link }) => {
  return (
    <Box textAlign="left" bg="white" borderRadius="lg">
      <Image src={imageSrc} borderRadius="lg" />
      <div style={{ padding: 24 }}>
        <Heading as="h4" size="md" color="black">
          {title}
        </Heading>
        <Text color="black" py="2">{description}</Text>
        <Text color="black" py="2"><b>Tech Stack:</b> {techstack}</Text>
        <Text color="black" fontSize="sm">
          <Link
            variant="underline"
            href={link}
            target="_blank"> Explore site 
          </Link>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </div>
    </Box>
  );
};

export default Card;