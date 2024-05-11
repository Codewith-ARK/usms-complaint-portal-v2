import React from 'react'
import SectionHeading from '../Components/ui/SectionHeading'
import { Inbox } from 'lucide-react'

export default function page() {
  return (
    <section className='py-16 px-6 flex-grow'>
      <SectionHeading title={'Inbox'} />
      <div className='w-full h-full flex flex-col items-center justify-center'>
      <Inbox className='opacity-70 ' size={64}/>
        <p className='font-semibold opacity-70'>Your inbox is empty</p>
      </div>
    </section>
  )
}
