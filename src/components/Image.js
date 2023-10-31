import React from 'react'

import { RiDeleteBin6Line } from 'react-icons/ri'

const Image = ({ image}) => {
  return (
    <div className='image'>
      <img src={image.url} alt='Gallery' />
      <button>
        <RiDeleteBin6Line />
      </button>
    </div>
  )
}

export default Image
