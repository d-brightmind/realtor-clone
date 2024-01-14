import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc'

export default function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const {name, email} = formData;
  const [changeDetail, setChangeDetail] = useState(false);
  const navigate = useNavigate();
  function onLogOut(){
    auth.signOut();
    navigate('/');
  }
  function onChange(e){
    setFormData((prevState) => ({
    ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== name){
        await updateProfile(auth.currentUser, {
          displayName: name
        });

        const docRef = doc(db, 'users', auth.currentUser.uid);
        updateDoc(docRef, {
          name,
        });
      }
      toast.success('Profile successfully updated')
    } catch (error) {
      toast.error('Could not update profile')
    }
  }
  return (
    <>
      <section className='flex justify-center items-center mx-auto max-w-6xl flex-col'>
        <h1 className='text-3xl text-center font-bold mt-6'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            <input type="text" id='name' value={name} className={`w-full px-4 py-2 text-xl bg-white text-gray-700 border border-gray-300 transition ease-in-out duration-200 rounded mb-6
            ${changeDetail && 'bg-red-200 focus:bg-red-200'}`} disabled={!changeDetail} onChange={onChange}/>
            <input type="email" id='email' value={email} className='w-full px-4 py-2 text-xl bg-white text-gray-700 border border-gray-300 transition ease-in-out duration-200 rounded mb-6' disabled/>

            <div className='flex justify-between sm:text-lg text-sm mb-6 whitespace-nowrap'>
              <p className='flex items-center'>Do you want to change your name?
                <span onClick={()=> {
                  changeDetail && onSubmit()
                  setChangeDetail((prevState)=> !prevState);
                 }} className='text-red-600 hover:text-red-700 ml-1 transition ease-in-out duration-200 cursor-pointer'>
                  {changeDetail ? 'Apply change' : 'Edit'}
                  </span>
              </p>
              <p onClick={onLogOut} className='text-blue-600 hover:text-blue-700  transition ease-in-out duration-200 cursor-pointer'>Sign out</p>
            </div>
          </form>
          <button type="submit" className='w-full bg-blue-600 text-white uppercase font-medium text-sm py-3 px-7 hover:bg-blue-700 shadow-md rounded active:bg-blue-800 transition ease-in-out duration-200'>
            <Link to="/create-listing" className='flex justify-center items-center'>
              <FcHome className="mr-1 border-2 p-1 rounded-full text-3xl bg-red-200"/>
              Sell or rent your home
            </Link>
          </button>
        </div>
      </section>
    </>
  )
}
