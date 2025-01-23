import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

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

      <div
        className="
        max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto
      "
      >
        {/* image full size */}
        <Image
          className="rounded-xl"
          src="/images/peta-desa.png"
          alt="Avatar"
          width={1200}
          height={320}
        />
      </div>

      {/* keadaan Iklim */}
      <div
        className="
            max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-10 mx-auto
            "
      >
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Keadaan Iklim
        </h2>
        <p className="text-sm text-gray-600 mt-2 md:text-lg">
          Desa Maduretno, Kecamatan Bulupesantren, Kabupaten Kebumen, memiliki
          iklim tropis dengan dua musim, yaitu musim penghujan (November–April)
          dan musim kemarau (Mei–Oktober). Curah hujan tahunan di wilayah ini
          mencapai sekitar 3.500–4.000 mm dengan rata-rata 150–180 hari hujan
          per tahun. Curah hujan tertinggi biasanya terjadi pada bulan Januari
          hingga Februari, dengan rata-rata mencapai 450–500 mm per bulan,
          sedangkan bulan-bulan kemarau seperti Juli dan Agustus memiliki curah
          hujan terendah, sekitar 100 mm per bulan. Kondisi ini mendukung
          keberlanjutan aktivitas pertanian, namun juga memerlukan perhatian
          dalam pengelolaan sumber daya air dan mitigasi risiko banjir selama
          musim penghujan 234 hari. Hari hujan terbanyak ada pada bulan Mei dan
          Desember 2022 sebanyak 28 hari hujan.
        </p>
      </div>

      {/* pertanian */}
      <div
        className="
                max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-8 mx-auto
                "
      >
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Pertanian
        </h2>
        <p className="text-sm text-gray-600 mt-2 md:text-lg">
          Secara geografis wilayah Desa Maduretno memiliki lahan pertanian
          berupa dataran rendah dengan kategori subur. Sebagian besar masyarakat
          Desa Maduretno berprofesi sebagai petani dengan lahan pertanian yang
          diolah secara konvensional. Lahan pertanian di Desa Maduretno
          berbentuk sawah tadah hujan, sehingga sangat mengandalkan hujan untuk
          mengairi area pertanian. Komoditas pertanian yang ditanam berupa
          tanaman pangan. Hasil pertanian berupa padi, jagung, dan jambu kristal
          sebagai hasil utama. Dalam hal pendistribusian hasil pertanian untuk
          dijual keluar wilayah desa.
        </p>
      </div>

      {/* Peternakan */}
      <div
        className="
                    max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-8 mx-auto
                    "
      >
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Peternakan
        </h2>
        <p className="text-sm text-gray-600 mt-2 md:text-lg">
          Desa Maduretno, Kecamatan Bulupesantren, Kabupaten Kebumen, memiliki
          potensi yang menjanjikan dalam bidang peternakan karena ketersediaan
          bahan pangan alami bagi ternak yang didukung oleh curah hujan tinggi
          dan hampir setiap rumah didominasi dengan ternak sapi.
        </p>
      </div>

      {/* Kependudukan */}
      <div
        className="
                            max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-8 mx-auto
                            "
      >
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Kependudukan
        </h2>

        <Image
          src="/images/population.png"
          alt="kependudukan"
          className="rounded-xl mt-2 mb-2"
          width={1200}
          height={320}
        />


        <p className="text-sm text-gray-600 mt-2 md:text-lg">
          Desa Maduretno memiliki 3 RW dan 9 RT dengan total keluarga sebanyak
          608 keluarga. Jumlah penduduk desa/kelurahan adalah 2.134 jiwa yang
          terdiri dari laki - laki sebanyak 1.079 jiwa dan perempuan 1.055 jiwa.
          Mayoritas pekerjaan dari masyarakat Desa Maduretno adalah petani.
          Selain petani, terdapat juga peternak. Terdapat pula UMKM yang
          mengolah komoditas jambu kristal menjadi produk dodol jambu dan
          keripik. Jumlah UMKM ini sendiri masih minim dan belum melakukan
          kegiatan produksi secara konsisten. <br />
          Di Desa Maduretno terdapat pula berbagai kegiatan seperti Posyandu
          yang terdiri atas Posyandu Lansia, Posyandu Remaja, dan Posyandu
          Balita yang dilaksanakan sebulan sekali. Selain itu, terdapat pula 1
          PAUD, 1 TPQ, dan kegiatan Karang Taruna yang bernama Karang Taruna
          Gadjah Mada. Tidak hanya itu, di Desa Maduretno memiliki kegiatan PKK
          rutin dan 3 Gabungan Kelompok Tani (Gapoktan).
        </p>
      </div>

      {/* Pendidikan */}
      <div
        className="
                                    max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-8 mx-auto
                                    "
      >
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Pendidikan
        </h2>

        <Image src="/images/education.png" alt="pendidikan" className="rounded-xl mt-2 mb-2" width={1200} height={320} />

        <Image src="/images/pendidikan.png" alt="pendidikan" className="rounded-xl mt-2 mb-2" width={1200} height={320} />

        <p className="text-sm text-gray-600 mt-2 md:text-lg">
          Desa Maduretno memiliki masyarakat yang rata-rata lulusan SMA
          baru-baru ini dan bisa dibilang memiliki minat untuk bersekolah
          tinggi. Namun ada beberapa masyarakat yang putus sekolah untuk
          langsung bekerja sebagai petani atau peternak. Untuk masyarakat dewasa
          dan lansia kebanyakan hanya sekolah sampai tamat SD.
        </p>
      </div>

      {/* Agama dan Adat Istiadat */}
      <div
        className="
                                            max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-8 mx-auto
                                            "
      >
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Agama dan Adat Istiadat
        </h2>

        <Image src="/images/religi.png" alt="agama" className="rounded-xl mt-2 mb-2" width={1200} height={320} />

        <p className="text-sm text-gray-600 mt-2 md:text-lg">
          Di Desa Maduretno terdapat 1 Masjid, 1 Mushola, Gereja adanya diluar
          Desa. Mayoritas penduduk Dusun Maduretno beragama Islam dengan jumlah
          tempat ibadah satu masjid dan satu mushola. Di Dusun Maduretno sendiri
          memiliki adat atau kesenian yang masih kental dan masih berjalan
          sampai sekarang. dilestarikan, yaitu kesenian “Sedekah Bumi” dan “Kuda
          Lumping” yang dikelola oleh kelompok kesenian Tresno Mardi Sentosa
          dengan jumlah anggota sebanyak 38.
        </p>
      </div>

      {/* Kesehatan */}
      <div
        className="
                                                    max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-8 mx-auto
                                                    "
      >
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Kesehatan
        </h2>
        <p className="text-sm text-gray-600 mt-2 md:text-lg">
          Di Desa Maduretno terdapat 3 jenis Posyandu, yakni Posyandu Lansia,
          Posyandu Remaja, dan Posyandu Balita. Kegiatan Posyandu ini
          dilaksanakan selama satu kali dalam sebulan. Adanya Posyandu ini
          menjadi sarana edukasi kesehatan bagi seluruh masyarakat di Desa
          Maduretno. Adanya Posyandu diharapkan dapat menurunkan persentase anak
          yang terkena stunting dan menjaga gizi anak agar menjadi lebih baik
          sesuai dengan salah satu masalah kesehatan utama yang dihadapi Desa
          Maduretno yaitu stunting.
        </p>
      </div>

      {/* Keadaan Jalan, Jembatan, dan Sarana Angkutan */}
      <div
        className="
                                                                max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-8 mx-auto
                                                                "
      >
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Keadaan Jalan, Jembatan, dan Sarana Angkutan
        </h2>
        <p className="text-sm text-gray-600 mt-2 md:text-lg">
          Akses jalan yang berada di Desa Maduretno untuk masuk ke wilayah dusun
          bisa dikatakan baik, tetapi ada beberapa jalan yang belum layak
          dilewati yang berupa jalan bebatuan dan jalanan yang menanjak curam.
          Untuk jalan di dusun sendiri bisa dilewati dengan akses kendaraan roda
          dua dan kendaraan roda empat.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default page;
