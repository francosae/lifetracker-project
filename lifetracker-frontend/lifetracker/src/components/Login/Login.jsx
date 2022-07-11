import { Link } from "react-router-dom"
import "./Login.css"

export default function Login({ message }) {

  return (
    <div className="Login">
      <div className="card">
        <h2>Login</h2>
     <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
            />
          </div>



        </div>

        <div className="footer">
          <p>
            Don't have an account? Sign up <Link to="/register">here.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
