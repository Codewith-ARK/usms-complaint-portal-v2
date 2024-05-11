"use client"
import React from 'react'
import { Stats } from '../Components/ui/Stats'
import SectionHeading from '../Components/ui/SectionHeading'
import complaintData from '../db/complaint'

export default function page() {
  const totalComplaints = complaintData.length;

  return (
    <section className='py-16 px-6 flex-grow'>
      <SectionHeading title={"Dashboard"} />
      <div className='grid grid-cols-3 gap-4'>
        <Stats statTitle={'Total Complaints'} statData={totalComplaints} />
        <Stats statTitle={'Total Complaints Resolved'} />
        <Stats statTitle={'Active Complaints'} />
      </div>
    </section>
  )
}
