import { useNavigate } from "react-router-dom";

function ServiceCard({ service }) {
  const navigate = useNavigate();

  const Icon = service.icon;

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        selectedService: service.title,
      },
    });
  };

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-600 transition-colors duration-300">
        <Icon className="text-green-600 group-hover:text-white text-2xl transition-colors duration-300" />
      </div>

      {/* Service Name */}
      <h2 className="text-xl font-bold text-gray-900 mt-5">
        {service.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-3 leading-relaxed">
        {service.description}
      </p>

      {/* Price */}
      <div className="mt-5">
        <p className="text-sm text-gray-500">
          Service Price
        </p>

        <p className="text-green-600 font-bold text-lg mt-1">
          {service.price}
        </p>
      </div>

      {/* Book Button */}
      <button
        type="button"
        onClick={handleBooking}
        className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Book Service
      </button>

    </div>
  );
}

export default ServiceCard;