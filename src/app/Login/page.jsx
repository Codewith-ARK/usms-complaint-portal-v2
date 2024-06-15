'use client'
import React, { useContext, useState } from 'react'
import SectionHeading from '../Components/ui/SectionHeading'
import { Button, Label, TextInput } from 'flowbite-react'
import Required from '../Signup/Components/Required'
import SectionSubHeading from '../Components/ui/SectionSubHeading'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import UserContext from '../Context/userContext'

export default function page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();
  const {setIsLoggedIn}= useContext(UserContext);
  const clearFields = () => {
    setEmail('')
    setPassword('')
  }

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password
    }
    const response = await axios.post('/api/authenticate', data);
    if (response.status === 200) {
      clearFields();
      setIsLoggedIn(true);
      router.push('/');
    } 
  }

  return (
    <section className='py-16 px-6 flex-grow'>
      <SectionHeading title={'Login'} />
      <SectionSubHeading title={'Please login to continue'} />
      <section className='flex'>
        <div className='w-1/2'></div>
        <div className='w-full md:w-1/2 flex flex-col gap-3'>
          <div>
            <Label value='Email' /><Required />
            <TextInput type='email' required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <Label value='Password' /><Required />
            <TextInput type='password' required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <Button color={'blue'} onClick={handleLogin}>Login</Button>
        </div>
      </section>
    </section>
  )
}
