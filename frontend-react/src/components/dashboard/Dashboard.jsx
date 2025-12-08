import React, {useEffect} from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosInstense'

const Dashboard = () => {
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
    const fetchingData = async () =>{
         try{
            const response = await axiosInstance.get('/protected-view');
            console.log('success: ', response.data)

        }catch(error){
         console.log('error fetching data:', error)
        }
    } 
    
    fetchingData();
    }, [])
  return (
    <div className='text-light'>
      Dashboard
    </div>
  )
}

export default Dashboard
