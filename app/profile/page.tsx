import React from 'react'
import NavBar from '@/components/NavBar'
import { WorldMapDemo } from '@/components/worldmap'
import Footer from '@/components/Footer'
import TeamSection from '@/components/TeamSection'

const page = () => {
  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
      <NavBar />
      <WorldMapDemo />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default page