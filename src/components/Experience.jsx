import { useEffect, useRef, useState } from "react";
import { Briefcase } from "react-feather";

const images = [
  "/Tic.png",
];

const SWIPE_THRESHOLD = 60;

export default function Experience() {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);
  const isSwiping = useRef(false);

  // 🔄 Auto slide cada 10 segundos
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

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-purple-900/30 to-purple-900/30"
    >
      <div className="container mx-auto px-6">

        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-violet-400">
          <Briefcase className="inline mr-3" />
          Experiencia
        </h2>

        <div className="max-w-6xl mx-auto bg-purple-900/20 backdrop-blur-sm rounded-2xl px-8 py-6 border border-purple-800/40">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* TEXTO */}
            <div>
              <h1 className="text-4xl md:text-4xl font-semibold text-purple-200 mb-1">
                2025 / Alcadia de Cajicá
              </h1>
              <p className="text-xl text-purple-300 mb-4">
                Desarrollador Full Stack
              </p>

              <ul className="list-disc list-inside space-y-2 text-sm text-purple-100">
                <li>Desarrollo de plataformas educativas web para entidades públicas.</li>
                <li>Implementación de interfaces modernas con React y TailwindCSS.</li>
                <li>Construcción de APIs REST con Node.js.</li>
                <li>Integración con bases de datos PostgreSQL.</li>
                <li>Aplicación de buenas prácticas y control de versiones.</li>
              </ul>
            </div>

            {/* SLIDER */}
            <div
              className="flex justify-center select-none cursor-grab active:cursor-grabbing"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
            >
              <img
                src={images[index]}
                alt="Proyecto Gobierno de Cajicá"
                draggable={false}
                className="rounded-xl w-full max-h-64 object-cover shadow-lg border border-purple-700/40 transition-all duration-700"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
