import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
    const [pageState, setPageState] = useState('Sign in')
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=> {
            if(user){
                setPageState('Profile');
            } else {
                setPageState('Sign in');
            }
        });
    }, [auth])
    function pathMatch(route){
        if (route===location.pathname) {
            return true
        }
    }
  return (
    <div className='bg-white sticky z-30 top-0 border-b shadow-sm'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto '>
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer' onClick={()=>navigate("/")}/>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer text-gray-400 text-sm font-semibold py-3 border-b-[3px] border-b-transparent ${pathMatch("/") && "!text-black !border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer text-gray-400 text-sm font-semibold py-3 border-b-[3px] border-b-transparent ${pathMatch("/offers") && "!text-black !border-b-red-500"}`} onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer text-gray-400 text-sm font-semibold py-3 border-b-[3px] border-b-transparent ${
                        (pathMatch("/sign-in") || pathMatch("/profile")) && "!text-black !border-b-red-500"}`} onClick={()=>navigate("/profile")}>
                            {pageState}
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}
