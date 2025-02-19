import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Text";
const bio1 = "Text";
const bio2 = "Text";

const About = () => (
    <FullScreenSection
        isDarkBackground
        backgroundColor="#32dac5"
    >
        <VStack>
            <Heading as="h1" id="about-section">
                About
            </Heading>
            <p>{greeting}</p>
            <Heading>{bio1}</Heading>
            <Heading>{bio2}</Heading>
        </VStack>
    </FullScreenSection>
);

export default About;
