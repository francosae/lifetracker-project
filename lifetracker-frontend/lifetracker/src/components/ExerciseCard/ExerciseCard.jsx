import CardStat from "../CardStat/CardStat"
import "./ExerciseCard.css"

export default function ExerciseCard({ exercise }) {
    console.log(exercise)
  return (
    <div className="ExerciseCard">
      <div className="card-header">
        <h2 className="title">{exercise.name}</h2>
        {exercise.image ? <img src={exercise.imageUrl} alt="exercise" /> : null}
      </div>

      <div className="card-stats">
        <CardStat title="Duration" value={exercise.duration} />
        <CardStat title="Intensity" value={exercise.intensity} />
      </div>

      <div className="card-meta">
        <small>{exercise.createdAt}</small>
        <small className="category">{exercise.category}</small>
      </div>
    </div>
  )
}
