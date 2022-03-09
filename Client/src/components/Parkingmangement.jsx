import React, { useContext } from 'react'
import style from './Parking.module.css'
import Navbar from './Navbar'
import { Authcontext } from '../context/Authcontext'

const Parkingmangement = () => {
  const { token } = useContext(Authcontext)
  const handlesubmit = (e) => {
    e.preventDefault()
    const payload = {
      vehiclesnumber: e.target.vehicleno.value,
      vehicletype: e.target.vehicletype.value,
      arrivingtime: e.target.entrytime.value,
      slot: e.target.slot.value,
    }
    post(payload)
  }
  const handlesubmittwo = (e) => {}
  function post(payload) {
    fetch('http://localhost:4000/vehicle', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))

    // setTimeout(() => {
    //   navigate('/Detail')
    // }, 2000)
  }
  return (
    <>
      <Navbar />
      <div className={style.detail}>
        <div className={style.log}>
          {token.name + ' Parking Managemant System'}{' '}
        </div>

        <form onSubmit={(e) => handlesubmit(e)}>
          <input type="text" placeholder="vehicleNo" name="vehicleno" />
          <input type="text" placeholder="vehicle type" name="vehicletype" />
          <input type="text" placeholder="entry time" name="entrytime" />
          <input type="text" placeholder="slot" name="slot" />
          <input type="submit" />
        </form>

        <div className={style.logt}>
          {token.name + ' Parking Managemant System Exit'}{' '}
        </div>
        <form onSubmit={(e) => handlesubmittwo(e)}>
          <input type="text" placeholder="vehicleNo" name="vehicleno" />

          <input type="text" placeholder="departure time" name="departure" />

          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default Parkingmangement
