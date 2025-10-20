import Card from "./Card";

const projects = [
  {
    title: "Bildsöknings App",
    description:
      "En applikation som låter användare söka efter bilder via Unsplash API. Resultaten visas i ett responsivt galleri med möjlighet att förstora bilder i ett modalfönster.",
    techstack: "React.js, JavaScript, Unsplash API, CSS, Vercel",
    getImageSrc: () => require("../images/GalleryApp.png"),
    link: "https://gallery-api-seven.vercel.app/",
    githubLinkFE: "https://github.com/VeronicaAndersen/Gallery"
  },
  {
    title: "Klättrings App",
    description:
      "En mobilanpassad tävlingsapp för klättringsevenemang som låter användare registrera sig, se topplistor, registrera resultat och följa tävlingen i realtid.",
    techstack: "React.js, TypeScript, Tailwind, Zustand, Python, FastAPI, PostgreSQL",
    getImageSrc: () => require("../images/Grepp.png"),
    link: "https://grepp.vercel.app/",
    githubLinkFE: "https://github.com/VeronicaAndersen/boulder-beat-scoreboard",
    githubLinkBE: "https://github.com/VeronicaAndersen/ClimbAPI"
  },
  {
    title: "Cough Radar",
    description:
      "En webbapplikation som visualiserar global hostdata i realtid och ger insikter i trender inom andningsvägarnas hälsa. Användare kan utforska data genom interaktiva kartor och diagram, vilket bidrar till folkhälsomedvetenhet.",
    techstack: "Next.js, TypeScript, API, Tailwind",
    getImageSrc: () => require("../images/CoughRadar.png"),
    link: "https://sleepcycle.com/coughradar",
  },
  {
    title: "Filmsökningsplattform",
    description:
      "En plattform för filmsökning som låter användare utforska filmer efter titel och hämta realtidsdata från ett externt API. Visar filmaffischer, betyg och beskrivningar i ett interaktivt gränssnitt.",
    techstack: "React.js, JavaScript, API, CSS, Vercel",
    getImageSrc: () => require("../images/MovieLand.png"),
    link: "https://movie-land-by-veronica.vercel.app/",
    githubLinkFE: "https://github.com/VeronicaAndersen/MovieLand"
  },
  {
    title: "Att-göra Lista App",
    description:
      "En enkel och effektiv att-göra-listapplikation som hjälper användare att hantera sina dagliga uppgifter. Funktionerna inkluderar att lägga till, redigera och ta bort uppgifter med ett rent och användarvänligt gränssnitt.",
    techstack: "React.js, JavaScript, CSS, Vercel",
    getImageSrc: () => require("../images/TodoApp.png"),
    link: "https://todolist-by-veronica.vercel.app/",
    githubLinkFE: "https://github.com/VeronicaAndersen/Todolist_app"
  },
  {
    title: "ReFold",
    description:
      "En responsiv företagswebbplats för coachande samtal (stöd­ samtal, sorgbearbetning, parsamtal, barnsamtal) som presenterar tjänsteutbudet tydligt, inkluderar omsorgsfull UX och är byggd för att stärka varumärket.",
    techstack: "WordPress, CSS",
    getImageSrc: () => require("../images/ReFold.png"),
    link: "https://refold.se/",
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
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] gap-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            techstack={project.techstack}
            imageSrc={project.getImageSrc()}
            link={project.link}
            githubLinkFE={project.githubLinkFE}
            githubLinkBE={project.githubLinkBE}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
