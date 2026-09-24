import { useNavigate } from "react-router-dom";
import {
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Safe & Effective",
      description:
        "Professional pest control solutions designed with safety in mind.",
    },
    {
      icon: <FaClock />,
      title: "Quick Service",
      description:
        "Choose a convenient appointment time that works for you.",
    },
    {
      icon: <FaUsers />,
      title: "Professional Team",
      description:
        "Our trained team is ready to handle your pest control needs.",
    },
  ];

  const services = [
    "Cockroach Control",
    "Termite Control",
    "Mosquito Control",
    "Rodent Control",
  ];

  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-green-50 px-6 py-16 sm:py-20 lg:py-24">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-green-600 font-semibold tracking-wide">
              PROFESSIONAL PEST CONTROL
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-4">
              Keep Your Home
              <span className="text-green-600">
                {" "}Pest-Free
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-7 mt-6 max-w-xl">
              Reliable pest control services for homes,
              offices and commercial spaces. Book a
              professional service and protect your property.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button
                type="button"
                onClick={() => navigate("/booking")}
                className="bg-green-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Book a Service
              </button>

              <button
                type="button"
                onClick={() => navigate("/services")}
                className="border border-green-600 text-green-600 px-6 py-3.5 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition"
              >
                Explore Services
              </button>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white rounded-3xl shadow-sm border border-green-100 p-6 sm:p-8">

            <div className="bg-green-100 rounded-2xl p-8 text-center">

              <div className="w-20 h-20 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-3xl" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-6">
                Complete Pest Protection
              </h2>

              <p className="text-gray-600 mt-3">
                Simple booking, professional service and
                easy appointment management.
              </p>

              <div className="mt-6 space-y-3 text-left">

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />
                  <span className="text-gray-700">
                    Residential & commercial services
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />
                  <span className="text-gray-700">
                    Convenient appointment scheduling
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />
                  <span className="text-gray-700">
                    Easy booking management
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white px-6 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">

            <p className="text-green-600 font-semibold">
              WHY PESTCARE
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Pest Control Made Simple
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition"
              >

                <div className="w-14 h-14 mx-auto bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-5">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-6">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="bg-gray-50 px-6 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

            <div>

              <p className="text-green-600 font-semibold">
                OUR SERVICES
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Solutions for Common Pests
              </h2>

            </div>

            <button
              type="button"
              onClick={() => navigate("/services")}
              className="text-green-600 font-semibold hover:text-green-700"
            >
              View All Services →
            </button>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {services.map((service) => (
              <button
                type="button"
                key={service}
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      selectedService: service,
                    },
                  })
                }
                className="bg-white text-left rounded-xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition"
              >

                <FaCheckCircle className="text-green-600 text-xl" />

                <h3 className="font-semibold text-gray-900 mt-4">
                  {service}
                </h3>

                <p className="text-green-600 text-sm mt-2">
                  Book now →
                </p>

              </button>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-16 bg-white">

        <div className="max-w-5xl mx-auto bg-green-600 rounded-2xl px-6 py-10 sm:px-10 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Protect Your Property?
          </h2>

          <p className="text-green-50 mt-4 max-w-2xl mx-auto">
            Schedule your pest control service today and
            manage your bookings easily through your account.
          </p>

          <button
            type="button"
            onClick={() => navigate("/booking")}
            className="mt-7 bg-white text-green-600 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book Your Service
          </button>

        </div>

      </section>

    </main>
  );
}

export default Home;