import React from 'react'

const Button = ({title, handleClick}) => {
  return (
    <div>
      <button onClick={handleClick}>{title}</button>
    </div>
  )
}

export default Button