import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const params = useParams();
  const id = params?.id;
  // console.log(id);
  useEffect(() => {
    try {
      const fetchServices = async () => {
        const { data } = await axios.get(
          `http://localhost:5000/services/${id}`
        );
        // console.log(data);
        setService(data);
      };
      fetchServices();
    } catch (error) {
      console.error("Failed to fetch service:", error);
    }
    // finally {
    //   setLoading(false);
    // }
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Provider Info Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body flex flex-col sm:flex-row items-center gap-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <img src={service?.providerImage} alt={service?.providerName} />
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold tracking-wide">
                {service?.providerName}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Certified Service Provider
              </p>

              <span className="badge badge-outline badge-primary mt-2">
                {service?.serviceArea}
              </span>
            </div>
          </div>
        </div>

        {/* Service Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={service?.imageUrl}
              alt="Service"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute top-4 left-4 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
              ৳ {service?.price}
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-base-100 rounded-3xl shadow-xl p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight">
                {service?.serviceName}
              </h1>

              <p className="text-gray-600 leading-relaxed">
                {service?.description}
              </p>

              {/* Inline Provider */}
              <div className="flex items-center gap-4 pt-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src={service?.providerImage}
                      alt={service?.providerName}
                    />
                  </div>
                </div>

                <div>
                  <p className="font-semibold">{service?.providerName}</p>
                  <p className="text-xs text-gray-500">Expert Technician</p>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between bg-base-200 rounded-2xl p-4">
                <span className="text-gray-500 text-sm">Service Price</span>
                <span className="text-2xl font-bold text-primary">
                  ৳ {service?.price}
                </span>
              </div>

              <button className="btn btn-primary btn-lg w-full rounded-2xl tracking-wide">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
