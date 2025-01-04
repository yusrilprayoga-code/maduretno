import NavBar from '@/components/NavBar'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)]'>
      <NavBar />
    </div>
  )
}

export default page