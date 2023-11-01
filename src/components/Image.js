import React from 'react'

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
      <div>
        <img
          className={`${image.isSelected ? 'img-active' : ''}`}
          src={image.url}
          alt='Gallery'
        />
      </div>
    </div>
  )
}

export default Image
