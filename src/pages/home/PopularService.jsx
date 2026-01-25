import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../services/ServiceCard";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

const PopularService = () => {
  const [popularServices, setPopularServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/popular");
        setPopularServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // animation useeffect
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div className="space-y-8 container mx-auto">
      <h1 className="text-2xl font-bold my-4">Popular Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4">
        {popularServices.map((popularService, index) => (
          <div
            key={popularService._id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <ServiceCard service={popularService}></ServiceCard>
          </div>
        ))}
      </div>
      <div
        className="text-center"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        {/* Button */}
        <Link
          to={"/services"}
          className="w-full text-base lg:text-xl p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Check All Services
        </Link>
      </div>
    </div>
  );
};

export default PopularService;
