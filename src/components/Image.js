import React from 'react'

const Image = ({
  image,
  onSelect,
  handleDragStart,
  handleDragOver,
 handleDrop}) => {
  const handleCheckboxToggle = (e) => {
    e.stopPropagation() // Prevent the image's click event from firing
    onSelect(image.id)
  }

  return (
    <div
      onClick={handleCheckboxToggle}
      className='image'
    >
      <input
        className={`anim ${image.isSelected ? 'input-active' : ''}`}
        type='checkbox'
        checked={image.isSelected}
        readOnly
      />
      <div>
        <img
          key={image.id}
          draggable
          onDragStart={(e) => handleDragStart(e, image.id)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, image.id)}
          className={`anim ${image.isSelected ? 'img-active' : ''}`}
          src={image.url}
          alt='Gallery'
        />
      </div>
    </div>
  )
}

export default Image
