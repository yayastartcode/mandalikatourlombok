import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import WhyChooseUs from './components/WhyChooseUs'
import CarRental from './components/CarRental'
import TravelPackages from './components/TravelPackages'
import FAQ from './components/FAQ'
import CustomTripCTA from './components/CustomTripCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloating from './components/WhatsAppFloating'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <WhyChooseUs />
      <CarRental />
      <TravelPackages />
      <FAQ />
      <CustomTripCTA />
      <Contact />
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}

export default App
