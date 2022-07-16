import { createContext, useState, useContext, useEffect } from "react"
import { useAuthContext } from "./auth"
import apiClient from "../apiClient/apiClient"

const ActivityContext = createContext(null)

export const ActivityContextProvider = ({ children }) => {
  const { user } = useAuthContext()
  const [initialized, setInitialized] = useState(false)
  const [activity, setActivity] = useState({})
  useEffect(() => {
    const fetchUserActivity = async () => {
      const { data } = await apiClient.fetchUserActivity()
      if (data) {
        setActivity(data.response.avg)
      }
    }

    if (user?.username) {
      if (!initialized) {
        fetchUserActivity()
        setInitialized(true)
      }
    }
  }, [user?.username])

  const activityValue = { activity, setActivity }

  return (
    <ActivityContext.Provider value={activityValue}>
      <>{children}</>
    </ActivityContext.Provider>
  )
}

export const useActivityContext = () => useContext(ActivityContext)
