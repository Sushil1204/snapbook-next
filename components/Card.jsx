import React from 'react'


const Card = ({children}) => {
  return (
      <div className='bg-white shadow-md rounded-md p-4 shadow-gray-300 mb-5'>
          {children}
    </div>
  )
}

export default Card