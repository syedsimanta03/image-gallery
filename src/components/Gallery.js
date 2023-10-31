import React from 'react'
import Image from './Image'

const Gallery = () => {
  const images = [
    {
      id: 1,
      url: '/images/image-1.webp',
      isFeature: false,
      isSelected: false,
    },
    { id: 2, url: '/images/image-2.webp', isFeature: false, isSelected: false },
    { id: 3, url: '/images/image-3.webp', isFeature: false, isSelected: false },
    { id: 4, url: '/images/image-4.webp', isFeature: false, isSelected: false },
    { id: 5, url: '/images/image-5.webp', isFeature: false, isSelected: false },
    { id: 6, url: '/images/image-6.webp', isFeature: false, isSelected: false },
    { id: 7, url: '/images/image-7.webp', isFeature: false, isSelected: false },
    { id: 8, url: '/images/image-8.webp', isFeature: false, isSelected: false },
    { id: 9, url: '/images/image-9.webp', isFeature: false, isSelected: false },
    { id: 11, url: '/images/image-11.jpeg', isFeature: true, isSelected: false },
  ]

  return (
    <div className='gallery'>
      {images.map((image, index) => (
        <Image key={image.id} image={image} isLarge={index === 0}/>
      ))}
    </div>
  )
}

export default Gallery
