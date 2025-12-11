import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import { contactConfig } from "@/config/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Kami siap membantu Anda merencanakan perjalanan terbaik
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full mb-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src={contactConfig.maps.embedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mandalika Tour Location"
          ></iframe>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Alamat</h3>
            <p className="text-gray-600 leading-relaxed">
              {contactConfig.address.street}
              <br />
              {contactConfig.address.city}, {contactConfig.address.province}
              <br />
              {contactConfig.address.postalCode}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Telepon</h3>
            <p className="text-gray-600 leading-relaxed">
              <a
                href={`tel:${contactConfig.phone.primaryRaw}`}
                className="hover:text-blue-600 transition-colors"
              >
                {contactConfig.phone.primary}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
