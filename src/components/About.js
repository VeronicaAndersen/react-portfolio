const greeting = "Systemutvecklare med hög prestation och 3 års erfarenhet inom utvecklingsbranschen. Min noggrannhet och fokus på slutanvändaren har gjort mig till en ovärderlig tillgång för mitt team. Jag drivs av viljan att leverera exceptionellt arbete och ha en betydande påverkan på de runt omkring mig.";
const bio1 = "Att samarbeta med både mitt team och externa intressenter för att lösa utmanande problem och hitta innovativa lösningar är en verklig passion för mig. Min förmåga att knyta kontakt med andra har varit avgörande för min karriärframgång. Bland annat har jag framgångsrikt hanterat tjänstemigrationer, inklusive övergång från lokala lösningar till Microsoft 365, vilket har resulterat i ökad effektivitet och skalbarhet för kundernas system.";
const bio2 = "JavaScript, C#, React, Tailwind CSS, Figma, TypeScript";

const About = () => (
    <div id="about-section" className="flex flex-col items-center justify-center h-full p-4 text-center">
        <div className="max-w-2xl bg-[#60958f] text-white p-6 rounded-lg shadow-lg space-y-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Om mig</h1>
            <p className="text-base">{greeting}</p>
            <p className="text-base">{bio1}</p>
            <p className="text-base italic">{bio2}</p>
        </div>
    </div>
);

export default About;
