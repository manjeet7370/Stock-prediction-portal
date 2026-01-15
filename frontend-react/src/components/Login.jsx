import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios  from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
const API_BASE = import.meta.env.VITE_API_URL;



const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const {isLoggedIn, setisLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = async (e) =>{
    e.preventDefault();
    setLoading(true)

    const userData = {username, password}
    console.log(userData)

    try{
      const response = await axios.post(`${API_BASE}/api/v1/token/`, userData)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      
      setisLoggedIn(true)
      navigate('/dashboard')
      

    }catch(error){
         
       setError(
   error.response?.data?.detail || 
   "Invalid username or password"
);

    }finally{
      setLoading(false)
    }
  }
  return (
    <>
      <div className='container'>
           <div className='row justify-content-center'> 
              <div className='col-md-6 bg-light-dark p-5 rounded'>
                  <h3 className='text-light text-center mb-4'>Login to our Portal</h3>
                  <form  onSubmit={handleLogin}>
                    <div className='mb-3'>
                      <input type="text" className='form-control mb-3' placeholder='Enter username' autoComplete="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                    <input type="password" className='form-control mb-3'  placeholder='Enter password' autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div> 
                    
                    {error && <div className='text-danger'>{error}</div>}
                     {loading ?(
                      <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/> Logging in..</button>
                     ) : (
                      <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                     )}
                     
                    
                  </form>
              </div>
           </div>
      </div>
     </>
  )
}

export default Login
