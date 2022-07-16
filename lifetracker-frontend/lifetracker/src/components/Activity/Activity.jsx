import { useNavigate } from "react-router-dom"
import { useActivityContext } from "../../contexts/activity"
import Button from "../Button/Button"
import Summary from "../Summary/Summary"

import "./Activity.css"

const Actions = ({ title = "Activity Feed" }) => {
  const navigate = useNavigate()
  return (
    <div className="actions">
      <h2 className="heading">{title}</h2>

      <div className="buttons">
        <Button className="outline gold" onClick={() => navigate("/exercise/create")} size="small">
          {"Add Exercise"}
        </Button>
        <Button className="outline blue" onClick={() => navigate("/sleep/create")} size="small">
          {"Log Sleep"}
        </Button>
        <Button className="outline aqua" onClick={() => navigate("/nutrition/create")} size="small">
          {"Record Nutrition"}
        </Button>
      </div>
    </div>
  )
}

export default function Activity() {
  const { activity } = useActivityContext()
  console.log(activity)
  const number = Math.round(activity)
  console.log(number)
  return (
    <div className="ActivityPage">
      <div className="content">
        <Actions />
        <div className="stats">
          <div className="main">
            <Summary
              color="gold"
              isAverage={false}
              stat={{ title: `Total Exercise Minutes`, }}
            />
            <Summary
              color="purple"
              isAverage={true}
              stat={{ title: `Avg Sleep Hours`, }}
            />
            <Summary
              color="aqua"
              isAverage={true}
              stat={{ title: `Avg Daily Calories`, value: number }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
