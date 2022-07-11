import { Link } from "react-router-dom"
import "./Register.css"

export default function Register() {

  return (
    <div className="Register">
      <div className="card">
        <h2>Register</h2>

        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email"
            />
          </div>

          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="your_username"

            />
          </div>

          <div className="split-input-field">
            <div className="input-field">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"

              />
            
            </div>

            <div className="input-field">
  
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
      
              />
            
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a secure password"

            />
          
          </div>

          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm your password"

            />
           
          </div>

          <button className="btn">

          </button>
        </div>

        <div className="footer">
          <p>
            Already have an account? Login <Link to="/login">here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
