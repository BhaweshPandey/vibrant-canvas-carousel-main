
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: 'Melbourne',
    image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=500&q=80',
    url: '/destinations/melbourne'
  },
  {
    id: 2,
    name: 'Kerry, Ireland',
    image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=500&q=80',
    url: '/destinations/kerry'
  },
  {
    id: 3,
    name: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=500&q=80',
    url: '/destinations/sydney'
  },
  {
    id: 4,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80',
    url: '/destinations/paris'
  }
];

const Destinations = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8">Stays in Top Vacation Destinations</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              to={destination.url}
              className="card-destination card-shadow block"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="card-destination-content">
                <h3 className="text-lg font-semibold">{destination.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
