import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <header>
        <div className="header_left">
            <h1>Dashboard</h1>
        </div>
        <div className="header_right">
            <div className="search">
                <SearchIcon className='search_icon'/>
                <input type="search" placeholder='Type to search ...'/>
            </div>
            <NotificationsIcon className='notification' />
            <PersonIcon className='user' />
        </div>
    </header>
  )
}

export default Header