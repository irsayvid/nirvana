import React, { useState } from 'react'
import { useAuth } from '../state/authState'

const Login = () => {
  const login = useAuth((s) => s.login)
  const [data, setData] = useState({
    email: 'sairaj2119@gmail.com',
    password: 'asdfaa',
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    login(data)
    console.log(data)
  }
  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={data.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
