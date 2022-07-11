import { Link } from "react-router-dom"
import codepathlogo from "../../assets/codepath_logo.svg"

import "./Navbar.css"

const navLinks = [
  { label: "Activity", path: `/activity` },
  { label: "Exercise", path: `/exercise` },
  { label: "Nutrition", path: `/nutrition` },
  { label: "Sleep", path: `/sleep` },
]

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={codepathlogo} alt="logo" />
          </Link>
        </div>

        <ul className="links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}

              <li className="secondary btn">
                <span>Logout</span>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            
              <li className="btn secondary">
                <Link to="/register">Sign Up</Link>
              </li>

        </ul>
      </div>
    </nav>
  )
}
