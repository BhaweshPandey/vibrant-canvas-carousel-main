
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HotelCard from '../components/HotelCard';

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
  },
  {
    id: 4,
    name: 'Oceanview Deluxe Suite',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=500&q=80',
    location: 'Miami, FL',
    price: 389.00,
    rating: 4,
    url: '/hotels/oceanview-suite'
  },
  {
    id: 5,
    name: 'Mountain Lodge Retreat',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=500&q=80',
    location: 'Aspen, CO',
    price: 275.50,
    rating: 4,
    url: '/hotels/mountain-lodge'
  },
  {
    id: 6,
    name: 'Urban Boutique Hotel',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=500&q=80',
    location: 'San Francisco, CA',
    price: 299.99,
    rating: 4,
    url: '/hotels/urban-boutique'
  },
  {
    id: 7,
    name: 'Lakefront Cottage',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=500&q=80',
    location: 'Lake Tahoe, CA',
    price: 249.00,
    rating: 5,
    url: '/hotels/lakefront-cottage'
  },
  {
    id: 8,
    name: 'Desert Oasis Resort',
    image: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&w=500&q=80',
    location: 'Palm Springs, CA',
    price: 329.75,
    rating: 4,
    url: '/hotels/desert-oasis'
  },
  {
    id: 9,
    name: 'Historic Downtown Inn',
    image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=500&q=80',
    location: 'Charleston, SC',
    price: 189.50,
    rating: 3,
    url: '/hotels/historic-inn'
  }
];

const HotelsPage = () => {
  const [filterPrice, setFilterPrice] = useState<string>('all');
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const filteredHotels = hotels.filter((hotel) => {
    // Filter by price
    if (filterPrice === 'low' && hotel.price > 250) return false;
    if (filterPrice === 'mid' && (hotel.price < 250 || hotel.price > 350)) return false;
    if (filterPrice === 'high' && hotel.price < 350) return false;
    
    // Filter by rating
    if (filterRating && hotel.rating < filterRating) return false;
    
    // Filter by search query
    if (
      searchQuery &&
      !hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
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
            <h1 className="text-4xl font-bold text-white mb-2">Find Your Perfect Hotel</h1>
            <p className="text-gray-300">From luxury resorts to budget-friendly options</p>
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
                    placeholder="Hotel name or location"
                    className="w-full border rounded-md p-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
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
                      <label htmlFor="price-low">Budget ({`<`} $250)</label>
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
                      <label htmlFor="price-mid">Mid-range ($250 - $350)</label>
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
                      <label htmlFor="price-high">Luxury ({`>`} $350)</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Rating</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="rating-all"
                        name="rating"
                        checked={filterRating === null}
                        onChange={() => setFilterRating(null)}
                        className="mr-2"
                      />
                      <label htmlFor="rating-all">All Ratings</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="rating-3"
                        name="rating"
                        checked={filterRating === 3}
                        onChange={() => setFilterRating(3)}
                        className="mr-2"
                      />
                      <label htmlFor="rating-3">3+ Stars</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="rating-4"
                        name="rating"
                        checked={filterRating === 4}
                        onChange={() => setFilterRating(4)}
                        className="mr-2"
                      />
                      <label htmlFor="rating-4">4+ Stars</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="rating-5"
                        name="rating"
                        checked={filterRating === 5}
                        onChange={() => setFilterRating(5)}
                        className="mr-2"
                      />
                      <label htmlFor="rating-5">5 Stars</label>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    setFilterPrice('all');
                    setFilterRating(null);
                    setSearchQuery('');
                  }}
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Reset Filters
                </button>
              </div>
            </div>
            
            {/* Hotels List */}
            <div className="w-full md:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{filteredHotels.length} Hotels Found</h2>
                <select className="border rounded-md p-2">
                  <option>Sort: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: Highest First</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHotels.map((hotel) => (
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
              
              {filteredHotels.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No hotels found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HotelsPage;
