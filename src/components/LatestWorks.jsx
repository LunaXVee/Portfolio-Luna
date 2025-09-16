// LatestWorks.jsx - React Component with Dark Theme
import React from 'react';

const LatestWorks = () => {
  const projects = [
    {
      id: 1,
      title: "FUNDISA",
      description: "AI powered SMS educational chatbot that uses both English and Shona",
      image: "/images/project7.png",
      category: "Mobile App",
      color: "bg-amber-500"
    },
    {
      id: 2,
      title: "TFT Database",
      description: "Responsive farmer's membership database with clean and modern interface",
      image: "/images/project2.png",
      category: "Website",
      color: "bg-teal-600"
    },
    {
      id: 3,
      title: "3D Interactive Website",
      description: "Responsive 3D web application where heads of characters turn to face the computer mouse in real-time",
      image: "/images/project4.JPG",
      category: "Branding",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#0A3044' }}> {/* Dark background */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl font-bold text-white">My Latest Works</h2> {/* White text */}
            <div className="ml-4 w-20 h-1 bg-button rounded-full"></div>
          </div>
          <p className="text-lg text-gray-300 mb-8"> {/* Light gray text */}
            Perfect solution for digital experience
          </p>
          <div className="flex justify-center">
            <button className="btn btn-outline text-white border-white hover:bg-white hover:text-[#0A3044]"> {/* White outline button */}
              Explore More Works
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* White card background */}
              <figure className="relative overflow-hidden border-b border-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {project.category}
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold text-[#0A3044]"> {/* Dark text for title */}
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed"> {/* Dark gray text for description */}
                  {project.description}
                </p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0A3044] rounded-full"></div> {/* Dark dot */}
                    <span className="text-xs text-gray-500">2024</span> {/* Dark gray text */}
                  </div>
                  <button className="btn btn-sm text-white" style={{ backgroundColor: '#0A3044' }}> {/* Dark button */}
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-4">Swipe up to explore area</p> {/* Light text */}
          <div className="w-12 h-1 bg-button mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;