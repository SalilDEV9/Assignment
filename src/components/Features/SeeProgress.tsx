import { motion } from "motion/react";
import Highlight from "../Shared/Highlight";

export default function SeeProgress() {
  return (
    <section
      id="progress"
      className="relative py-24 md:py-32 overflow-hidden bg-[#faf9f6]"
    >
      {/* Curved loop vector line exactly matching the screenshot background */}
      <div className="absolute inset-x-0 top-0 h-[400px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 400" fill="none" className="w-full h-full stroke-[#1a1a1a]" strokeWidth="1.2">
          <path d="M1450,50 Q1000,320 600,100 T-10,300" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        {/* Left Column: Creative Pill Frame with prominent Red Triangles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex justify-center items-center"
        >
          {/* Prominent Red/Coral Triangle underneath */}
          <svg
            className="absolute -bottom-8 right-6 w-28 h-28 transform rotate-12 opacity-95 animate-float pointer-events-none fill-red-400/90"
            viewBox="0 0 100 100"
          >
            <polygon points="50,15 15,80 85,80" />
          </svg>

          {/* Another upper pink triangle */}
          <svg
            className="absolute -top-6 left-12 w-16 h-16 transform -rotate-[15deg] opacity-80 pointer-events-none fill-pink-300"
            viewBox="0 0 100 100"
          >
            <polygon points="50,15 15,80 85,80" />
          </svg>

          {/* Custom rounded pill masked frame */}
          <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-[48px] overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 hover:scale-[1.02] group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=650&h=480&q=80"
              alt="Designers collaborating over a custom sketch and digital device"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Ambient vignette accent overlay */}
            <div className="absolute inset-0 bg-transparent group-hover:bg-[#8b5cf6]/5 transition-colors duration-500" />
          </div>
        </motion.div>

        {/* Right Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1a1a] leading-tight mb-8 font-display">
            See how we can <br />
            help you <Highlight type="gold-underline">progress</Highlight>
          </h2>

          <p className="text-base sm:text-lg text-[#1a1a1a]/70 font-sans leading-relaxed max-w-lg mb-10 antialiased">
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research.
          </p>

          {/* Hand-drawn inline CTA Link */}
          <a
            href="#offer"
            className="group inline-flex items-center space-x-4 text-sm font-extrabold tracking-widest uppercase text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
          >
            <span>Read more</span>
            <div className="relative flex items-center">
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
      </div>
    </section>
  );
}
