// src/data/projectsData.ts

export interface Project {
    name: string;
    description: string;
    href: string;
    cta: string;
    image: string;
    className: string;
    category?: string;
    technologies?: string[];
  }
  
  export const projects: Project[] = [
    {
      name: "E-commerce Platform",
      description: "A modern e-commerce solution with React and Node.js, featuring real-time inventory management and secure payment processing.",
      href: "/projects/ecommerce",
      cta: "View Project",
      image: "/images/project1.png",
      className: "col-span-1 md:col-span-2", // Featured project - takes more space
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with Astro and Tailwind CSS, optimized for performance and accessibility.",
      href: "/projects/portfolio",
      cta: "View Project", 
      image: "/images/project2.png",
      className: "col-span-1",
      category: "Web Development",
      technologies: ["Astro", "React", "Tailwind CSS"],
    },
    {
      name: "Mobile App Design",
      description: "UI/UX design for a productivity mobile application with intuitive user flows and modern aesthetics.",
      href: "/projects/mobile-app",
      cta: "View Design",
      image: "/images/project3.png", 
      className: "col-span-1",
      category: "UI/UX Design",
      technologies: ["Figma", "Prototyping", "User Research"],
    },
    {
      name: "Brand Identity System",
      description: "Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines.",
      href: "/projects/brand-identity",
      cta: "View Project",
      image: "/images/project4.JPG",
      className: "col-span-1 md:col-span-2", // Featured project
      category: "Branding",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Strategy"],
    },
    {
      name: "Dashboard Analytics",
      description: "Full-stack web application with real-time analytics dashboard and data visualization components.",
      href: "/projects/web-app",
      cta: "View Project",
      image: "/images/project5.PNG",
      className: "col-span-1",
      category: "Web Development", 
      technologies: ["Next.js", "D3.js", "PostgreSQL", "Prisma"],
    },
    {
      name: "iOS App Development",
      description: "Native iOS application for task management with SwiftUI and CoreData integration.",
      href: "/projects/ios-app",
      cta: "View Project",
      image: "/images/project6.JPG", // Add more images as needed
      className: "col-span-1",
      category: "Mobile Development",
      technologies: ["Swift", "SwiftUI", "CoreData"],
    }
  ];
  
  // Helper functions to filter projects
  export const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter(project => project.category === category);
  };
  
  export const getFeaturedProjects = (): Project[] => {
    return projects.filter(project => project.className.includes('col-span-2'));
  };
  
  export const getAllCategories = (): string[] => {
    return [...new Set(projects.map(project => project.category || ''))].filter(Boolean);
  };