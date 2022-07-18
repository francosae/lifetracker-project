import { useNavigate } from "react-router-dom"
import Button from "../Button/Button"
import ExerciseCard from "../ExerciseCard/ExerciseCard"
import { useExerciseContext } from "../../contexts/exercise"

import "./ExerciseMain.css"

export default function ExerciseOverview() {
  const navigate = useNavigate()
  const { exercises } = useExerciseContext()

  return (
    <div className="ExerciseOverview">
      <div className="header">
        <h3>Overview</h3>
        <Button className="outline gold" onClick={() => navigate("/exercise/create")} size="small">
          {"Add Exercise"}
        </Button>
      </div>
      <div className="feed">
        {exercises?.length ? (
          exercises.map((exercise, index) => <ExerciseCard exercise={exercise} key={index} />)
        ) : (
          <div className="empty">
            <h2>Nothing here yet.</h2>
          </div>
        )}
      </div>
    </div>
  )
}
