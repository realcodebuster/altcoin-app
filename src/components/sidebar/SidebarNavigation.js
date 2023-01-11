import React from 'react'
import Navigation from './Navigation'
import './Sidebar.css'

const SidebarNavigation = ({ content }) => {
  return (
    <div className='sidebar_navigation'>
        <div className="navigation_header">
            <p>Navigation</p>
        </div>
        <div className="navigation_links">
            {content.map((items) => (
                <Navigation
                    key={items.id}
                    title={items.title}
                    icon={items.icon}
                    style={items.style}
                />
            ))}
        </div>
    </div>
  )
}

export default SidebarNavigation