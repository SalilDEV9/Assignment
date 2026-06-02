import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // 1. Navbar shrink on scroll
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 2. High-performance IntersectionObserver ScrollSpy
    const sections = ["home", "studio", "services", "contact", "faqs"];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-30% 0px -50% 0px", // Trigger when section occupies the active viewport viewport
        }
      );
      observer.observe(element);
      return { observer, element };
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Studio", href: "#studio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf9f6]/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[#1a1a1a]/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center font-display text-2xl font-extrabold tracking-tight text-[#1a1a1a]"
        >
          Elementum
          <span className="text-[#8b5cf6] font-extrabold transition-all duration-300 group-hover:translate-x-1">
            .
          </span>
        </a>

        {/* Desktop Menu with premium Framer Motion floating underline */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs font-bold tracking-wider uppercase py-1.5 px-3 font-mono transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/40 rounded ${
                  isActive ? "text-[#8b5cf6]" : "text-[#1a1a1a]/60 hover:text-[#1a1a1a]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#8b5cf6]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button/Menu Trigger */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center bg-[#1a1a1a] hover:bg-[#8b5cf6] text-[#faf9f6] text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#8b5cf6]/10 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:ring-offset-2"
          >
            Join Studio
          </a>

          {/* Toggle Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:p-3 text-[#1a1a1a] hover:text-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] rounded-full transition-colors duration-200"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 transition-transform rotate-90 duration-300" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[72px] bg-[#faf9f6] z-40 md:hidden flex flex-col justify-start px-8 pt-10 pb-6 border-t border-[#1a1a1a]/10 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-display font-medium py-2 border-b border-[#1a1a1a]/5 transition-colors ${
                  isActive ? "text-[#8b5cf6] font-bold" : "text-[#1a1a1a] hover:text-[#8b5cf6]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-[#1a1a1a] hover:bg-[#8b5cf6] text-[#faf9f6] text-sm font-bold tracking-widest uppercase py-4 rounded-full transition-all duration-300 mt-6"
          >
            Join Studio
          </a>
        </div>

        <div className="mt-auto pt-8 border-t border-[#1a1a1a]/10 text-xs text-[#1a1a1a]/60 flex flex-col space-y-2">
          <p>Collaborating &amp; Partnering Globally</p>
          <p>© 2026 Elementum, Inc. All rights reserved.</p>
        </div>
      </div>
    </nav>
  );
}
