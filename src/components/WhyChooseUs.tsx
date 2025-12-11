import { Shield, Users, DollarSign, Car } from "lucide-react"
import { motion } from "motion/react"

const features = [
  {
    icon: Shield,
    title: "Travel Resmi",
    description: "Sebagai perusahaan rental mobil resmi, kami selalu menjamin keamanan, kenyamanan, dan kepercayaan setiap pelanggan."
  },
  {
    icon: Users,
    title: "Pelayanan Profesional",
    description: "Tim kami terlatih memberikan layanan profesional, ramah, cepat, dan selalu siap membantu setiap kebutuhan perjalanan."
  },
  {
    icon: DollarSign,
    title: "Harga Kompetitif",
    description: "Kami memiliki armada lengkap mulai City Car, MPV, SUV, Mini BUS, BUS, hingga kendaraan mewah untuk semua kebutuhan."
  },
  {
    icon: Car,
    title: "Armada Lengkap",
    description: "Kami menyediakan armada yang lengkap dan bervariasi, mulai dari City Car, MPV, SUV, Mini BUS, BUS hingga kendaraan mewah."
  }
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami berkomitmen memberikan pengalaman terbaik untuk perjalanan Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full border-2 border-gray-900 flex items-center justify-center">
                    <Icon size={36} className="text-gray-900" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
