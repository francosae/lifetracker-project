import { Routes, Route } from "react-router-dom"
// import { Banner, NutritionNew, NutritionOverview, NotFound } from "../PageBanner"
import PageBanner from "../PageBanner/PageBanner"
import NotFound from "../NotFound/NotFound"
import "./NutritionPage.css"

export default function NutritionPage() {
  return (
    <div className="NutritionPage">
      <PageBanner title="Nutrition" />

      <div className="content">
        <Routes>
          {/* <Route path="/" element={<NutritionOverview />} />
          <Route path="/create" element={<NutritionNew />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
