import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Highlight from "../Shared/Highlight";

interface FAQItem {
  id: string;
  category: "General" | "Services" | "Process" | "Support";
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const categories = ["All", "General", "Services", "Process", "Support"];

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      category: "General",
      question: "What is Elementum, and what do you specialize in?",
      answer: "We are a boutique digital synthesis and creative studio. We specialize in high-end brand engineering, narrative-driven identity systems, complex full-stack digital architectures, and custom React designs. We combine pristine, strategic aesthetics with modular, type-safe code to construct digital experiences that perform flawlessly."
    },
    {
      id: "faq-2",
      category: "Services",
      question: "Can your team design and build custom web applications?",
      answer: "Absolutely. We are fully full-stack. We take your ideas from raw strategy and wireframes to high-fidelity Figma files, ultimately translating them into production-ready React applications with customized server endpoints. We bypass generic templates to create bespoke, highly brand-aligned products."
    },
    {
      id: "faq-3",
      category: "Process",
      question: "How long does a typical creative and engineering project take?",
      answer: "Every project has distinct strategic objectives, but a comprehensive brand synthesis combined with a custom high-performance application generally takes between 6 to 12 weeks. This includes interactive prototyping, continuous integration checkpoints, and rigorous device-wide testing."
    },
    {
      id: "faq-4",
      category: "General",
      question: "Do you collaborate with startups, or only enterprise companies?",
      answer: "We partner with visionary change-makers across the board. We construct highly-optimized core MVP architectures for ventures raising Series A/B rounds, and design custom marketing portals or advanced dashboard systems for established enterprise boards who refuse to play it safe."
    },
    {
      id: "faq-5",
      category: "Support",
      question: "What is your approach to post-launch maintenance?",
      answer: "We build for durability but believe digital products must iterate to thrive. Post-launch, we offer tier-structured SLA support and flexible retainer packages for continuous feature engineering, detailed speed/performance optimization, security audits, and analytics evaluation."
    },
    {
      id: "faq-6",
      category: "Process",
      question: "Will our internal engineering team be able to adopt your code easily?",
      answer: "Yes, this is one of our primary tenets. We provide extensive hand-off documentation, clean ESM configurations, component libraries, and perfectly type-checked, highly-modular TypeScript files. We don't hide code behind confusing proprietary wrappers."
    },
    {
      id: "faq-7",
      category: "Support",
      question: "How can we begin a partnership with Elementum?",
      answer: "Simply get in touch via our contact form below or join our newsletter list. We will schedule a complementary 30-minute discovery workshop to analyze your competitive challenges, review your existing technical stack, and submit an actionable roadmap."
    }
  ];

  const filteredFaqs = faqs.filter(
    (faq) => activeCategory === "All" || faq.category === activeCategory
  );

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="relative py-24 md:py-32 overflow-hidden bg-[#faf9f6]/40 border-t border-[#1a1a1a]/10"
    >
      {/* Decorative organic background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#c9e2d8]/20 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-12 -right-32 w-[400px] h-[400px] rounded-full bg-[#f3ca52]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading with sketch highlight */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1a1a1a] leading-tight mb-6 font-display">
              Curious about <br />
              our <Highlight type="sketch-orange">mechanics?</Highlight>
            </h2>
            <p className="text-[#1a1a1a]/60 text-sm sm:text-base font-sans max-w-lg mx-auto leading-relaxed mt-4">
              Explore common details regarding our custom product methodologies, creative pipelines, technological stacks, and post-delivery synthesis.
            </p>
          </motion.div>
        </div>

        {/* Categories Tab Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-[#1a1a1a]/10 pb-6"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  // Optionally close current open item if it doesn't match the active filter
                  const firstMatch = faqs.find(
                    (f) => category === "All" || f.category === category
                  );
                  if (firstMatch) {
                    setOpenId(firstMatch.id);
                  } else {
                    setOpenId(null);
                  }
                }}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase font-mono transition-all duration-300 ${
                  isActive
                    ? "bg-[#1a1a1a] text-white shadow-md shadow-[#1a1a1a]/10"
                    : "bg-white/60 hover:bg-[#1a1a1a] text-[#1a1a1a] hover:text-white border border-[#1a1a1a]/5 hover:border-transparent"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Accordion List container */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  layout="position"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`border border-[#1a1a1a]/10 rounded-2xl bg-white overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-[#1a1a1a]/5 ${
                    isOpen ? "shadow-md bg-white border-[#8b5cf6]/20" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left p-6 md:p-8 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col gap-2 pr-4">
                      {/* Meta pills to keep hierarchy matching OfferList */}
                      <span className="text-[9px] font-bold font-mono text-[#8b5cf6] tracking-widest uppercase">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold font-sans text-[#1a1a1a] tracking-tight group-hover:text-[#8b5cf6]">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Custom minimalist horizontal-to-vertical rotating marker */}
                    <div className="relative w-8 h-8 rounded-full bg-[#1a1a1a]/5 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#8b5cf6]/10">
                      <div className="absolute w-3.5 h-[2px] bg-[#1a1a1a]" />
                      <motion.div
                        animate={{ rotate: isOpen ? 90 : 0, scaleY: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute w-[2px] h-3.5 bg-[#1a1a1a]"
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-[#1a1a1a]/5 pt-4">
                          <p className="text-sm sm:text-base text-[#1a1a1a]/70 font-sans leading-relaxed max-w-3xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
