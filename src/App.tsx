import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import VehicleType from "./pages/VehicleType";
import Drivers from "./pages/Drivers";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />, // layout wrapper
    children: [
      {path: "/", element: <Home />},
      {path: "/drivers", element: <Drivers />},
      {path: "/vehicle-type", element: <VehicleType />},
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
