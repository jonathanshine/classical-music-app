import React from 'react'

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <h3>Login</h3>
        <label>
          <span>Email</span>
          <input type="text" placeholder="Enter Email" name="email" required/>
        </label>

        <label>
          <span>Password</span>
          <input type="password" placeholder="Enter Password" name="psw" required/>
        </label>

        <button type="submit">submit</button>
      </form>
    </div>
  )
}
