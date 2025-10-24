import React, {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const nevigate = useNavigate()
  const [error, setError] = useState('')
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogin =  async (e) => {
     e.preventDefault();
     setLoading(true)
     const userdata = { username, password}
     console.log('userdata =>', userdata)


     try{
      const Response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userdata)
      // console.log(Response.data)
      localStorage.setItem('accessToken', Response.data.access)
      localStorage.setItem('refreshToken', Response.data.refresh)
      console.log('login successfull')
      setIsLoggedIn(true)
      nevigate('/')
     }catch(error){
      console.error('invalid credentials')
      setError('invalid credentials')
     }finally{
      setLoading(false)
     }

  }

  return (
   <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className="text-light text-center mb-4">Login to our Portal</h3>

            <form onSubmit={handleLogin}>
              <div className="mb-3">  
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              {error && <div className='text-danger'>{error}</div>}
              {loading ? (
                <button
                  type="submit"
                  className="btn btn-info d-block mx-auto"
                  disabled
                >
                  <FontAwesomeIcon icon={faSpinner} spin /> Logging In...
                </button>
              ) : (
                <button type="submit" className="btn btn-info d-block mx-auto">
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
