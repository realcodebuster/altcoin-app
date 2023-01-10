import React from 'react'
import './Sidebar.css'

const Balances = ({ key, title, image }) => {
  return (
    <div className='balances' key={key}>
         <img src={image} alt='' className='country_image' />
        {title}
    </div>
  )
}

export default Balances