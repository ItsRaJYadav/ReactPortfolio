import { FaReact, FaDatabase, FaMobileAlt, FaCog, FaChartLine } from 'react-icons/fa';

const achievements = [
  { 
    title: "Implemented responsive design for a React web app", 
    icon: <FaReact className="text-yellow-400" />
  },
  { 
    title: "Successfully integrated Redux into a large-scale React project", 
    icon: <FaDatabase className="text-blue-400" />
  },
  { 
    title: "Developed and deployed a React Native app to both iOS and Android platforms", 
    icon: <FaMobileAlt className="text-green-400" />
  },
  { 
    title: "Built a reusable component library for a React project", 
    icon: <FaCog className="text-purple-400" />
  },
  { 
    title: "Improved website performance by optimizing React components and implementing lazy loading techniques", 
    icon: <FaChartLine className="text-pink-400" />
  },
  { 
    title: "Improved website performance by optimizing React components and implementing lazy loading techniques", 
    icon: <FaChartLine className="text-pink-400" />
  },
];

function AchievementSection() {
  return (
    <div className="bg-gray-900 text-white ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight text-center">Achievements</h2>
        <p className="mt-2 text-lg text-gray-400 text-center">Here are some of my recent accomplishments in React development.</p>
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{`Achievement #${index + 1}`}</h3>
                  <p className="mt-2 text-gray-400">{achievement.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AchievementSection;
