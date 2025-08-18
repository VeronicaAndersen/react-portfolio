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
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className="snap-start h-[calc(100vh-4rem)] bg-[#60958f]">
          <LandingSection />
        </section>
        <section className="snap-start h-[calc(100vh-4rem)] bg-white">
          <About />
        </section>
        <section className="snap-start lg:h-[calc(100vh-4rem)] bg-[#60958f]">
          <ProjectsSection />
        </section>
        <section className="snap-start  bg-white">
          <Timeline />
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default App;
