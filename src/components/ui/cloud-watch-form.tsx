"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

export default function CloudWatchForm() {
  const [isTyping, setIsTyping] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const offsetX = ((cursor.x / window.innerWidth) - 0.5) * 40;
    const offsetY = ((cursor.y / window.innerHeight) - 0.5) * 20;
    setEyePos({ x: offsetX, y: offsetY });
  }, [cursor]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white/10 dark:bg-zinc-900/30 backdrop-blur-md rounded-xl shadow-xl p-8 flex flex-col items-center gap-6 w-full max-w-md border border-white/20">
        
          <div className="relative w-64 h-36">
            <img
              src="./img/cat.png"
              alt="cat character"
              className="w-full h-full object-contain mix-blend-multiply"
            />

            {["left", "right"].map((side, idx) => (
              <div
                key={side}
                className="absolute flex justify-center items-center overflow-hidden shadow-inner"
                style={{
                  top: 52,
                  left: idx === 0 ? 84 : 148,
                  width: 32,
                  height: isTyping
                    ? 4 
                    : blink
                    ? 6 
                    : 32, 
                  borderRadius: isTyping || blink ? "2px" : "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.9)", 
                  transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "2px solid rgba(0,0,0,0.05)"
                }}
              >
                {!isTyping && !blink && (
                  <div
                    className="bg-zinc-900 relative shadow-lg"
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      transform: `translate(${eyePos.x * 0.4}px, ${eyePos.y * 0.4}px)`,
                      transition: "all 0.1s ease-out",
                    }}
                  >
                    {/* Main Highlight */}
                    <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-white rounded-full opacity-90 shadow-sm" />
                    {/* Secondary Highlight */}
                    <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
                  </div>
                )}
              </div>
            ))}
          </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              placeholder="Mahd Sadiq" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="mahdsadiq180@gmail.com" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Input 
              id="message" 
              placeholder="Let's collaborate!" 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          
          <Button 
            type="submit"
            disabled={status === "loading"}
            className="mt-2 w-full hover:scale-[1.02] transition-transform"
          >
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Error! Try Again" : "Send Message"}
          </Button>

          {status === "success" && (
            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest text-center">
              I'll get back to you soon!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
