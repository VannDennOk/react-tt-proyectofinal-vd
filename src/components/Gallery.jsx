import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import { datacarrusel } from '../utils/datacarrusel';
import './styles/Gallery.css'

const Gallery = () => {

  /*   const images = [
      "https://i.postimg.cc/c4Q89ZZs/2x700.png",
      "https://i.postimg.cc/VvtbcPCW/3x700.png",
      "https://i.postimg.cc/pV5jjz65/4x700.png",
      "https://i.postimg.cc/yYqZyxMQ/5x700.png"
    ]; */

  return (
    <>
      {/*       <div> 
          {
            images.map((src, index) => (
              <img key={index} src={src} alt={`imagen${index + 1}`} />
            ))
          }
      </div> */}

      <div className='gallery_container'>
        <ImageGallery
          items={datacarrusel}
          infinite={true}
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          showNav={false}
          showBullets={true}
          slideInterval={3000}
          slideDuration={1000}
        />
      </div>

    </>
  )
}

export default Gallery
