import { Badge, Card } from 'flowbite-react'
import React from 'react'

export default function ComplaintPost({complaintID, complaintTitle, complaintDesc, isActive, id}) {
  return (
    <Card className='gap-2' id={id}>
      <p className='text-xs font-semibold text-gray-400'>#{complaintID ? complaintID : "0927426238918746"}</p>
      <h6 className='text-lg font-bold'>{complaintTitle ? complaintTitle : "Default title"}</h6>
      <p className='text-sm '>{complaintDesc ? complaintDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum inventore fugit."}</p>

      <div className='overflow-clip flex gap-2 rounded-2xl'>
        <img src="https://placehold.co/180" alt="complaint media" />
        <img src="https://placehold.co/180" alt="complaint media" />
        <img src="https://placehold.co/180" alt="complaint media" />
      </div>

      {
        isActive ?
        <Badge size={'sm'} className='w-fit' color={'yellow'}>Active</Badge>:
        <Badge size={'sm'} className='w-fit' color={'green'}>Completed</Badge>
      }
    </Card>
  )
}
