import { useNavigate } from "react-router-dom"
import Button from "../Button/Button"
import NutritionCard from "../NutritionCard/NutritionCard"
import { useNutritionContext } from "../../contexts/nutrition"

import "./NutritionMain.css"

export default function NutritionMain() {
  const navigate = useNavigate()
  const { nutritions } = useNutritionContext()
 

  return (
    <div className="NutritionOverview">
      <div className="header">
        <h3>Overview</h3>
        <Button className="outline aqua" onClick={() => navigate("/nutrition/create")} size="small">
          {"Record Nutrition"}
        </Button>
      </div>
      <div className="feed">
        {nutritions?.length ? (
          nutritions.map((nutrition) => <NutritionCard nutrition={nutrition} key={nutrition.id}/>)
        ) : (
          <div className="empty">
            <h2>No nutrition data.</h2>
          </div>
        )}
      </div>
    </div>
  )
}
