import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-violet-900 font-poppins text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Education />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}
