import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ButtonLike = () => {
    
    const cambiarColor  = (e) => {
        console.log(e.target.style.color = 'var(--colorRojo')
    }

  return (
    <button className='btn-like' onClick={cambiarColor}>
        <FontAwesomeIcon icon={faHeart} />  
    </button>

  )
}

export default ButtonLike
