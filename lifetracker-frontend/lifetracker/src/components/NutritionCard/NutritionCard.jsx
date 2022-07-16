import CardStat from "../CardStat/CardStat"
import "./NutritionCard.css"

export default function NutritionCard({ nutrition }) {
  console.log(nutrition)
  return (
    <div className="NutritionCard">
      <div className="card-header">
        {nutrition.image_url ? <img src={nutrition.image_url} alt="nutrition" /> : null}
        <h2 className="title">{nutrition.title}</h2>
      </div>

      <div className="card-stats">
        <CardStat title="Calories" value={nutrition.calories} />
        <CardStat title="Quantity" value={nutrition.quantity} />
      </div>

      <div className="card-meta">
        <small>{nutrition.created_at}</small>
        <small className="category">{nutrition.category}</small>
      </div>
    </div>
  )
}
