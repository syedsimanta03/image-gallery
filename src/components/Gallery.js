import React, { useState } from 'react'
import Image from './Image'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Gallery = () => {
  const [images, setImages] = useState([
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
    {
      id: 10,
      url: '/images/image-10.jpeg',
      isFeature: false,
      isSelected: false,
    },
    {
      id: 11,
      url: '/images/image-11.jpeg',
      isFeature: true,
      isSelected: false,
    },
  ])

  // Track selected images
  const [selectedImages, setSelectedImages] = useState([])

  const handleSelect = (id) => {
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        image.isSelected = !image.isSelected
      }
      return image
    })
    setImages(updatedImages)

    // Update the selectedImages array
    const selected = updatedImages.filter((image) => image.isSelected)
    setSelectedImages(selected)
  }

  return (
    <>
      {selectedImages.length > 0 && (
        <div className='navbar'>
          <h3 className='selected-count'>{selectedImages.length} selected</h3>
          <button>
            <RiDeleteBin6Line /> Delete Files
          </button>
        </div>
      )}
      <div className='gallery-area'>
        <div className='gallery'>
          {images.map((image, index) => (
            <Image
              key={image.id}
              image={image}
              isLarge={index === 0}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
