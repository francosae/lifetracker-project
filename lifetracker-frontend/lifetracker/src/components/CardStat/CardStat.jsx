import React from "react"
import "./CardStat.css"

export default function CardStat({ title, value }) {
  return (
    <div className="CardStat">
      <p>{title}</p>
      <span>{value}</span>
    </div>
  )
}
