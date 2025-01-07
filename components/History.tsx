"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HistorySection {
  id: string;
  title: string;
  content: string[];
}

const historyContent: HistorySection[] = [
  {
    id: "sejarah-desa",
    title: "Sejarah Desa Maduretno",
    content: [
      "Desa Maduretno adalah sebuah Desa yang berada di pesisir Pantai Selatan Pulau Jawa. Desa Maduretno adalah salah satu Desa dari 21 Desa yang berada di Kecamatan Buluspesantren, Kabupaten Kebumen, Jawa Tengah.",
      "Maduretno adalah sebuah Desa yang memiliki sejarah yang sangat besar bagi wilayah (desa) sekelilingnya. Menurut sumber Mbah Suryono dan Mbah Partadwirdja (sesepuh setempat), jaman dahulu tempat ini adalah hutan (alas) yang lebat yang belum berpenghuni dan belum mempunyai nama.",
      "Jaman dahulu tempat ini menjadi rebutan oleh para penguasa. Banyak faktor yang kenapa tempat ini menjadi rebutan. Diantaranya tempat yang strategis, hamparan tanah luas, dan dekat dengan sungai.",
      "Seiring berjalannya waktu, tempat ini mulai diduduki oleh orang-orang pendatang. Diantaranya adalah seseorang yang bernama 'Jaka Sangkrip'. Tetapi tak selang beberapa lama kemudian muncul kabar bahwa tempat tersebut sudah dipesan oleh beberapa pejabat atau penguasa daerah sekitar untuk kepentingan pribadi.",
      "Namun karena banyaknya para penguasa yang berebutan, akhirnya terjadi peperangan antar penguasa, dan keduanya imbang (sama-sama kalah). Sehingga tempat tersebut belum ada yang berkuasa.",
    ],
  },
  {
    id: "tumenggung-mentaun",
    title: "Kisah Tumenggung Mentaun",
    content: [
      "Pada massa Jaka Sangkrip yang pada saat itu penguasa wilayah Kebumen dan Kuthowinangun terjadi perang saudara antara Tumenggung Mentaun dengan Gamawijaya. Mereka berdua adalah prajurit dari Mataram.",
      "Karena saking kuatnya Gamawijaya, Tumenggung Mentaun kalah dan melarikan diri ke suatu tempat. Tempat tersebut yang sekarang menjadi Desa Maduretno.",
      "Karena mendapat luka yang parah, akhirnya Tumenggung Mentaun malarikan diri kesuatu tempat untuk memulihkan kekuatannya kembali, Tumenggung Mentaun bersembuyi ditempat tersebut dan bertapa.",
      "Berhubung yang berada saat itu adalah Tumenggung Mentaun, akhirnya tempat tersebut diubah namanya menjadi Mentaun. Dan sampai saat ini masih ada pedukuhan yang bernama Mentaun (Mentaun Wetan, Mentaun Kulon, Mentaun Kidul).",
    ],
  },
  {
    id: "wafatnya-tumenggung",
    title: "Wafatnya Tumenggung Mentaun",
    content: [
      "Namun karena parahnya luka yang dialaminya, akhirnya setelah beberapa waktu, Tumenggung Mentaun ditemukanlah telah wafat dan ditemuka oleh prajurit Mataram dan sudah terbujur kaku seperti guling didekat pertapaannya.",
      "Dan tempat ditemukannya Tumenggung Mentaun itu sampai sekarang masih ada, dan kini menjadi tempat pemakaman umum yang bernama 'Kuburan Guling' yang mana pada saat ini digunakan sebagai pemakaman umum warga sekitar.",
      "Setelah manyat Tumenggung Mentaun diketemukan, kemudian manyat tersebut dibawa ke sebelah timurnya. Tempat dimana pada saat itu tempatnya agak miring dan digunakan untuk meletakan jenazah tersebut. Dan tempat itu diberi nama Perong.",
    ],
  },
  {
    id: "misteri-jenazah",
    title: "Misteri Jenazah Tumenggung Mentaun",
    content: [
      "Tetapi seperti yang diketahui oleh orang sekitar, Tumenggung Mentaun adalah sosok yang kuat dan sangat sakti. Sehingga banyak sekali yang menginginkan Jenazahnya. Karena menurut cerita, jenazah Tumenggung Mentaun bisa digunakan sebagai jimat untuk menambah kekuatan.",
      "Sehingga dari pihak Mataram menginginkan jenazah Tumenggung Mentaun dibawa pulang ke Mataram. Saat perjalanan menuju Mataram, banyak sekali rintangan yang dihadapi.",
      "Dari tempat ditemukannya Tumenggung Mentaun, jenazah dibawa melewati sungai. Proses penyebrangan jenazah menggunakan ranting pohon beringin yang dibentuk seperti rantai. Sehingga di utara sungai ada Desa yang bernama 'Rantewringin'.",
      "Setelah lama menyebrangkan jenazah, para prajurit kelelahan,sehingga beristirahat di sebuah tempat. Dan jenazah Tumenggung Mentaun di sampirkan ke sebuah pohon. Dan tempat yang digunakan untuk menyampirkan itu sekarang bernama 'Sampiran'.",
    ],
  },
  {
    id: "penemuan-mengejutkan",
    title: "Penemuan Mengejutkan",
    content: [
      "Dalam perjalanan para prajurit lelah kembali, dan mereka banyak yang meninggal. Rasa curiga pun datang, karena jenazah yang mereka bawa sangat ringan.",
      "Sehingga disekitar kebumen, mereka membuka jenazah itu. Dan mereka sangat kaget, termyata yang mereka bawa bukanlah jenazah, melainkan Debog pisang. Dan mereka pun marah, dan meninggalkan debog itu di kebumen.",
      "Kini tempat yang digunakan untuk meninggalkan jenazah digunakan sebagai pasar kebumen. Yaitu pasar Tumenggungan yang terletak dipusat kota.",
    ],
  },
  {
    id: "versi-cerita",
    title: "Dua Versi Cerita",
    content: [
      "Menurut cerita, ada dua versi dimana jenazah Tumenggung Mentaun berada:",
      "1. Versi pertama: jenazah Tumenggung Mentaun telah dicuri oleh musuhnya dan dibuang entah dimana.",
      "2. Versi kedua: jenazah Tumenggung Mentaun telah dikubur di sebelah timur tempat ditemukannya wafat. Yang mana tempat itu kini terdapat makam Mbah Tumenggung Mentaun.",
      "Dan sampai sekarang pemakaman tersebut masih dianggap bersejarah oleh warga sekitar. Tempat tersebut juga sering dikunjungi oleh orang Maduretno dan luar Maduretno.",
    ],
  },
  {
    id: "perkembangan-desa",
    title: "Perkembangan Desa",
    content: [
      "Seiring berjalannya waktu setelah Tumenggung Mentaun wafat, tempat itu mulai berpenduduk pesat. Banyak penduduk yang berpindah ke tempat ini, baik laki-laki maupun perempuan.",
      "Karena strategisnya tempat ini, maka tempat ini kembali diperebutkan oleh dua penguasa, yaitu dari Solo (Ki Ageng Pamanah) yang merupakan musuh dari penguasa Kali Progo (Ki Ageng Mangir 'Wonoboyo').",
      "Perempuan pada jaman itu berperan penting dalam perebutan wilayah. Perempuan pada jaman itu digunakan sebagai 'alat' oleh warga sekitar untuk melumpuhkan penguasa yang hanya mementingkan kepentingan sendiri.",
      "Cara perempuan untuk melumpuhkan para penguasa adalah dengan merayu dan menggoda para penguasa yang datang.",
    ],
  },
  {
    id: "peran-perempuan",
    title: "Peran Perempuan dalam Sejarah Maduretno",
    content: [
      "Pada jaman tersebut, perempuan memiliki peran penting dalam perebutan wilayah. Perempuan cantik yang belum bersuami sering digunakan untuk meluluhkan hati para penguasa yang berniat buruk.",
      "Cara ini dinilai efektif karena tidak memerlukan tenaga lebih untuk berperang dan dinilai lebih aman. Pambayun, putri pertama Sutawijaya (Putra Ki Ageng Mataram), adalah salah satu yang ditugaskan sebagai Tledhek atau Tengger - wanita penghibur dan perayu para penguasa.",
      "Karena kecantikan dan kepandaiannya merayu, Pambayun dikirim untuk menari di depan para penguasa, ditemani oleh dua orang pengikut yang bertugas memainkan kendang.",
    ],
  },
  {
    id: "kisah-pambayun",
    title: "Kisah Pambayun",
    content: [
      "Kepintaran dan kecantikan Pambayun berhasil memikat hati seorang penguasa. Setelah beberapa kali diundang, muncul benih-benih cinta yang berujung pada pernikahan.",
      "Suatu hari, Pambayun berniat untuk mengunjungi orang tuanya. Tanpa sepengetahuan suaminya, ternyata orang tua Pambayun adalah musuh sang suami. Karena aturan kerajaan melarang membawa senjata, suami Pambayun akhirnya ditangkap dan dibunuh oleh orang tua Pambayun.",
      "Walaupun Pambayun sangat sedih dengan kejadian itu, dia merasa kecewa telah membawa suaminya ke rumahnya. Atas jasa dan pengorbanan Pambayun, tempat ini kemudian diberikan kepadanya.",
    ],
  },
  {
    id: "asal-usul-nama",
    title: "Asal Usul Nama Maduretno",
    content: [
      "Setelah peristiwa tersebut, tempat ini diubah namanya menjadi 'MADURETNO'. Nama Maduretno berasal dari dua kata: Madu dan Retno.",
      "Madu atau Padu dalam bahasa berarti 'merundingkan atau menggabungkan', dan Retno berarti perempuan. Jadi, Maduretno berarti 'Perempuan penggabung'.",
      "Menurut istilah Jawa, Madu berarti manis seperti madu lebah yang bisa digunakan sebagai obat berbagai penyakit, dan Retno berarti permata atau putri. Maduretno bisa berarti tempat yang bisa digunakan sebagai tempat tinggal agar warganya bisa halus seperti putri, dan bermanfaat untuk orang lain.",
    ],
  },
  {
    id: "struktur-desa",
    title: "Struktur dan Batas Wilayah Desa Maduretno",
    content: [
      "Maduretno memiliki beberapa pedukuhan, di antaranya Dukuh Madugawe, Mentaun Kulon, dan Dukuh Mentaun Wetan.",
      "Batas wilayah Desa Maduretno:",
      "- Sebelah barat: Sungai Lukulo (Kecamatan Klirong)",
      "- Sebelah Selatan: Desa Ayamputih",
      "- Sebelah Timur: Desa Bocor",
      "- Sebelah Utara: Desa Ambalkumolo",
    ],
  },
  {
    id: "kepemimpinan",
    title: "Kepemimpinan Desa Maduretno",
    content: [
      "Tidak ada catatan pasti kapan Desa Maduretno berdiri. Menurut tokoh lingkungan setempat, baru ada sekitar enam Lurah atau Kepala Desa yang diketahui, dengan masa jabatan yang bervariasi.",
      "Kepala Desa yang pernah menjabat antara lain: Limin, Abu 'umar, Suradja, Sugiyono, Sunarto, Paryudi, dan saat ini Beni Setyo Bowo (menjabat sejak 2019 hingga 2025).",
    ],
  },
  {
    id: "perkembangan-di-desa",
    title: "Perkembangan di Desa Maduretno",
    content: [
      "Perkembangan Desa Maduretno bisa dikatakan sangat pesat, berkat kinerja perangkat Desa Maduretno yang terus konsisten membangun dari segi sosial, ekonomi, maupun budaya.",
      "Ekonomi: Mayoritas warga adalah petani. Saat menunggu musim panen, ibu-ibu beraktivitas sebagai buruh 'nglethek' (mengupas cangkang mlinjo), ngemping mlinjo, atau Ngesed (membuat kesed dari serabut kelapa).",
      "Budaya: Masyarakat masih memegang teguh kebudayaan, termasuk Selametan Bumi. Desa memiliki kelompok Musik Tradisional Jamjaneng yang terdaftar di dinas kebudayaan Kabupaten Kebumen.",
    ],
  },
  {
    id: "fasilitas-desa",
    title: "Fasilitas Desa Maduretno",
    content: [
      "Fasilitas Keagamaan:",
      "- Dua Masjid Besar: Masjid At'Taqwa (Mentaun Wetan) dan Masjid Miftahul Huda (Mentaun Kulon)",
      "- 10 Mushola dan 2 TPQ",
      "Fasilitas Pendidikan:",
      "- Gedung PAUD",
      "- Gedung TK UTAMI",
      "- SD Maduretno",
      "- Madrasah Ibtidaiah (MI KHR Illyas Maduretno)",
      "Fasilitas Kesehatan: Gedung Kesehatan Desa",
      "Fasilitas Umum: Lapangan dan Kantor Balai Desa",
    ],
  },
];

const History: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(
    historyContent[0].id
  );

  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-6xl mx-auto p-8 mb-20">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Sejarah Desa Maduretno
      </h1>

      <div className="flex flex-wrap justify-center mb-8">
        {historyContent.map((section) => (
          <button
            key={section.id}
            className={`px-4 py-2 m-2 rounded-full transition-colors ${
              activeSection === section.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {historyContent.map((section) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: activeSection === section.id ? 1 : 0,
            y: activeSection === section.id ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className={`bg-white rounded-lg shadow-lg p-6 ${
            activeSection === section.id ? "block" : "hidden"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          {section.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default History;
