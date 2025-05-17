
import { Link } from 'react-router-dom';

const offers = [
  {
    id: 1,
    title: 'Huge savings on flight deals',
    description: 'Book flights to destinations worldwide. Save up to 20%',
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=600&q=80',
    url: '/offers/flights'
  },
  {
    id: 2,
    title: 'Enjoy upto 20% off on international hotels',
    description: 'Make the most of your international holiday with our deals',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    url: '/offers/hotels'
  }
];

const Offers = () => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8">Offers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-6">{offer.description}</p>
                  
                  <Link
                    to={offer.url}
                    className="btn-primary inline-block"
                  >
                    Book Now
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

export default Offers;
