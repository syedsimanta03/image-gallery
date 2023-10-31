import React from 'react'


const Image = ({ image, isLarge, onSelect }) => {
  const handleCheckboxToggle = (e) => {
    e.stopPropagation() // Prevent the image's click event from firing
    onSelect(image.id)
  }

  return (
    <div className={`image ${isLarge ? 'large-image' : ''}`}>
      <div className='checkbox-overlay' onClick={handleCheckboxToggle}>
        <input type='checkbox' checked={image.isSelected} readOnly />
      </div>
      <img src={image.url} alt='Gallery' />

    </div>
  )
}

export default Image
