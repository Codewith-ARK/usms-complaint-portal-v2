import { ComplaintCategory } from '@/app/Components/ui/ComplaintCategory'
import { FileDropzone } from '@/app/Components/ui/FileDropzone'
import SectionHeading from '@/app/Components/ui/SectionHeading'
import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import React from 'react'

export default function page() {
  return (
    <section className='py-16 px-6 flex-grow'>
      <SectionHeading title={"Register New Complaint"} />
      <div className='w-1/2 flex flex-col gap-4'>
        <ComplaintCategory />
        <Label htmlFor='complaintTitle' value='Complaint Title*' />
        <TextInput id='complaintTitle' />

        <Label htmlFor='complaintBody' value='Complaint Description*'/>
        <Textarea id='complaintBody' rows={8} />

        <Label htmlFor='complaintBody' value='Attach Documents'/>
        <FileDropzone />
      </div>
      <div className="flex gap-3 mt-4">
        <Button color={'blue'}>Submit Complaint</Button>
        <Button color={'light'}>Save Draft</Button>
        <Button color={'failure'}>Cancel</Button>
      </div>
    </section>
  )
}
