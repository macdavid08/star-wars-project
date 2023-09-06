import React from 'react'

export const Card = (props) => {
  return (
    <div className='max-w-xl mx-auto bg-gray-100 text-center py-5 px-10 '>{props.children}</div>
  )
}
