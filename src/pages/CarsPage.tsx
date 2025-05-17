
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const cars = [
  {
    id: 1,
    name: 'Audi A3 1.8 TDI S-line',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
    category: 'Premium Sedan',
    pricePerDay: 249.25,
    features: ['Automatic', '5 Seats', 'Air Conditioning', 'GPS'],
    url: '/cars/audi-a3'
  },
  {
    id: 2,
    name: 'Audi A3 1.4 TDI S-line',
    image: 'https://images.unsplash.com/photo-1484136199849-6144d6a654c8?auto=format&fit=crop&w=800&q=80',
    category: 'Standard Sedan',
    pricePerDay: 198.95,
    features: ['Manual', '5 Seats', 'Air Conditioning', 'GPS'],
    url: '/cars/audi-a3-standard'
  },
  {
    id: 3,
    name: 'Audi A3 R 1.8 TDI S-line',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=800&q=80',
    category: 'Premium Sedan',
    pricePerDay: 288.95,
    features: ['Automatic', '5 Seats', 'Air Conditioning', 'GPS', 'Leather Seats'],
    url: '/cars/audi-r'
  },
  {
    id: 4,
    name: 'Toyota RAV4',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    category: 'SUV',
    pricePerDay: 179.95,
    features: ['Automatic', '5 Seats', 'Air Conditioning', 'GPS'],
    url: '/cars/toyota-rav4'
  },
  {
    id: 5,
    name: 'BMW 3 Series',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80',
    category: 'Luxury Sedan',
    pricePerDay: 299.95,
    features: ['Automatic', '5 Seats', 'Air Conditioning', 'GPS', 'Leather Seats'],
    url: '/cars/bmw-3-series'
  },
  {
    id: 6,
    name: 'Volkswagen Golf',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    category: 'Compact',
    pricePerDay: 149.95,
    features: ['Manual', '5 Seats', 'Air Conditioning'],
    url: '/cars/vw-golf'
  }
];

const CarsPage = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterPrice, setFilterPrice] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const filteredCars = cars.filter((car) => {
    // Filter by category
    if (filterCategory !== 'all' && car.category !== filterCategory) return false;
    
    // Filter by price
    if (filterPrice === 'low' && car.pricePerDay > 180) return false;
    if (filterPrice === 'mid' && (car.pricePerDay < 180 || car.pricePerDay > 250)) return false;
    if (filterPrice === 'high' && car.pricePerDay < 250) return false;
    
    // Filter by search query
    if (
      searchQuery &&
      !car.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !car.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-secondary py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-white mb-2">Car Rentals</h1>
            <p className="text-gray-300">Find the perfect vehicle for your journey</p>
          </div>
        </div>
        
        {/* Search Form */}
        <div className="bg-white py-6 shadow-md">
          <div className="container-custom">
            <div className="bg-white rounded-lg p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 border rounded p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <input
                  type="text"
                  placeholder="Pick-up location"
                  className="outline-none w-full"
                />
              </div>
              
              <div className="flex items-center space-x-2 border rounded p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <input
                  type="date"
                  placeholder="Pick-up date"
                  className="outline-none w-full"
                />
              </div>
              
              <div className="flex items-center space-x-2 border rounded p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <input
                  type="date"
                  placeholder="Return date"
                  className="outline-none w-full"
                />
              </div>
              
              <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded transition-colors">
                Search Cars
              </button>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Search</h3>
                  <input
                    type="text"
                    placeholder="Car model or category"
                    className="w-full border rounded-md p-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Category</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="category-all"
                        name="category"
                        value="all"
                        checked={filterCategory === 'all'}
                        onChange={() => setFilterCategory('all')}
                        className="mr-2"
                      />
                      <label htmlFor="category-all">All Categories</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="category-compact"
                        name="category"
                        value="Compact"
                        checked={filterCategory === 'Compact'}
                        onChange={() => setFilterCategory('Compact')}
                        className="mr-2"
                      />
                      <label htmlFor="category-compact">Compact</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="category-standard"
                        name="category"
                        value="Standard Sedan"
                        checked={filterCategory === 'Standard Sedan'}
                        onChange={() => setFilterCategory('Standard Sedan')}
                        className="mr-2"
                      />
                      <label htmlFor="category-standard">Standard Sedan</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="category-premium"
                        name="category"
                        value="Premium Sedan"
                        checked={filterCategory === 'Premium Sedan'}
                        onChange={() => setFilterCategory('Premium Sedan')}
                        className="mr-2"
                      />
                      <label htmlFor="category-premium">Premium Sedan</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="category-luxury"
                        name="category"
                        value="Luxury Sedan"
                        checked={filterCategory === 'Luxury Sedan'}
                        onChange={() => setFilterCategory('Luxury Sedan')}
                        className="mr-2"
                      />
                      <label htmlFor="category-luxury">Luxury Sedan</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="category-suv"
                        name="category"
                        value="SUV"
                        checked={filterCategory === 'SUV'}
                        onChange={() => setFilterCategory('SUV')}
                        className="mr-2"
                      />
                      <label htmlFor="category-suv">SUV</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="price-all"
                        name="price"
                        value="all"
                        checked={filterPrice === 'all'}
                        onChange={() => setFilterPrice('all')}
                        className="mr-2"
                      />
                      <label htmlFor="price-all">All Prices</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="price-low"
                        name="price"
                        value="low"
                        checked={filterPrice === 'low'}
                        onChange={() => setFilterPrice('low')}
                        className="mr-2"
                      />
                      <label htmlFor="price-low">Budget ({`<`} $180/day)</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="price-mid"
                        name="price"
                        value="mid"
                        checked={filterPrice === 'mid'}
                        onChange={() => setFilterPrice('mid')}
                        className="mr-2"
                      />
                      <label htmlFor="price-mid">Mid-range ($180 - $250/day)</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="price-high"
                        name="price"
                        value="high"
                        checked={filterPrice === 'high'}
                        onChange={() => setFilterPrice('high')}
                        className="mr-2"
                      />
                      <label htmlFor="price-high">Premium ({`>`} $250/day)</label>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    setFilterCategory('all');
                    setFilterPrice('all');
                    setSearchQuery('');
                  }}
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Reset Filters
                </button>
              </div>
            </div>
            
            {/* Cars List */}
            <div className="w-full md:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{filteredCars.length} Cars Found</h2>
                <select className="border rounded-md p-2">
                  <option>Sort: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A to Z</option>
                </select>
              </div>
              
              <div className="space-y-6">
                {filteredCars.map((car) => (
                  <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                            <p className="text-gray-600 mb-2">{car.category}</p>
                          </div>
                          <div>
                            <span className="text-primary font-bold text-xl">${car.pricePerDay.toFixed(2)}</span>
                            <span className="text-gray-500 text-sm"> /day</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 my-4">
                          {car.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-gray-700">
                              <svg className="h-4 w-4 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center mt-6">
                          <button className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded transition-colors">
                            View Details
                          </button>
                          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredCars.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No cars found</h3>
                    <p className="text-gray-600">Try adjusting your filters or search criteria</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CarsPage;
