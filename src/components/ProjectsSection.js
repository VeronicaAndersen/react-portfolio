import Card from "./Card";

const projects = [
  {
    title: "Next.JS",
    description:
      "A web application that visualizes global cough data in real-time, providing insights into respiratory health trends. Users can explore data through interactive maps and charts, contributing to public health awareness.",
    techstack: "Next.js, TypeScript, API, Tailwind",
    getImageSrc: () => require("../images/CoughRadar.png"),
    link: "https://sleepcycle.com/coughradar",
  },
  {
    title: "React.JS fetch API",
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
    title: "React.JS",
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
    <div className="p-2 flex flex-col items-center justify-center min-h-screen bg-[#60958f] text-white">
      <h1 
        id="projects-section"
        className="text-4xl font-bold mb-6 text-center">
        Portfolio
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            techstack={project.techstack}
            imageSrc={project.getImageSrc()}
            link={project.link}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
