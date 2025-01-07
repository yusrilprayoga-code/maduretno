import React from "react";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" text-gray-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Image src="https://cdn.digitaldesa.com/uploads/landing/logo-desa/kebumenkab.png" alt="Maduretno Logo" width={50} height={20} />
            <p className="text-sm">
              Desa Maduretno, Kecamatan Buluspesantren, Kabupaten Kebumen, Jawa Tengah
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Link Terkait</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://maduretno.kec-buluspesantren.kebumenkab.go.id/index.php/web/simbok" className="hover:text-blue-600 transition-colors">
                  Pasar Maduretno
                </a>
              </li>
              <li>
                <a href="https://maduretno.kec-buluspesantren.kebumenkab.go.id/" className="hover:text-blue-600 transition-colors">
                  Website Resmi Desa Maduretno
                </a>
              </li>
              <li>
                <a href="https://kebumenkab.go.id/" className="hover:text-blue-600 transition-colors">
                  Website Resmi Pemkab Kebumen
                </a>
              </li>
              <li>
                <a href="https://kebumenkab.go.id/" className="hover:text-blue-600 transition-colors">
                  DISPERMADES P3A Kabupaten Kebumen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Tentang Kami</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://maduretno.kec-buluspesantren.kebumenkab.go.id/index.php/web/kategori/4" className="hover:text-blue-600 transition-colors">
                  Berita
                </a>
              </li>
              <li>
                <a href="https://maduretno.kec-buluspesantren.kebumenkab.go.id/index.php/web/kategori/6" className="hover:text-blue-600 transition-colors">
                  Potensi Desa
                </a>
              </li>
              <li>
                <a href="https://maduretno.kec-buluspesantren.kebumenkab.go.id/index.php/web/artikel/7/29" className="hover:text-blue-600 transition-colors">
                  Kontak Kami
                </a>
              </li>
              <li>
                <a href="https://maduretno.kec-buluspesantren.kebumenkab.go.id/index.php/layanan/statistik" className="hover:text-blue-600 transition-colors">
                  Statistik Desa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Hubungi Kami</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-gray-400" />
                <span>Jl. Desa Maduretno, Kebumen</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <span>(0123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <span>info@maduretno.kebumenkab.go.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()} KKN AA.82.121 & KKN AA.82.122 - Desa Maduretno - Kebumen. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 mr-4">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

