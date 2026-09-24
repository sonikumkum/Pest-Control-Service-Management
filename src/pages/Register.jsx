import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle input changes
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

    setSuccess("");
  };

  // Validate registration form
  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length < 2) {
      newErrors.name =
        "Please enter your full name.";
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

    if (formData.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters.";
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    return newErrors;
  };

  // Submit registration
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors).length >
      0
    ) {
      setErrors(validationErrors);
      return;
    }

    // Check existing account
    const existingUser = JSON.parse(
      localStorage.getItem("pestCareUser")
    );

    if (
      existingUser &&
      existingUser.email.toLowerCase() ===
        formData.email.trim().toLowerCase()
    ) {
      setErrors({
        email:
          "An account with this email already exists.",
      });

      return;
    }

    // Create user
    const userData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      password: formData.password,
    };

    // Save user
    localStorage.setItem(
      "pestCareUser",
      JSON.stringify(userData)
    );

    setErrors({});

    setSuccess(
      "Account created successfully! 🎉"
    );

    // Redirect to login
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12">

      <div className="w-full max-w-lg">

        {/* Heading */}

        <div className="text-center mb-8">

          <p className="text-green-600 font-semibold">
            CREATE ACCOUNT
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            Join PestCare
          </h1>

          <p className="text-gray-600 mt-3">
            Create an account to manage your pest control services.
          </p>

        </div>

        {/* Success */}

        {success && (

          <div className="mb-5 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg">
            {success}
          </div>

        )}

        {/* Register Card */}

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}

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

            {/* Email */}

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

            {/* Phone */}

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

            {/* Password */}

            <div>

              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {errors.password && (

                <p className="text-red-500 text-sm mt-2">
                  {errors.password}
                </p>

              )}

            </div>

            {/* Confirm Password */}

            <div>

              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {errors.confirmPassword && (

                <p className="text-red-500 text-sm mt-2">
                  {errors.confirmPassword}
                </p>

              )}

            </div>

            {/* Submit */}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Create Account
            </button>

          </form>

          {/* Login Link */}

          <p className="text-center text-gray-600 mt-6">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}

export default Register;