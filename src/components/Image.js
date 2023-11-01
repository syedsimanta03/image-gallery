import React from 'react'
import { useDrag, useDrop } from 'react-dnd'

const Image = ({ image, isLarge, onSelect, index, moveImage }) => {
  
  const [active, setActive] = React.useState('')
  
  const handleCheckboxToggle = (e) => {
    e.stopPropagation() // Prevent the image's click event from firing
    onSelect(image.id)
  }

  const [, ref] = useDrag({
    type: 'IMAGE',
    item: { index },
  })

  const [, drop] = useDrop({
    accept: 'IMAGE',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index)
        draggedItem.index = index // Ensure the dragged item index is updated
      }
    },
  })

  return (
    <div
      onClick={handleCheckboxToggle}
      className={`image ${isLarge ? 'large-image' : ''}`}
    >
      <input type='checkbox' checked={image.isSelected} readOnly />
      <div ref={(node) => ref(drop(node))}>
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
