import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      login: "",
    }));

    setSuccess("");
  };

  // Validate login form
  const validateForm = () => {
    const newErrors = {};

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email.";
    }

    if (!formData.password) {
      newErrors.password =
        "Please enter your password.";
    }

    return newErrors;
  };

  // Submit login
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

    // Get registered user
    const registeredUser = JSON.parse(
      localStorage.getItem("pestCareUser")
    );

    // Account does not exist
    if (!registeredUser) {
      setErrors({
        login:
          "No account found. Please create an account first.",
      });

      return;
    }

    // Compare email
    const emailMatches =
      registeredUser.email.toLowerCase() ===
      formData.email.trim().toLowerCase();

    // Compare password
    const passwordMatches =
      registeredUser.password ===
      formData.password;

    // Invalid credentials
    if (!emailMatches || !passwordMatches) {
      setErrors({
        login:
          "Invalid email or password.",
      });

      return;
    }

    // Save login status
    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    localStorage.setItem(
      "userEmail",
      registeredUser.email
    );

    setErrors({});

    setSuccess(
      "Login successful! 🎉"
    );

    // Go to dashboard
    setTimeout(() => {
      navigate("/dashboard", {
        replace: true,
      });
    }, 800);
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12">

      <div className="w-full max-w-md">

        {/* Heading */}

        <div className="text-center mb-8">

          <p className="text-green-600 font-semibold">
            WELCOME BACK
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            Login to PestCare
          </h1>

          <p className="text-gray-600 mt-3">
            Login to manage your pest control services.
          </p>

        </div>

        {/* Login Error */}

        {errors.login && (

          <div className="mb-5 bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg">
            {errors.login}
          </div>

        )}

        {/* Success */}

        {success && (

          <div className="mb-5 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg">
            {success}
          </div>

        )}

        {/* Login Card */}

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

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
                placeholder="Enter your registered email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {errors.email && (

                <p className="text-red-500 text-sm mt-2">
                  {errors.email}
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
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {errors.password && (

                <p className="text-red-500 text-sm mt-2">
                  {errors.password}
                </p>

              )}

            </div>

            {/* Submit */}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>

          </form>

          {/* Register */}

          <p className="text-center text-gray-600 mt-6">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}

export default Login;