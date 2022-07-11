import React from 'react'
import "./Home.css"
import watchImg from "../../assets/watch.svg"
export default function Home() {
    return (
        <div className="Home">
          <div className="hero">
            <img src={watchImg} alt="hero img" />
            <h1>Life Tracker</h1>
            <p>Helping you take back control of your world</p>
          </div>
    
        </div>
      )
    }
    