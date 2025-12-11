import { motion } from "motion/react"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/config/contact"

export default function WhatsAppFloating() {
  const whatsappLink = getWhatsAppLink("Halo, saya ingin bertanya tentang layanan Mandalika Tour")

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
    </motion.a>
  )
}
