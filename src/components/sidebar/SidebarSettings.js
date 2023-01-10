import React from 'react'
import './Sidebar.css'

const SidebarSettings = ({ content }) => {
  return (
    <div className='sidebar_settings'>
        {content.map((items) => {
            return (
                <div className='settings' key={items.id}>
                    {items.icon}
                    {items.title}
                </div>
            )
        })}
    </div>
  )
}

export default SidebarSettings