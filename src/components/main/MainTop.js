import React, { useState } from 'react'
import './Main.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const MainTop = () => {
    const [accountChange, setAccountChange] = useState(false);
    const [balanceDetails, setBalanceDetails] = useState([
        {
            currency: 'USD',
            amount: '120,420.50',
            symbol: '$',
            accountChange: false,
        }
    ])

    const handleBalanceChange = () => {
        setBalanceDetails([
            {
                currency: 'NGN',
                amount: '754,635.23',
                symbol: '₦',
            },
        ])

        setAccountChange(true)

        if(accountChange) {
            setBalanceDetails([
                {
                    currency: 'USD',
                    amount: '120,420.50',
                    symbol: '$',
                    accountChange: false,
                }
            ])
        }
    }
  return (
    <div className='main_top'>
        <div className="main_top_left">
            {balanceDetails.map((balance) => (
                <h1 key='1'>{balance.symbol}{balance.amount}</h1>
            ))}
            <p>Total balance from all accounts <span onClick={handleBalanceChange}>{balanceDetails.map((balance) => (
                 balance.currency
                ))}</span> 
            </p>
        </div>
        <div className="main_top_right">
            <AddCircleOutlineIcon />
            <p>Open an account or deposit</p>
        </div>
    </div>
  )
}

export default MainTop