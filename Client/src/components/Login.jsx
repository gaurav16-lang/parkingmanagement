import React, { useContext } from 'react'
import Navbar from './Navbar'
import styles from './Login.module.css'
import { useNavigate } from 'react-router'
import { Authcontext } from '../context/Authcontext'
const Login = () => {
  let navigate = useNavigate()

  const { token, handletoken } = useContext(Authcontext)
  const handle = (e) => {
    e.preventDefault()

    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    // if (e.target.email.value && e.target.password.value) {
    //   setTimeout(() => {
    //     navigate('/About')
    //   }, 3000)
    // }
    post(payload)
  }
  function post(payload) {
    fetch('http://localhost:4000/register/login', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => handletoken(res))
    if (payload) {
      setTimeout(() => {
        navigate('/Detail')
      }, 2000)
    }
  }
  return (
    <>
      <Navbar />

      <div className={styles.posl}>
        <div className={styles.log}>LOGIN WITH YOUR CREDENTIAL</div>
        <div>
          <form onSubmit={(e) => handle(e)}>
            <input
              type="text"
              placeholder="enter the email"
              required
              name="email"
            />
            <input
              type="password"
              placeholder="enter the password"
              required
              name="password"
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
