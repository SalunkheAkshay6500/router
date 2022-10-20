import React from 'react'
import { NavLink } from 'react-router-dom'

const Nature = () => {

  return (
    <div>

      <div className='shadow-2xl  font-bold  p-5 m-5 flex justify-between'>

        <div className=''>

          <span className='font-bold border-4 border-green-500 rounded-xl p-2'>Nature</span></div>

          <div className=''>
          <span className='p-2 cursor-pointer hover:bg-sky-700 hover:text-white rounded-xl'>
            <NavLink to="/">Home</NavLink>
          </span>
          <span className='p-2  hover:bg-red-600 hover:text-white rounded-xl'>
            <NavLink to="/Food">Food</NavLink>
          </span>
          <span className='p-2  hover:bg-green-500 hover:text-white rounded-xl'>
            <NavLink to="/Nature">Nature</NavLink>
          </span>

          <span className='p-2 hover:bg-orange-500 hover:text-white rounded-xl'>
            <NavLink to="/Adventure">Adventure</NavLink>
          </span>
          <span className='p-2  hover:bg-yellow-500 hover:text-white rounded-xl'>
            <NavLink to="/Entertainment">Entertainment</NavLink>
          </span>

        </div>
      </div>

      <div className='m-10 w-[800px] shadow-xl h-[400px] mx-auto'>
        <img src='./img/nature.jpg' alt='' />
      </div>

    </div>
  )
}

export default Nature
