"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-4xl text-center pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Produk UMKM Desa Maduretno
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const KripikBrekele = () => {
  return (
    <section className="py-6">
      <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4">
        Kripik Brekele Duta Muda Maduretno
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Kripik Brekele, camilan lezat dari Desa Maduretno.
        </span>{" "}
        Dibuat dengan bahan-bahan pilihan dan proses yang higienis, kripik ini
        menjadi favorit banyak orang. Rasanya yang renyah dan gurih membuat Anda
        ketagihan.
      </p>
    </section>
  );
};

const Cocopeat = () => {
  return (
    <section className="py-6">
      <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4">
        Cocopeat Maduretno
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Cocopeat berkualitas tinggi dari Desa Maduretno.
        </span>{" "}
        Produk ini sangat baik untuk media tanam, membantu pertumbuhan tanaman
        dengan optimal. Cocok untuk berbagai jenis tanaman dan mudah digunakan.
      </p>
    </section>
  );
};

const JambuKristal = () => {
  return (
    <section className="py-6">
      <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4">
        Jambu Kristal Maduretno
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Jambu Kristal segar dari kebun Desa Maduretno.
        </span>{" "}
        Buah ini terkenal dengan rasa manisnya yang pas dan tekstur renyah. Kaya
        akan vitamin C dan serat, menjadikannya pilihan buah yang sehat dan
        lezat.
      </p>
    </section>
  );
};

const data = [
  {
    category: "Jambu Kristal",
    title: "Jambu Kristal Maduretno",
    src: "https://lahatpos.bacakoran.co/upload/2afe68244a327cbe65cdfd09d6b83d0d.jpg",
    content: <JambuKristal />,
  },
  {
    category: "Kripik Brekele",
    title: "Kripik Brekele Duta Muda Maduretno",
    src: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-57150469/no-brand_kripik-brekele-1-kg-_full02.jpg",
    content: <KripikBrekele />,
  },
  {
    category: "Cocopeat",
    title: "Cocopeat Maduretno",
    src: "https://bag-sda.malangkab.go.id/uploads/artikel/bag-sda-opd@3507-Web%20Cocopeat.jpg",
    content: <Cocopeat />,
  },
];
