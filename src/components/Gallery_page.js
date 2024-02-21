import React from 'react'
import '../Gallery_page.css'

const images = [
  { src: '/images/SAVE_20240213_174700.jpg', alt: 'SAVE_20240213_174700.jpg' },
  { src: '/images/SAVE_20240213_174723.jpg', alt: 'Image 2' },
  { src: '/images/SAVE_20240213_174723.jpg', alt: 'Image 2' },
  { src: '/images/SAVE_20240213_174723.jpg', alt: 'Image 2' },
  { src: '/images/SAVE_20240213_174723.jpg', alt: 'Image 2' },
  { src: '/images/SAVE_20240213_174723.jpg', alt: 'Image 2' },
  { src: '/images/SAVE_20240213_174723.jpg', alt: 'Image 2' },
  { src: '/images/SAVE_20240213_174723.jpg', alt: 'Image 2' },
  { src: '/images/SAVE_20240213_174723.jpg', alt: 'Image 2' },
  
]

function Gallery_page() {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} className="gallery-image" />
      ))}
    </div>
  )
}

export default Gallery_page