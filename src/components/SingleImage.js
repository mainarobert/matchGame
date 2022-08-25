import React from 'react'
import './SingleImage.css'

const SingleImage = ({ imgProp, handlechoice, flipped, disabled }) => {

  const handleClick = () => {
    if(!disabled){
      handlechoice(imgProp)
    }
  }

  return (
    <div className='card'>
        <div className={flipped ? "flipped" : ""}>
            <img className="front" src={imgProp.src} alt= "card front" />
            <img className="back" src="/img/cover.png" onClick={handleClick} alt="card back"/>
        </div>
  </div>
  )
}

export default SingleImage