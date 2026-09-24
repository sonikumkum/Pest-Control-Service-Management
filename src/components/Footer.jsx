import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      {/* ================= FOOTER CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}

          <div>
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <FaShieldAlt />
              </div>

              <h2 className="text-2xl font-bold">
                PestCare
              </h2>

            </div>

            <p className="text-gray-400 mt-4 leading-6">
              Professional pest control service management
              made simple for homes and businesses.
            </p>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Services
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-green-400 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* ACCOUNT */}

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Account
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/login"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Register
              </Link>

              <Link
                to="/dashboard"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/booking"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Book Service
              </Link>

            </div>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="flex flex-col gap-4">

              <div className="flex items-start gap-3">
                <FaPhone className="text-green-500 mt-1" />

                <span className="text-gray-400">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-green-500 mt-1" />

                <span className="text-gray-400 break-all">
                  support@pestcare.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-500 mt-1" />

                <span className="text-gray-400">
                  Delhi NCR
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-5">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} PestCare.
              All rights reserved.
            </p>

            <div className="flex items-center gap-5">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-xl transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-xl transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;