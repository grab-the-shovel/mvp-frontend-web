import { Outlet, Navigate } from 'react-router-dom'
import RoutesPaths from './RoutesPaths'

const useAuth = () => {
  const user = { loggedIn: false }
  return user && user.loggedIn
}

const ProtectedRoutes = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to={RoutesPaths.HOME} />
}

export default ProtectedRoutes