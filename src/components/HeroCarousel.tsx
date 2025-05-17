
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&h=600&q=80',
    title: 'Experience your unique destination',
    subtitle: 'Discover amazing places around Australia'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&h=600&q=80',
    title: 'Explore the wilderness',
    subtitle: 'Adventure awaits in Australia\'s stunning landscapes'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1920&h=600&q=80',
    title: 'Beach getaways',
    subtitle: 'Relax at beautiful coastal destinations'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute w-full h-full">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-32">
              <div className="max-w-3xl">
                <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
                  <span className="text-primary">JetSetGo Australia</span> - {slide.title}
                </h1>
                <p className="text-white text-xl md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-primary' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
      
      {/* Search Form */}
      <div className="absolute bottom-16 left-0 right-0 mx-auto max-w-6xl px-4">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center flex-grow min-w-[250px] space-x-2 p-2 border rounded">
              <div className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Where to?"
                className="outline-none w-full"
              />
            </div>
            
            <div className="flex items-center space-x-2 flex-grow min-w-[250px] p-2 border rounded">
              <div className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Check In - Check Out"
                className="outline-none w-full"
              />
            </div>
            
            <div className="flex items-center space-x-2 min-w-[150px] p-2 border rounded">
              <div className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <select className="outline-none bg-transparent w-full">
                <option>2 Guests</option>
                <option>1 Guest</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            
            <button className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded font-semibold transition-colors min-w-[120px]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
