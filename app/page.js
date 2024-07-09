"use client"
import Header from '@/components/Header'
import Numbers from '@/components/Numbers'
import React from 'react'

const page = () => {
  return (
    <div className='bg-cover bg-center min-h-screen bg-[url(https://image.slidesdocs.com/responsive-images/background/education-green-ruler-notebook-mathematics-cute-powerpoint-background_6cd0d1666d__960_540.jpg)]'>
      <Header />
      <Numbers />
    </div>
  )
}

export default page