import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Rute mana saja yang dilayani Mandalika Tour Lombok?",
    answer:
      "Kami melayani berbagai rute di Lombok termasuk antar jemput bandara, perjalanan ke Gili Trawangan, Gili Meno, Gili Air, Sembalun, Senggigi, Kuta Mandalika, dan destinasi wisata lainnya di seluruh Lombok.",
  },
  {
    id: 2,
    question: "Apakah bisa antar jemput sampai alamat?",
    answer:
      "Ya, kami menyediakan layanan antar jemput door-to-door. Anda dapat dijemput dari hotel, bandara, pelabuhan, atau alamat manapun di area Lombok dan diantar ke tujuan yang Anda inginkan.",
  },
  {
    id: 3,
    question: "Fasilitas apa saja yang didapat selama perjalanan?",
    answer:
      "Setiap perjalanan sudah termasuk driver berpengalaman, BBM, AC, audio system, dan asuransi perjalanan. Untuk paket tertentu, kami juga menyediakan air mineral dan tour guide profesional.",
  },
  {
    id: 4,
    question: "Bagaimana cara memesan tiket?",
    answer:
      "Anda dapat memesan melalui WhatsApp, telepon, atau website kami. Cukup pilih kendaraan yang diinginkan, tentukan tanggal dan rute perjalanan, lalu lakukan konfirmasi pembayaran. Tim kami akan segera memproses pesanan Anda.",
  },
  {
    id: 5,
    question: "Apakah bisa menyewa mobil untuk rombongan wisata?",
    answer:
      "Tentu saja! Kami memiliki armada lengkap mulai dari city car hingga big bus 50 seat. Sangat cocok untuk rombongan keluarga, perusahaan, atau grup wisata. Hubungi kami untuk mendapatkan penawaran khusus untuk rombongan.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tanya Jawab
          </h2>
          <p className="text-gray-600 text-lg">
            Temukan jawaban dari pertanyaan yang sering diajukan.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={24} className="text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
