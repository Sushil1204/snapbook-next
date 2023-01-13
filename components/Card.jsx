import React from 'react'
const Card = ({ children, noPadding }) => {
  let classes = 'bg-white shadow-md rounded-md shadow-gray-300 mb-5';
  if (!noPadding) {
    classes += ' p-4';
  }
  return (
      <div className={classes}>
          {children}
    </div>
  )
}

export default Card