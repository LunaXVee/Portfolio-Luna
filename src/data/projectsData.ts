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
    name: "FUNDISA - AI SMS Chatbot",
    description: "Winner of UbuntuNet Hackathon 2024 &  AWITAI incubation by UNESCO, OCP, and AI Movement 2025. Bilingual AI chatbot making education accessible via SMS.",
    href: "/contact2",
    cta: "Learn More",
    image: "/images/project7.png",
    className: "col-span-1 md:col-span-2", // Featured project
    category: "AI/Machine Learning",
    technologies: ["Python", "AI/ML", "SMS APIs", "React", "Astro"],
  },
  {
    name: "TFT - Membership Database",
    description: "Full-stack farming membership system managing 277+ members across 8 provinces with real-time analytics.",
    href: "https://tft-database.netlify.app/",
    cta: "View Project", 
    image: "/images/project2.png",
    className: "col-span-1",
    category: "Web Development",
    technologies: ["Astro", "React", "Tailwind CSS", "MySQL", "Magic UI"],
  },
  
  {
    name: "Sunflower - Solar Tracker",
    description: "Hardware project mimicking sunflower behavior to maximize solar energy capture with custom PCB design",
    href: "/contact2",
    cta: "Learn More",
    image: "/images/tracker.webp",
    className: "col-span-1", // Featured project
    category: "Hardware/IoT",
    technologies: ["Arduino", "PCB Design", "3D Printing", "Embedded Systems"],
  },
  {
    name: "Z-Wallet - Mobile E-Wallet",
    description: "Comprehensive mobile payment solution for the Zimbabwean market featuring QR code payments, AI voice assistant, multi-service platform, and secure authentication.",
    href: "/contact2",
    cta: "Learn More",
    image: "/images/zwallet.png",
    className: "col-span-1 md:col-span-2",
    category: "Mobile Development",
    technologies: ["Flutter", "QR Integration", "Payment APIs", "SMS Verification"],
  },
  {
    name: "BabyShark - Streaming Platform",
    description: "Anime and Cartoon streaming platform with secure authentication and responsive design.",
    href: "https://babyshark-lunaxvee.netlify.app/",
    cta: "View Project",
    image: "/images/babyshark.png", 
    className: "col-span-1 md:col-span-2",
    category: "Web Development",
    technologies: ["React", "Astro", "Tailwind CSS", "Authentication APIs"],
  },
  {
    name: "TFT - Webpage Development",
    description: "Responsive web aplication for TFT farmers. Utilized UI/UX best principles",
    href: "/contact2",
    cta: "Learn More", 
    image: "/images/tft.png",
    className: "col-span-1",
    category: "Web Development",
    technologies: ["Astro", "React", "Tailwind CSS", "MySQL", "Magic UI"],
  },
  {
    name: "Fizzpop - 3D Interactive Experience",
    description: "Interactive 3D soda can with real-time hover, zoom, and exploration features using Spline and React.",
    href: "https://fizz-pop.vercel.app/",
    cta: "View Project",
    image: "/images/fizzpop.png",
    className: "col-span-1",
    category: "3D Web Development", 
    technologies: ["React", "Vite", "Spline", "3D Graphics", "JavaScript"],
  },
  {
    name: "Chika - 3D Web Experience",
    description: "Creative web app with dark-to-light transitions and 3D characters featuring mouse-tracking eye movements.",
    href: "https://chikacompanion.netlify.app/",
    cta: "View Project",
    image: "/images/project4.JPG",
    className: "col-span-1",
    category: "3D Web Development",
    technologies: ["Astro", "React", "Spline", "Animation APIs", "Magic UI"],
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