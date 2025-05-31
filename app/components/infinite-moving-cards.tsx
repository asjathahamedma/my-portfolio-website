"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { CardSpotlight } from "./card-spotlight";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    title: string;
    iconUrl?: string;
    logos?: { name: string; url: string }[];
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }

      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }

      setStart(true);
    }
  }, []);

  const fullItemList = [...items, ...items];
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {fullItemList.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl md:w-[450px] group"
            key={`${item.title}-${idx}`}
          >
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-2xl p-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#05c6edb2] to-[#02f3c6] rounded-2xl opacity-70 group-hover:opacity-100 transition-all duration-300 animate-[spin_3s_linear_infinite]"></div>
            </div>
            
            {/* Card Content */}
            <div className="relative rounded-2xl bg-gradient-to-br to-[#89beefcf] from-[#06022985] backdrop-blur-md px-6 py-4 h-full overflow-hidden">
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none">
                <div className="absolute rounded-2xl inset-0 z-[-10] bg-gradient-to-r from-[#758b95] via-[#604669] to-[#2c4041e7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardSpotlight>
                <blockquote>
                  <div className="flex items-center gap-2 mb-4">
                    {item.iconUrl && (
                      <img
                        src={item.iconUrl}
                        alt="icon"
                        className="w-6 h-6 object-contain"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>

                  {item.logos && (
                    <div className="flex flex-wrap gap-10 mb-2">
                      {item.logos.map((logo, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <img
                            src={logo.url}
                            alt={logo.name}
                            className="w-5 h-5 object-contain rounded"
                          />
                          <span className="text-md text-gray-300 font-medium">{logo.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-md font-medium text-gray-100">{item.quote}</p>
                </blockquote>
              </CardSpotlight>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};