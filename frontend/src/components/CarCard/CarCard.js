import React from 'react'
import './CarCrad.css'

export const CarCard = ({ carWash }) => {
  const bookingStatus = () => {
    alert('Successfully booked your slot')
  }

  return (
    <>
      <div className='card-container'>
        <img src={carWash.image} alt={carWash.name} className='card-img' />
        <div className='card-body'>
          <h4 className='card-body-head'>{carWash.name}</h4>
          <p className='card-body-desc'>{carWash.desc}</p>
        </div>
        <div className='card-action'>
          <div className='card-action-btns'>
            <button>-</button>
            <div>{carWash.available}</div>
            <button>+</button>
          </div>
          <div className='card-action-btns-book'>
            <button onClick={() => bookingStatus()}>Book Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
