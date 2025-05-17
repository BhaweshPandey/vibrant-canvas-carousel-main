
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import Destinations from '../components/Destinations';
import Offers from '../components/Offers';
import HotelSection from '../components/HotelSection';
import CarBookingSection from '../components/CarBookingSection';
import ActivitiesSection from '../components/ActivitiesSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroCarousel />
      <main>
        <Destinations />
        <Offers />
        <HotelSection />
        <CarBookingSection />
        <ActivitiesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
