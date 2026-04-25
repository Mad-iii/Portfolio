"use client";

import { DIcons } from "dicons";
import { useTheme } from "next-themes";
import { cn } from "@/src/lib/utils";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

function handleScrollTop() {
  if (typeof window !== "undefined") {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
}

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm p-1">
      <button
        onClick={() => setTheme("light")}
        className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      >
        <DIcons.Sun className="h-5 w-5 text-zinc-900 dark:text-zinc-400" strokeWidth={1} />
        <span className="sr-only">Light Mode</span>
      </button>

      <button 
        type="button" 
        onClick={handleScrollTop}
        className="px-4 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
      >
        TOP
      </button>

      <button
        onClick={() => setTheme("dark")}
        className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      >
        <DIcons.Moon className="h-5 w-5 text-zinc-400 dark:text-white" strokeWidth={1} />
        <span className="sr-only">Dark Mode</span>
      </button>
    </div>
  );
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-20 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <a href="/">
             <h2 className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">MAHD SADIQ</h2>
          </a>
          <p className="max-w-xl text-center text-sm text-zinc-500 leading-relaxed font-medium">
            Building intelligent systems and crafting responsive web experiences. 
            AI Student at FAST-NUCES, Faisalabad. 
            Passionate about turning abstract ideas into interactive visual experiences.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="mailto:mahdsadiq180@gmail.com" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
            </a>
            <a href="https://github.com/Mad-iii" target="_blank" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/mahd-sadiq1" target="_blank" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
            </a>
        </div>

        <div className="flex flex-col items-center gap-6 w-full pt-12 border-t border-zinc-200 dark:border-zinc-800/50">
          <ThemeToggle />
          <div className="flex flex-row items-center justify-center gap-1 text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">
            <span>© {new Date().getFullYear()}</span>
            <span>-</span>
            <span>Built by Mahd Sadiq</span>
            <Heart className="text-red-500 mx-1 h-3 w-3 animate-pulse" />
            <span>in Faisalabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
