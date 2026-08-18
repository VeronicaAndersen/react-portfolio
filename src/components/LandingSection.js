const LandingSection = () => {
    const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6" id="landing">
      <img
        src={require("../images/Veronica.PNG")}
        alt="Veronica Andersen"
        className="w-40 h-40 rounded-full mb-6 object-cover"
      />
      <h1 className="text-5xl font-bold text-white mb-4">
        Hej, Veronica här!
      </h1>
      <h2 className="text-2xl text-white mb-6">
        System utvecklare | Full-Stack utvecklare | Frontend utvecklare
      </h2>
      <p className="max-w-2xl text-white mb-8">
        Jag är en fullstackutvecklare som älskar den kreativa sidan av problemlösning. Min resa började inom design och produktutveckling, med verktyg som Figma och Adobes program, vilket format hur jag idag angriper byggandet av användarcentrerade lösningar.
      </p>

      <p className="max-w-2xl text-white mb-8">
        Det som engagerar mig mest är att sluta cirkeln, från att förstå affärsbehov till att leverera kod och supporta den i produktion. Jag drivs lika mycket av att optimera SQL-frågor som att skapa vackra React-gränssnitt. Jag lär mig ständigt nytt, tar certifieringar, utforskar nya ramverk och söker utmaningar som utvecklar mina färdigheter. Jag trivs i samarbetsmiljöer där tydlig kommunikation och genuin nyfikenhet är viktigt. Jag bryr mig djupt om att leverera stabil, väldokumenterad kod som löser verkliga problem. Utanför jobbet hittar du mig lärandes mig något nytt, utforskandes designverktyg eller funderandes på hur man kan göra teknik mer intuitiv.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          onClick={handleClick("projects")}
          className="px-6 py-3 bg-white text-[#264d49] rounded-lg shadow hover:bg-[#264d49] hover:text-white transition"
        >
          Se projekt
        </a>
        <a
          href="/Resume-Veronica-Andersen.pdf"
          download="Resume-Veronica-Andersen.pdf"
          className="px-6 py-3 border border-white text-white rounded-lg shadow hover:bg-white hover:text-[#264d49] transition"
        >
          Ladda ner CV
        </a>
      </div>
    </div>
  );
};

export default LandingSection;
