const timelineData = [
  {
    category: "Tidslinje",
    items: [
      {
        title: "Full-Stack Web Engineer — Sleep Cycle AB",
        location: "Göteborg",
        date: "2025 – 2025",
        description: [
          "Utvecklade responsiva webbsidor för annonsering och affiliatekampanjer (+40% engagemang).",
          "Integrerade backend-funktioner med Next.js, Python och PHP.",
          "Implementerade spårningsintegrationer med Google Analytics.",
          "Samarbetade tvärfunktionellt med design, marknadsföring och ingenjörsteam.",
        ],
        tech: ["Next.js", "React", "Python", "PHP", "Google Analytics", "Node.js", "Tailwind CSS", "Figma", "HTML", "CSS", "TypeScript"],
        softSkills: [
          "Tvärfunktionellt samarbete",
          "Tydlig kommunikation",
          "Kreativ problemlösning",
          "Anpassningsförmåga"
        ]
      },
      {
        title: "Software Engineer konsult via Experis AB — Volvo Digital & IT AB",
        location: "Skövde",
        date: "2023 – 2025",
        description: [
          "Moderniserade legacy-appar till React och Blazor.",
          "Byggde webbapplikationer med C#, HTML och MS SQL.",
          "Använde Azure DevOps, Git & TFVC för CI/CD.",
          "Arbetade agilt (Scrum & Kanban) med TDD.",
        ],
        tech: ["C#", ".NET", "Blazor", "React", "Azure DevOps", "Git", "TFVC", "TDD", "Node.js", "SQL", "HTML", "CSS", "JavaScript", "JUnit", "Integration Testing"],
        softSkills: [
          "Agilt arbetssätt (Scrum & Kanban)",
          "Kvalitetsmedvetenhet (TDD, CI/CD)",
          "Analytiskt tänkande",
          "Samarbete i distribuerade team"
        ]
      },
      {
        title: "System Developer konsult via Experis AB — Syncify AB",
        location: "Göteborg",
        date: "2022 – 2023",
        description: [
          "Utvecklade anpassade e-handelsfunktioner och administrörsgränssnitt för Telia.",
          "Ledde projektplanering, backlog och sprintar.",
          "Förbättrade sidladdningstider med 30% och löste produktionsbuggar.",
        ],
        tech: ["C#", ".NET", "JavaScript", "Kendo UI", "Agilt", "Scrum"],
        softSkills: [
          "Projektledning & backloghantering",
          "Kravanalys & behovsfångst",
          "Kommunikation med kund & team",
          "Resultatorienterad problemlösning"
        ]
      },
      {
        title: "Support Tekniker — Iver AB",
        location: "Alingsås",
        date: "2021 – 2022",
        description: [
          "Säkerställde IT-systemstabilitet och drift för kunder, stöttade små och medelstora företag genom att installera och driftsätta Windows Servrar och Microsoft-tjänster.",
          "Utförde felsökning och underhåll, hanterade uppgraderingar och migreringar till Microsoft 365, optimerade effektiviteten och minimerade driftstopp genom fjärrsupport."
        ],
        tech: ["Windows Server", "Microsoft 365", "Active Directory", "Azure AD"],
        softSkills: [
          "Kundservice & relationsbyggande",
          "Strukturerad felsökning",
          "Tidshantering & prioritering",
          "Tålamod & pedagogisk support"
        ]
      },
    ],
  },
]


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
                  {
                    item.tech && (
                      <p className="mt-2 text-base text-gray-900">
                        <strong>Teknologier:</strong> <em>{item.tech.join(", ")}</em>
                      </p>
                    )
                  }
                  {
                    item.softSkills && (
                      <p className="mt-1 text-base text-gray-900">
                        <strong>Mjuka färdigheter:</strong> <em>{item.softSkills.join(", ")}</em>
                      </p>
                    )
                  }
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
