"use client";
import { WorldMap } from "./ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className="py-10 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-bold text-xl md:text-4xl dark:text-white text-black mb-4">
          Desa{" "}
          <span className="text-neutral-400">
            {"Maduretno".split("").map((letter, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-2xl mx-auto py-2 sm:py-4 px-4 sm:px-0 leading-relaxed sm:leading-normal">
          Desa Maduretno berada di Kecamatan Buluspesantren, Kabupaten Kebumen,
          Provinsi Jawa Tengah. Berdasarkan data dari Badan Pusat Statistik dan
          sumber lainnya:
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          • Luas Desa Maduretno adalah sekitar 2,6 km² (260 hektar).
          <br className="hidden sm:block" />
          • Secara geografis, wilayah Kecamatan Buluspesantren merupakan bagian
          dari dataran rendah dengan beberapa perbukitan, sesuai dengan
          karakteristik wilayah Kebumen.
          <br className="hidden sm:block" />• Desa ini terletak di dekat Sungai
          Lukulo, sungai besar di Kebumen yang mengalir sepanjang sekitar 68,5
          km melintasi Kabupaten Kebumen dan sebagian wilayah Kabupaten
          Wonosobo.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
