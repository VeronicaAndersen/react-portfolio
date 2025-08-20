const timelineData = [
  {
    category: "Tidslinje",
    items: [
      {
        title: "Full-Stack Web Engineer — Sleep Cycle AB",
        location: "Göteborg",
        date: "Apr 2025 – Jul 2025",
        description: [
          "Utvecklade responsiva webbsidor för annonsering och affiliatekampanjer (+40% engagemang).",
          "Integrerade backend-funktioner med Next.js, Python och PHP.",
          "Implementerade spårningsintegrationer med Google Analytics.",
          "Samarbetade tvärfunktionellt med Figma, marknadsföring och ingenjörsteam.",
        ],
      },
      {
        title: "Software Engineer konsult via Experis AB — Volvo Digital & IT AB",
        location: "Skövde",
        date: "Aug 2023 – Jan 2025",
        description: [
          "Moderniserade legacy-appar till React och Blazor.",
          "Byggde webbapplikationer med C#, HTML och MS SQL.",
          "Använde Azure DevOps, Git & TFVC för CI/CD.",
          "Arbetade agilt (Scrum & Kanban) med TDD.",
        ],
      },
      {
        title: "System Developer konsult via Experis AB — Syncify AB",
        location: "Göteborg",
        date: "Sep 2022 – Jun 2023",
        description: [
          "Utvecklade anpassade e-handelsfunktioner och adminpaneler (C#/.NET, JS, Kendo UI).",
          "Ledde projektplanering, backlog grooming och sprint retrospektiv.",
          "Förbättrade sidladdningstider med 30% och löste produktionsbuggar.",
        ],
      },
    ],
  },
  {
    category: "Utbildning",
    items: [
      {
        title: "Experis Academy",
        location: "Göteborg",
        date: "Jul 2022 – Sep 2022",
        description: [
          "12-veckors intensivt Javaprogram.",
          "Fokus på OOP, JUnit, mjukvaruarkitektur, React & Angular.",
        ],
      },
      {
        title: "Högskolan i Skövde",
        location: "Skövde",
        date: "Aug 2018 – Jun 2021",
        description: [
          "Kandidatexamen i webbutveckling.",
          "Fokus på HTML, JS, PHP, UX, databasintegration och säkerhet.",
        ],
      },
      {
        title: "Alströmergymnasiet",
        location: "Alingsås",
        date: "Aug 2014 – Jun 2017",
        description: [
          "Teknikprogrammet med inriktning design & produktutveckling.",
          "Arbete med Figma, Adobe Suite, CAD & prototyptillverkning.",
        ],
      },
    ],
  },
  {
    category: "Certifieringar",
    items: [
      {
        title: "Meta Front-End Developer – Coursera",
        date: "Mar 2025",
        description: [
          "9-kursersprogram: HTML, CSS, JS, React.",
          "UI/UX, Git, GitHub, Bootstrap, Jest, portföljprojekt.",
        ],
      },
      {
        title: "Introduktion till Python – Coursera",
        date: "Mar 2025",
        description: [
          "Lärde mig variabler, loopar, villkor och skriptning.",
          "Tillämpade beräknande tänkande & programmeringsprinciper.",
        ],
      },
    ],
  },
];

const Timeline = () => {
  return (
    <div id="timeline" className="max-w-4xl mx-auto p-4 h-fit">
      {timelineData.map((section, sectionIdx) => (
        <div key={sectionIdx} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {section.category}
          </h2>
          <div className="relative border-l border-gray-300">
            {section.items.map((item, idx) => (
              <div key={idx} className="mb-8 ml-6">
                {/* Punkt */}
                <div className="absolute w-3 h-3 bg-[#60958f] rounded-full -left-1.5 border border-white"></div>

                {/* Innehåll */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <span className="block text-sm text-gray-500 mb-2">
                  {item.location && `${item.location} •`} {item.date}
                </span>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
