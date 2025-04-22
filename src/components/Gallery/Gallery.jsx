import React from 'react'

const Gallery = () => {

  const images = [
    "https://i.postimg.cc/sggP0g7m/producto.png",
    "https://i.postimg.cc/sggP0g7m/producto.png",
    "https://i.postimg.cc/sggP0g7m/producto.png"
  ];

  return (
      <section>
        {
          images.map((src,index) => (
            <img key={index} src={src} alt={`imagen${index+1}`}/>
          ))      
        }
      </section>
  )
}

export default Gallery
