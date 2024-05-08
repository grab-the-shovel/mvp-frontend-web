import { RouteObject } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import ROUTES_PATHS from './RoutesPaths'

export const MAIN_ROUTES: RouteObject[] = [
  {
    path: ROUTES_PATHS.HOME,
    element: <div>Home</div>
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: ROUTES_PATHS.PROFILE,
        element: <div>Profile</div>
      }
    ],
  },
  {
    path: ROUTES_PATHS.NOT_FOUND,
    element: <div>Not Found</div>
  }
]