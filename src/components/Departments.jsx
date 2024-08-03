import React from 'react'
import '../styles/Department.css'

const Departments = () => {
  return (
    <div className='dept-container'>
      <div className='dept-title'><h1>Our Food Departments</h1></div>
      <div className='items'>
        <div className='item item-1'>
          <h1>Fresh Sea Food Everyday!</h1>
        </div>
        <div className='item item-2'>
          <h1>Sweet Organic Drinks</h1>
        </div>
        <div className='item item-3'>
          <h1>Fresh Meat For <br/>You</h1>
        </div>
        <div className='item item-4'>
          <h1>Excellent Bread From Our Bakers</h1>
        </div>
      </div>
    </div>
  )
}

export default Departments
