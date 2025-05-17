
import { Link } from 'react-router-dom';

interface HotelCardProps {
  id: number;
  name: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  url: string;
  featuredText?: string;
}

const HotelCard = ({ id, name, image, location, price, rating, url, featuredText }: HotelCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      {featuredText && (
        <div className="absolute top-4 left-0 bg-primary text-white py-1 px-3 font-semibold z-10">
          {featuredText}
        </div>
      )}
      
      <Link to={url} className="relative block">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-4 right-4 bg-white/80 p-1.5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-1">{name}</h3>
          <div className="flex">
            {Array(5).fill(0).map((_, i) => (
              <svg 
                key={i} 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>
        
        <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
          <div>
            <span className="text-primary font-bold text-lg">${price}</span>
            <span className="text-gray-500 text-sm"> /night</span>
          </div>
          
          <Link
            to={url}
            className="text-primary font-medium hover:text-primary-dark transition-colors"
          >
            View Deal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
