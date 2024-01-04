import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const {name, email} = formData;
  const navigate = useNavigate();
  function onLogOut(){
    auth.signOut();
    navigate('/');
  }
  return (
    <>
      <section className='flex justify-center items-center mx-auto max-w-6xl flex-col'>
        <h1 className='text-3xl text-center font-bold mt-6'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            <input type="text" id='name' value={name} className='w-full px-4 py-2 text-xl bg-white text-gray-700 border border-gray-300 transition ease-in-out duration-200 rounded mb-6' disabled/>
            <input type="email" id='email' value={email} className='w-full px-4 py-2 text-xl bg-white text-gray-700 border border-gray-300 transition ease-in-out duration-200 rounded mb-6' disabled/>

            <div className='flex justify-between sm:text-lg text-sm mb-6 whitespace-nowrap'>
              <p className='flex items-center'>Do you want to change your name?
                <span className='text-red-600 hover:text-red-700 ml-1 transition ease-in-out duration-200 cursor-pointer'>Edit</span>
              </p>
              <p onClick={onLogOut} className='text-blue-600 hover:text-blue-700  transition ease-in-out duration-200 cursor-pointer'>Sign out</p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
