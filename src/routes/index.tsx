import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MAIN_ROUTES } from "./MainRoutes";

const Navigation = () => {
  const router = createBrowserRouter([
    ...MAIN_ROUTES
  ])

  return <RouterProvider router={router} />
}

export default Navigation