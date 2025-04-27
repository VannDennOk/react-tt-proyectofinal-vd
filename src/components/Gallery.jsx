import React from 'react'
import './styles/Style.css'

const Gallery = () => {

  const images = [
    "src/img/2.png",
    "src/img/3.png",
    "src/img/4.png",
    "src/img/5.png"
  ];

  return (
      <section className='gallery_container'>
        {
          images.map((src,index) => (
            <img className='gallery_img' key={index} src={src} alt={`imagen${index+1}`}/>
          ))      
        }
      </section>
  )
}

export default Gallery
