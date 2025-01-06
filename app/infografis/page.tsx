import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <div className="max-w-6xl relative mx-auto py-10 px-4 w-full  left-0 top-0">
        <h1 className="text-xl md:text-5xl font-bold dark:text-white">
          Infografis <br />
          <span className="text-lime-800">Desa Maduretno</span>
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Maduretno adalah desa yang terletak di Kecamatan Buluspesantren,
          Kabupaten Kebumen, Jawa Tengah. Maduretno memiliki potensi yang sangat
          besar dalam bidang pertanian dan peternakan.
        </p>
      </div>
    </div>
  );
};

export default page;
