
import { Link } from 'react-router-dom';
import HotelCard from './HotelCard';

const hotels = [
  {
    id: 1,
    name: 'California Sunset Delight Beach House',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80',
    location: 'Santa Monica, CA',
    price: 345.29,
    rating: 5,
    url: '/hotels/california-sunset',
    featuredText: 'Best Deal'
  },
  {
    id: 2,
    name: 'NYC Food Tastings and Culture Tour',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=500&q=80',
    location: 'New York, NY',
    price: 217.52,
    rating: 4,
    url: '/hotels/nyc-food-tour'
  },
  {
    id: 3,
    name: 'Grand Canyon Horseshoe Resort & Spa',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=500&q=80',
    location: 'Scottsdale, Arizona',
    price: 519.61,
    rating: 5,
    url: '/hotels/grand-canyon-resort'
  }
];

const HotelSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Top Rated Hotels</h2>
          <Link to="/hotels" className="text-primary font-semibold hover:underline">
            View All
          </Link>
        </div>
        <p className="text-gray-600 mb-8">Find deals on hotels, homes, and vacation rentals</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              image={hotel.image}
              location={hotel.location}
              price={hotel.price}
              rating={hotel.rating}
              url={hotel.url}
              featuredText={hotel.featuredText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
