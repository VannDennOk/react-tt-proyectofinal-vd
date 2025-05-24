import React from 'react'
import './styles/Gallery.css'

const Gallery = () => {

  const images = [
    "https://i.postimg.cc/c4Q89ZZs/2x700.png",
    "https://i.postimg.cc/VvtbcPCW/3x700.png",
    "https://i.postimg.cc/pV5jjz65/4x700.png",
    "https://i.postimg.cc/yYqZyxMQ/5x700.png"
  ];

  return (
    <section className='gallery_container'>
      <div className='gallery_slider'> 
          {
            images.map((src, index) => (
              <img className='gallery_img' key={index} src={src} alt={`imagen${index + 1}`} />
            ))
          }
      </div>
    </section>
  )
}

export default Gallery
