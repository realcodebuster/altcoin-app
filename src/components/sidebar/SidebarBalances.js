import React from 'react'
import Balances from './Balances'
import './Sidebar.css'

const SidebarBalances = ({ content }) => {
  return (
    <div className='sidebar_balances'>
        <div className="balance_header">
            <p>Balances</p>
        </div>
        <div className="balance_content">
            {content.map((items) => (
                <Balances 
                    key={items.id}
                    title={items.title}
                    image={items.image}
                />
            ))}
        </div>
    </div>
  )
}

export default SidebarBalances