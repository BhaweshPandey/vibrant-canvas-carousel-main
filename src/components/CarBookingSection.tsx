
import { Link } from 'react-router-dom';

const cars = [
  {
    id: 1,
    name: 'Audi A3 1.8 TDI S-line',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
    category: 'Premium Sedan',
    pricePerDay: 249.25,
    url: '/cars/audi-a3'
  },
  {
    id: 2,
    name: 'Audi A3 1.4 TDI S-line',
    image: 'https://images.unsplash.com/photo-1484136199849-6144d6a654c8?auto=format&fit=crop&w=800&q=80',
    category: 'Standard Sedan',
    pricePerDay: 198.95,
    url: '/cars/audi-a3-standard'
  },
  {
    id: 3,
    name: 'Audi A3 R 1.8 TDI S-line',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=800&q=80',
    category: 'Premium Sedan',
    pricePerDay: 288.95,
    url: '/cars/audi-r'
  }
];

const CarBookingSection = () => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Top Rated Car Booking</h2>
          <Link to="/cars" className="text-primary font-semibold hover:underline">
            View All
          </Link>
        </div>
        <p className="text-gray-600 mb-8">Explore the top-rated car rentals for your next adventure</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-4 right-4 bg-white/80 p-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{car.name}</h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{car.category}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Insurance</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                  <div>
                    <span className="text-primary font-bold text-lg">${car.pricePerDay.toFixed(2)}</span>
                    <span className="text-gray-500 text-sm"> /day</span>
                  </div>
                  
                  <Link
                    to={car.url}
                    className="bg-primary text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-primary-dark transition-colors"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarBookingSection;
