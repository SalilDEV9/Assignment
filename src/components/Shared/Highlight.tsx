import React from "react";

interface HighlightProps {
  children: React.ReactNode;
  type: "sketch-yellow" | "sketch-orange" | "squiggly-pink" | "mint-oval" | "gold-underline" | "olive-oval";
  className?: string;
}

export default function Highlight({ children, type, className = "" }: HighlightProps) {
  return (
    <span className={`relative inline-block whitespace-nowrap z-10 ${className}`}>
      <span className="relative z-10">{children}</span>
      {type === "sketch-yellow" && (
        <svg
          className="absolute -bottom-1.5 left-0 w-full h-[10px] overflow-visible pointer-events-none z-0"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M2.5,5.5 Q35,1.5 97.5,3.5 M5,7.5 C40,4.5 80,5.5 95,6.5"
            fill="none"
            stroke="var(--color-accent-gold)"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="animate-draw"
            style={{
              strokeDasharray: 200,
              strokeDashoffset: 200,
              animation: "draw 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            }}
          />
        </svg>
      )}

      {type === "sketch-orange" && (
        <svg
          className="absolute -bottom-1.5 left-0 w-full h-[12px] overflow-visible pointer-events-none z-0"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M4,4.5 Q45,2 96,6 M8,7 Q38,5 92,8"
            fill="none"
            stroke="var(--color-accent-orange)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: 200,
              strokeDashoffset: 200,
              animation: "draw 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards"
            }}
          />
        </svg>
      )}

      {type === "squiggly-pink" && (
        <svg
          className="absolute -bottom-2.5 left-0 w-full h-[14px] overflow-visible pointer-events-none z-0"
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
        >
          <path
            d="M1,6 Q12.5,1 25,6 T50,6 T75,6 T99,6"
            fill="none"
            stroke="var(--color-accent-pink)"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-90"
            style={{
              strokeDasharray: 200,
              strokeDashoffset: 200,
              animation: "draw 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards"
            }}
          />
        </svg>
      )}

      {type === "mint-oval" && (
        <span
          className="absolute -inset-x-3 -inset-y-1 bg-[#c9e2d8]/65 -z-10 rounded-[45%_55%_50%_50%_/_52%_45%_55%_48%] animate-pulse-slow"
          style={{
            transform: "rotate(-1.5deg)",
          }}
        />
      )}

      {type === "olive-oval" && (
        <span
          className="absolute -inset-x-3 -inset-y-1 bg-[#d9e6cc]/70 -z-10 rounded-[50%_48%_52%_45%_/_45%_52%_48%_55%] animate-pulse-slow"
          style={{
            transform: "rotate(1deg)",
          }}
        />
      )}

      {type === "gold-underline" && (
        <svg
          className="absolute -bottom-2 left-0 w-full h-[12px] overflow-visible pointer-events-none z-0"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M3,4.5 L97,3.5 M6,7.5 L94,7"
            fill="none"
            stroke="var(--color-accent-gold)"
            strokeWidth="2.8"
            strokeLinecap="round"
            style={{
              strokeDasharray: 200,
              strokeDashoffset: 200,
              animation: "draw 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            }}
          />
        </svg>
      )}
    </span>
  );
}
