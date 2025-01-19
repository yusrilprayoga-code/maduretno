import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { AppleCardsCarouselDemo } from '@/components/Umkm'

const page = () => {

  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
      <NavBar />
      <AppleCardsCarouselDemo />
      <Footer />
    </div>
  )
}

export default page