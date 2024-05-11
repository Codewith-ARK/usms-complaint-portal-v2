import React from 'react'

export default function SectionSubHeading({title}) {
  return (
    <h3 className='text-xl font-semibold'>
      {title ? title : "Default Subheading"}
    </h3>
  )
}
