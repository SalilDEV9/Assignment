import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RefreshCw } from "lucide-react";
import Highlight from "../Shared/Highlight";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  img: string;
  quote: string;
  pos: string; // Tailwind positioning class for desktop
}

export default function Testimonials() {
  const [activeId, setActiveId] = useState<string>("t1");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate remote loading delay on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1850);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const testimonials: Testimonial[] = [
    {
      id: "t1",
      author: "Julius Vance",
      role: "VP of Product",
      company: "Apex Global",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
      pos: "top-10 left-16 md:left-24"
    },
    {
      id: "t2",
      author: "Sienna Martinez",
      role: "Lead Creative Designer",
      company: "Velo Digital",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "They didn't just deliver a gorgeous, performant platform—they fundamentally reimagined how our users interact with us. The attention to pixel-precision and fluid typography earned accolades across our entire board.",
      pos: "top-4 right-12 md:right-28"
    },
    {
      id: "t3",
      author: "Liam Thorne",
      role: "Creative Director",
      company: "Aetherial Labs",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "The design craftsmanship is absolutely top-tier. Usually, agency websites feel generic and template-driven. This feels fully handcrafted, bespoke, and tailored perfectly to our design-driven engineering requirements.",
      pos: "bottom-12 left-10 md:left-28"
    },
    {
      id: "t4",
      author: "Adriaan Durand",
      role: "Operations head",
      company: "Zenith Hub",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Working with Elementum's squad has been inspiring. Their appreciation for subtle premium micro-interactions, flawless desktop & mobile responsiveness, and clean code architecture raises the bar for digital studios.",
      pos: "bottom-8 right-16 md:right-24"
    },
    {
      id: "t5",
      author: "Mila Sterling",
      role: "Branding Specialist",
      company: "Verde Studio",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      pos: "top-1/3 left-4 md:left-12",
      quote: "Working with them is like finding the ultimate creative partner. They understood client boundaries, established an incredible rhythm, and released a high-fidelity system that exceeded all initial goals."
    },
    {
      id: "t6",
      author: "Gavin Chen",
      role: "Senior Engineering lead",
      company: "Oki Systems",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
      pos: "bottom-1/3 right-4 md:right-12",
      quote: "The code is exceptionally clean. Handing over high-intent designs that are easy to maintain, thoroughly type-checked, and highly performant is what separates Elementum from typical design shops."
    }
  ];

  const currentTestimonial = testimonials.find((t) => t.id === activeId) || testimonials[0];

  return (
    <section
      id="studio-testimonials"
      className="relative py-24 md:py-32 overflow-hidden bg-[#faf9f6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading with Fetch Trigger */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-20 max-w-5xl mx-auto gap-8">
          <div className="text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1a1a] leading-tight font-display">
              What our <Highlight type="mint-oval">customer</Highlight> says <br />
              <Highlight type="gold-underline">About Us</Highlight>
            </h2>
            <p className="text-[#1a1a1a]/50 text-xs sm:text-sm font-sans mt-6 max-w-sm leading-relaxed">
              Click on any profile avatar floating around to read specific testimonials from corporate executives and product designers.
            </p>
          </div>

          <motion.button
            onClick={handleRefresh}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start sm:self-end flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1a1a1a]/10 bg-white hover:bg-[#1a1a1a] text-xs font-bold tracking-wider uppercase font-mono text-[#1a1a1a] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading ? "Fetching Reviews..." : "Simulate Refresh"}
          </motion.button>
        </div>

        {/* Testimonial Active Display Card with Floating Avatars */}
        <div className="relative min-h-[460px] flex items-center justify-center py-10">
          
          <AnimatePresence mode="wait">
            {isLoading ? (
              // Loading Skeleton Blocks
              <motion.div
                key="testimonials-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="contents"
              >
                {/* Floating Circle Avatar Skeletons */}
                {testimonials.map((t, index) => (
                  <div
                    key={`skeleton-avatar-${t.id}`}
                    className={`absolute ${t.pos} flex flex-col items-center z-20`}
                  >
                    <div
                      className="w-14 h-14 md:w-18 md:h-18 rounded-full border-4 border-white bg-[#1a1a1a]/5 shadow-md animate-pulse"
                      style={{ animationDelay: `${index * 150}ms` }}
                    />
                  </div>
                ))}

                {/* center Quote Display block skeleton */}
                <div className="w-full max-w-2xl bg-white rounded-3xl border border-[#1a1a1a]/5 p-8 md:p-12 shadow-xl relative z-10 flex flex-col items-center">
                  <div className="w-full space-y-4 py-8 flex flex-col items-center">
                    <div className="h-4 bg-[#1a1a1a]/5 rounded-md w-5/6 animate-pulse" />
                    <div className="h-4 bg-[#1a1a1a]/5 rounded-md w-11/12 animate-pulse" style={{ animationDelay: "200ms" }} />
                    <div className="h-4 bg-[#1a1a1a]/5 rounded-md w-4/5 animate-pulse" style={{ animationDelay: "400ms" }} />
                    
                    <div className="pt-8 flex flex-col items-center gap-2 w-full">
                      <div className="h-5 bg-[#1a1a1a]/5 rounded-md w-1/3 animate-pulse" style={{ animationDelay: "600ms" }} />
                      <div className="h-3.5 bg-[#1a1a1a]/5 rounded-md w-1/4 animate-pulse" style={{ animationDelay: "800ms" }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              // Original Testimonial Section
              <motion.div
                key="testimonials-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="contents"
              >
                {/* Floating Circle Avatar */}
                {testimonials.map((t, index) => {
                  const isActive = t.id === activeId;
                  return (
                    <motion.button
                      key={t.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setActiveId(t.id)}
                      className={`absolute ${t.pos} group flex flex-col items-center focus:outline-none z-20`}
                      aria-label={`View feedback from ${t.author}`}
                    >
                      <div
                        className={`w-14 h-14 md:w-18 md:h-18 rounded-full overflow-hidden border-4 transition-all duration-300 transform group-hover:scale-110 shadow-lg ${
                          isActive
                            ? "border-[#8b5cf6] scale-105 shadow-[#8b5cf6]/20"
                            : "border-white group-hover:border-[#8b5cf6]/50 shadow-[#1a1a1a]/5"
                        }`}
                      >
                        <img src={t.img} alt={t.author} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Float tag on Hover */}
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white text-[10px] py-1 px-2 rounded font-sans tracking-tight font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
                        {t.author}
                      </span>
                    </motion.button>
                  );
                })}

                {/* center Quote Display block */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-2xl bg-white rounded-3xl border border-[#1a1a1a]/5 p-8 md:p-12 shadow-2xl relative z-10 transition-all duration-300 hover:shadow-3xl transform hover:-translate-y-1"
                >
                  {/* Top Quote Mark Icon */}
                  <div className="absolute top-6 left-8 text-[#8b5cf6]/10 font-display text-8xl md:text-9xl leading-none select-none pointer-events-none">
                    &ldquo;
                  </div>

                  {/* Quote content wrapped in AnimatePresence */}
                  <div className="relative z-10 flex flex-col items-center text-center overflow-hidden min-h-[220px] justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeId}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        <p className="text-base md:text-lg lg:text-xl text-[#1a1a1a]/85 font-sans leading-relaxed tracking-wide mb-8 italic antialiased opacity-90">
                          {currentTestimonial.quote}
                        </p>

                        {/* Author Details with animation */}
                        <div className="flex flex-col items-center">
                          <span className="font-display font-black text-[#1a1a1a] text-base">
                            {currentTestimonial.author}
                          </span>
                          <span className="font-sans text-xs text-[#1a1a1a]/55 font-medium mt-1">
                            {currentTestimonial.role} &mdash; <span className="text-[#8b5cf6] font-semibold">{currentTestimonial.company}</span>
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Bottom Quote Mark Icon */}
                  <div className="absolute bottom-6 right-8 text-[#8b5cf6]/10 font-display text-8xl md:text-9xl leading-none select-none pointer-events-none">
                    &ldquo;
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
