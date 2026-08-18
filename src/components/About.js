const bio = [
    "Fullstackutvecklare med 3,5 års erfarenhet av att leverera skalbara webblösningar. Jag omsätter affärskrav till ren, underhållbar kod genom hela utvecklingscykeln, från komplex SQL och företagslösningar i C#/ASP.NET till moderna React-applikationer.",
    "På Skatteverket bidrar jag till att modernisera Platina-plattformen genom att bygga anpassade komponenter och förbättra systemets tillförlitlighet. På Sleep Cycle utvecklade jag högpresterande webbsidor som minskade laddningstiderna med 40 procent. Jag har praktisk erfarenhet av agil leverans enligt SAFe, Azure DevOps samt fullstackutveckling med C#, JavaScript, TypeScript och SQL. Jag är skicklig på att diagnostisera och lösa produktionsproblem, samarbeta med intressenter och leverera stabila, väldokumenterade lösningar. Jag trivs med att arbeta i hela stacken, från backend-optimering till responsiv frontend-design, och bidrar med teknisk djup och tydlig kommunikation i varje projekt.",
];

const skills = [
    "JavaScript",
    "C#",
    "React",
    "TypeScript",
    "T-SQL",
    "ASP.NET",
    "Tailwind CSS",
    "Figma",
    "Azure DevOps",
    "Git",
];

const whyMe = [
    "Jag är en passionerad och dedikerad systemutvecklare som brinner för att skapa användarvänliga och effektiva lösningar. Med erfarenhet inom både frontend och backend, samt inom support och felsökning, är jag en mångsidig utvecklare som kan ta ansvar för hela utvecklingscykeln, från idé till färdig produkt.",
    "Jag arbetar ofta med ett helikopterseende, vilket innebär att jag ser till helheten innan jag går in i detaljerna. Genom att sätta mig in i förutsättningarna i varje specifikt fall kan jag ta fram lösningar som inte bara fungerar tekniskt, utan som också passar verksamhetens verkliga behov och långsiktiga mål.",
    "Min nyfikenhet driver mig att ständigt utveckla mina färdigheter och hålla mig uppdaterad med nya teknologier, alltid med målet att leverera högkvalitativa produkter. För mig handlar systemutveckling inte bara om kod, det handlar om att förstå problemet, se sammanhanget och bygga lösningar som gör verklig skillnad.",
];

const AboutCard = ({ id, title, paragraphs, footer }) => (
    <div id={id} className="flex flex-col items-center justify-center h-full p-4 text-center">
        <div className="max-w-2xl bg-[#60958f] text-white p-6 rounded-lg shadow-lg space-y-4">
            <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base">
                    {paragraph}
                </p>
            ))}
            {footer}
        </div>
    </div>
);

const About = () => (
    <>
        <AboutCard
            id="about-section"
            title="Om mig"
            paragraphs={bio}
            footer={
                <p className="text-base italic">
                    {skills.join(", ")}
                </p>
            }
        />
        <AboutCard
            id="why-me-section"
            title="Varför mig"
            paragraphs={whyMe}
        />
    </>
);

export default About;