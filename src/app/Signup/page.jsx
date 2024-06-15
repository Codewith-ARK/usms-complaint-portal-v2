'use client'
import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import SectionHeading from '../Components/ui/SectionHeading'
import { BatchCode } from './Components/BatchCode'
import { Department } from './Components/Department'
import Required from './Components/Required'
import axios from 'axios'
import SuccessToast from './Components/SuccessToast'
import FailureToast from './Components/FailureToast'

export default function Page() {
  const [department, setSelectedDepartment] = useState("");
  const [batchCode, setSelectedBatch] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  

  const handleSignup = () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      user_type: 'student',
      batch_code: batchCode,
      department: department,
      department_code: null,
      faculty_id: null
    }

    axios.post('/api/createUser', data).then((res)=>{
      if(res.ok){
        clearFields();
        <SuccessToast />
      }
      else{
        <FailureToast />
      }
    })
  };

  const clearFields = () => {
    setSelectedDepartment('')
    setSelectedBatch('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setEmail('')
  }

  return (
    <section className='py-16 px-6 flex-grow'>
      <SectionHeading title={'Signup'} />
      <div className='w-full h-full flex justify-between'>
        <div></div>
        <div className='w-1/2 flex flex-col gap-3'>
          <p className='text-sm'>Note: <span className='text-gray-500'>Fields marked with (<Required />) are required.</span></p>
          <div className='flex gap-2'>
            <div className='grow'>
              <Label value='First Name' /><Required />
              <TextInput type='text' required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div className='grow'>
              <Label value='Last Name' /><Required />
              <TextInput type='text' required value={lastName} onChange={e=>setLastName(e.target.value)}/>
            </div>
          </div>
          <div>
            <Label value='Email' /><Required />
            <TextInput type='email' required value={email} onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div>
            <Label value='Password' /><Required />
            <TextInput type='password' required value={password} onChange={e=>setPassword(e.target.value)}/>
          </div>
          <BatchCode
            selectedBatch={batchCode}
            setSelectedBatch={setSelectedBatch}
          />
          <Department
            selectedDepartment={department}
            setSelectedDepartment={setSelectedDepartment}
          />
          <Button color={'blue'} onClick={handleSignup}>Signup</Button>
        </div>
      </div>
    </section>
  )
}
