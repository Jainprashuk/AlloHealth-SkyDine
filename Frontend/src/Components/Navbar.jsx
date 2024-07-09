import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <nav>
        <div className=" p-3 flex align-middle justify-between">

            <div className='flex justify-center my-auto align-middle'>
                <p className='text-2xl font-bold '>SkyDine</p>
            </div>

            <div className='flex justify-center align-middle gap-4'>
              <span className='my-auto'>Welcome {user.name} 👋</span>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='rounded-md border-gray-200 border-2 hover:bg-gray-400 p-1 px-5'>Logout</button> 
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar