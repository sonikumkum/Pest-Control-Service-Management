import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setSubmitted(false);
  };

  // ================= VALIDATION =================

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length < 2) {
      newErrors.name =
        "Please enter your name.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email =
        "Please enter a valid email.";
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject =
        "Please enter a subject.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    return newErrors;
  };

  // ================= SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}

      <section className="bg-green-50 px-6 py-16 sm:py-20">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-green-600 font-semibold">
            CONTACT US
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3">
            We're Here to Help
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-base sm:text-lg">
            Have a question about our services or your
            booking? Send us a message and our team can
            help you.
          </p>

        </div>

      </section>

      {/* ================= CONTACT CONTENT ================= */}

      <section className="px-6 py-14 sm:py-16">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ================= CONTACT INFO ================= */}

          <div className="space-y-5">

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Phone
                  </h3>

                  <p className="text-gray-600 mt-1">
                    +91 98765 43210
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Email
                  </h3>

                  <p className="text-gray-600 mt-1 break-all">
                    support@pestcare.com
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Service Area
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Delhi NCR
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Working Hours
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Monday - Saturday
                  </p>

                  <p className="text-gray-600">
                    9:00 AM - 6:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* ================= CONTACT FORM ================= */}

          <div className="lg:col-span-2">

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">

              <div className="mb-7">

                <p className="text-green-600 font-semibold">
                  SEND A MESSAGE
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                  Get in Touch
                </h2>

                <p className="text-gray-600 mt-2">
                  Fill out the form below and tell us how
                  we can help.
                </p>

              </div>

              {/* SUCCESS MESSAGE */}

              {submitted && (
                <div className="mb-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg">

                  <p className="font-semibold">
                    Message sent successfully! 🎉
                  </p>

                  <p className="text-sm mt-1">
                    Thank you for contacting PestCare.
                  </p>

                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* NAME + EMAIL */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>

                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.name}
                      </p>
                    )}

                  </div>

                  <div>

                    <label className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email}
                      </p>
                    )}

                  </div>

                </div>

                {/* SUBJECT */}

                <div>

                  <label className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to ask?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.subject}
                    </p>
                  )}

                </div>

                {/* MESSAGE */}

                <div>

                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  ></textarea>

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.message}
                    </p>
                  )}

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3.5 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;