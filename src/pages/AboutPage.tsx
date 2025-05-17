
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-secondary py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About JetSetGo Australia</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Your trusted partner for unforgettable travel experiences since 2010</p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  JetSetGo Australia was founded in 2010 with a simple mission: to make travel accessible, enjoyable, and memorable for everyone. What started as a small team of passionate travelers has grown into Australia's leading travel platform.
                </p>
                <p className="text-gray-700 mb-4">
                  We believe that travel is more than just moving from one place to another—it's about creating experiences that last a lifetime. Our dedicated team works tirelessly to curate the best travel options, from luxury resorts to hidden gems, ensuring that every journey with JetSetGo is truly special.
                </p>
                <p className="text-gray-700">
                  Over the years, we've helped millions of travelers explore Australia and the world. We take pride in being the bridge that connects our customers to their dream destinations, and we continue to innovate and improve our services to make travel planning as seamless as possible.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="JetSetGo Team"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from the travel options we offer to the customer service we provide. Quality is never compromised at JetSetGo.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Passion</h3>
                <p className="text-gray-600">
                  Our team is made up of passionate travelers who understand the transformative power of exploration. This passion drives us to create meaningful travel experiences.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Customer-First</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We listen, we adapt, and we continuously improve to ensure their travel dreams become reality.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 relative rounded-full overflow-hidden h-48 w-48 mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Michael Thompson</h3>
                <p className="text-gray-600 mb-2">CEO & Founder</p>
                <p className="text-gray-700 text-sm">Travel enthusiast with over 20 years in the tourism industry.</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 relative rounded-full overflow-hidden h-48 w-48 mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                    alt="COO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-gray-600 mb-2">Chief Operations Officer</p>
                <p className="text-gray-700 text-sm">Brings expertise in operational excellence and customer experience.</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 relative rounded-full overflow-hidden h-48 w-48 mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
                    alt="CTO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">David Chen</h3>
                <p className="text-gray-600 mb-2">Chief Technology Officer</p>
                <p className="text-gray-700 text-sm">Tech visionary driving our innovative digital solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 relative rounded-full overflow-hidden h-48 w-48 mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80"
                    alt="CMO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                <p className="text-gray-600 mb-2">Chief Marketing Officer</p>
                <p className="text-gray-700 text-sm">Creative strategist with a passion for storytelling.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Statistics */}
        <section className="py-16 bg-secondary text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">5M+</p>
                <p className="text-xl">Happy Travelers</p>
              </div>
              
              <div>
                <p className="text-4xl font-bold mb-2">120+</p>
                <p className="text-xl">Countries Covered</p>
              </div>
              
              <div>
                <p className="text-4xl font-bold mb-2">15K+</p>
                <p className="text-xl">Hotel Partners</p>
              </div>
              
              <div>
                <p className="text-4xl font-bold mb-2">98%</p>
                <p className="text-xl">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
