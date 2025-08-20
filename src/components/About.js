const bio1 = "Systemutvecklare med hög prestation och 3 års erfarenhet inom utvecklingsbranschen. Min noggrannhet och fokus på slutanvändaren har gjort mig till en ovärderlig tillgång för mitt team. Jag drivs av viljan att leverera exceptionellt arbete och ha en betydande påverkan på de runt omkring mig.";
const bio2 = "Att samarbeta med både mitt team och externa intressenter för att lösa utmanande problem och hitta innovativa lösningar är en verklig passion för mig. Min förmåga att knyta kontakt med andra har varit avgörande för min karriärframgång. Bland annat har jag framgångsrikt hanterat tjänstemigrationer, inklusive övergång från lokala lösningar till Microsoft 365, vilket har resulterat i ökad effektivitet och skalbarhet för kundernas system.";
const skills = "JavaScript, C#, React, Tailwind CSS, Figma, TypeScript";
const why_me = "Jag är en passionerad och dedikerad systemutvecklare som brinner för att skapa användarvänliga och effektiva lösningar. Med erfarenhet inom både frontend och backend är jag en mångsidig utvecklare som kan ta ansvar för hela utvecklingscykeln. Jag värdesätter ett öppet och konstruktivt samarbete där jag inte är rädd för att ifrågasätta och bidra med nya perspektiv, men lika mycket lyssnar på andras idéer för att hitta den bästa gemensamma vägen framåt. Min nyfikenhet driver mig att ständigt utveckla mina färdigheter och hålla mig uppdaterad med nya teknologier, alltid med målet att leverera högkvalitativa produkter.";

const About = () => (
    <>
    <div id="about-section" className="flex flex-col items-center justify-center h-full p-4 text-center">
        <div className="max-w-2xl bg-[#60958f] text-white p-6 rounded-lg shadow-lg space-y-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Om mig</h1>
            <p className="text-base">{bio1}</p>
            <p className="text-base">{bio2}</p>
            <p className="text-base italic">{skills}</p>
        </div>
    </div>
    <div id="about-section" className="flex flex-col items-center justify-center h-full p-4 text-center">
        <div className="max-w-2xl bg-[#60958f] text-white p-6 rounded-lg shadow-lg space-y-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Varför mig</h1>
            <p className="text-base">{why_me}</p>
        </div>
    </div>
    </>
);

export default About;
