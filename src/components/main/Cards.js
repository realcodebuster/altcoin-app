import React from 'react'
import './Main.css'

const Cards = ({ cardNumber, desc, balance, title, image }) => {
  return (
    <div className='card'>
        <div className="card_image">
            <img src={image} alt="" className='card_img' />
        </div>

        <div className="card_content">
            <p>{cardNumber}</p>
            <p className='acct_no'>{desc}</p>
        </div>

        <div className="card_balance">
            <p>{balance}</p>
            <p className='title'>{title}</p>
        </div>
    </div>
  )
}

export default Cards