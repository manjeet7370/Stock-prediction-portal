
import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    
   <>
     
    <div className="container">
       
      <div
        className="p-5 text-center bg-light-dark rounded-3 mt-4">
        <h1 className="text-light">Stock Prediction Portal</h1>
        <p className="text-light lead">
          Welcome to the Stock Prediction Portal — your trusted hub for accurate, data-driven stock
          insights and market trends. Our platform uses advanced machine learning models and real-time
          analytics to forecast stock movements, identify profitable opportunities, and empower investors
          with smarter decision-making tools. Whether you’re a beginner or a seasoned trader, you’ll find
          clear visualizations, expert insights, and up-to-date predictions tailored to your needs. Stay
          informed about the latest financial shifts, compare company performances, and explore sector-wise
          trends — all in one place. Join us today and take control of your investment journey with confidence
          and precision.
        </p>
         <Button text="Login" className="btn-outline-info" url="/login"/>
          
        
      </div>
      
    </div>
      
    </>
  )
}

export default Main
