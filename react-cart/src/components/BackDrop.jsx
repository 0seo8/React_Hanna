import React from 'react'

const BackDrop = ({ onClick }) => {
  return (
    <div
      id="backdrop"
      onClick={onClick}
      className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>
  )
}

export default BackDrop
