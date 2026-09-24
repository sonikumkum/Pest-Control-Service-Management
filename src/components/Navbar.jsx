import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600 transition";

  return (
    <nav className="bg-white shadow-md">

      {/* ================= MAIN NAVBAR ================= */}
      <div className="flex items-center justify-between px-6 md:px-8 py-4">

        {/* Logo */}
        <button
          type="button"
          onClick={() => {
            navigate("/");
            closeMenu();
          }}
          className="text-2xl font-bold text-green-600"
        >
          PestCare
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex items-center gap-6">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>

          <NavLink to="/register" className={navLinkClass}>
            Register
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold"
                : "text-gray-700 hover:text-green-600 transition"
            }
          >
            Dashboard
          </NavLink>

          <button
            type="button"
            onClick={() => navigate("/booking")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Book Service
          </button>

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-gray-700"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-5 bg-white border-t border-gray-100">

          <div className="flex flex-col gap-4 pt-4">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={navLinkClass}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Contact
            </NavLink>

            <NavLink
              to="/login"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Register
            </NavLink>

            <NavLink
              to="/dashboard"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Dashboard
            </NavLink>

            <button
              type="button"
              onClick={() => {
                navigate("/booking");
                closeMenu();
              }}
              className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Book Service
            </button>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;