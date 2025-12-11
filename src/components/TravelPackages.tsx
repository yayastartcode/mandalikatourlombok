import { motion } from "motion/react";
import { getWhatsAppLink } from "@/config/contact";

const packages = [
  {
    id: 1,
    name: "Sembalun",
    image:
      "https://indonesia.go.id/assets/upload/headline/1558681567_Sembalun_thumb.jpg",
    description:
      "Nikmati keindahan alam pegunungan Sembalun dengan pemandangan hijau yang mempesona dan udara sejuk.",
  },
  {
    id: 2,
    name: "Gili",
    image:
      "https://cdn.prod.website-files.com/66fab24d6dde4d79b3b50865/67864dddb99349504ff2ee3f_Gili%20Islands.webp",
    description:
      "Jelajahi keindahan pulau-pulau Gili dengan pantai pasir putih, air laut jernih, dan kehidupan bawah laut yang menakjubkan.",
  },
  {
    id: 3,
    name: "Mandalika Circuit",
    image:
      "https://www.indonesia.travel/contentassets/94a866f3e6244488b9c3641598ac0f8b/5-interesting-facts-about-pertamina-mandalika-international-street-circuit.jpg",
    description:
      "Rasakan sensasi berkendara di sirkuit internasional Mandalika dan nikmati keindahan pantai Mandalika yang memukau.",
  },
];

export default function TravelPackages() {
  return (
    <section id="tours" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paket Travel Populer
          </h2>
          <p className="text-gray-600 text-lg">
            Jelajahi destinasi travel impian Anda bersama kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <a
                  href={getWhatsAppLink(
                    `Halo, saya tertarik dengan Paket Travel ${pkg.name}. Mohon informasi detail dan harganya.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold inline-block text-center"
                >
                  Pesan Paket Ini
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
