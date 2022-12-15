import React from 'react'

import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Login</button>
        <p>Invalid username or password</p>
        <span><Link to="/register">Want to sign up?</Link></span>
      </form>
    </div>
  )
}

export default Login