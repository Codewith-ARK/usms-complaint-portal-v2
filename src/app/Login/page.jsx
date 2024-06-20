'use client'
import React, { useState } from 'react'
import Loading from './Components/Loading'
import LoginComponent from './Components/LoginComponent'

export default function page() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      {isLoading ? <Loading /> : <LoginComponent isLoading={isLoading} setIsLoading={setIsLoading} />}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </>
  )
}
