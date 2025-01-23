"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { IconBrandWhatsapp } from "@tabler/icons-react";

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
  const productionSteps = [
    "Mencuci dan mengupas singkong segar.",
    "Memotong singkong menjadi irisan tipis dengan ketebalan yang merata.",
    "Merendam irisan singkong dalam bumbu rahasia khas Desa Maduretno.",
    "Menggoreng irisan singkong hingga kering dan renyah menggunakan minyak berkualitas.",
    "Meniriskan minyak, mendinginkan, lalu mengemas dalam kemasan kedap udara untuk menjaga kerenyahannya.",
  ];

  return (
    <section className="py-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4">
        Kripik Brekele Duta Muda Maduretno
      </h2>

      <div className="mb-4">
        <img
          src="/images/brekele-duta.jpeg"
          alt="Kripik Brekele"
          className="w-full rounded-lg"
        />
      </div>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed mb-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Kripik Brekele
        </span>{" "}
        adalah camilan khas dari Desa Maduretno yang menawarkan rasa renyah dan
        gurih yang menggoda. Dibuat dari bahan-bahan alami pilihan seperti
        singkong segar, Kripik Brekele memiliki manfaat sebagai sumber energi
        instan yang praktis dikonsumsi kapan saja. Proses pembuatannya dilakukan
        secara higienis, mulai dari pemilihan bahan baku berkualitas, pengirisan
        tipis, hingga penggorengan dengan minyak berkualitas tinggi untuk
        menghasilkan kerenyahan sempurna.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed mb-4">
        Khasiat utama Kripik Brekele adalah memberikan rasa kenyang sementara
        sekaligus menjadi teman yang sempurna untuk bersantai atau menemani
        waktu berkumpul bersama keluarga. Camilan ini juga bebas dari bahan
        pengawet, sehingga aman untuk dikonsumsi.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed mb-4">
        Cara pembuatan Kripik Brekele meliputi:
      </p>

      <ol className="list-decimal list-inside mb-4">
        {productionSteps.map((step, index) => (
          <li
            key={index}
            className="text-neutral-600 dark:text-neutral-400 mb-2"
          >
            {step}
          </li>
        ))}
      </ol>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed">
        Nikmati Kripik Brekele kapan saja dan di mana saja sebagai camilan
        favorit yang menggabungkan rasa tradisional dan kualitas terbaik!
      </p>

      <div className="mt-6 text-center">
        {/* make wa button for order now */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-lime-500 text-white font-medium rounded-md hover:bg-primary-600"
        >
          <IconBrandWhatsapp className="inline-block w-6 h-6 mr-2" />
          Pesan Sekarang
        </a>
      </div>
    </section>
  );
};

