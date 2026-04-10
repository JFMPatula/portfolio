export const site = {
  name: "Jean Faith Marie Patula",
  location: "Butuan City, Philippines",
  tagline: "Software Engineer | Web Developer | UX/UI Designer",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "/images/avatar/avatar.jpg",
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "" as string | undefined,
  email: "your@email.com",
  calendlyUrl: "https://calendly.com/your-link",
  blogUrl: "https://blog.yoursite.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  instagram: "https://instagram.com/yourprofile",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] =
  [];

export const about = `I am a 4th-year BSIT student with a multidisciplinary focus on software development, web technologies, and graphic design. My academic training has given me a foundation in building functional software and responsive web applications, while my creative side drives me to craft visually engaging user interfaces and digital assets. 

I enjoy the intersection of logic and creativity whether structuring back-end logic, designing a clean front-end layout, or creating graphics that enhance the user experience. I am passionate about learning new technologies and applying them to solve real-world problems. I am eager to contribute my skills and creativity to projects that make a positive impact, while continuously growing as a developer and designer.`;

export const experience = [
  {
    role: "BS Information Technology",
    company: "Caraga State University",
    year: "2022",
  },
  { role: "Hello World", company: "Started my coding journey", year: "2022" },
];

export const techStack = {
  frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Python", "PostgreSQL"],
  devops: ["AWS", "Docker", "GitHub Actions"],
};

export const projects = [
  {
    name: "CSU-SmartScore",
    description: "Thesis Project",
    url: "https://csu-smart-score.vercel.app/",
    domain: "csu-smart-score.vercel.app",
  },
  {
    name: "MoodMap",
    description:
      "A mobile app that helps users track and analyze their moods over time.",
    url: "https://mood-map-system.vercel.app/",
    domain: "mood-map-system.vercel.app",
  },
  {
    name: "IT 110 Portfolio",
    description: "A portfolio website built for an IT 110 class project.",
    url: "https://jfmp-atula-github-io-main-f97ksoqbt.vercel.app/",
    domain: "jfmp-atula-github-io-main-f97ksoqbt.vercel.app",
  },
];

export const gallery: { id: number; url: string; alt: string }[] = [
  {
    id: 1,
    url: "/images/gallery/thesisdefense.jpg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    url: "/images/gallery/image2.jpg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    url: "/images/gallery/image3.jpg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    url: "/images/gallery/image4.jpg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    url: "/images/gallery/image5.jpg",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    url: "/images/gallery/image6.jpg",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    url: "/images/gallery/image7.jpg",
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    url: "/images/gallery/image8.jpg",
    alt: "Gallery Image 8",
  },
  {
    id: 9,
    url: "/images/gallery/image9.jpg",
    alt: "Gallery Image 9",
  },
  {
    id: 10,
    url: "/images/gallery/image10.jpg",
    alt: "Gallery Image 10",
  },
];

export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
  imageUrl: string;
}[] = [
  {
    name: "Introduction to HTML",
    issuer: "SoloLearn",
    href: "#",
    imageUrl: "/images/certifications/htmlcertificate.jpg",
  },
  {
    name: "Introduction to CSS",
    issuer: "SoloLearn",
    href: "#",
    imageUrl: "/images/certifications/csscertificate.jpg",
  },
  {
    name: "Introduction to JavaScript",
    issuer: "SoloLearn",
    href: "#",
    imageUrl: "/images/certifications/javascriptcertificate.jpg",
  },
  {
    name: "Introduction to SQL",
    issuer: "SoloLearn",
    href: "#",
    imageUrl: "/images/certifications/sqlcertificate.jpg",
  },
];

export const recommendations = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Cris Lawrence Adrian Militante",
    title: "ICT Director at GCM",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Ken Gorro",
    title: "Senior Developer at Fullscale",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Patrick Vince Velasco",
    title: "Software Engineer, YNS",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "John Edmerson Pizarra",
    title: "Jr. Full-stack Developer, PocketDevs",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Glenn Pepito",
    title: "Professor at University of San Carlos",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Van Honoridez",
    title: "Application Development Analyst at Accenture",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Zinia Ma. Consuelo R. Trinidad",
    title: "Web Developer, Quickway Holdings Inc.",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Jomar Neri",
    title: "Full-stack Developer, Freelance",
  },
];

export const memberships = [
  {
    name: "Philippine Society of IT Educators – Caraga Chapter",
    href: "https://psite.org/",
  },
];
