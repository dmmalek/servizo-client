const ServiceCard = ({ service }) => {
  const { imageUrl, serviceName, price, serviceArea, description, createdAt } =
    service;
  return (
    <div>
      <div className="max-w-sm rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
        {/* Image Section */}
        <div className="relative">
          <img
            src={imageUrl}
            alt="AC Repair Service"
            className="h-48 w-full object-cover"
          />

          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {`৳ ${price}`}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h2 className="text-xl font-bold text-gray-800">{serviceName}</h2>

          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

          {/* Service Area */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium text-gray-500">
              {serviceArea}
            </span>

            <span className="text-xs text-gray-400">{createdAt}</span>
          </div>

          {/* Button */}
          <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
