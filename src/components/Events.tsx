import gitgeniusImg from '../assets/img/events/gitgenius.png';
import cyberconImg from '../assets/img/events/cybercon.png';
import hacktronImg from '../assets/img/events/hacktron.png';
import techzerImg from '../assets/img/events/techzer.png';
import devboostImg from '../assets/img/events/devboost.png';
import cyberhatImg from '../assets/img/events/cyberhat.png';

const events = [
  {
    id: 1,
    title: 'GitGenius',
    category: 'Git Workshop',
    description:
      'GitGenius was a dynamic GitHub session for beginners to intermediate users, covering version control fundamentals to advanced collaborative workflows. Learn to navigate GitHub confidently and contribute to projects.',
    image: gitgeniusImg,
    link: '#',
  },
  {
    id: 2,
    title: 'CyberCon',
    category: 'Workshop',
    description:
      'Cybercon was a cybersecurity focused workshop that explored essential cyber tools and techniques, equipping participants with practical knowledge to identify, analyze, and defend against digital threats in today’s evolving cyber landscape.',
    image: cyberconImg,
    link: '#',
  },
  {
    id: 3,
    title: 'Hacktron',
    category: 'Hackathon',
    description:
      'Hacktron was an engaging game development bootcamp and hackathon, where participants learned core game design skills and competed to build innovative, interactive games within a collaborative, high-energy environment.',
    image: hacktronImg,
    link: '#',
  },
  {
    id: 4,
    title: 'Techzer',
    category: 'Workshop',
    description:
      'Techzer was a panel discussion and workshop focused on blockchain technology, bringing experts and enthusiasts together to explore its applications, future potential, and real-world implementation through insightful talks and hands-on learning.',
    image: techzerImg,
    link: '#',
  },
  {
    id: 5,
    title: 'Dev Boost',
    category: 'Hackathon',
    description:
      'Dev Boost was an engaging game development bootcamp and hackathon, where participants learned core game design skills and competed to build innovative, interactive games within a collaborative, high-energy environment.',
    image: devboostImg,
    link: '#',
  },
  {
    id: 6,
    title: 'Cyberhat',
    category: 'Career Workshop',
    description:
      'Cyberhat was a career-focused workshop, helping participants understand industry trends, career paths, and skills required to succeed in tech roles, with practical advice and hands-on exercises.',
    image: cyberhatImg,
    link: '#',
  },
];

export default function Events() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Past Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldcslight to-goldcs mx-auto rounded-full"></div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {events.map((event) => (
            <div
              key={event.id}
              className="group h-full"
            >
              <div className="glass-card rounded-2xl shadow-lg hover:shadow-goldcs/10 transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col h-full hover:border-goldcs/30">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="inline-block bg-white/10 text-goldcs px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit border border-goldcs/20">
                    {event.category}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-goldcs transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-gray-400 text-sm text-justify mb-4 leading-relaxed flex-1">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}