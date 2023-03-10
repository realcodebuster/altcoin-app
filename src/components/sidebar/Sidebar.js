import React from 'react'
import SidebarLogo from './SidebarLogo'
import SidebarNavigation from './SidebarNavigation'
import SidebarBalances from './SidebarBalances'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddCardIcon from '@mui/icons-material/AddCard';
import PaidIcon from '@mui/icons-material/Paid';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ReportIcon from '@mui/icons-material/Report';
import UsaFlag from './usa.png'
import NigeriaFlag from './nigeria.png'
import './Sidebar.css'


const Sidebar = () => {
    const sidebarNavLinks = ['Dashboard', 'Accounts', 'Cards', 'Transactions', 'Payments', 'Invoicing', 'Trading', 'Reports']

    const sidebarBalancesAmounts = ['120,420.50 USD', '745, 635.23 NGN']

    const sidebarNav = [
        {
            id: 1,
            title: sidebarNavLinks[0],
            icon: <DashboardIcon />,
            isActive: true,
        },
        {
            id: 2,
            title: sidebarNavLinks[1],
            icon: <ManageAccountsIcon />,
            isActive: false,
        },
        {
            id: 3,
            title: sidebarNavLinks[2],
            icon: <AddCardIcon />,
            isActive: false,
        },
        {
            id: 4,
            title: sidebarNavLinks[3],
            icon: <PaidIcon />,
            isActive: false,
        },
        {
            id: 5,
            title: sidebarNavLinks[4],
            icon: <PaymentIcon />,
            isActive: false,
        },
        {
            id: 6,
            title: sidebarNavLinks[5],
            icon: <ReceiptIcon />,
            isActive: false,
        },
        {
            id: 7,
            title: sidebarNavLinks[6],
            icon: <CurrencyBitcoinIcon />,
            isActive: false,
        },
        {
            id: 8,
            title: sidebarNavLinks[7],
            icon: <ReportIcon />,
            isActive: false,
        }
    ]

    const sidebarBalance = [
        {
            id: 1,
            title: sidebarBalancesAmounts[0],
            image: UsaFlag,
        },
        {
            id: 2,
            title: sidebarBalancesAmounts[1],
            image: NigeriaFlag,
        },
    ]


  return (
    <div className='sidebar'>
        <SidebarLogo />
        <SidebarNavigation
            content={sidebarNav}
        />
        <SidebarBalances 
            content={sidebarBalance}
        />
    </div>
  )
}

export default Sidebar