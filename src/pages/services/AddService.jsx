import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AddService = () => {
  const { user } = useAuth();
  const handleAddService = async (e) => {
    e.preventDefault();
    const providerName = user?.displayName;
    const providerImage = user?.photoURL;
    const providerEmail = user?.email;

    const form = new FormData(e.target);
    const addService = Object.fromEntries(form.entries());
    const data = { ...addService, providerEmail, providerName, providerImage };
    try {
      const res = await axios.post("http://localhost:5000/services", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
        <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold justify-center">
              Add New Service
            </h2>

            <form onSubmit={handleAddService} className="space-y-4">
              {/* Image URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Service Image URL
                  </span>
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Service Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Service Name</span>
                </label>
                <input
                  type="text"
                  name="serviceName"
                  placeholder="e.g. Home Cleaning"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Price & Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="৳ 1500"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Service Area</span>
                  </label>
                  <input
                    type="text"
                    name="serviceArea"
                    placeholder="Dhaka, Comilla"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Description</span>
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered h-32"
                  placeholder="Write service details here..."
                ></textarea>
              </div>

              {/* Button */}
              <div className="form-control pt-4">
                <button className="btn btn-primary w-full text-lg">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
