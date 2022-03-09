import React, { useContext } from 'react'
import Navbar from './Navbar'
import style from './Detail.module.css'
import { Authcontext } from '../context/Authcontext'
import { useNavigate } from 'react-router'
const Detail = () => {
  const { token } = useContext(Authcontext)
  let navigate = useNavigate()
  const handlemove = () => {
    setTimeout(() => {
      navigate('/parkingmanage')
    }, 3000)
  }
  return (
    <>
      <Navbar />
      <div className={style.detail}>
        <div className={style.info}>Detail Of The Organisation</div>
        <div>
          <span>Organisation Name</span>:- {token.name}
        </div>
        <div>
          <span>Owner name</span>:- {token.Ownername}
        </div>
        <div>
          <span>availability for fourvehicles</span>:-{' '}
          {token.availabilityfourvehicles}
        </div>
        <div>
          <span>availability for twovehicles</span>:-{' '}
          {token.availabilitytwovehicles}
        </div>
        <div>
          <span>opening time</span>:- {token.openingtime + 'am'}
        </div>
        <div>
          <span>clossing time</span>:- {token.clossingtime + 'pm'}
        </div>
        <div>
          <span>Organisation email</span>:- {token.email}
        </div>
        <div>
          <span>Location</span>:- {token.location}
        </div>
        <div>
          <span>Rate for four Vehicles</span>:- {token.ratefourvehicles}
        </div>
        <div>
          <span>Rate for Two Vehicles</span>:- {token.ratetwovehicle}
        </div>
        <button onClick={handlemove}>Proceed further</button>
      </div>
    </>
  )
}

export default Detail
