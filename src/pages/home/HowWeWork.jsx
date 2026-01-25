import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HowWeWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-3xl md:text-4xl font-bold transition-all duration-300 hover:text-blue-600 hover:tracking-wider  "
          >
            How We Work
          </h2>
          <p className="mt-4 text-base-content/70 leading-relaxed">
            Our streamlined process ensures a smooth, transparent, and reliable
            service experience from booking to completion.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="card bg-base-200 border border-base-300"
          >
            <div className="card-body text-center">
              <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-primary text-primary-content flex items-center justify-center text-xl font-semibold">
                01
              </div>
              <h3 className="text-xl font-semibold mb-2">Discover Services</h3>
              <p className="text-base-content/70 leading-relaxed">
                Browse a wide range of services shared by verified providers and
                choose the one that best fits your needs.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="card bg-base-200 border border-base-300"
          >
            <div className="card-body text-center">
              <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-secondary text-secondary-content flex items-center justify-center text-xl font-semibold">
                02
              </div>
              <h3 className="text-xl font-semibold mb-2">Book & Confirm</h3>
              <p className="text-base-content/70 leading-relaxed">
                Review service details, select your preferred schedule, and
                confirm your booking with transparent pricing.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="card bg-base-200 border border-base-300"
          >
            <div className="card-body text-center">
              <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-accent text-accent-content flex items-center justify-center text-xl font-semibold">
                03
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Delivery</h3>
              <p className="text-base-content/70 leading-relaxed">
                The service provider delivers the service as scheduled, while
                both parties can track and update the service status.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm md:text-base">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-4 rounded-lg bg-base-200"
          >
            Verified Providers
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="p-4 rounded-lg bg-base-200"
          >
            Secure Bookings
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-4 rounded-lg bg-base-200"
          >
            Transparent Pricing
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="p-4 rounded-lg bg-base-200"
          >
            Status Tracking
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
