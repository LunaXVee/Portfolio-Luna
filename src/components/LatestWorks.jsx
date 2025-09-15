// LatestWorks.jsx - React Component
import React from 'react';

const LatestWorks = () => {
  const projects = [
    {
      id: 1,
      title: "App Design",
      description: "Mobile application design with modern UI/UX principles",
      image: "/images/project7.png",
      category: "Mobile App",
      color: "bg-amber-500"
    },
    {
      id: 2,
      title: "Web Design",
      description: "Responsive web application with clean and modern interface",
      image: "/images/project2.png",
      category: "Website",
      color: "bg-teal-600"
    },
    {
      id: 3,
      title: "Brand Identity",
      description: "Complete brand identity package with logo and guidelines",
      image: "/images/project4.JPG",
      category: "Branding",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl font-bold text-[#0A3044]">My Latest Works</h2>
            <div className="ml-4 w-20 h-1 bg-pink-400 rounded-full"></div>
          </div>
          <p className="text-lg text-[#6c757d] mb-8">
            Perfect solution for digital experience
          </p>
          <div className="flex justify-center">
            <button className="btn btn-outline btn-error">
              Explore More Works
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <figure className="relative overflow-hidden">
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
                <h2 className="card-title text-xl font-bold text-base-content">
                  {project.title}
                </h2>
                <p className="text-base-content/70 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs text-base-content/50">2024</span>
                  </div>
                  <button className="btn btn-primary btn-sm">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#6c757d] mb-4">Swipe up to explore area</p>
          <div className="w-12 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;