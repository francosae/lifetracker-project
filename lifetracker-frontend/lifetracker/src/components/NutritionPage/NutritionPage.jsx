import { Routes, Route } from "react-router-dom"
import PageBanner from "../PageBanner/PageBanner"
import NotFound from "../NotFound/NotFound"
import "./NutritionPage.css"
import NutritionNew from "../NutritionNew/NutritionNew"
import NutritionMain from "../NutritionMain/NutritionMain"

export default function NutritionPage() {
  return (
    <div className="NutritionPage">
      <PageBanner title="Nutrition" />

      <div className="content">
        <Routes>
          <Route path="/" element={<NutritionMain />} />
          <Route path="/create" element={<NutritionNew />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

