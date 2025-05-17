
import { Link } from 'react-router-dom';

const activityCategories = [
  { 
    id: 1, 
    name: 'Sightseeing', 
    icon: '🏙️',
    url: '/activities/sightseeing'
  },
  { 
    id: 2, 
    name: 'Outdoor', 
    icon: '🏕️',
    url: '/activities/outdoor'
  },
  { 
    id: 3, 
    name: 'Water Sports', 
    icon: '🏄‍♂️',
    url: '/activities/water-sports'
  },
  { 
    id: 4, 
    name: 'Food & Dining', 
    icon: '🍽️',
    url: '/activities/food-dining'
  },
  { 
    id: 5, 
    name: 'Shopping', 
    icon: '🛍️',
    url: '/activities/shopping'
  },
  { 
    id: 6, 
    name: 'Night Life', 
    icon: '🌃',
    url: '/activities/night-life'
  },
  { 
    id: 7, 
    name: 'Adventure', 
    icon: '🧗‍♀️',
    url: '/activities/adventure'
  },
  { 
    id: 8, 
    name: 'Culture', 
    icon: '🏛️',
    url: '/activities/culture'
  },
  { 
    id: 9, 
    name: 'Nature', 
    icon: '🌿',
    url: '/activities/nature'
  }
];

const featuredActivities = [
  {
    id: 1,
    title: 'Adventure Activities',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=600&q=80',
    description: 'Rafting, Hiking, Climbing and more',
    url: '/activities/adventure',
    stats: {
      places: 'Over 2,500+ places',
      tours: 'From 1 to 14 days',
      region: 'Australia, South East Asia'
    }
  },
  {
    id: 2,
    title: 'Cultural Exploration',
    image: 'https://images.unsplash.com/photo-1590075865003-e6aaae1b8fdf?auto=format&fit=crop&w=600&q=80',
    description: 'Temples, Museums, Historical Sites',
    url: '/activities/cultural',
    stats: {
      places: 'Over 3,700+ places',
      tours: 'From 1 to 5 days',
      region: 'Europe, Asia, Australia'
    }
  },
  {
    id: 3,
    title: 'Wildlife Experiences',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=600&q=80',
    description: 'Safari, Animal Watching, Nature Tours',
    url: '/activities/wildlife',
    stats: {
      places: 'Over 1,200+ places',
      tours: 'From 1 to 10 days',
      region: 'Africa, Australia, South America'
    }
  },
  {
    id: 4,
    title: 'Meditation Travel',
    image: 'https://images.unsplash.com/photo-1528938102132-4a9276b8e320?auto=format&fit=crop&w=600&q=80',
    description: 'Wellness Retreats, Yoga, Spiritual Tours',
    url: '/activities/meditation',
    stats: {
      places: 'Over 950+ places',
      tours: 'From 3 to 21 days',
      region: 'Asia, Australia, Europe'
    }
  },
  {
    id: 5,
    title: 'Wellness Tours',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    description: 'Spa Resorts, Healing Retreats, Thermal Springs',
    url: '/activities/wellness',
    stats: {
      places: 'Over 1,100+ places',
      tours: 'From 2 to 14 days',
      region: 'Europe, Asia, Australia'
    }
  }
];

const ActivitiesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8">Travel By Activities</h2>
        <p className="text-gray-600 mb-8">Search by activity type to find exactly what you're looking for</p>
        
        {/* Activity Categories */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 mb-12">
          {activityCategories.map((category) => (
            <Link
              key={category.id}
              to={category.url}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-white hover:bg-primary hover:text-white transition-colors text-center"
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
        
        {/* Featured Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredActivities.slice(0, 3).map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Link to={activity.url} className="block">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                
                <ul className="text-sm text-gray-600 space-y-1.5 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {activity.stats.places}
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {activity.stats.tours}
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {activity.stats.region}
                  </li>
                </ul>
                
                <Link
                  to={activity.url}
                  className="block text-center bg-primary text-white py-2 rounded font-medium hover:bg-primary-dark transition-colors"
                >
                  Explore More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
