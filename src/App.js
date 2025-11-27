import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import About from "./components/About";
import Timeline from "./components/Timeline";

function App() {
  return (
    <main className="bg-neutral-100 text-black">
      <Header />
      <div className="h-screen overflow-y-scroll ">
        <section className="min-h-screen bg-[#60958f] pt-16 pb-16">
          <LandingSection />
        </section>
        <section className="min-h-screen bg-white pt-16 pb-16">
          <About />
        </section>
        <section className="min-h-screen bg-[#60958f] pt-16 pb-16">
          <ProjectsSection />
        </section>
        <section className="min-h-screen bg-white pt-16 pb-16">
          <Timeline />
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default App;
