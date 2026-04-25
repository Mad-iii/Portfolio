/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ThemeProvider } from "next-themes";
import { 
  navItems, 
  heroData, 
  skills, 
  projects, 
  educationTimeline,
  skillsTimeline,
  parallaxImages 
} from "./data";
import { AnimatedNav } from "./components/ui/navigation-menu";
import HeroText from "./components/ui/hero-shutter-text";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { GlassButton } from "./components/ui/glass-button";
import { WavePath } from "./components/ui/wave-path";
import { ZoomParallax } from "./components/ui/zoom-parallax";
import RadialOrbitalTimeline from "./components/ui/radial-orbital-timeline";
import CloudWatchForm from "./components/ui/cloud-watch-form";
import { Footer } from "./components/ui/footer";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function App() {
  return (
    // @ts-ignore
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30 selection:text-indigo-200">
        <AnimatedNav navItems={navItems} />

        {/* Hero Section */}
        <section id="home" className="h-screen relative">
          <HeroText text="MAHD SADIQ" />
        </section>

        <section className="relative -mt-20 md:-mt-40 z-10">
          <ContainerScroll
            titleComponent={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 px-4 text-center"
              >
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none">
                  {heroData.tagline}
                </h2>
                <p className="max-w-2xl text-zinc-500 dark:text-zinc-400 font-medium text-lg leading-relaxed">
                  {heroData.subTagline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto px-6 sm:px-0">
                    <a href="#projects" className="w-full sm:w-auto">
                        <GlassButton size="lg" className="w-full" contentClassName="flex items-center justify-center gap-2">
                             <span>View Projects</span>
                             <ArrowRight className="h-5 w-5" />
                        </GlassButton>
                    </a>
                    <a href="#contact" className="w-full sm:w-auto">
                        <GlassButton size="lg" className="bg-zinc-900 dark:bg-white text-white dark:text-black w-full" contentClassName="flex items-center justify-center gap-2">
                            Contact Me
                        </GlassButton>
                    </a>
                </div>
              </motion.div>
            }
          >
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80')] bg-cover bg-center rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                     <div className="p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl max-w-md">
                        <p className="text-white font-mono text-sm leading-relaxed">
                            {"// Mahd Sadiq's Tech Stack"} <br/>
                            const profile = {"{"} <br/>
                            &nbsp;&nbsp;focus: "Agentic AI & Web", <br/>
                            &nbsp;&nbsp;university: "FAST-NUCES", <br/>
                            &nbsp;&nbsp;location: "Faisalabad", <br/>
                            &nbsp;&nbsp;passion: ["Coding", "UI/UX", "ML"] <br/>
                            {"};"}
                        </p>
                     </div>
                </div>
            </div>
          </ContainerScroll>
        </section>

        <div className="flex justify-center py-20 overflow-hidden">
            <WavePath />
        </div>

        {/* About Section */}
        <section id="about" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-indigo-500 mb-6">About Me</h3>
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-8 text-zinc-900 dark:text-white leading-none">
                        AI Visioner & Full-Stack Architect.
                    </h2>
                    <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mb-8">
                        I'm a 3rd-year Bachelor of Artificial Intelligence student at FAST-NUCES, Faisalabad. 
                        I enjoy turning abstract ideas — like machine learning algorithms — into interactive, 
                        visual experiences that real people can use.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1">University</p>
                            <p className="font-bold text-zinc-900 dark:text-white">FAST-NUCES Faisalabad</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1">Graduation</p>
                            <p className="font-bold text-zinc-900 dark:text-white">June 2028 (Expected)</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] p-12 relative overflow-hidden group">
                        {/* Decorative circle */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                        
                        <div className="relative h-full flex flex-col justify-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="h-1px flex-1 bg-zinc-200 dark:border-zinc-800" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Biography</span>
                            </div>
                            <p className="text-zinc-900 dark:text-white font-black text-2xl tracking-tighter italic">
                                "When I'm not coding, I'm leading design teams or managing events on campus."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        <div className="flex justify-center py-20 overflow-hidden">
            <WavePath />
        </div>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 bg-zinc-50 dark:bg-zinc-950/30">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                 <div className="text-center mb-20 max-w-2xl">
                    <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-indigo-500 mb-4">Technical Skills</h3>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6">
                        Explore my tech stack.
                    </h2>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                        A diverse set of technologies across AI, Data, and Full-stack web development — interact with the orbital nodes to learn more.
                    </p>
                </div>
                
                <div className="w-full">
                    <RadialOrbitalTimeline timelineData={skillsTimeline} />
                </div>
            </div>
        </section>

        {/* Projects Section - Zoom Parallax */}
        <section id="projects" className="relative">
            <ZoomParallax images={parallaxImages} />
            <div className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Card className="bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 overflow-hidden group rounded-[2rem] sm:rounded-[2.5rem] h-full flex flex-col hover:border-indigo-500/50 transition-colors">
                                    <div className="aspect-video overflow-hidden relative">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <a href={project.repo} target="_blank">
                                                <GlassButton size="sm" contentClassName="flex items-center gap-2">
                                                    <span>View Code</span>
                                                    <ExternalLink className="h-4 w-4" />
                                                </GlassButton>
                                            </a>
                                        </div>
                                    </div>
                                    <CardContent className="p-6 sm:p-10 flex flex-col flex-1 gap-4 sm:gap-6">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-xl sm:text-2xl font-black tracking-tighter text-zinc-900 dark:text-white leading-tight">{project.title}</h4>
                                        </div>
                                        <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed flex-1">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[10px] font-black uppercase tracking-widest text-indigo-500">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <div className="flex justify-center py-20 overflow-hidden">
            <WavePath />
        </div>

        {/* Education Section */}
        <section id="education" className="py-24 px-4 overflow-hidden bg-zinc-50 dark:bg-zinc-950/30">
            <div className="max-w-7xl mx-auto">
                 <div className="text-center mb-20">
                    <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-indigo-500 mb-4">Journey</h3>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-zinc-900 dark:text-white">
                        Educational Path.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {educationTimeline.map((item, idx) => (
                        <Card key={idx} className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 hover:shadow-2xl transition-all hover:-translate-y-2 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden group">
                           {/* Icon circle */}
                           <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                           
                           <CardContent className="p-0 relative flex flex-col gap-4 sm:gap-6 h-full">
                                <div className="flex items-center justify-between">
                                    <Badge variant="outline" className="px-3 py-1 text-[10px] font-black uppercase tracking-widest border-indigo-500/30 text-indigo-500">
                                        {item.date}
                                    </Badge>
                                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-300 dark:text-zinc-600" />
                                </div>
                                <h4 className="text-xl sm:text-2xl font-black tracking-tighter text-zinc-900 dark:text-white leading-tight">
                                    {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed flex-1">
                                    {item.content}
                                </p>
                                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                                     <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                                        <span>Status</span>
                                        <span className="text-zinc-900 dark:text-white">{item.status.replace('-', ' ')}</span>
                                     </div>
                                     <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-indigo-500 transition-all duration-1000" 
                                            style={{ width: `${item.energy}%` }}
                                        />
                                     </div>
                                </div>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <div className="flex justify-center py-20 overflow-hidden">
            <WavePath />
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="flex flex-col gap-8 text-center lg:text-left">
                    <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-indigo-500">Contact</h3>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none">
                        Let's work together.
                    </h2>
                    <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                        Open to internships, freelance, and collaborations. 
                        Feel free to reach out for any inquiries or just to say hi!
                    </p>
                    <div className="flex flex-col gap-4 font-bold text-base md:text-lg text-zinc-900 dark:text-white uppercase tracking-wider italic">
                        <a href="mailto:mahdsadiq180@gmail.com" className="hover:text-indigo-500 transition-colors break-words">mahdsadiq180@gmail.com</a>
                        <p>Faisalabad, Pakistan</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-10 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
                    <CloudWatchForm />
                </div>
            </div>
        </section>

      <Footer />
    </div>
  );
}

