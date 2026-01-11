import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <div className="grid grid-cols-3 items-center">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
