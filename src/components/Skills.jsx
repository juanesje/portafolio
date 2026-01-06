import { Code, Server, Database, Package, Cloud, Award } from "react-feather";

export default function Skills() {
  const skills = [
    { icon: <Code />, label: "Full-Stack" },
    { icon: <Code />, label: "React" },
    { icon: <Server />, label: "Node.js" },
    { icon: <Database />, label: "PostgreSQL" },
    { icon: <Package />, label: "SCORM" },
    { icon: <Cloud />, label: "APIs REST" },
    { icon: <Code />, label: "Python" },
    { icon: <Award />, label: "TailwindCSS" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-purple-900/30">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-violet-400">
          Habilidades
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-800/50 shadow-lg hover:-translate-y-2 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-700 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-purple-900/50">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-purple-100">
                {s.label}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
