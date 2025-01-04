'use client'

import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselItems = [
  {
    image: "/images/posyandu-anggrek.jpg",
    alt: "Posyandu Anggrek",
    title: "Posyandu Anggrek",
    description: "Posyandu Anggrek is a health center for children",
  },
  {
    image: "/images/MMD.JPG",
    alt: "Musyawarah Masyarakat Desa",
    title: "Musyawarah Masyarakat Desa",
    description: "Musyawarah Masyarakat Desa is a village meeting",
  },
  {
    image: "/images/posyandu-anggrek.jpg",
    alt: "Posyandu Anggrek",
    title: "Posyandu Anggrek",
    description: "Posyandu Anggrek is a health center for children",
  },
]

export default function HeroCarousel() {
  return (
    <main id="content">
      <div className="px-4 lg:px-8">
        <Carousel className="relative">
          <CarouselContent className="h-[30rem] md:h-[calc(100vh-106px)]">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="h-full flex flex-col bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="object-cover w-full h-full"
                    width={3540}
                    height={2360}
                    priority={index === 0}
                  />
                  <div className="absolute bottom-0 w-2/3 md:max-w-lg pl-5 pb-5 md:pl-10 md:pb-10">
                    <span className="block text-white">{item.title}</span>
                    <span className="block text-white text-xl md:text-3xl">
                      {item.description}
                    </span>
                    <div className="mt-5">
                      <Link
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        Read Case Studies
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-white border-none shadow-none w-12 h-full rounded-l-2xl">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-white border-none shadow-none w-12 h-full rounded-r-2xl">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </main>
  )
}

