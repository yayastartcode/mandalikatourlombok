import { motion } from "motion/react"
import { Edit3 } from "lucide-react"
import { getWhatsAppLink } from "@/config/contact"

export default function CustomTripCTA() {
  const whatsappLink = getWhatsAppLink()

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Tidak Menemukan Rute atau Paket Wisata Anda?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Tenang, kami siap membantu Anda merancang perjalanan impian. Beri tahu kami destinasi atau 
            paket wisata yang Anda inginkan melalui form di bawah ini.
          </p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Edit3 size={24} />
            RENCANAKAN PERJALANAN KUSTOM
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
