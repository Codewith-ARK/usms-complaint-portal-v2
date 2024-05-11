import React from 'react'

export default function SectionHeading({ title }) {
  return (
    <h1 className='font-bold text-5xl mb-4'>
      {title ? title : "Default Title"}
    </h1>
  )
}
