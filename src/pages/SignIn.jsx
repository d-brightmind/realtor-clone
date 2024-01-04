import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {email, password} = formData;
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  const navigate = useNavigate();
  async function onSubmit(e){
    e.preventDefault()

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if (userCredential) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Unable to sign in')
    }
  }
  return (
    <section>
      <h1 className='text-3xl mt-6 font-bold text-center'>Sign In</h1>
      <div className='flex justify-center items-center py-6 px-12 max-w-6xl mx-auto flex-wrap'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="key" className='w-full rounded-2xl'/>
        </div>
        <div className='w-full lg:w-[40%] md:w-[67%] lg:ml-20'>
          <form onSubmit={onSubmit}>
              <input 
                type="email"
                id='email'
                value={email}
                onChange={onChange}
                placeholder='Email address'
                className='w-full text-xl mb-6 py-2 px-4 text-gray-700 bg-white border-gray-300 transition ease-in-out rounded'
              />
            <div className='relative mb-6'>
              <input 
                type={showPassword ? "text" : "password"}
                id='password'
                value={password}
                onChange={onChange}
                placeholder='Password'
                className='w-full text-xl py-2 px-4 text-gray-700 bg-white border-gray-300 transition ease-in-out rounded'
              />
              {showPassword ? (
                <AiFillEyeInvisible className='absolute top-3 right-3 cursor-pointer text-xl' onClick={()=>setShowPassword((prevState)=>!prevState)}/>
              ) :  (<AiFillEye className='absolute top-3 right-3 cursor-pointer text-xl' onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p>Don't have an account?
                <Link to="/sign-up" className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1'>Register</Link>
              </p>
              <p>
                <Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition ease-in-out duration-200'>Forgot Password</Link>
              </p>
            </div>
            <button type="submit" className='uppercase w-full bg-blue-600 py-2 px-7 text-sm text-white font-medium rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out active:bg-blue-800 '>Sign in</button>
            <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}
