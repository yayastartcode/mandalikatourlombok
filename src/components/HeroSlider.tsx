import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://kemenpar.go.id/_next/image?url=https%3A%2F%2Fapi.kemenpar.go.id%2Fstorage%2Fapp%2Fuploads%2Fpublic%2F685%2Fa28%2F726%2F685a287262176605968863.jpeg&w=3840&q=75",
    title: "Perjalanan Aman & Nyaman",
    subtitle: "Jelajahi indahnya Lombok bersama kami",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1546446587-f0af2037eaa1?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Perjalanan Aman & Nyaman",
    subtitle: "Jelajahi indahnya Lombok bersama kami",
  },
  {
    id: 3,
    image:
      "https://lombok-airport.co.id/frontend/uploads/defaults/rUyHcE20241204080441.jpg",
    title: "Perjalanan Aman & Nyaman",
    subtitle: "Jelajahi indahnya Lombok bersama kami",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-2xl"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
