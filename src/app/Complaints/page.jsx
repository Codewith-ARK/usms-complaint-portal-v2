import React from 'react'
import SectionHeading from '../Components/ui/SectionHeading'
import { Button, Card } from 'flowbite-react'
import Link from 'next/link'
import SectionSubHeading from '../Components/ui/SectionSubHeading'
import ComplaintPost from '../Components/ui/ComplaintPost'
import complaintData from '../db/complaint'
import { ComplaintTabs } from '../Components/layout/ComplaintTabs'

export default function page() {
  const renderActive = () => {
    return complaintData.map((item, key) => {
      if(item.isActive === true){
        return (
          <ComplaintPost
            key={key}
            id={item.id}
            complaintTitle={item.title}
            complaintDesc={item.desc}
            isActive={item.isActive}
          />
        )
      }
    })
  }

  const renderCompleted = () => {
    return complaintData.map((item, key) => {
      if(item.isActive === false){
        return (
          <ComplaintPost
            key={key}
            id={item.id}
            complaintTitle={item.title}
            complaintDesc={item.desc}
            isActive={item.isActive}
          />
        )
      }
    })
  }

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

      {/* <div className="grid grid-cols-2 h-screen *:px-4 *:gap-4">
        <div className='flex flex-col border-e'>
          <SectionSubHeading title={'Active Complaints'}/>
          {renderActive()}
        </div>

        <div className='flex flex-col'>
          <SectionSubHeading title={'Closed Complaints'} />
          {renderCompleted()}
        </div>
      </div> */}
