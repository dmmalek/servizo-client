import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/home/Home";
import AllServices from "../pages/services/AllServices";
import ServiceDetails from "../pages/services/ServiceDetails";
import AddService from "../pages/services/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Data is not found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <AllServices />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
