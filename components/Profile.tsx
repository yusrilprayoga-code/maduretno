'use client'

import { useState, useEffect } from 'react'

const Profile = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  // Extract video ID from YouTube URL
  const videoId = '-c3xZci-Pqc'

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Profile Desa Maduretno</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Profile Desa Maduretno"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Selamat Datang di Desa Maduretno</h2>
            <p className="text-gray-600 mb-4">
              Desa Maduretno adalah sebuah desa yang indah dan makmur, terletak di Kecamatan Buluspesantren, Kabupaten Kebumen, Jawa Tengah. Dengan kekayaan alam dan budaya yang melimpah, desa kami menawarkan pengalaman unik bagi pengunjung dan kehidupan yang harmonis bagi penduduknya.
            </p>
            <p className="text-gray-600 mb-4">
              Video profil ini menampilkan keindahan alam, kehidupan masyarakat, dan potensi desa kami. Kami mengundang Anda untuk menikmati keramahan penduduk dan menjelajahi keunikan Desa Maduretno.
            </p>
            <a
              href="/profile"
              className="inline-block bg-lime-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-lime-600 transition-colors"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
