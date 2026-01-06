import { BookOpen } from "react-feather";

export default function Education() {
  const education = [
    {
      id: 1,
      titulo: "Ingeniería en Software",
      institucion: "Universidad Manuela Beltran",
      ano: "2022 - En curso  (Noveno semestre)",
      descripcion:
        "Formación profesional orientada al diseño y desarrollo de soluciones de software. Durante la carrera he fortalecido conocimientos en programación, desarrollo web, bases de datos, estructuras de datos y buenas prácticas de ingeniería, aplicándolos en proyectos académicos y reales.",
    },
    {
      id: 2,
      titulo: "Bachiller Académico",
      institucion: "Colegio Emilio Sotomayor Luque",
      ano: "2021 - Finalizado",
      descripcion:
        "Formación académica básica que fortaleció habilidades en razonamiento lógico, trabajo en equipo y responsabilidad, sentando las bases para el desarrollo profesional posterior.",
    },
  ];

  return (
    <section id="education" className="py-24 bg-blue-950">
      <div className="container mx-auto px-6">

        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-violet-400">
          <BookOpen className="inline mr-3" />
          Educación
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">

          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-purple-900/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-800/50 shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-purple-100 mb-1">
                {edu.titulo}
              </h3>

              <p className="text-lg text-purple-300 mb-1">
                {edu.institucion}
              </p>

              <span className="block text-sm md:text-base text-purple-400 mb-4">
                {edu.ano}
              </span>

              <p className="text-base md:text-lg text-purple-100/90 leading-relaxed">
                {edu.descripcion}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
