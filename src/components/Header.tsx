import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { contactConfig, getWhatsAppLink } from "@/config/contact"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const whatsappLink = getWhatsAppLink("Halo, saya ingin booking Mandalika Tour")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-900 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            {contactConfig.company.name}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-gray-200 transition-colors scroll-smooth">
              Home
            </a>
            <a href="#cars" className="text-white hover:text-gray-200 transition-colors scroll-smooth">
              Rental Mobil
            </a>
            <a href="#tours" className="text-white hover:text-gray-200 transition-colors scroll-smooth">
              Paket Wisata
            </a>
            <a href="#about" className="text-white hover:text-gray-200 transition-colors scroll-smooth">
              Tentang
            </a>
            <a href="#contact" className="text-white hover:text-gray-200 transition-colors scroll-smooth">
              Kontak
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Book Now
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/80 backdrop-blur-md rounded-lg p-4">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-200 transition-colors">
                Home
              </a>
              <a href="#cars" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-200 transition-colors">
                Rental Mobil
              </a>
              <a href="#tours" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-200 transition-colors">
                Paket Wisata
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-200 transition-colors">
                Tentang
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-200 transition-colors">
                Kontak
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
