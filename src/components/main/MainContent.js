import React from 'react'
import MainContentLeft from './MainContentLeft'
import MainContentRight from './MainContentRight'
import './Main.css'
import Mastercard from './mastercard.png'
import Visa from './visa.png'
import Verve from './verve.png'
import Paypal from './paypal.png'

const MainContent = () => {

    const transactionData = [
        {
            id: Math.random(),
            title: 'Online Udemy Purchase',
            amount: '- $4,230',
            date: '21 Nov 2:12pm',
            image: Paypal,
        },
        {
            id: Math.random(),
            title: 'ATM Cash Withdraw',
            amount: '- $43,234',
            date: '13 Dec 4:17pm',
            image: Verve,
        },
        {
            id: Math.random(),
            title: 'Online Netflix Subscription',
            amount: '- $8,341',
            date: '33 Dec 10:17am',
            image: Visa,
        },
        {
            id: Math.random(),
            title: 'ATM Cash Withdraw',
            amount: '- $43,234',
            date: '13 Dec 4:17pm',
            image: Paypal,
        },
        {
            id: Math.random(),
            title: 'ATM Cash Withdraw',
            amount: '- $43,234',
            date: '13 Dec 4:17pm',
            image: Mastercard,
        },
        {
            id: Math.random(),
            title: 'ATM Cash Withdraw',
            amount: '- $43,234',
            date: '13 Dec 4:17pm',
            image: Verve,
        },
        {
            id: Math.random(),
            title: 'ATM Cash Withdraw',
            amount: '- $43,234',
            date: '13 Dec 4:17pm',
            image: Visa,
        },
    ]

    const cardData = [
        {
            id: Math.random(),
            cardNumber: '3210 4231 8483 012',
            desc: 'Account Number',
            balance: '$88,232.00',
            title: 'Account Balance',
            image: Mastercard,
        },
        {
            id: Math.random(),
            cardNumber: '9382 6339 1934 342',
            desc: 'Account Number',
            balance: '$76,725.00',
            title: 'Account Balance',
            image: Visa,
        },
        {
            id: Math.random(),
            cardNumber: '9382 6339 1934 342',
            desc: 'Account Number',
            balance: '$76,725.00',
            title: 'Account Balance',
            image: Verve,
        },
        {
            id: Math.random(),
            cardNumber: '9382 6339 1934 342',
            desc: 'Account Number',
            balance: '$76,725.00',
            title: 'Account Balance',
            image: Paypal,
        },
    ]

  return (
    <div className='main_content'>
        <MainContentLeft 
            content={cardData}
        />
        <MainContentRight 
            content={transactionData}
        />
    </div>
  )
}

export default MainContent