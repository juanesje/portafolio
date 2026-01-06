import { Bookmark, Clock } from "react-feather";

export default function Courses() {
  const courses = [
    {
      title: "Análisis de Datos",
      source: "LinkedIn Learning",
      hours: 2,
    },
    {
      title: "Python Avanzado",
      source: "Netzun",
      hours: 2,
    },
    {
      title: "Java",
      source: "LinkedIn Learning",
      hours: 8,
    },
    {
      title: "Arquitectura .NET 7",
      source: "LinkedIn Learning",
      hours: 19,
    },
    {
      title: "Android con Jetpack",
      source: "LinkedIn Learning",
      hours: 2,
    },
  ];

  return (
    <section id="courses" className="py-24 bg-blue-950">
      <div className="container mx-auto px-6">

        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-violet-400">
          <Bookmark className="inline mr-3" />
          Cursos y Formación
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((c, i) => (
            <div
              key={i}
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-7 border border-purple-800/50 shadow-lg hover:-translate-y-2 transition"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-purple-100 mb-1">
                {c.title}
              </h3>

              <p className="text-purple-300 mb-4 text-sm md:text-base">
                {c.source}
              </p>

              {/* HORAS */}
              <div className="flex items-center gap-2 text-purple-200">
                <Clock size={18} />
                <span className="text-sm md:text-base font-medium">
                  Intensidad horaria: {c.hours} horas
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
