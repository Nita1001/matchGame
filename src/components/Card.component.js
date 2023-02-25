const Card = ({img, className}) => {
  return (
    <div>
      <img className={className} src={img} alt='' />
    </div>
  )
}

export default Card