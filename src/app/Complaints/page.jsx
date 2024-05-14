import React from 'react'
import SectionHeading from '../Components/ui/SectionHeading'
import { Button } from 'flowbite-react'
import Link from 'next/link'
import { ComplaintTabs } from '../Components/layout/ComplaintTabs'

export default function page() {
  return (
    <section className='py-16 px-6 flex-grow'>
      <div className='flex justify-between items-center'>
        <SectionHeading title={"Complaints"} />
        <Link href='/Complaints/new'><Button color={'blue'} size={'md'}>Create New</Button></Link>
      </div>
      <ComplaintTabs />
    </section>
  )
}