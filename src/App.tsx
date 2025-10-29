import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import VehicleType from "./pages/VehicleType";
import Drivers from "./pages/Drivers";
import RootLayout from "./layout/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

const router = createBrowserRouter([
  { element: <Login />, path: "/login" },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <RootLayout />, // layout wrapper
        children: [
          { path: "/", element: <Home /> },
          { path: "/drivers", element: <Drivers /> },
          { path: "/vehicle-type", element: <VehicleType /> },
          { path: "*", element: <Navigate to="/" replace /> }, // redirect unknown routes
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
