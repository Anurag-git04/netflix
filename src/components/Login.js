import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';
import {API_END_POINT} from '../utils/constant'
import toast from "react-hot-toast"

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginInHandler=()=>{
    setIsLogin(!isLogin)
  }

  const getInputData= async (e)=>{
    e.preventDefault()
    if(isLogin){
      //login
      const user = {email,password}
      try{
        const res = await axios.post(`${API_END_POINT}/login`, user);
        console.log(res)
        if(res.data.success){
          toast.success(res.data.message)
        }
      }catch(error){
        console.log(error)
      }
     
    }else{
        //register
        const user = {fullName, email, password};
            try {
                const res = await axios.post(`${API_END_POINT}/register`,user);
                console.log(res)
                if(res.data.success){
                  toast.success(res.data.message);
                }
                
            } catch (error) {
              toast.error(error.response.data.message);
              console.log("Error in register")
            }
    }
   
    console.log(fullName,email,password);
    setFullname("");
    setEmail("");
    setPassword("");
  }
 
  return (
    <div className='w-full'>
        <Header/>
        <div className='absolute'>
            <img className='w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='banner'/>
        </div>
        <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-85'>
          <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Sign Up" }</h1>
          <div className='flex flex-col'>
            {
              !isLogin && <input value={fullName} onChange={(e)=>setFullname(e.target.value)} type='text' placeholder='Full Name' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
            }
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
            <button className='bg-red-600 mt-4 p-3 text-white rounded-md font-medium'>{isLogin?"Login":"Sign up"}</button>
            <p className='text-white mt-2'>{isLogin ? "New to Netflix " : "Already Have an account? " }<span onClick={loginInHandler} className='ml-1 text-red-700 font-medium cursor-pointer'>{isLogin? "Sign Up" : "Login" }</span></p>

          </div>
        </form>
    </div> 
  )  
}

export default Login