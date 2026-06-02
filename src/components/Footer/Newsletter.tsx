import { useState, FormEvent } from "react";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please insert a valid email address");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
      return;
    }

    setError("");
    setIsSubmitted(true);
    setTimeout(() => {
      // Clear values after brief showing
      setEmail("");
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#dbece5] overflow-hidden rounded-[48px] mx-4 md:mx-12 my-12"
    >
      {/* Dynamic Curving thread vectors pointing down exactly matching screenshot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 50" fill="none" className="w-full h-full stroke-[#1a1a1a]" strokeWidth="1.5">
          {/* Thread 1 */}
          <path d="M20,0 C15,15 35,25 40,50" />
          {/* Thread 2 */}
          <path d="M50,0 C45,10 55,30 50,50" />
          {/* Thread 3 */}
          <path d="M80,0 C85,20 65,35 70,50" />
        </svg>
      </div>

      {/* Purple semicircle graphic at bottom right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-[#8b5cf6] rounded-tl-full opacity-90 translate-x-2 translate-y-2 pointer-events-none" />

      {/* Backlight orb */}
      <div className="absolute inset-x-0 bottom-0 top-[20%] bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Main CTA Headlines */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0b291d] mb-4 font-display">
          Subscribe to <br />
          our newsletter
        </h2>

        <p className="text-[#0b291d]/75 text-sm sm:text-base font-sans max-w-sm mb-12 antialiased">
          To make your stay special and even more memorable
        </p>

        {/* Modular interaction container */}
        <div className="w-full max-w-md min-h-[64px] flex items-center justify-center transition-all duration-300">
          {!isFormOpen ? (
            /* Pill button state on load */
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-magnetic px-10 py-5 bg-[#0b291d] hover:bg-[#8b5cf6] text-[#faf9f6] rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#0b291d]/15 hover:shadow-2xl hover:shadow-[#8b5cf6]/20 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
            >
              Subscribe Now
            </button>
          ) : isSubmitted ? (
            /* Success confirmation card */
            <div className="w-full bg-[#0b291d] text-[#faf9f6] py-4 px-6 rounded-full flex items-center justify-center space-x-3 shadow-lg animate-fade-up">
              <div className="w-6 h-6 rounded-full bg-[#c9e2d8] flex items-center justify-center text-[#0b291d]">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold tracking-wider uppercase font-sans">
                Welcome to the family &sdot; Sent!
              </span>
            </div>
          ) : (
            /* Slide expansion email entry form and send block */
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white rounded-full p-1.5 flex items-center shadow-lg border border-[#0b291d]/5 animate-fade-up"
            >
              <input
                type="email"
                placeholder="insert your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className="flex-1 bg-transparent border-none outline-none font-sans font-medium text-[#1a1a1a] text-sm px-6 py-2.5 placeholder-[#1a1a1a]/40 focus:ring-0"
                autoFocus
              />
              
              <button
                type="submit"
                className="bg-[#0b291d] hover:bg-[#8b5cf6] text-[#faf9f6] p-3 rounded-full transition-all duration-300 shadow-md flex items-center justify-center"
                aria-label="Submit subscriber subscription"
              >
                <svg
                  className="w-4 h-4 transform rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                </svg>
              </button>
            </form>
          )}
        </div>

        {/* Form Error Indicator on validation */}
        {error && (
          <p className="mt-3 text-red-700 text-xs font-semibold font-sans tracking-tight animate-pulse">
            {error}
          </p>
        )}

      </div>
    </section>
  );
}
