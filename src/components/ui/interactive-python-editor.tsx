import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Terminal, Box, RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";

declare global {
  interface Window {
    loadPyodide: any;
  }
}

export const InteractivePythonEditor = () => {
  const [code, setCode] = useState(
    "def greet(name):\n    return f'Hello, {name}! Welcome to my portfolio.'\n\nprint(greet('Visitor'))\n\n# Try some math\nimport math\nprint(f'Pi is approximately {math.pi:.4f}')"
  );
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [pyodide, setPyodide] = useState<any>(null);
  const [loaderStatus, setLoaderStatus] = useState<"loading" | "ready" | "error">("loading");
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPython = async () => {
      try {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
        script.onload = async () => {
          const py = await window.loadPyodide();
          setPyodide(py);
          setLoaderStatus("ready");
        };
        document.head.appendChild(script);
      } catch (err) {
        console.error("Failed to load Pyodide:", err);
        setLoaderStatus("error");
      }
    };
    loadPython();
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const runCode = async () => {
    if (!pyodide) return;
    setIsRunning(true);
    // setOutput(["Running..."]);
    
    try {
      // Create a capture system for print()
      pyodide.runPython(`
import sys
import io
sys.stdout = io.StringIO()
      `);

      await pyodide.runPythonAsync(code);
      
      const result = pyodide.runPython("sys.stdout.getvalue()");
      setOutput(prev => [...prev, `> Run: ${new Date().toLocaleTimeString()}`, ...result.split("\n").filter((l: string) => l !== "")]);
    } catch (err: any) {
      setOutput(prev => [...prev, `❌ Error: ${err.message}`]);
    } finally {
      setIsRunning(false);
    }
  };

  const clearConsole = () => setOutput([]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full bg-[#0d1117] rounded-2xl overflow-hidden shadow-[0_0_80px_-20px_rgba(99,102,241,0.3)] border border-white/10 flex flex-col font-mono"
    >
      {/* Header */}
      <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        
        <div className="flex items-center gap-2">
           {loaderStatus === "loading" && (
             <div className="flex items-center gap-2 text-[10px] text-zinc-500 animate-pulse">
                <RefreshCw size={12} className="animate-spin" />
                <span>Initializing Python...</span>
             </div>
           )}
           {loaderStatus === "ready" && (
             <div className="flex items-center gap-2 text-[10px] text-green-500">
                <CheckCircle2 size={12} />
                <span>Python 3.11 Ready</span>
             </div>
           )}
           {loaderStatus === "error" && (
             <div className="flex items-center gap-2 text-[10px] text-red-500">
                <AlertCircle size={12} />
                <span>Python Loader Error</span>
             </div>
           )}
        </div>

        <button 
          onClick={runCode}
          disabled={isRunning || loaderStatus !== "ready"}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white px-3 py-1 rounded-md text-xs font-bold transition-all transform active:scale-95"
        >
          {isRunning ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} fill="currentColor" />}
          <span>RUN CODE</span>
        </button>
      </div>

      {/* Editor & Console Split */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Code Editor Area */}
        <div className="flex-1 overflow-auto border-r border-white/5 relative">
          <div className="absolute top-2 right-4 text-[10px] text-zinc-600 uppercase font-bold tracking-widest z-10">
            editor.py
          </div>
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.python, "python")}
            padding={20}
            className="min-h-full font-mono text-sm leading-relaxed outline-none"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              color: "#e6edf3"
            }}
          />
        </div>

        {/* Console Area */}
        <div className="w-full md:w-80 h-48 md:h-full bg-black/40 flex flex-col border-t md:border-t-0 border-white/5">
          <div className="px-4 py-2 bg-[#161b22]/50 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
              <Terminal size={12} />
              <span>Console Output</span>
            </div>
            <button 
              onClick={clearConsole} 
              className="text-[10px] text-zinc-600 hover:text-zinc-400 font-bold uppercase"
            >
              Clear
            </button>
          </div>
          
          <div 
            ref={outputRef}
            className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-1"
          >
            {output.length === 0 ? (
              <span className="text-zinc-700 italic">No output yet. Click run!</span>
            ) : (
              output.map((line, i) => (
                <div key={i} className={line.startsWith(">") ? "text-indigo-400 font-bold" : line.startsWith("❌") ? "text-red-400" : "text-zinc-300"}>
                  {line}
                </div>
              ))
            )}
            {isRunning && (
              <div className="text-zinc-500 animate-pulse">Running execution...</div>
            )}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#161b22] px-4 py-1.5 flex items-center gap-4 text-[10px] text-zinc-600 border-t border-white/5">
        <div className="flex items-center gap-1">
          <Box size={10} />
          <span>WASM Python Console</span>
        </div>
        <div className="ml-auto">UTF-8</div>
      </div>
    </motion.div>
  );
};
