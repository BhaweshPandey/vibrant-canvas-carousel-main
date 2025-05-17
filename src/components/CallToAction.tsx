
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-black/20 rounded-lg p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-3">Booking up to 50% discount</h3>
            <p className="mb-6 text-gray-200">Find exclusive deals for your next journey</p>
            <Link 
              to="/deals" 
              className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-md transition-colors inline-block"
            >
              Book Now
            </Link>
          </div>
          
          <div className="bg-black/20 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Adventure starts today</h3>
            <p className="mb-6 text-gray-200">Get inspired for your next trip with our curated adventures</p>
            <Link 
              to="/adventures" 
              className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-md transition-colors inline-block"
            >
              Explore
            </Link>
          </div>
          
          <div className="bg-accent/80 rounded-lg p-6 lg:col-span-1 md:col-span-2">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">Explore, Book, Save: Your Journey Starts Here</h3>
              <p className="mb-6 text-gray-100">Discover amazing destinations with exclusive travel deals</p>
              <Link 
                to="/deals" 
                className="bg-yellow-400 hover:bg-yellow-500 text-secondary py-2 px-6 rounded-md font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg overflow-hidden">
            <div className="bg-black/50 p-8 flex flex-col h-full justify-end">
              <h3 className="text-2xl font-bold mb-2">Explore the World</h3>
              <p className="mb-6 text-gray-200">From bustling cities to remote islands, start your adventure</p>
              <Link
                to="/destinations"
                className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-md transition-colors inline-block w-max"
              >
                View More
              </Link>
            </div>
          </div>
          
          <div className="bg-[url('https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg overflow-hidden">
            <div className="bg-black/50 p-8 flex flex-col h-full justify-end">
              <h3 className="text-2xl font-bold mb-2">Book and Get the Best Deals now</h3>
              <p className="mb-6 text-gray-200">Special offers on hotels, flights and packages</p>
              <Link
                to="/deals"
                className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-md transition-colors inline-block w-max"
              >
                View Deals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
