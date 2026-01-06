import { useEffect, useRef, useState } from "react";
import { ExternalLink, GitHub } from "react-feather";

const SWIPE_THRESHOLD = 60;

// Imágenes desde /public
const images = [
  "/WEB1.jpeg",
  "/WEB2.jpeg",
  "/WEB3.jpeg",
  "/WEB4.jpeg",
  "/WEB5.jpeg",
  "/WEB6.jpeg",
  "/WEB7.jpeg",
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const startX = useRef(null);
  const isSwiping = useRef(false);

  // 🔄 Auto-rotate cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // 👉 Swipe
  const onPointerDown = (e) => {
    startX.current = e.clientX;
    isSwiping.current = true;
  };

  const onPointerUp = (e) => {
    if (!isSwiping.current || startX.current === null) return;

    const diff = startX.current - e.clientX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        setIndex((prev) => (prev + 1) % images.length);
      } else {
        setIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }
    }

    startX.current = null;
    isSwiping.current = false;
  };

  // 📌 Proyecto (alineado con tu HV)
  const project = {
    titulo: "Plataforma Educativa Web",
    descripcion:
      "Desarrollo de una plataforma educativa web orientada a la gestión de contenidos, usuarios y recursos digitales para entidades públicas. El proyecto integra frontend y backend, priorizando una interfaz clara, escalabilidad y buenas prácticas de desarrollo.",
    tecnologia: "React, Node.js, PostgreSQL, TailwindCSS",
    demo_url: "", // puedes poner una URL si la tienes
    repo_url: "", // opcional (GitHub)
    show_tags: true,
    show_buttons: false, // cámbialo a true si agregas links
  };

  return (
    <section id="projects" className="py-24 bg-blue-950">
      <div className="container mx-auto px-6">

        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center text-white">
          Proyectos
        </h2>

        <div className="max-w-6xl mx-auto bg-purple-900/20 backdrop-blur-sm rounded-2xl border border-purple-800/40 overflow-hidden">

          <div className="flex flex-col lg:flex-row">

            {/* TEXTO */}
            <div className="lg:w-1/2 p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-200 mb-4">
                {project.titulo}
              </h3>

              <p className="text-base md:text-lg text-purple-100/80 mb-6 leading-relaxed">
                {project.descripcion}
              </p>

              {project.show_tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tecnologia.split(",").map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}

              {project.show_buttons && (
                <div className="flex gap-4">
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-purple-600 rounded-lg flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}

                  {project.repo_url && (
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-purple-500 rounded-lg flex items-center gap-2"
                    >
                      <GitHub size={18} />
                      Código
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* SLIDER */}
            <div
              className="lg:w-1/2 p-8 flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
            >
              <img
                src={images[index]}
                alt="Proyecto destacado"
                draggable={false}
                className="rounded-xl w-full max-h-80 object-cover shadow-lg border border-purple-700/40 transition-all duration-700"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
