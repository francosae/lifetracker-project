import { useAuthContext } from "../../contexts/auth"
import Login from "../Login/Login"

export default function AuthRoute({ element }) {
  const { user, initialized } = useAuthContext()

  if (!initialized) return null

  if (initialized && !user?.username) return <Login message="You must be logged in to access that page" />

  return <>{element}</>
}
