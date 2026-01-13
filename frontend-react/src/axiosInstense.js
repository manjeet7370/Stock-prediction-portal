import axios from "axios";


const baseURL = `${import.meta.env.VITE_API_URL}/api/v1`
const axiosInstance  = axios.create ({
    baseURL : baseURL,
    headers : {
        'content-type' : 'application/json',
    }

})

// Request Interseptor

axiosInstance.interceptors.request.use(
    function(config){
       
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    }, 
    function (error){
        return Promise.reject(error)
    }
)

//  Response Interceptor
axiosInstance.interceptors.response.use(
    function(response){
        return response
    },
    // Handle failed response
    async function(error){
        const orignalRequest = error.config;
        if(error.response.status === 401 && !orignalRequest.retry){
            orignalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken')
            try{
              const response = await axiosInstance.post('/token/refresh/', {refresh: refreshToken})
              console.log('NewAccessToken',response.data.access)
              localStorage.setItem('accessToken', response.data.access)
              orignalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
              return axiosInstance(orignalRequest)
            }catch(error){
               localStorage.removeItem('accessToken')
               localStorage.removeItem('refreshToken')
              
            }
        }
        return Promise.reject(error)
    }
)
 

export default axiosInstance;