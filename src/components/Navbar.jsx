import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/nosotros" },
    { name: "Portfolio", path: "/linea" },
    { name: "Blog", path: "/contacto" },
  ];
  

  return (
    <header className="w-full bg-black text-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Nombre izquierdo */}
        <Link
          to="/"
          className="text-yellow-300 font-bold text-2xl sm:text-3xl whitespace-nowrap"
        >
          Agustín Hernández();
        </Link>

        {/* Navegación centrada */}
        <nav className="flex-1 flex justify-center gap-12">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-lg sm:text-xl transition-all ${
                location.pathname === path
                  ? "text-white font-bold underline underline-offset-4 decoration-yellow-300"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Iconos derecha */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/agustinhernandez88"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/agustín-hernández/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition"
          >
            <FaLinkedin size={26} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
