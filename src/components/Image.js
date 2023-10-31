import React from 'react'
import { motion } from 'framer-motion'

const Image = ({ image, isLarge, onSelect }) => {
  const handleCheckboxToggle = (e) => {
    e.stopPropagation() // Prevent the image's click event from firing
    onSelect(image.id)
  }

  return (
    <div className={`image ${isLarge ? 'large-image' : ''}`}>
      <motion.div
        //initial={{ opacity: 0 }}
       // whileHover={{ opacity: 1 }}
        className='checkbox-overlay'
        onClick={handleCheckboxToggle}
      >
        <input type='checkbox' checked={image.isSelected} readOnly />
      </motion.div>
      <img src={image.url} alt='Gallery' />
    </div>
  )
}

export default Image
