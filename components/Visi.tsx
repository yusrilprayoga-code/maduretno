import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function Visi() {
  const data = [
    {
      title: "Visi",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-lg font-bold mb-4">
            Visi Desa Maduretno
            </h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-xs md:text-sm mb-8">
            Terwujudnya Desa Maduretno yang maju, mandiri, dan sejahtera
          </p>
        </div>
      ),
    },
    {
      title: "Misi",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-lg font-bold mb-4">
            Misi Desa Maduretno
            </h3>
          <ul className="list-disc list-inside text-xs md:text-sm">
            <li className="text-neutral-800 dark:text-neutral-200 mb-2">
              Mewujudkan pemerintahan yang bersih, transparan, dan akuntabel
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 mb-2">
              Meningkatkan kualitas sumber daya manusia
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 mb-2">
              Meningkatkan perekonomian masyarakat
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 mb-2">
              Meningkatkan kualitas infrastruktur desa
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 mb-2">
              Meningkatkan kualitas lingkungan hidup
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Bagan Desa",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-lg font-bold mb-4">
            Bagan Desa Maduretno
            </h3>
          <div className="mb-8">
            <Image
              src="/images/organisasi.png"
              alt="Avatar"
              width={320}
              height={320}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
