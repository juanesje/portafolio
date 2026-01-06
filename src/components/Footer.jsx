export default function Footer() {
  return (
    <footer className="py-10 text-center bg-blue-950 border-t border-white/10">
      <p className="text-blue-200 text-sm">
        © {new Date().getFullYear()} Juan Esteban Torres — Todos los derechos reservados.
      </p>
    </footer>
  );
}
