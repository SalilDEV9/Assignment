import { motion } from "motion/react";
import Highlight from "../Shared/Highlight";

export default function Hero() {
  const team = [
    {
      id: "t1",
      name: "Marcus Sterling",
      role: "Strategic Analyst",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&h=250&q=80",
      offset: "-translate-y-4 hover:-translate-y-6",
    },
    {
      id: "t2",
      name: "Sienna Vance",
      role: "Art Director",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&h=250&q=80",
      offset: "translate-y-2 hover:translate-y-0",
    },
    {
      id: "t3",
      name: "Aris Thorne",
      role: "Digital Architect",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=250&h=250&q=80",
      offset: "-translate-y-2 hover:-translate-y-4",
    },
    {
      id: "t4",
      name: "Kenji Sato",
      role: "Brand Strategist",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=250&h=250&q=80",
      offset: "translate-y-4 hover:translate-y-2",
    },
    {
      id: "t5",
      name: "Nabila Al-Amin",
      role: "UX Researcher",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&h=250&q=80",
      offset: "-translate-y-6 hover:-translate-y-8",
    },
    {
      id: "t6",
      name: "Oliver Finch",
      role: "Creative Copywriter",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&h=250&q=80",
      offset: "translate-y-1 hover:-translate-y-1",
    },
    {
      id: "t7",
      name: "Zara Petrov",
      role: "Social Psychologist",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&h=250&q=80",
      offset: "-translate-y-1 hover:-translate-y-3",
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 overflow-hidden flex flex-col justify-center bg-[#faf9f6]"
    >
      {/* Decorative vector background lines / gradient blobs exactly like the Figma design */}
      <div className="absolute top-1/4 left-5 w-[140px] h-[300px] opacity-20 pointer-events-none md:block hidden">
        {/* Curving thread graphic resembling Figma's left side scribbles */}
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-[#1a1a1a]" strokeWidth="1.5">
          <path d="M10,10 C40,40 50,80 20,120 Q5,150 40,180 T90,190" strokeLinecap="round" />
        </svg>
      </div>

      {/* Radiant glow mesh (Apple/Stripe aesthetic) */}
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-red-100/35 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />

      {/* Purple half-circle on the right of the Hero title block */}
      <div className="absolute top-24 right-12 w-24 h-12 bg-purple-500 rounded-b-full opacity-80 rotate-45 pointer-events-none md:block hidden animate-float" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1a1a1a] max-w-5xl leading-[1.12] mb-8 font-display"
        >
          The <Highlight type="sketch-yellow">thinkers</Highlight> and{" "}
          <Highlight type="sketch-orange">doers</Highlight> were changing the{" "}
          <Highlight type="squiggly-pink">status</Highlight>{" "}
          <Highlight type="mint-oval">Quo</Highlight> with
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#1a1a1a]/70 font-sans max-w-2xl leading-relaxed mb-16 antialiased"
        >
          We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
        </motion.p>

        {/* Team Avatars Cluster with interactive detail cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mt-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 relative">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.08, ease: "easeOut" }}
                className={`group relative transition-all duration-300 ease-out transform ${member.offset}`}
              >
                {/* Profile Circle Image Card */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-lg shadow-[#1a1a1a]/5 hover:shadow-xl hover:shadow-[#1a1a1a]/15 transition-all duration-300 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#8b5cf6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Micro tooltip detail on hover */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#1a1a1a]/95 text-white py-2 px-3.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 shadow-md">
                  <p className="font-display font-bold">{member.name}</p>
                  <p className="text-[10px] text-white/70 font-sans">{member.role}</p>
                  {/* Small caret pointed up */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1a1a]/95 rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
