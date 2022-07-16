import { createContext, useState, useContext, useEffect } from "react"
import { useAuthContext } from "./auth"
import { useSleepContext } from "./sleep"
import { useExerciseContext } from "./exercise"
import { useNutritionContext } from "./nutrition"
import apiClient from "../apiClient/apiClient"

const ActivityContext = createContext(null)

export const ActivityContextProvider = ({ children }) => {
  const { user } = useAuthContext()
  const { exercises, initialized: exerciseInitialized } = useExerciseContext()
  const { nutritions, initialized: nutritionInitialized } = useNutritionContext()
  const { sleeps, initialized: sleepInitialized } = useSleepContext()
  const [initialized, setInitialized] = useState(false)
  const [activity, setActivity] = useState({
    averageExerciseIntensity: 0,
    averageDailyCalories: 0,
    maxCaloriesInOneMeal: 0,
    averageHoursSleep: 0,
    totalHoursSlept: 0,
    totalExerciseMinutes: 0,
  })

  const numTrackingItems = exercises.length + nutritions.length + sleeps.length
  const allInitialized = [exerciseInitialized, nutritionInitialized, sleepInitialized].every((v) => Boolean(v))

  useEffect(() => {
    const fetchUserActivity = async () => {
      const { data } = await apiClient.fetchUserActivity()
      if (data) {
        setActivity(data.response.avg)
      }
    }

    if (user?.username) {
      if (allInitialized && !initialized) {
        fetchUserActivity()
        setInitialized(true)
      } else if (allInitialized && numTrackingItems !== 0) {
        fetchUserActivity()
        setInitialized(true)
      }
    }
  }, [user?.username, numTrackingItems, allInitialized])

  const activityValue = { activity, setActivity }

  return (
    <ActivityContext.Provider value={activityValue}>
      <>{children}</>
    </ActivityContext.Provider>
  )
}

export const useActivityContext = () => useContext(ActivityContext)

export const selectMainSummaryStats = (activity) => ({
  totalExerciseMinutes: activity.totalExerciseMinutes,
  averageHoursSleep: activity.averageHoursSleep,
  averageDailyCalories: activity.averageDailyCalories,
})