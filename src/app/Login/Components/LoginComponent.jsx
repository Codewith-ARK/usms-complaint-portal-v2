'use client'
import SectionHeading from '@/app/Components/ui/SectionHeading'
import SectionSubHeading from '@/app/Components/ui/SectionSubHeading'
import LoginContext from '@/app/Context/loginContext'
import axios from 'axios'
import { Button, Label, TextInput } from 'flowbite-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

export default function LoginComponent({ isLoading, setIsLoading }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setIsLoggedIn } = useContext(LoginContext);
  const router = useRouter();
  const data = {
    email: email,
    password: password
  }

  const clearFields = () => {
    setEmail('')
    setPassword('')
  }

  const handleLogin = async () => {
    setIsLoading(true);
    const response = await axios.post('/api/auth', data);
    if (response.status === 200) {
      setIsLoggedIn(true);
      setIsLoading(false);
      clearFields();
      router.push('/');
    }
  }
  return (
    <section className='py-16 px-40 flex-grow flex'>
      <div className='w-1/2'>
        <SectionHeading title={'Login'} />
        <SectionSubHeading title={'Student login page'} />
      </div>
      <section className='w-1/2 flex flex-col gap-3'>
        <Label value='Email' />
        <TextInput type='email' value={email} onChange={e => setEmail(e.target.value)} />

        <Label value='Password' />
        <TextInput type='password' value={password} onChange={e => setPassword(e.target.value)} />

        <Button color={'blue'} onClick={handleLogin}>Login</Button>
        <p>New user? <Link href={'/Signup'} className='text-blue-600'>Signup</Link></p>
      </section>
    </section>
  )
}
