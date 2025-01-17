"use client"

import React from 'react'
import NavBar from '@/components/NavBar'
import { WorldMapDemo } from '@/components/worldmap'
import Footer from '@/components/Footer'
import TeamSection from '@/components/TeamSection'
import { Visi } from '@/components/Visi'
import History from '@/components/History'
import { useEffect, useState } from 'react'

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu loading (2 detik)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    // Bersihkan timer ketika komponen di-unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-l-4 border-lime-500 border-t-gray-300"></div>
        <p className="ml-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

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