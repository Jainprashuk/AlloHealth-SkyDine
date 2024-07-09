import React from 'react'
import Categories from './Categories'
import FoodItemsContainer from './FoodItemsContainer'

const Menu = ({person , setperson}) => {
  return (
    <div className='p-2'>
        <Categories/>
        
        <hr className='my-3 border-1 border-gray-600' />

        <FoodItemsContainer person={person} setperson={setperson}/>

    </div>

  )
}

export default Menu