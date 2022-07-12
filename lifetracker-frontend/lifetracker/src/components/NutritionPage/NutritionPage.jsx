import { Routes, Route } from "react-router-dom"
import PageBanner from "../PageBanner/PageBanner"
import NotFound from "../NotFound/NotFound"
import "./NutritionPage.css"

export default function NutritionPage() {
  return (
    <div className="NutritionPage">
      <PageBanner title="Nutrition" />
      <h1>BLANK</h1>
      <div className="content">
        <Routes>}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

