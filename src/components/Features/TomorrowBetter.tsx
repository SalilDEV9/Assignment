import { motion } from "motion/react";
import Highlight from "../Shared/Highlight";

export default function TomorrowBetter() {
  return (
    <section
      id="studio"
      className="relative py-24 md:py-32 overflow-hidden bg-[#faf9f6]"
    >
      {/* Background Soft Red Glowing Aura */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-amber-100/30 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Curving vector thread */}
      <div className="absolute inset-x-0 bottom-0 h-[200px] opacity-15 pointer-events-none">
        <svg viewBox="0 0 1440 200" fill="none" className="w-full h-full stroke-[#1a1a1a]" strokeWidth="1.2">
          <path d="M-10,50 Q400,220 800,80 T1450,150" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1a1a] leading-tight mb-8 font-display">
            Tomorrow should <br />
            be better than <Highlight type="olive-oval">today</Highlight>
          </h2>

          <p className="text-base sm:text-lg text-[#1a1a1a]/70 font-sans leading-relaxed max-w-lg mb-10 antialiased">
            We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
          </p>

          {/* Hand-drawn Read More Link Animation */}
          <a
            href="#services"
            className="group inline-flex items-center space-x-4 text-sm font-extrabold tracking-widest uppercase text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
          >
            <span>Read more</span>
            <div className="relative flex items-center">
              {/* Dynamic Line Rule */}
              <div className="h-[2px] bg-[#1a1a1a] w-16 group-hover:w-28 transition-all duration-300 ease-in-out" />
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </motion.div>

        {/* Right Column: Creative Rounded Mask Collage with Geometric Accent Triangles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2"
        >
          {/* Orange/Red Decorative Triangle backing */}
          <div className="absolute top-8 right-12 w-12 h-12 bg-red-400 rounded-sm rotate-[12deg] opacity-90 animate-float pointer-events-none" />

          {/* Soft peach circular accent backdrop */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-pink-100 to-amber-100 rounded-full -z-10 aspect-square opacity-60 animate-pulse-slow max-w-[460px] mx-auto" />

          {/* Creative Masked Image Container */}
          <div className="relative w-full max-w-[440px] aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 hover:scale-[1.02] group">
            <img
              src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&h=600&q=80"
              alt="Creative team collaboration session at workspace"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-transparent group-hover:bg-[#8b5cf6]/5 transition-colors duration-500" />
          </div>

          {/* Floating abstract decorative shape popping over container bottom-left */}
          <div
            className="absolute bottom-6 left-8 w-16 h-16 bg-[#c9e2d8] rounded-tl-3xl rounded-br-3xl rotate-[25deg] shadow-lg border-2 border-white pointer-events-none"
            style={{ animation: "float 8s ease-in-out infinite" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
