import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RefreshCw } from "lucide-react";
import Highlight from "../Shared/Highlight";

interface OfferItem {
  id: string;
  helperText: string;
  headline: string;
  expandedDesc: string;
  tags: string[];
  meta: string;
}

export default function OfferList() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setExpandedIndex(null);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  const offers: OfferItem[] = [
    {
      id: "offer-1",
      helperText: "Office of multiple interest content",
      headline: "Collaborative & partnership",
      expandedDesc: "We establish agile multi-disciplinary partnerships with global scale clients. We combine user behavior analytics with premium art direction to design cohesive digital standards, product frameworks, and immersive experiences.",
      tags: ["Brand Ecosystem", "Interactive UI", "Strategic Planning"],
      meta: "01 / INTEGRATION"
    },
    {
      id: "offer-2",
      helperText: "The hanger US Air force digital experimental",
      headline: "We talk about our weight",
      expandedDesc: "Optimizing code pathways and visual weight is our signature constraint. We craft high-speed responsive experiences that load instantly, strip unnecessary baggage, and prioritize pixel-perfect performance without compromise.",
      tags: ["Web Performance", "Clean Engine", "Mobile-First Docs"],
      meta: "02 / OPTIMIZATION"
    },
    {
      id: "offer-3",
      helperText: "Delta faucet content, social, digital",
      headline: "Piloting digital confidence",
      expandedDesc: "We design robust technical architectures that empower businesses to launch digital tools comfortably. From initial custom prototyping to enterprise design system releases, we ensure complete confidence at every deployment phase.",
      tags: ["Design Systems", "E-Commerce", "Web Solutions"],
      meta: "03 / ELEVATION"
    }
  ];

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden bg-[#faf9f6] border-t border-[#1a1a1a]/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading with Custom Marker and Fetch Action */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1a1a1a] leading-none mb-6 font-display">
              What we <Highlight type="mint-oval">can</Highlight> <br className="sm:hidden" />
              offer you!
            </h2>
            <p className="text-[#1a1a1a]/60 text-sm md:text-base font-sans max-w-md mt-4 leading-relaxed">
              A comprehensive overview of our creative services, performance architecture, and digital engineering suites.
            </p>
          </motion.div>

          <motion.button
            onClick={handleRefresh}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start sm:self-end flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1a1a1a]/10 bg-white hover:bg-[#1a1a1a] text-xs font-bold tracking-wider uppercase font-mono text-[#1a1a1a] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading ? "Fetching Services..." : "Simulate Refresh"}
          </motion.button>
        </div>

        {/* Interactive Staggered Rows / Skeleton Loader */}
        <div className="border-t border-[#1a1a1a]/15 w-full flex flex-col">
          <AnimatePresence mode="wait">
            {isLoading ? (
              // Stunning Shimmer Skeleton Rows
              <motion.div
                key="skeleton-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col"
              >
                {[1, 2, 3].map((item, idx) => (
                  <div
                    key={`skeleton-row-${item}`}
                    className="border-b border-[#1a1a1a]/10 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                  >
                    {/* Left Column (Helper text representation) */}
                    <div className="md:col-span-4 flex flex-col gap-2.5">
                      <div className="h-4 bg-[#1a1a1a]/5 rounded-md w-3/4 animate-pulse" style={{ animationDelay: `${idx * 150}ms` }} />
                      <div className="h-3 bg-[#1a1a1a]/5 rounded-md w-1/2 animate-pulse" style={{ animationDelay: `${idx * 150 + 75}ms` }} />
                    </div>

                    {/* Right Column (Headline & Arrow representation) */}
                    <div className="md:col-span-8 flex items-center justify-between gap-8">
                      <div className="w-2/3 flex flex-col gap-3">
                        <div className="h-8 bg-[#1a1a1a]/5 rounded-lg w-10/12 animate-pulse" style={{ animationDelay: `${idx * 150 + 50}ms` }} />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-0.5 bg-[#1a1a1a]/5 w-8 animate-pulse" />
                        <div className="w-10 h-10 rounded-full bg-[#1a1a1a]/5 animate-pulse" style={{ animationDelay: `${idx * 150 + 100}ms` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              // Original Offer Rows
              <motion.div
                key="offers-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col"
              >
                {offers.map((offer, index) => {
                  const isHovered = hoveredIndex === offer.id;
                  const isExpanded = expandedIndex === offer.id;

                  return (
                    <motion.div
                      key={offer.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setHoveredIndex(offer.id)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`border-b border-[#1a1a1a]/15 transition-all duration-500 relative cursor-pointer group ${
                        isExpanded ? "bg-[#faf9f6]/90 py-10" : "py-8 hover:bg-[#faf9f6]/40"
                      }`}
                      onClick={() => setExpandedIndex(isExpanded ? null : offer.id)}
                      aria-expanded={isExpanded}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        
                        {/* Left Column (Figma Helper Text) */}
                        <div className="md:col-span-4 text-left">
                          <p className="text-xs md:text-sm font-sans font-medium text-[#1a1a1a]/50 max-w-[280px] leading-relaxed group-hover:text-[#1a1a1a] transition-colors duration-300">
                            {offer.helperText}
                          </p>
                        </div>

                        {/* Right Column (Headline & Dynamic Arrow Button) */}
                        <div className="md:col-span-8 flex items-center justify-between gap-4">
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1a1a1a] group-hover:text-[#8b5cf6] transition-colors duration-300 font-display">
                            {offer.headline}
                          </h3>

                          {/* Arrow / Special badge overlapping exactly like the screenshot */}
                          <div className="relative flex items-center justify-center">
                            {/* For offer-3, render Figma-like circular Sticker overlapping */}
                            {offer.id === "offer-3" && (
                              <div className="absolute -left-12 -top-12 w-14 h-14 rounded-full bg-[#f3ca52] animate-float border border-[#1a1a1a]/15 flex items-center justify-center overflow-hidden shadow-md select-none pointer-events-none rotate-[15deg]">
                                <span className="text-[7.5px] font-sans font-black tracking-widest text-center text-[#1a1a1a] leading-tight select-none pointer-events-none">
                                  PREMIUM<br />AGENCY
                                </span>
                              </div>
                            )}

                            <div className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                              <div className="h-[2px] bg-[#1a1a1a] w-8 group-hover:w-16 group-hover:bg-[#8b5cf6] transition-all duration-300" />
                              <svg
                                className={`w-5 h-5 transition-transform duration-300 ${
                                  isExpanded ? "rotate-90 text-[#8b5cf6]" : "text-[#1a1a1a] group-hover:text-[#8b5cf6]"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* Highly Polished Expandable Panel Details */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          isExpanded ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-[#1a1a1a]/5 pt-6 grid grid-cols-1 md:grid-cols-12 gap-8">
                            {/* Meta marker */}
                            <div className="md:col-span-4 text-left">
                              <span className="inline-block px-3 py-1 bg-purple-50 rounded-full font-mono text-[10px] font-bold text-[#8b5cf6] tracking-widest">
                                {offer.meta}
                              </span>
                            </div>
                            
                            {/* Description & deliverables */}
                            <div className="md:col-span-8 text-left space-y-4">
                              <p className="text-sm md:text-base text-[#1a1a1a]/70 font-sans leading-relaxed max-w-2xl">
                                {offer.expandedDesc}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 pt-2">
                                {offer.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-3.5 py-1.5 rounded-full border border-[#1a1a1a]/10 hover:border-[#8b5cf6]/30 text-xs font-semibold font-sans text-[#1a1a1a]/80 hover:text-[#8b5cf6] hover:bg-[#8b5cf6]/5 transition-all duration-200"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
