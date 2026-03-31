import "./App.css";
import About from "./components/About";
import BlurryBackground from "./components/BlurryBackground";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Process from "./components/Process";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#f9f7f2] overflow-x-hidden">
      <BlurryBackground />
      <Nav />
      <main>
        {/* Το Hero δεν χρειάζεται ID συνήθως, αλλά μπορείς να βάλεις id="home" */}
        <Hero />

        <section id="work">
          <Projects />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
