'use client'
import { FileDropzone } from '@/app/Components/ui/FileDropzone'
import SectionHeading from '@/app/Components/ui/SectionHeading'
import { createComplaint } from '@/app/db/utils'
import { Button, Label, TextInput, Textarea, Select } from 'flowbite-react'
import React, { useState } from 'react'

export default function page() {

  async function handleSubmit(){
    const data = {
      title: complaintTitle,
      desc: complaintBody,
      category: ComplaintCategory,
      isResolved: false,
      upvotes: 0,
    }
    await createComplaint(data)

    resetInput()
  }

  function resetInput(){
    setComplaintTitle('')
    setComplaintBody('')
    setComplaintCategory('')
  }

  const [complaintTitle, setComplaintTitle] = useState('');
  const [complaintBody, setComplaintBody] = useState('')
  const [ComplaintCategory, setComplaintCategory] = useState('')
  return (
    <section className='py-16 px-6 flex-grow'>
      <SectionHeading title={"Register New Complaint"} />
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        {/* Category */}
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="category" value="Category" />
          </div>
          <Select id="category" onChange={e=>setComplaintCategory(e.target.value)} value={ComplaintCategory} required>
            <option>- Select Category</option>
            <option>Faculty</option>
            <option>Management</option>
            <option>Cleanliness</option>
            <option>Other</option>
          </Select>
        </div>

        <Label htmlFor='complaintTitle' value='Complaint Title*' />
        <TextInput id='complaintTitle' value={complaintTitle} onChange={e=>setComplaintTitle(e.target.value)}/>

        <Label htmlFor='complaintBody' value='Complaint Description*'/>
        <Textarea id='complaintBody' rows={8} value={complaintBody} onChange={e => setComplaintBody(e.target.value)}/>

        <Label htmlFor='complaintBody' value='Attach Documents'/>
        <FileDropzone />
      </div>
      <div className="flex gap-3 mt-4">
        <Button color={'blue'} onClick={handleSubmit}>Submit Complaint</Button>
        <Button color={'light'}>Save Draft</Button>
        <Button color={'failure'}>Cancel</Button>
      </div>
    </section>
  )
}
