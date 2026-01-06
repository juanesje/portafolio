import { User, Download } from "react-feather";

export default function About() {
  const about = `
Hola!! mi nombre es Juan Esteban Torres Delgado, tengo 22 años y soy estudiante de noveno semestre de Ingeniería en Software. Desde el inicio de mi formación universitaria me he interesado por el desarrollo de soluciones digitales que no solo funcionen correctamente, sino que también sean claras, útiles y fáciles de mantener a largo plazo.

A lo largo de mi proceso académico y profesional he adquirido experiencia en desarrollo frontend y backend, participando en proyectos reales como plataformas educativas y sistemas de gestión para entidades públicas. En estos proyectos he trabajado con tecnologías como React, Node.js y PostgreSQL, aplicando buenas prácticas de programación, estructuración de código y consumo de APIs, además de fortalecer habilidades como el trabajo en equipo, el análisis de problemas y la responsabilidad técnica.

Me considero una persona proactiva, responsable y con una gran disposición para aprender. Disfruto enfrentar retos técnicos, comprender cómo funcionan las soluciones desde su base y mejorar constantemente tanto a nivel técnico como profesional. Mi objetivo es seguir creciendo como ingeniero de software y aportar valor real en cada proyecto en el que participo, combinando conocimiento, compromiso y pasión por la tecnología.
`;

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* Fondo SOLO About */}
      <div className="absolute inset-0 bg-blue-950"></div>

      {/* Glow decorativo */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">

        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-14 text-white flex items-center justify-center gap-3">
          <User className="w-8 h-8" />
          Sobre Mí
        </h2>

        {/* Card principal */}
        <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">

          {/* 🔽 BOTÓN DESCARGAR CV */}
          <a
            href="/HVJuanEstebanTorresDelgado.pdf"
            download
            title="Descargar CV"
            className="
              absolute top-4 right-4
              w-14 h-14
              rounded-full
              bg-gradient-to-br from-purple-600 to-violet-700
              flex items-center justify-center
              text-white
              shadow-xl shadow-purple-900/40
              hover:scale-110 hover:shadow-purple-700/50
              transition
            "
          >
            <Download size={22} />
          </a>

          {/* Línea decorativa */}
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full mb-6"></div>

          {/* TEXTO */}
          <p className="text-base md:text-lg text-purple-100/90 leading-relaxed whitespace-pre-line">
            {about}
          </p>
        </div>

      </div>
    </section>
  );
}
