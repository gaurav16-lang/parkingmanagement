import React from 'react'
import { useNavigate } from 'react-router'

import Navbar from './Navbar'
import styles from './Registration.module.css'
const Registartion = () => {
  const [data, setdata] = React.useState({ name: '' })
  let navigate = useNavigate()
  const handlechange = (e) => {
    e.preventDefault()

    const payload = {
      name: e.target.organisation.value,
      email: e.target.email.value,
      password: e.target.password.value,
      location: e.target.location.value,
      Ownername: e.target.ownername.value,
      openingtime: e.target.openingtime.value,
      clossingtime: e.target.closeingtime.value,
      availabilityfourvehicles: e.target.fourvehicle.value,
      availabilitytwovehicles: e.target.twovehicles.value,
      ratetwovehicle: e.target.rateoftwo.value,
      ratefourvehicles: e.target.rateofofour.value,
    }
    console.log(payload)

    post(payload)
    //   .then((res) => console.log(res))
  }

  function post(payload) {
    fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setTimeout(() => {
      navigate('/Login')
    }, 2000)
  }

  return (
    <>
      <Navbar />

      <div className={styles.posl}>
        <div className={styles.log}>Registration</div>
        <div>
          <form onSubmit={(e) => handlechange(e)}>
            <input
              type="text"
              name="organisation"
              placeholder="parking organisation name"
            />
            <br />
            <input type="text" placeholder="email" name="email" required />{' '}
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              required
            />{' '}
            <br />
            <input
              type="text"
              placeholder="location"
              name="location"
              required
            />{' '}
            <br />
            <input
              type="text"
              placeholder="ownername"
              name="ownername"
              required
            />{' '}
            <br />
            <input
              type="text"
              placeholder="openingtime"
              name="openingtime"
              required
            />{' '}
            <br />
            <input
              type="text"
              placeholder="closeingtime"
              name="closeingtime"
              required
            />{' '}
            <br />
            <input
              type="text"
              placeholder="availibility four vehicles"
              name="fourvehicle"
              required
            />{' '}
            <br />
            <input
              type="text"
              placeholder="availibility two vehicles"
              required
              name="twovehicles"
            />
            <br />
            <input
              type="text"
              placeholder="Rate of two vehicles"
              name="rateoftwo"
              required
            />{' '}
            <br />
            <input
              type="text"
              placeholder="Rate of four Vehicles"
              name="rateofofour"
              required
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Registartion

// name: { type: String, require: true },
// email: { type: String, required: true },
// password: { type: String, required: true },
// location: { type: String, required: true },
// Ownername: { type: String, required: true },
// openingtime: { type: Number, required: true },
// clossingtime: { type: Number, required: true },
// availabilityfourvehicles: { type: Numbers, required: true },
// availabilitytwovehicles: { type: Number, required: true },
// ratetwovehicle: { type: Number, required: true },
// ratefourvehicles: { type: Number, required: true },
// }
