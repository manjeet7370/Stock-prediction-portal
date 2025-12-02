import React from 'react'
import Button from './Button'

const Main = () => {
  return (
     <>
      <div className='container'>
           <div className='p-5 text-center bg-light-dark rounded-3'>
             <h1 className='text-light'>Stock Prediction Portal</h1>
             <p className='text-light lead'>This stock prediction portal uses advanced AI models to analyze market trends, forecast future prices, and deliver reliable insights. It helps users make informed investment decisions with accurate predictions, historical data, and easy-to-understand visual analysis tools.</p>
             <Button text='Login' class = 'btn-outline-info'/>
           </div>
      </div>
     </>
  )
}

export default Main
