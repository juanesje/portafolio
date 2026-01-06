import { Menu } from "react-feather";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-purple-900/40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img 
          src="/Systems and technology programming company logo-Photoroom.png" 
          className="w-40 h-auto"
        />



        <div className="hidden md:flex space-x-8 text-purple-200">
          <a href="#about" className="hover:text-purple-400">Sobre mí</a>
          <a href="#experience" className="hover:text-purple-400">Experiencia</a>
          <a href="#skills" className="hover:text-purple-400">Habilidades</a>
          <a href="#project" className="hover:text-purple-400">Proyecto</a>
          <a href="#education" className="hover:text-purple-400">Educación</a>
          <a href="#courses" className="hover:text-purple-400">Cursos</a>
          <a href="#contact" className="hover:text-purple-400">Contacto</a>
        </div>

        <button className="md:hidden text-purple-200">
          <Menu size={26} />
        </button>
      </div>
    </nav>
  );
}
