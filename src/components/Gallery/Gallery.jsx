import React from 'react'
import './Gallery.css'

const Gallery = () => {

  const images = [
    "https://i.postimg.cc/63qB1LKt/2.png",
    "https://i.postimg.cc/TwsT8L2m/3.png",
    "https://i.postimg.cc/C5fSwhd2/4.png",
    "https://i.postimg.cc/W4X2nYQ5/5.png"
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
