import {
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Reliable Solutions",
      description:
        "We provide practical pest control solutions for residential and commercial properties.",
    },
    {
      icon: <FaUsers />,
      title: "Professional Service",
      description:
        "Our service approach focuses on customer needs, safety and effective pest management.",
    },
    {
      icon: <FaClock />,
      title: "Convenient Booking",
      description:
        "Customers can easily schedule and manage their pest control appointments.",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}

      <section className="bg-green-50 px-6 py-16 sm:py-20">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-green-600 font-semibold">
            ABOUT PESTCARE
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3">
            Protecting Your Space from Pests
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-base sm:text-lg leading-7">
            PestCare is a pest control service management
            platform designed to make pest control booking
            and appointment management simple.
          </p>

        </div>

      </section>

      {/* ================= ABOUT CONTENT ================= */}

      <section className="px-6 py-16">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="bg-green-100 rounded-3xl p-8 sm:p-12">

            <div className="w-20 h-20 bg-green-600 text-white rounded-2xl flex items-center justify-center text-3xl">
              <FaShieldAlt />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-7">
              Simple Pest Control Management
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              PestCare provides a simple digital experience
              where customers can explore pest control
              services, create an account, schedule
              appointments and manage their bookings.
            </p>

          </div>

          <div>

            <p className="text-green-600 font-semibold">
              OUR MISSION
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Making Pest Control Easier
            </h2>

            <p className="text-gray-600 mt-5 leading-7">
              Managing pest control should not be complicated.
              PestCare brings important service management
              features into one convenient platform.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Easy service selection and booking
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Convenient appointment management
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Customer profile management
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Responsive experience across devices
                </p>
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
              WHY CHOOSE PESTCARE
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Built Around the Customer
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition"
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

    </main>
  );
}

export default About;