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
    <div className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold text-white mb-4">
        Hej, Veronica här!
      </h1>
      <h2 className="text-2xl text-white mb-6">
        Frontend Developer | System Developer | Full-Stack Web Engineer
      </h2>
      <p className="max-w-2xl text-white mb-8">
       Jag utvecklar responsiva och användarvänliga webbupplevelser med fokus på design, prestanda och tillgänglighet. 
       Jag är resultatorienterad och strävar efter att leverera lösningar av hög kvalitet. 
       Genom att vara öppen för feedback och kontinuerligt vidareutveckla min kompetens säkerställer jag att jag kan bidra med både tekniskt kunnande och långsiktig förbättring.
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
