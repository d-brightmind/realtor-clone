import React from 'react'
import spinner from '../assets/svg/spinner.svg'

export default function Spinner() {
  return (
    <div className='bg-black bg-opacity-50 flex justify-center items-center top-0 bottom-0 right-0 left-0 z-50 fixed'>
        <div>
            <img src={spinner} alt="loading..." className='h-24' />
        </div>
    </div>
  );
}
