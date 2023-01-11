import React from 'react'
import './Sidebar.css'

const Balances = ({ key, title, image }) => {
  return (
    <div className='balances' key={key}>
         <img src={image} alt='' className='country_image' />
        <span>{title}</span>
    </div>
  )
}

export default Balances