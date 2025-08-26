import Card from "./Card";

const projects = [
  {
    title: "Next.JS",
    description:
      "En webbapplikation som visualiserar global hostdata i realtid och ger insikter i trender inom andningsvägarnas hälsa. Användare kan utforska data genom interaktiva kartor och diagram, vilket bidrar till folkhälsomedvetenhet.",
    techstack: "Next.js, TypeScript, API, Tailwind",
    getImageSrc: () => require("../images/CoughRadar.png"),
    link: "https://sleepcycle.com/coughradar",
  },
  {
    title: "React.JS fetch API",
    description:
      "En plattform för filmsökning som låter användare utforska filmer efter titel och hämta realtidsdata från ett externt API. Visar filmaffischer, betyg och beskrivningar i ett interaktivt gränssnitt.",
    techstack: "React.js, JavaScript, API, CSS, Vercel",
      getImageSrc: () => require("../images/MovieLand.jpg"),
    link: "https://movie-land-by-veronica.vercel.app/",
  },
  {
    title: "Javascript",
    description:
      "En portfoliowebbplats som visar olika webbprojekt och kodningsexperiment. Visar upp färdigheter inom frontend- och fullstack-utveckling med interaktiva UI-komponenter.",
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
      "En enkel och effektiv att-göra-listapplikation som hjälper användare att hantera sina dagliga uppgifter. Funktionerna inkluderar att lägga till, redigera och ta bort uppgifter med ett rent och användarvänligt gränssnitt.",
    techstack: "WordPress, CSS",
      getImageSrc: () => require("../images/Refold.jpg"),
    link: "https://refold.se/",
  },
  {
    title: "Javascript",
    description:
      "En professionellt utformad webbplats för ett fiktivt landskaps- och trädgårdsföretag, med en ren och modern layout. Webbplatsen lyfter fram tjänster, företagsinformation och kontaktalternativ samtidigt som den säkerställer en smidig och tillgänglig användarupplevelse.",
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
