import { 
  Terminal, 
  Database, 
  Brain, 
  Cpu, 
  Globe, 
  Mail, 
  Calendar, 
  ListChecks, 
  Gift, 
  Gamepad2, 
  BarChart3,
  BookOpen,
  GraduationCap
} from "lucide-react";

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const heroData = {
  name: "Mahd Sadiq",
  tagline: "AI Student & Full-Stack Developer",
  subTagline: "Building intelligent systems and crafting responsive web experiences — from LLM agents to MERN stack applications.",
};

export const skills = {
  programming: ["Python (Advanced)", "C / C++", "JavaScript", "SQL / PL/SQL", "HTML & CSS", "NASM Assembly", "React.js"],
  ai: ["Machine Learning", "Data Preprocessing", "Model Training", "Agentic AI", "LLM Pipelines"],
  tools: ["VS Code", "Jupyter", "MS Office", "MS Visio", "Ubuntu", "DOSBox"],
  frameworks: ["React.js", "Node.js", "Express.js", "MongoDB", "scikit-learn", "pandas"],
};

export const projects = [
  {
    title: "Agentic AI Systems",
    description: "Designed autonomous AI agents: Airport Management, Email Summarizer, and Calendar Planner using LLM pipelines.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["AI", "Agents", "NLP", "Python"],
    repo: "https://github.com/Mad-iii"
  },
  {
    title: "PathMatrixPro",
    description: "Interactive visualiser for AI search algorithms (BFS, DFS, A*) with a matrix interface.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    tags: ["AI", "Algorithms", "Education", "TypeScript"],
    repo: "https://github.com/Mad-iii/PathMatrixPro"
  },
  {
    title: "Accountability Tracker",
    description: "Full-stack MERN application for setting goals and monitoring personal progress.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["MERN", "Full-Stack", "TypeScript"],
    repo: "https://github.com/Mad-iii/Accountability_tracker"
  },
  {
    title: "Sudoku Solver",
    description: "Web-based solver using backtracking algorithms to solve puzzles instantly.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
    tags: ["Algorithms", "TypeScript", "Web"],
    repo: "https://github.com/Mad-iii/Suduko-Solver"
  },
  {
    title: "ML Training Pipeline",
    description: "End-to-end ML pipelines covering cleaning, engineering, and performance evaluation.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800&q=80",
    tags: ["ML", "Python", "scikit-learn", "pandas"],
    repo: "https://github.com/Mad-iii"
  }
];

export const educationTimeline = [
  {
    id: 1,
    title: "BS Artificial Intelligence",
    date: "2024 - 2028",
    content: "FAST-NUCES, Faisalabad. High focus on Agentic AI and Full-stack systems.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [2],
    status: "in-progress" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "I.C.S. Stats Major",
    date: "Dec 2023",
    content: "Punjab Group of Colleges, Faisalabad. Foundation in mathematics and stats.",
    category: "Education",
    icon: BookOpen,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 3,
    title: "Matriculation",
    date: "Sept 2021",
    content: "Divisional Public School & College, Faisalabad.",
    category: "Education",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  }
];

export const skillsTimeline = [
  {
    id: 10,
    title: "Python",
    date: "Advanced",
    content: "Building complex automation scripts, data processing tools, and system integrations with high efficiency.",
    category: "Languages",
    icon: Terminal,
    relatedIds: [11, 13],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 11,
    title: "Machine Learning",
    date: "Advanced",
    content: "Training and evaluating models using scikit-learn, pandas, and data cleaning pipelines.",
    category: "AI",
    icon: Brain,
    relatedIds: [10, 14],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 14,
    title: "Agentic AI",
    date: "Specialized",
    content: "Designing autonomous LLM agents for task automation, email summarization, and scheduling.",
    category: "AI",
    icon: Cpu,
    relatedIds: [11],
    status: "in-progress" as const,
    energy: 90,
  },
  {
    id: 12,
    title: "MERN Stack",
    date: "Full-Stack",
    content: "Developing dynamic web applications using MongoDB, Express, React, and Node.js.",
    category: "Web",
    icon: Globe,
    relatedIds: [13],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 13,
    title: "Software Design",
    date: "2 Years",
    content: "Proficient in architectural analysis, MS Visio, and creating scalable software patterns.",
    category: "Design",
    icon: ListChecks,
    relatedIds: [10, 12],
    status: "completed" as const,
    energy: 90,
  }
];

export const parallaxImages = [
  { src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1280&q=80", alt: "Code background" },
  { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1280&q=80", alt: "AI abstraction" },
  { src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1280&q=80", alt: "Development setup" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1280&q=80", alt: "Laptop with code" },
  { src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1280&q=80", alt: "Data visualization" },
  { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1280&q=80", alt: "Tech equipment" },
  { src: "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=1280&q=80", alt: "Analytics" }
];
