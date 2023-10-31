import React from 'react'
//import { motion } from 'framer-motion'

const Image = ({ image, isLarge, onSelect }) => {
  const handleCheckboxToggle = (e) => {
    e.stopPropagation() // Prevent the image's click event from firing
    onSelect(image.id)
  }

  return (
    <div
      onClick={handleCheckboxToggle}
      className={`image ${isLarge ? 'large-image' : ''}`}
    >
        <input type='checkbox' checked={image.isSelected} readOnly />
      <img src={image.url} alt='Gallery' />
    </div>
  )
}

export default Image
