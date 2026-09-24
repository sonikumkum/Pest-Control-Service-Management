import { useNavigate } from "react-router-dom";
import {
  FaBug,
  FaHome,
  FaMouse,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Cockroach Control",
      description:
        "Effective treatment to eliminate cockroaches and prevent them from coming back.",
      icon: <FaBug />,
    },
    {
      title: "Termite Control",
      description:
        "Protect your home and furniture from termite damage with professional treatment.",
      icon: <FaHome />,
    },
    {
      title: "Mosquito Control",
      description:
        "Reduce mosquito activity around your property and create a more comfortable environment.",
      icon: <FaBug />,
    },
    {
      title: "Rodent Control",
      description:
        "Safe and effective solutions to control rats and mice in residential and commercial spaces.",
      icon: <FaMouse />,
    },
    {
      title: "Bed Bug Control",
      description:
        "Targeted treatment to deal with bed bugs and help restore a clean sleeping environment.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Ant Control",
      description:
        "Professional ant treatment to remove infestations and protect your property.",
      icon: <FaLeaf />,
    },
  ];

  const handleBookService = (serviceName) => {
    navigate("/booking", {
      state: {
        selectedService: serviceName,
      },
    });
  };

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}

      <div className="bg-green-50 px-6 py-16 sm:py-20">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-green-600 font-semibold">
            OUR SERVICES
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3">
            Professional Pest Control Services
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-base sm:text-lg">
            Choose the right pest control service for your
            home or business and schedule a professional
            treatment with PestCare.
          </p>

        </div>

      </div>

      {/* ================= SERVICES ================= */}

      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col"
            >

              {/* ICON */}

              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-5">
                {service.icon}
              </div>

              {/* TITLE */}

              <h2 className="text-xl font-bold text-gray-900">
                {service.title}
              </h2>

              {/* DESCRIPTION */}

              <p className="text-gray-600 mt-3 leading-6 flex-grow">
                {service.description}
              </p>

              {/* BUTTON */}

              <button
                type="button"
                onClick={() =>
                  handleBookService(
                    service.title
                  )
                }
                className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Book This Service
              </button>

            </div>
          ))}

        </div>

      </div>

      {/* ================= BOTTOM CTA ================= */}

      <div className="px-6 pb-16">

        <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl px-6 py-10 sm:px-10 text-center">

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Not sure which service you need?
          </h2>

          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Tell us about your pest problem and our team
            can help you choose the appropriate service.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/booking")
            }
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Book a Service
          </button>

        </div>

      </div>

    </section>
  );
}

export default Services;