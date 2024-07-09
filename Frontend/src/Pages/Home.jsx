import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Menu from '../Components/Menu'
import Cart from '../Components/Cart'

const Home = () => {
  const [person , setperson] = useState("None")
  return (
    <>
    <Navbar/>
    <div className='block bg-gray-300 p-6 md:flex gap-5 w-full'>
        <div className='md:w-2/3 bg-slate-50 rounded-sm'>
            <Menu person={person} setperson={setperson}/>
        </div>
        
        <div className='w-1/3 hidden md:block '>
            <Cart person={person} setperson={setperson}/>
        </div>

        
            <div className='md:hidden mt-5'>
            <Cart person={person} setperson={setperson}/>
        </div>
          
        
    </div>

    
    </>
  )
}

export default Home