import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React fetch API",
    description:
      "A movie search platform that allows users to explore movies by title, fetching real-time data from an external API. Displays movie posters, ratings, and descriptions in an interactive interface.",
    techstack: "React.js, JavaScript, API, CSS, Vercel",
      getImageSrc: () => require("../images/MovieLand.jpg"),
    link: "https://movie-land-by-veronica.vercel.app/",
  },
  {
    title: "Javascript",
    description:
      "A portfolio website displaying various web projects and coding experiments. Showcases frontend and full-stack development skills with interactive UI components.",
    techstack: "HTML, CSS, JavaScript, GitHub Pages for hosting",
      getImageSrc: () => require("../images/Portfolio.jpg"),
    link: "https://veronicaandersen.github.io/",
  },
  {
    title: "React",
    description:
      "A simple and efficient to-do list application that helps users manage their daily tasks. Features include adding, editing, and deleting tasks with a clean and user-friendly UI.",
    techstack: "React.js, JavaScript, CSS, Vercel for deployment",
      getImageSrc: () => require("../images/Todo.jpg"),
    link: "https://todolist-by-veronica.vercel.app/",
  },
  {
    title: "WordPress",
    description:
      "A professional business website designed to provide a seamless user experience while showcasing the brand’s services. Features responsive design and optimized performance.",
    techstack: "WordPress, CSS",
      getImageSrc: () => require("../images/Refold.jpg"),
    link: "https://refold.se/",
  },
  {
    title: "Javascript",
    description:
      "A professionally designed website for a fictional landscaping and gardening business, featuring a clean and modern layout. The site highlights services, company details, and contact options while ensuring a smooth and accessible user experience.",
    techstack: "JavaScript, Tailwind CSS, Vercel for deployment",
      getImageSrc: () => require("../images/LuckyShrub.jpg"),
    link: "https://luckyshrub-flame.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#60958f"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            techstack={project.techstack}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
