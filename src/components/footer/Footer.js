import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import './Footer.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Footer = () => {
  return (
    <footer>
        <div className="footer_left">
        <ul>
            <li>Privacy Policy</li>
            <li>License</li>
            <li>API</li>
            <li>Help Center</li>
        </ul>

        <p>© 2023 All rights reserved </p>
        </div>

        <div className="footer_right">
            <div className="language">
            <p>English</p>
            <LanguageIcon />
            </div>
            <p><ExitToAppIcon /></p>
        </div>
    </footer>
  )
}

export default Footer