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
//Contexts
import { AuthContextProvider } from "../../contexts/auth"

export default function App() {
  const [appState, setAppState] = useState({})
  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/nutrition" element={<NutritionPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  )
}