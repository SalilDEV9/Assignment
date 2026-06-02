export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", href: "#home" },
        { name: "Studio", href: "#studio" },
        { name: "Service", href: "#services" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Terms & Policies",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Explore", href: "#" },
        { name: "Accessibility", href: "#" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "Instagram", href: "https://instagram.com" },
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "Youtube", href: "https://youtube.com" },
        { name: "Twitter", href: "https://twitter.com" },
      ],
    },
  ];

  return (
    <footer id="footer" className="relative bg-[#faf9f6] pt-16 pb-12 border-t border-[#1a1a1a]/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* main columns grids */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-12 mb-16">
          
          {/* Loop over Links categories */}
          {footerLinks.map((category, idx) => (
            <div key={idx} className="lg:col-span-3 text-left">
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#1a1a1a]/40 mb-6 font-sans">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm font-semibold text-[#1a1a1a]/70 hover:text-[#8b5cf6] hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details info card column */}
          <div className="col-span-2 lg:col-span-3 text-left">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#1a1a1a]/40 mb-6 font-sans">
              Contact Us
            </h4>
            
            <div className="space-y-4 text-sm font-semibold text-[#1a1a1a]/70">
              <p className="leading-relaxed hover:text-[#1a1a1a] transition-colors">
                1495a Fulton street, STE<br/>20 Chicago, IL 60607
              </p>
              
              <p className="hover:text-[#8b5cf6] transition-colors">
                <a href="tel:1234567890">123-456-7890</a>
              </p>
              
              <p className="hover:text-[#8b5cf6] transition-colors font-bold break-all">
                <a href="mailto:info@elementum.com">info@elementum.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* separator line */}
        <div className="border-t border-[#1a1a1a]/5 pt-8 flex flex-col md:flex-row items-center justify-between text-center gap-4">
          <p className="text-xs text-[#1a1a1a]/40 font-semibold">
            &copy; {currentYear} Elementum, Inc. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-xs text-[#1a1a1a]/45 font-semibold">
            <a href="#" className="hover:text-[#8b5cf6] transition-colors">Security</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-[#8b5cf6] transition-colors">Sitemap</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-[#8b5cf6] transition-colors">Press Kit</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
