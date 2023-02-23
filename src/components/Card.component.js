import React from 'react'

const Card = ({img, className}) => {


  return (
    <div>
        <img className={className} src={img}></img>
    </div>
  )


}

export default Card