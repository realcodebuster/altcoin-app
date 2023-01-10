import React, { useState } from 'react'
import './Sidebar.css'

const Navigation = ({ itemId, title, icon }) => {
  const navStyle = {
    display: 'flex',
    color: 'rgb(94, 94, 94)',
    gap: '2em',
    marginTop: '8%',
    cursor: 'pointer',
    marginLeft: '10%',
    fontWeight: 'bold',
  }

  const clickStyle = {
    display: 'flex',
    color: 'darkBlue',
    gap: '2em',
    marginTop: '8%',
    cursor: 'pointer',
    marginLeft: '10%',
    fontWeight: 'bold',
  }
  const [style, setStyle] = useState(navStyle)
  const [isActive, setIsActive] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setStyle(clickStyle, setIsActive(true))
    
    if(isActive) {
      setStyle(navStyle, setIsActive(false))
    }
  }

  return (
    <div className='navigation' key={itemId} style={style} onClick={handleClick}>
        {icon}
        {title}
    </div>
  )
}

export default Navigation