import React from 'react'
import './Main.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Transaction from './Transaction';

const MainContentRight = ({ content }) => {
  return (
    <div className='main_content_right'>
        <div className="header">
            <p>Latest Transactions</p>
            <ArrowOutwardIcon className='arrow' />
        </div>
        <div className="transactions">
            <div className="section">
                {content.map((data) => (
                    <Transaction 
                        key={data.id}
                        image={data.image}
                        title={data.title}
                        date={data.date}
                        amount={data.amount}
                    />
                ))}

            </div>
        </div>
    </div>
  )
}

export default MainContentRight