const Cocopeat = () => {
  const benefits = [
    "Retensi Air Tinggi",
    "Aerasi Sempurna",
    "Ringan dan Mudah Digunakan",
    "100% Organik",
    "Ramah Lingkungan",
    "Dapat Didaur Ulang",
  ];

  const productionSteps = [
    "Seleksi Bahan Baku",
    "Pembersihan",
    "Pengolahan",
    "Sterilisasi",
    "Pengemasan",
  ];
  return (
    <section className="py-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4">
        Cocopeat Maduretno
      </h2>

      <div className="mb-4">
        <img
          src="https://bag-sda.malangkab.go.id/uploads/artikel/bag-sda-opd@3507-Web%20Cocopeat.jpg"
          alt="Cocopeat"
          className="w-full rounded-lg"
        />
      </div>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed mb-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Cocopeat berkualitas tinggi dari Desa Maduretno
        </span>{" "}
        Produk ini sangat baik untuk media tanam, membantu pertumbuhan tanaman
        dengan optimal. Cocok untuk berbagai jenis tanaman dan mudah digunakan.
      </p>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
          Keunggulan Produk
        </h3>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
          {benefits.map((benefit, index) => (
            <li key={index} className="mb-1">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
          Proses Produksi
        </h3>
        <ol className="list-decimal list-inside text-neutral-600 dark:text-neutral-400">
          {productionSteps.map((step, index) => (
            <li key={index} className="mb-1">
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
          Manfaat Utama
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans leading-relaxed">
          Cocopeat Maduretno dirancang untuk memaksimalkan pertumbuhan tanaman,
          memberikan lingkungan tumbuh yang optimal dengan retensi air dan
          aerasi yang sempurna. Cocok untuk berbagai jenis tanaman mulai dari
          sayuran hidroponik hingga tanaman hias.
        </p>
      </div>

      <div className="text-center mt-6">
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-lime-500 text-white font-medium rounded-md hover:bg-primary-600"
        >
          <IconBrandWhatsapp className="inline-block w-6 h-6 mr-2" />
          Pesan Sekarang
        </a>
      </div>
    </section>
  );
};

const JambuKristal = () => {
  const nutritionalBenefits = [
    "Vitamin C tinggi",
    "Serat melimpah",
    "Antioksidan kuat",
    "Rendah kalori",
    "Kaya mineral",
  ];

  const consumptionVariations = [
    "Jus segar",
    "Campuran salad",
    "Selai",
    "Kolak",
    "Manisan",
  ];
  return (
    <section className="py-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4">
        Jambu Kristal Maduretno
      </h2>

      <div className="mb-4">
        <img
          src="https://lahatpos.bacakoran.co/upload/2afe68244a327cbe65cdfd09d6b83d0d.jpg"
          alt="Jambu Kristal"
          className="w-full rounded-lg"
        />
      </div>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed mb-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Jambu Kristal Maduretno: Pesona Buah Segar Berkualitas Tinggi
        </span>{" "}
        Buah ini terkenal dengan rasa manisnya yang pas dan tekstur renyah. Kaya
        akan vitamin C dan serat, menjadikannya pilihan buah yang sehat dan
        lezat.
      </p>

      {/* pendahuluan */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed mb-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Pendahuluan: Keistimewaan Jambu Kristal
        </span>{" "}
        Jambu Kristal dari Desa Maduretno merupakan permata hijau yang tumbuh di
        tanah subur pedesaan, menghadirkan cita rasa istimewa yang membuat
        setiap gigitannya begitu memesona. Buah yang telah menjelma menjadi
        kebanggaan lokal ini menawarkan lebih dari sekadar kesegaran.
      </p>

      {/* pendahuluan */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed mb-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Asal Usul dan Budidaya
        </span>{" "}
        Desa Maduretno, dengan kondisi iklim dan tanah yang unik, menciptakan
        lingkungan sempurna untuk pertumbuhan Jambu Kristal. Para petani
        setempat telah mengembangkan teknik budidaya turun-temurun yang menjamin
        kualitas dan kelezatan buah.
      </p>

      {/* pendahuluan */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mx-auto leading-relaxed mb-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Karakteristik Jambu Kristal
        </span>{" "}
        Penampilan Warna hijau cerah Permukaan mengkilap seperti kristal Ukuran
        sedang hingga besar Bentuk bulat dengan ujung yang sedikit meruncing
        Rasa dan Tekstur Manis alami Renyah Segar Tidak terlalu asam
      </p>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
          Manfaat Gizi
        </h3>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
          {nutritionalBenefits.map((benefit, index) => (
            <li key={index} className="mb-1">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
          Variasi Olahan
        </h3>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
          {consumptionVariations.map((variation, index) => (
            <li key={index} className="mb-1">
              {variation}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
          Keunikan Produk
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans leading-relaxed">
          Jambu Kristal Maduretno memiliki keistimewaan pada rasa manis alami,
          tekstur renyah, dan kualitas gizi yang tinggi. Dipetik langsung dari
          kebun dengan metode tradisional yang menjaga kesegaran dan nutrisi.
        </p>
      </div>

      <div className="text-center mt-6">
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-lime-500 text-white font-medium rounded-md hover:bg-primary-600"
        >
          <IconBrandWhatsapp className="inline-block w-6 h-6 mr-2" />
          Pesan Sekarang
        </a>
      </div>
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
    src: "/images/brekele-duta.jpeg",
    content: <KripikBrekele />,
  },
  {
    category: "Cocopeat",
    title: "Cocopeat Maduretno",
    src: "https://bag-sda.malangkab.go.id/uploads/artikel/bag-sda-opd@3507-Web%20Cocopeat.jpg",
    content: <Cocopeat />,
  },
];
