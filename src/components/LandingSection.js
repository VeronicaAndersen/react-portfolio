const LandingSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#60958f] to-white text-center px-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Hej, jag heter Veronica
      </h1>
      <h2 className="text-2xl text-gray-700 mb-6">
        Frontend Developer | System Developer | Full-Stack Web Engineer
      </h2>
      <p className="max-w-2xl text-gray-600 mb-8">
        Jag bygger responsiva och användarvänliga webbupplevelser. 
        Med fokus på design, prestanda och tillgänglighet skapar jag lösningar som gör skillnad.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-[#60958f] text-white rounded-lg shadow hover:bg-[#4f7a72] transition"
        >
          Se projekt
        </a>
        <a
          href="/Veronica-CV.pdf"
          className="px-6 py-3 border border-[#60958f] text-[#60958f] rounded-lg shadow hover:bg-[#60958f] hover:text-white transition"
        >
          Ladda ner CV
        </a>
      </div>
    </div>
  );
};

export default LandingSection;
