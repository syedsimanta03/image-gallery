import React from 'react'
import Image from './Image'


const Gallery = () => {
  const images = [
    { id: 1, url: '/images/image-1.webp', isFeature: true, isSelected: false },
    { id: 2, url: '/images/image-2.webp', isFeature: false, isSelected: false },
    { id: 3, url: '/images/image-3.webp', isFeature: false, isSelected: false },
  ]

 

  return (
    <div className='gallery'>
     
      {images.map((image) => (
        <Image
          key={image.id}
          image={image}

        />
      ))}
    </div>
  )
}

export default Gallery
