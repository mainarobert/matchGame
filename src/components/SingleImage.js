import React from 'react'
import './SingleImage.css'

const SingleImage = ({ imgProp }) => {
  return (
    <div className='card'>
        <div>
            <img className='front' src={imgProp.src} alt= 'card front'/>
            <img className='back' src="/img/cover.png" alt="card back"/>
        </div>
  </div>
  )
}

export default SingleImage