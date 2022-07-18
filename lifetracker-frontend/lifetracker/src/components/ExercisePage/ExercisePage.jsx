import { Routes, Route } from "react-router-dom"
import PageBanner from "../PageBanner/PageBanner"
import ExerciseMain from "../ExerciseMain/ExerciseMain"
import ExerciseNew from "../ExerciseNew/ExerciseNew"
import NotFound from "../NotFound/NotFound"

import "./ExercisePage.css"

export default function ExercisePage() {
  return (
    <div className="ExercisePage">
      <PageBanner title="Exercise" />

      <div className="content">
        <Routes>
          <Route path="/" element={<ExerciseMain />} />
          <Route path="/create" element={<ExerciseNew />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
