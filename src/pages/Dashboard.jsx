import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarCheck,
  FaClock,
  FaTimesCircle,
  FaUser,
  FaEdit,
  FaSignOutAlt,
  FaPlus,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  // ================= USER DATA =================

  const registeredUser = JSON.parse(
    localStorage.getItem("pestCareUser")
  );

  // ================= BOOKINGS =================

  const [bookings, setBookings] = useState(
    JSON.parse(
      localStorage.getItem("pestCareBookings")
    ) || []
  );

  // ================= PROFILE =================

  const [profile, setProfile] = useState({
    name: registeredUser?.name || "",
    email: registeredUser?.email || "",
    phone: registeredUser?.phone || "",
  });

  const [editProfile, setEditProfile] =
    useState(false);

  const [profileErrors, setProfileErrors] =
    useState({});

  const [profileSuccess, setProfileSuccess] =
    useState("");

  // ================= SELECTED BOOKING =================

  const [selectedBooking, setSelectedBooking] =
    useState(null);

  // ================= STATISTICS =================

  const totalBookings = bookings.length;

  const upcomingBookings = bookings.filter(
    (booking) =>
      booking.status === "Upcoming"
  ).length;

  const completedBookings = bookings.filter(
    (booking) =>
      booking.status === "Completed"
  ).length;

  const cancelledBookings = bookings.filter(
    (booking) =>
      booking.status === "Cancelled"
  ).length;

  // ================= PROFILE CHANGE =================

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));

    setProfileErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setProfileSuccess("");
  };

  // ================= PROFILE VALIDATION =================

  const validateProfile = () => {
    const errors = {};

    if (profile.name.trim().length < 2) {
      errors.name =
        "Please enter a valid name.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        profile.email.trim()
      )
    ) {
      errors.email =
        "Please enter a valid email.";
    }

    if (
      !/^[0-9]{10}$/.test(
        profile.phone.trim()
      )
    ) {
      errors.phone =
        "Phone number must contain exactly 10 digits.";
    }

    return errors;
  };

  // ================= SAVE PROFILE =================

  const handleSaveProfile = (e) => {
    e.preventDefault();

    const validationErrors =
      validateProfile();

    if (
      Object.keys(validationErrors).length >
      0
    ) {
      setProfileErrors(
        validationErrors
      );
      return;
    }

    const updatedUser = {
      ...registeredUser,
      name: profile.name.trim(),
      email: profile.email.trim(),
      phone: profile.phone.trim(),
    };

    // Update user
    localStorage.setItem(
      "pestCareUser",
      JSON.stringify(updatedUser)
    );

    // Update logged-in email
    localStorage.setItem(
      "userEmail",
      updatedUser.email
    );

    // Update existing bookings
    const updatedBookings =
      bookings.map((booking) => ({
        ...booking,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
      }));

    setBookings(updatedBookings);

    localStorage.setItem(
      "pestCareBookings",
      JSON.stringify(updatedBookings)
    );

    setProfileErrors({});

    setProfileSuccess(
      "Profile updated successfully! 🎉"
    );

    setEditProfile(false);
  };

  // ================= CANCEL BOOKING =================

  const handleCancelBooking = (
    bookingId
  ) => {
    const updatedBookings =
      bookings.map((booking) =>
        booking.id === bookingId
          ? {
              ...booking,
              status: "Cancelled",
            }
          : booking
      );

    setBookings(updatedBookings);

    localStorage.setItem(
      "pestCareBookings",
      JSON.stringify(updatedBookings)
    );

    setSelectedBooking(null);
  };

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem(
      "isLoggedIn"
    );

    localStorage.removeItem(
      "userEmail"
    );

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 px-4 sm:px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

          <div>

            <p className="text-green-600 font-semibold">
              CUSTOMER DASHBOARD
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Welcome,{" "}
              {profile.name || "User"} 👋
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your profile and pest
              control bookings.
            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-3">

            {/* BOOK SERVICE */}

            <button
              type="button"
              onClick={() =>
                navigate("/booking")
              }
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              <FaPlus />
              Book Service
            </button>

            {/* LOGOUT */}

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 border border-red-300 text-red-600 px-5 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
            >
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>

        {/* ================================================= */}
        {/* SUCCESS MESSAGE */}
        {/* ================================================= */}

        {profileSuccess && (
          <div className="mb-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg">
            {profileSuccess}
          </div>
        )}

        {/* ================================================= */}
        {/* STATISTICS */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          {/* TOTAL */}

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Total Bookings
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {totalBookings}
                </p>

              </div>

              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <FaCalendarCheck />
              </div>

            </div>

          </div>

          {/* UPCOMING */}

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Upcoming
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {upcomingBookings}
                </p>

              </div>

              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <FaClock />
              </div>

            </div>

          </div>

          {/* COMPLETED */}

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Completed
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {completedBookings}
                </p>

              </div>

              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <FaCalendarCheck />
              </div>

            </div>

          </div>

          {/* CANCELLED */}

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Cancelled
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {cancelledBookings}
                </p>

              </div>

              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                <FaTimesCircle />
              </div>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* PROFILE SECTION */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7 mb-8">

          {/* PROFILE HEADER */}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                <FaUser />
              </div>

              <div>

                <h2 className="text-xl font-bold text-gray-900">
                  My Profile
                </h2>

                <p className="text-gray-500 text-sm">
                  Manage your account information
                </p>

              </div>

            </div>

            {!editProfile && (
              <button
                type="button"
                onClick={() =>
                  setEditProfile(true)
                }
                className="flex items-center justify-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                <FaEdit />
                Edit Profile
              </button>
            )}

          </div>

          {/* ================================================= */}
          {/* PROFILE VIEW */}
          {/* ================================================= */}

          {!editProfile ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* NAME */}

              <div className="bg-gray-50 rounded-xl p-4">

                <p className="text-sm text-gray-500">
                  Full Name
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {profile.name ||
                    "Not available"}
                </p>

              </div>

              {/* EMAIL */}

              <div className="bg-gray-50 rounded-xl p-4">

                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-semibold text-gray-900 mt-1 break-all">
                  {profile.email ||
                    "Not available"}
                </p>

              </div>

              {/* PHONE */}

              <div className="bg-gray-50 rounded-xl p-4">

                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {profile.phone ||
                    "Not available"}
                </p>

              </div>

            </div>
          ) : (

            /* ================================================= */
            /* EDIT PROFILE */
            /* ================================================= */

            <form
              onSubmit={handleSaveProfile}
              className="space-y-5"
            >

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {/* NAME */}

                <div>

                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={
                      handleProfileChange
                    }
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  {profileErrors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {profileErrors.name}
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
                    value={profile.email}
                    onChange={
                      handleProfileChange
                    }
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  {profileErrors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {profileErrors.email}
                    </p>
                  )}

                </div>

                {/* PHONE */}

                <div>

                  <label className="block text-gray-700 font-medium mb-2">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={
                      handleProfileChange
                    }
                    placeholder="Enter 10 digit phone number"
                    maxLength="10"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  {profileErrors.phone && (
                    <p className="text-red-500 text-sm mt-2">
                      {profileErrors.phone}
                    </p>
                  )}

                </div>

              </div>

              {/* PROFILE BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-3">

                <button
                  type="submit"
                  className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setEditProfile(false);
                    setProfileErrors({});
                  }}
                  className="border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

              </div>

            </form>
          )}

        </div>

        {/* ================================================= */}
        {/* BOOKINGS SECTION */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7">

          <div className="mb-6">

            <h2 className="text-xl font-bold text-gray-900">
              My Bookings
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              View and manage your service appointments.
            </p>

          </div>

          {/* ================================================= */}
          {/* EMPTY STATE */}
          {/* ================================================= */}

          {bookings.length === 0 ? (

            <div className="text-center py-14">

              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl">
                <FaCalendarCheck />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                No bookings yet
              </h3>

              <p className="text-gray-500 mt-2 max-w-md mx-auto">
                You haven't booked a pest control
                service yet. Start by scheduling
                your first service.
              </p>

              <button
                type="button"
                onClick={() =>
                  navigate("/booking")
                }
                className="mt-6 bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Book Your First Service
              </button>

            </div>

          ) : (

            <>
              {/* ================================================= */}
              {/* DESKTOP TABLE */}
              {/* ================================================= */}

              <div className="hidden md:block overflow-x-auto">

                <table className="w-full">

                  <thead>

                    <tr className="border-b border-gray-200 text-left">

                      <th className="py-4 px-3 text-sm font-semibold text-gray-600">
                        Booking ID
                      </th>

                      <th className="py-4 px-3 text-sm font-semibold text-gray-600">
                        Service
                      </th>

                      <th className="py-4 px-3 text-sm font-semibold text-gray-600">
                        Date
                      </th>

                      <th className="py-4 px-3 text-sm font-semibold text-gray-600">
                        Time
                      </th>

                      <th className="py-4 px-3 text-sm font-semibold text-gray-600">
                        Status
                      </th>

                      <th className="py-4 px-3 text-sm font-semibold text-gray-600">
                        Action
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {bookings.map(
                      (booking) => (
                        <tr
                          key={booking.id}
                          className="border-b border-gray-100"
                        >

                          <td className="py-4 px-3 font-semibold text-gray-900">
                            {booking.id}
                          </td>

                          <td className="py-4 px-3 text-gray-700">
                            {booking.service}
                          </td>

                          <td className="py-4 px-3 text-gray-700">
                            {booking.date}
                          </td>

                          <td className="py-4 px-3 text-gray-700">
                            {booking.time}
                          </td>

                          <td className="py-4 px-3">

                            <span
                              className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                                booking.status ===
                                "Upcoming"
                                  ? "bg-green-100 text-green-700"
                                  : booking.status ===
                                    "Cancelled"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {booking.status}
                            </span>

                          </td>

                          <td className="py-4 px-3">

                            <button
                              type="button"
                              onClick={() =>
                                setSelectedBooking(
                                  booking
                                )
                              }
                              className="text-green-600 hover:text-green-700 font-semibold"
                            >
                              View
                            </button>

                          </td>

                        </tr>
                      )
                    )}

                  </tbody>

                </table>

              </div>

              {/* ================================================= */}
              {/* MOBILE BOOKING CARDS */}
              {/* ================================================= */}

              <div className="md:hidden space-y-4">

                {bookings.map(
                  (booking) => (
                    <div
                      key={booking.id}
                      className="border border-gray-200 rounded-xl p-4"
                    >

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <p className="text-xs text-gray-500">
                            Booking ID
                          </p>

                          <p className="font-bold text-gray-900">
                            {booking.id}
                          </p>

                        </div>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status ===
                            "Upcoming"
                              ? "bg-green-100 text-green-700"
                              : booking.status ===
                                "Cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {booking.status}
                        </span>

                      </div>

                      <div className="mt-4 space-y-2">

                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">
                            Service:
                          </span>{" "}
                          {booking.service}
                        </p>

                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">
                            Date:
                          </span>{" "}
                          {booking.date}
                        </p>

                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">
                            Time:
                          </span>{" "}
                          {booking.time}
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedBooking(
                            booking
                          )
                        }
                        className="mt-4 w-full border border-green-600 text-green-600 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
                      >
                        View Details
                      </button>

                    </div>
                  )
                )}

              </div>

            </>
          )}

        </div>

      </div>

      {/* ================================================= */}
      {/* BOOKING DETAILS MODAL */}
      {/* ================================================= */}

      {selectedBooking && (

        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">

          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto">

            {/* MODAL HEADER */}

            <div className="p-6 border-b border-gray-200 flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Booking Details
                </p>

                <h2 className="text-xl font-bold text-gray-900">
                  {selectedBooking.id}
                </h2>

              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedBooking(null)
                }
                className="text-gray-500 hover:text-gray-900 text-3xl leading-none"
              >
                ×
              </button>

            </div>

            {/* MODAL CONTENT */}

            <div className="p-6 space-y-5">

              <div>

                <p className="text-sm text-gray-500">
                  Service
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {selectedBooking.service}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Property Type
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {selectedBooking.propertyType}
                </p>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <p className="text-sm text-gray-500">
                    Date
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedBooking.date}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Time
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedBooking.time}
                  </p>

                </div>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Address
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {selectedBooking.address}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Problem
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {selectedBooking.problem}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Status
                </p>

                <span
                  className={`inline-flex mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedBooking.status ===
                    "Upcoming"
                      ? "bg-green-100 text-green-700"
                      : selectedBooking.status ===
                        "Cancelled"
                      ? "bg-red-100 text-red-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {selectedBooking.status}
                </span>

              </div>

            </div>

            {/* MODAL FOOTER */}

            <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">

              {selectedBooking.status ===
                "Upcoming" && (

                <button
                  type="button"
                  onClick={() =>
                    handleCancelBooking(
                      selectedBooking.id
                    )
                  }
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Cancel Booking
                </button>

              )}

              <button
                type="button"
                onClick={() =>
                  setSelectedBooking(null)
                }
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Dashboard;