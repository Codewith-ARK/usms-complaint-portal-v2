import React from 'react'
import { Stats } from '../Components/ui/Stats'

export default function page() {
  return (
    <section className='py-16 px-6 grid grid-cols-2 items-start justify-evenly gap-3 flex-grow'>
      <Stats />
      <Stats />
      <Stats />
      <Stats />
    </section>
  )
}
