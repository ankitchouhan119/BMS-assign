import HeroSection from "./HeroSection";
import Workflow from "./Workflow";
import Contact from "./Contact";
import Services from "./Services";
import About from "./AboutUs";

function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Services />
        <Workflow />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default Home;
