import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import { datacarrusel } from '../utils/datacarrusel';
import './styles/Gallery.css'

const Gallery = () => {

  return (
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
  )
}

export default Gallery
