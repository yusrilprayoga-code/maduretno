import React from 'react'
import NavBar from '@/components/NavBar'
import { WorldMapDemo } from '@/components/worldmap'
import Footer from '@/components/Footer'
import TeamSection from '@/components/TeamSection'
import { Visi } from '@/components/Visi'
import History from '@/components/History'

const page = () => {
  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
      <NavBar />
      <WorldMapDemo />
      <Visi />
      <TeamSection />
      <History />
      <Footer />
    </div>
  )
}

export default page