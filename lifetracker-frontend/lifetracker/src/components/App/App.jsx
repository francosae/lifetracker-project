import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

//Components
import Home from '../Home/Home'
import Navbar from "../Navbar/Navbar"
import Login from "../Login/Login"
import Register from "../Register/Register"
import AuthRoute from "../AuthRoute/AuthRoute"
import NotFound from "../NotFound/NotFound"
import NutritionPage from "../NutritionPage/NutritionPage"
import Activity from "../Activity/Activity"
//Contexts
import { AuthContextProvider } from "../../contexts/auth"
import { NutritionContextProvider } from "../../contexts/nutrition"
import { ExerciseContextProvider } from "../../contexts/exercise"
import { ActivityContextProvider } from "../../contexts/activity"
import { SleepContextProvider } from "../../contexts/sleep"

export default function App() {
  return (
    <AuthContextProvider>
      <NutritionContextProvider>
        <ExerciseContextProvider>
          <SleepContextProvider>
            <ActivityContextProvider>
              <div className="App">
                <BrowserRouter>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home /> } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/nutrition/*" element={<AuthRoute element={< NutritionPage />} /> } />
                    <Route path="/activity" element={<AuthRoute element={<Activity /> } /> } />
                  </Routes>
                </BrowserRouter>
              </div>
            </ActivityContextProvider>
          </SleepContextProvider>
        </ExerciseContextProvider>
      </NutritionContextProvider>
    </AuthContextProvider>
  )
}