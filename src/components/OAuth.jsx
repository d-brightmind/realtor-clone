import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function OAuth() {
  return (
    <>
        <button className='flex justify-center items-center w-full uppercase bg-red-700 text-white py-3 px-7text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg rounded transition duration-200 ease-in-out'>
            <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
            Continue with Google
        </button>
    </>
  )
}
