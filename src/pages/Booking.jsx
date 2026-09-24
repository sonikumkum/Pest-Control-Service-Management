import { useState } from "react";
import { useLocation } from "react-router-dom";

function Booking() {
  const location = useLocation();

  const selectedService =
    location.state?.selectedService || "";

  const today = new Date()
    .toISOString()
    .split("T")[0];

  // ================= USER DATA =================
  const registeredUser = JSON.parse(
    localStorage.getItem("pestCareUser")
  );

  const initialFormData = {
    name: registeredUser?.name || "",
    email: registeredUser?.email || "",
    phone: registeredUser?.phone || "",
    service: selectedService,
    propertyType: "",
    date: "",
    time: "",
    address: "",
    problem: "",
  };

  const [formData, setFormData] =
    useState(initialFormData);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] =
    useState(false);

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
        "Please enter a valid name.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email.";
    }

    if (
      !/^[0-9]{10}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone =
        "Phone number must contain exactly 10 digits.";
    }

    if (!formData.service) {
      newErrors.service =
        "Please select a service.";
    }

    if (!formData.propertyType) {
      newErrors.propertyType =
        "Please select a property type.";
    }

    if (!formData.date) {
      newErrors.date =
        "Please select a preferred date.";
    }

    if (!formData.time) {
      newErrors.time =
        "Please select a preferred time.";
    }

    if (
      formData.address.trim().length < 10
    ) {
      newErrors.address =
        "Please enter a complete address.";
    }

    if (
      formData.problem.trim().length < 5
    ) {
      newErrors.problem =
        "Please describe your pest problem.";
    }

    return newErrors;
  };

  // ================= SUBMIT BOOKING =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors).length >
      0
    ) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    const existingBookings =
      JSON.parse(
        localStorage.getItem(
          "pestCareBookings"
        )
      ) || [];

    const newBooking = {
      id: `PC${String(
        existingBookings.length + 1
      ).padStart(3, "0")}`,

      name: formData.name.trim(),

      email:
        formData.email.trim(),

      phone:
        formData.phone.trim(),

      service:
        formData.service,

      propertyType:
        formData.propertyType,

      date:
        formData.date,

      time:
        formData.time,

      address:
        formData.address.trim(),

      problem:
        formData.problem.trim(),

      status: "Upcoming",
    };

    localStorage.setItem(
      "pestCareBookings",
      JSON.stringify([
        ...existingBookings,
        newBooking,
      ])
    );

    setErrors({});
    setSubmitted(true);

    // Reset form after successful booking
    setFormData({
      name: registeredUser?.name || "",
      email:
        registeredUser?.email || "",
      phone:
        registeredUser?.phone || "",
      service: "",
      propertyType: "",
      date: "",
      time: "",
      address: "",
      problem: "",
    });
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">

      <div className="max-w-4xl mx-auto">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-10">

          <p className="text-green-600 font-semibold">
            BOOK A SERVICE
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Schedule Your Pest Control Service
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Fill in your details and choose a
            convenient date and time for your
            pest control service.
          </p>

        </div>

        {/* ================= SUCCESS MESSAGE ================= */}
        {submitted && (
          <div className="mb-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg">

            <p className="font-semibold">
              Booking request submitted successfully! 🎉
            </p>

            <p className="text-sm mt-1">
              Your booking has been saved and
              will appear in your dashboard.
            </p>

          </div>
        )}

        {/* ================= BOOKING FORM ================= */}
        <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* ================= PERSONAL DETAILS ================= */}
            <div>

              <h2 className="text-xl font-semibold text-gray-900 mb-5">
                Personal Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* NAME */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
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

                {/* PHONE */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10 digit phone number"
                    maxLength="10"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.phone}
                    </p>
                  )}
                </div>

              </div>

            </div>

            {/* ================= SERVICE DETAILS ================= */}
            <div>

              <h2 className="text-xl font-semibold text-gray-900 mb-5">
                Service Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* SERVICE */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Select Service
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">
                      Choose a service
                    </option>

                    <option>
                      Cockroach Control
                    </option>

                    <option>
                      Termite Control
                    </option>

                    <option>
                      Mosquito Control
                    </option>

                    <option>
                      Rodent Control
                    </option>

                    <option>
                      Bed Bug Control
                    </option>

                    <option>
                      Ant Control
                    </option>

                  </select>

                  {errors.service && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* PROPERTY TYPE */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Property Type
                  </label>

                  <select
                    name="propertyType"
                    value={
                      formData.propertyType
                    }
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">
                      Select property type
                    </option>

                    <option>
                      Apartment
                    </option>

                    <option>
                      Independent House
                    </option>

                    <option>
                      Office
                    </option>

                    <option>
                      Shop
                    </option>

                    <option>
                      Warehouse
                    </option>

                  </select>

                  {errors.propertyType && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.propertyType}
                    </p>
                  )}
                </div>

              </div>

            </div>

            {/* ================= DATE & TIME ================= */}
            <div>

              <h2 className="text-xl font-semibold text-gray-900 mb-5">
                Appointment Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* DATE */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  {errors.date && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* TIME */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Preferred Time
                  </label>

                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">
                      Select time
                    </option>

                    <option>
                      09:00 AM
                    </option>

                    <option>
                      11:00 AM
                    </option>

                    <option>
                      01:00 PM
                    </option>

                    <option>
                      03:00 PM
                    </option>

                    <option>
                      05:00 PM
                    </option>

                  </select>

                  {errors.time && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.time}
                    </p>
                  )}
                </div>

              </div>

            </div>

            {/* ================= ADDRESS ================= */}
            <div>

              <label className="block text-gray-700 font-medium mb-2">
                Service Address
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                placeholder="Enter your complete service address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>

              {errors.address && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.address}
                </p>
              )}

            </div>

            {/* ================= PROBLEM ================= */}
            <div>

              <label className="block text-gray-700 font-medium mb-2">
                Problem Description
              </label>

              <textarea
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your pest problem"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>

              {errors.problem && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.problem}
                </p>
              )}

            </div>

            {/* ================= SUBMIT ================= */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3.5 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Book Service
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Booking;