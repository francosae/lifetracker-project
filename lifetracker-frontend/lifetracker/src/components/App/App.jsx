import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

//Components
import Home from '../Home/Home'
import Navbar from "../Navbar/Navbar"
import Login from "../Login/Login"
import Register from "../Register/Register"

export default function App() {
  const [appState, setAppState] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/register" element={<Register setAppState={setAppState} />} />
          <Route path="/login" element={<Login setAppState={setAppState} />} />
          <Route
            path="/portal"
            element={<Portal setAppState={setAppState} appState={appState} user={appState?.user} />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}