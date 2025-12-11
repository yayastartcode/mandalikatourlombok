import { motion } from "motion/react";
import { getWhatsAppLink } from "@/config/contact";

const cars = [
  {
    id: 1,
    name: "Toyota Hiace",
    price: "Rp 1,2 jt",
    image: "/images/mdhiace.jpg",
    description: "include driver + BBM",
  },
  {
    id: 2,
    name: "Isuzu ELF",
    price: "Rp 1,2 jt",
    image: "/images/mdelf.jpg",
    description: "include driver + BBM",
  },
  {
    id: 3,
    name: "Toyota Innova Reborn",
    price: "Rp 800 rb",
    image: "/images/mdreborn.jpg",
    description: "include driver + BBM",
  },
  {
    id: 4,
    name: "All New Avanza",
    price: "Rp 650 rb",
    image: "/images/mdnewavanza.jpg",
    description: "include driver + BBM",
  },
  {
    id: 5,
    name: "All New Xenia",
    price: "Rp 650 rb",
    image: "/images/mdnewxenia.jpg",
    description: "include driver + BBM",
  },
  {
    id: 6,
    name: "All New Toyota Rush",
    price: "Rp 650 rb",
    image: "/images/mdnewrush.jpg",
    description: "include driver + BBM",
  },
  {
    id: 7,
    name: "All New Xpander",
    price: "Rp 650 rb",
    image: "/images/mdnewxpander.jpg",
    description: "include driver + BBM",
  },
  {
    id: 8,
    name: "Toyota Calya",
    price: "Rp 550 rb",
    image: "/images/mdcalya.jpg",
    description: "include driver & BBM",
  },
  {
    id: 9,
    name: "Daihatsu Sigra",
    price: "Rp 550 rb",
    image: "/images/mdsigra.jpg",
    description: "include driver & BBM",
  },
  {
    id: 10,
    name: "Toyota Avanza",
    price: "Rp 550 rb",
    image: "/images/mdavanza.jpg",
    description: "include driver & BBM",
  },
  {
    id: 11,
    name: "Daihatsu Xenia",
    price: "Rp 550 rb",
    image: "/images/mdxenia.jpg",
    description: "include driver & BBM",
  },
  {
    id: 12,
    name: "Medium Bus 33 Seat",
    price: "Rp 1,5 jt",
    image: "/images/mdbus.jpg",
    description: "include driver & BBM",
  },
  {
    id: 13,
    name: "Big Bus 50 Seat",
    price: "Rp 2,2 jt",
    image: "/images/mdbgbus.jpg",
    description: "include driver & BBM",
  },
  {
    id: 14,
    name: "Honda Brio",
    price: "Rp 250 rb",
    image: "/images/mdbrio.jpg",
    description: "include driver + BBM",
  },
  {
    id: 15,
    name: "Toyota Agya",
    price: "Rp 250 rb",
    image: "/images/mdagya.jpg",
    description: "include driver + BBM",
  },
  {
    id: 16,
    name: "Daihatsu Ayla",
    price: "Rp 250 rb",
    image: "/images/mdayla.jpg",
    description: "include driver + BBM",
  },
];

export default function CarRental() {
  return (
    <section id="cars" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sewa Mobil Lombok
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-linear-to-br from-red-500 to-red-700 rounded-3xl transform rotate-3 opacity-90"></div>
                <div className="relative bg-white rounded-3xl p-4 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {car.name}
                </h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Harga Mulai:</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {car.price}
                  </p>
                </div>
                <p className="text-gray-600 text-sm">{car.description}</p>
                <a
                  href={getWhatsAppLink(
                    `Halo, saya ingin booking ${car.name} dengan harga ${car.price}. Mohon informasi lebih lanjut.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold inline-block text-center"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
