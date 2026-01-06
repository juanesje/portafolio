import { Mail, Phone, MapPin } from "react-feather";
import { useState } from "react";

export default function Contact() {
  const contact = {
    telefono: "(322) 908-6247",
    email: "juanes.2529.delgado@gmail.com",
    ciudad: "Cajicá, Cundinamarca – Colombia",
  };

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://formspree.io/f/xeeobyan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSent(true);
      setForm({ nombre: "", email: "", mensaje: "" });

      setTimeout(() => setSent(false), 4000);
    } else {
      alert("Error enviando el mensaje ❌");
    }
  } catch {
    alert("Error de conexión ❌");
  }

};


  return (
    <section id="contact" className="py-24 bg-blue-950">
      <div className="container mx-auto px-6">

        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
          <Mail className="inline mr-3" />
          Contacto
        </h2>

        <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl backdrop-blur-sm">

          <div className="grid md:grid-cols-2 gap-10">

            {/* INFO */}
          <div>
            <h3 className="text-2xl font-bold text-purple-100 mb-6">
              Información de contacto
            </h3>

            <div className="space-y-5 mb-6">
              <div className="flex items-center gap-4">
                <Phone className="text-purple-300" />
                <span className="text-purple-100">
                  {contact.telefono}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-purple-300" />
                <span className="text-purple-100">
                  {contact.email}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-purple-300" />
                <span className="text-purple-100">
                  {contact.ciudad}
                </span>
              </div>
            </div>

            {/* LOGO */}
            <div className="mb-6 flex justify-center md:justify-start">
              <img
                src="/Systems and technology programming company logo-Photoroom.png"
                alt="Systems and Technology Programming"
                className="max-w-[200px] opacity-80 hover:opacity-100 transition"
              />
            </div>

            <p className="text-purple-200/80 text-sm">
              Puedes escribirme directamente por correo o usar este formulario
              para dejar tu mensaje. Estaré atento a responderte.
            </p>
          </div>


            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                value={form.nombre}
                onChange={(e) =>
                  setForm({ ...form, nombre: e.target.value })
                }
                className="w-full bg-purple-900/30 border border-purple-800/50 rounded-xl px-4 py-3 text-purple-100"
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full bg-purple-900/30 border border-purple-800/50 rounded-xl px-4 py-3 text-purple-100"
                required
              />

              <textarea
                rows="4"
                placeholder="Mensaje"
                value={form.mensaje}
                onChange={(e) =>
                  setForm({ ...form, mensaje: e.target.value })
                }
                className="w-full bg-purple-900/30 border border-purple-800/50 rounded-xl px-4 py-3 text-purple-100"
                required
              />

              <button
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-700 shadow-lg hover:-translate-y-1 transition"
              >
                Enviar Mensaje
              </button>

              {sent && (
                <p className="text-green-400 text-sm text-center mt-3">
                  ✅ Mensaje enviado correctamente. Gracias por contactarme.
                </p>
              )}
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
