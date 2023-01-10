import React from 'react'
import './Main.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Cards from './Cards';

const MainContentLeft = ({ content }) => {
  return (
    <div className='main_content_left'>
        
        <div className="top_info">
            <div className="left">
                <div className="header">
                    <p>Income</p>
                    <TrendingUpIcon className='income'/>
                </div>
                <h3>$9,650.00</h3>
                <div className="bottom">
                    <p>84 Transaction</p>
                    <p className='income'>+10%</p>
                </div>
            </div>
            <div className="right">
                <div className="header">
                    <p>Spendings</p>
                    <TrendingDownIcon className='spending'/>
                </div>
                <h3>$7,845.00</h3>
                <div className="bottom">
                    <p>58 Transactions</p>
                    <p className='spending'>-2%</p>
                </div>
            </div>
        </div>

        <div className="bottom_info">
            <div className="header">
                <p>My Cards</p>
            </div>

            <div className="cards">
                {content.map((data) => (
                    <Cards 
                        key={data.id}
                        cardNumber={data.cardNumber}
                        desc={data.desc}
                        balance={data.balance}
                        title={data.title}
                        image={data.image}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default MainContentLeft