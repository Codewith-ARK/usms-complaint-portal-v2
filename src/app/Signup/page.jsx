'use client'
import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import SectionHeading from '../Components/ui/SectionHeading'
import { BatchCode } from './Components/BatchCode'
import { Department } from './Components/Department'
import Required from './Components/Required'
import axios from 'axios'
import SectionSubHeading from '../Components/ui/SectionSubHeading'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Loading from '../Components/ui/Loading'

export default function Page() {
  const router = useRouter();
  const [department, setSelectedDepartment] = useState("");
  const [batchCode, setSelectedBatch] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
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
    try {
      setIsLoading(true);
      const response = await axios.post('/api/createUser', data);
      if (response.status === 200) {
        clearFields();
        setIsLoading(false);
        router.push('/Login')
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      throw new Error('Error during sign up:', e);
    }
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
    <>
      {isLoading && <Loading />}
      <section className='py-16 px-40 flex-grow'>
        <SectionHeading title={'Signup'} />
        <SectionSubHeading title={'Create a new student account.'} />
        <div className='w-full h-full flex justify-between'>
          <div></div>
          <div className='w-1/2 flex flex-col gap-3'>
            <p className='text-sm'>Note: <span className='text-gray-500'>Fields marked with (<Required />) are required.</span></p>
            <div className='flex gap-2'>
              <div className='grow'>
                <Label value='First Name' /><Required />
                <TextInput type='text' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className='grow'>
                <Label value='Last Name' /><Required />
                <TextInput type='text' required value={lastName} onChange={e => setLastName(e.target.value)} />
              </div>
            </div>
            <div>
              <Label value='Email' /><Required />
              <TextInput type='email' required value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <Label value='Password' /><Required />
              <TextInput type='password' required value={password} onChange={e => setPassword(e.target.value)} />
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
            <p>Already a user? <Link href={'/Login'} className='text-blue-600'>Login</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}
