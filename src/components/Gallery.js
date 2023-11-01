import React, { useState } from 'react'
import Image from './Image'
import { motion, AnimatePresence } from 'framer-motion'

const Gallery = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: '/images/image-1.webp',
      isSelected: false,
    },
    { id: 2, url: '/images/image-2.webp', isSelected: false },
    { id: 3, url: '/images/image-3.webp', isSelected: false },
    { id: 4, url: '/images/image-4.webp', isSelected: false },
    { id: 5, url: '/images/image-5.webp', isSelected: false },
    { id: 6, url: '/images/image-6.webp', isSelected: false },
    { id: 7, url: '/images/image-7.webp', isSelected: false },
    { id: 8, url: '/images/image-8.webp', isSelected: false },
    { id: 9, url: '/images/image-9.webp', isSelected: false },
    {
      id: 10,
      url: '/images/image-10.jpeg',

      isSelected: false,
    },
    {
      id: 11,
      url: '/images/image-11.jpeg',
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

  const handleDelete = () => {
    // Filter out the selected images to delete
    const updatedImages = images.filter((image) => !image.isSelected)
    setImages(updatedImages)
    setSelectedImages([]) // Clear selected images
  }

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e, id) => {
    e.preventDefault()
    const draggedId = e.dataTransfer.getData('text/plain')
    if (draggedId !== id) {
      const updatedImages = [...images]
      const draggedIndex = updatedImages.findIndex(
        (img) => img.id.toString() === draggedId
      )
      const droppedIndex = updatedImages.findIndex((img) => img.id === id)

      // Swap the positions of the cards
      ;[updatedImages[draggedIndex], updatedImages[droppedIndex]] = [
        updatedImages[droppedIndex],
        updatedImages[draggedIndex],
      ]

      setImages(updatedImages)
    }
  }

  return (
    <>
      <div className='navbar'>
        {selectedImages.length > 0 && (
          <>
            <h3 className='selected-count'>{selectedImages.length} selected</h3>
            <button onClick={handleDelete}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={20}
                height={20}
                viewBox='0 0 24 24'
              >
                <path
                  fill='#fff'
                  d='M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5Zm2-1v1h6V4H9Zm0 8v6h2v-6H9Zm4 0v6h2v-6h-2Z'
                />
              </svg>
              Delete Files
            </button>
          </>
        )}
        {selectedImages.length === 0 && (
          <h3 className='selected-count'>Gallery</h3>
        )}
      </div>
      <div className='gallery-area'>
        <div className='gallery'>
          <AnimatePresence>
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileTap={{ scale: 1.3, cursor: 'grabbing' }}
                exit={{ opacity: 0, scale: 0.95 }}
                dragElastic={0.5}
                transition={{ duration: 0.75, type: 'tween', stiffness: 260 }}
                className={`${index === 0 ? 'large-image' : ''}`}
              >
                <Image
                  image={image}
                  onSelect={handleSelect}
                  handleDragStart={handleDragStart}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          <div className='upload'>
            <div className='box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={32}
                height={32}
                viewBox='0 0 24 24'
              >
                <path
                  fill='#bcabb8'
                  d='M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2Zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016ZM8 7a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z'
                />
              </svg>

              <p>Add Images</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
