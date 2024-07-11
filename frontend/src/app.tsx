import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripid",
    element: <TripDetailsPage />,
  },
  {
    path: "/*",
    element: <h1>Erro 404:  Pagina não encontra</h1>,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}