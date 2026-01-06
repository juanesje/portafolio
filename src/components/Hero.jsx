import { useState } from "react";
import { Download } from "react-feather";

export default function Hero() {
const [hero] = useState({
  nombre: "Juan Esteban Torres Delgado",
  cargo: "Ingeniero de Software · Full Stack Developer",
  descripcion:
    "Ingeniero de Software apasionado por crear experiencias digitales sólidas, escalables y bien diseñadas. He trabajado en proyectos reales, como en el desarrollando plataformas educativas, sistemas de gestión y soluciones web completas que integran frontend y backend. Me especializo en React, Node.js y PostgreSQL, con un fuerte enfoque en buenas prácticas, código limpio y rendimiento. Disfruto transformar ideas en productos funcionales, aportando valor desde la arquitectura hasta la experiencia del usuario.",
  imagen: "/Cara.png",
});



  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ================= FONDO ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black"></div>

      {/* Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl"></div>

      {/* ================= CONTENIDO ================= */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          {/* TEXTO */}
          <div className="lg:w-1/1 space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
                {hero.nombre}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-purple-300 font-medium">
              {hero.cargo}
            </h2>

            <p className="text-base md:text-lg text-purple-10/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {hero.descripcion}
            </p>
            {/* BOTONES */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#experience"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-700 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300"
              >
                Ver Experiencia
              </a>

              <a
                href="#contact"
                className="px-8 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300"
              >
                Contacto
              </a>

              {/* CV */}
              <a
                href="/HVJuanEstebanTorresDelgado.pdf"
                download
                className="px-8 py-3 flex items-center gap-2 rounded-lg font-medium border border-purple-400 text-purple-300 hover:bg-purple-500/10 hover:text-white transition-all duration-300"
              >
                <Download size={18} />
                Descargar CV
              </a>
            </div>
          </div>

          {/* IMAGEN */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 p-1">
                <img
                  src={hero.imagen}
                  alt="Juan Esteban Torres Delgado"
                  className="w-full h-full rounded-full object-cover border-4 border-black"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-zinc-900 p-3 rounded-full border border-purple-700 shadow-lg">
                <span className="text-white text-lg font-mono">&lt;/&gt;</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
