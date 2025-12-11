import { Facebook, Instagram, Twitter, Phone, MapPin } from "lucide-react";
import { contactConfig } from "@/config/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {contactConfig.company.name}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {contactConfig.company.description}
            </p>
            <div className="flex gap-4">
              <a
                href={contactConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={contactConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={contactConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Paket Wisata
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Layanan Kami</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Rental Mobil Harian</li>
              <li className="text-gray-400">Paket Wisata Lombok</li>
              <li className="text-gray-400">Antar Jemput Bandara</li>
              <li className="text-gray-400">Sewa Mobil + Driver</li>
              <li className="text-gray-400">Perjalanan Kustom</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>
                  {contactConfig.address.street}
                  <br />
                  {contactConfig.address.city}, {contactConfig.address.province}{" "}
                  {contactConfig.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="shrink-0" />
                <a
                  href={`tel:${contactConfig.phone.primaryRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {contactConfig.phone.primary}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} {contactConfig.company.name}. All rights
            reserved. | Designed with ❤️ in Lombok
          </p>
        </div>
      </div>
    </footer>
  );
}
