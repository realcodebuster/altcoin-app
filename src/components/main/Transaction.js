import React from 'react'
import './Main.css'

const Transaction = ({ image, title, date, amount }) => {
  return (
    <div className='transaction'>
        <div className="profile">
            <img src={image} alt="" />
        </div>

        <div className="content">
            <p>{title}</p>
            <p className='date'>{date}</p>
        </div>

        <div className="amount">
            <p>{amount}</p>
        </div>
    </div>
  )
}

export default Transaction