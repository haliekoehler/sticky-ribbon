import { useState, useRef } from "react";
import clsx from "clsx";
import confetti from "canvas-confetti";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-tvlh52avst";
import Ellipse from "../../imports/Ellipse5";

type RibbonHelperProps = {
  additionalClassNames?: string;
};

function RibbonHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<RibbonHelperProps>) {
  return (
    <div className={clsx("flex-none", additionalClassNames)}>
      <p className="font-['Lato:Black',sans-serif] leading-[normal] not-italic relative text-[12px] text-left text-white tracking-[0.6px] whitespace-nowrap">{children}</p>
    </div>
  );
}

export default function InteractiveRibbon() {
  const [isHovered, setIsHovered] = useState(false);
  const ribbonRef = useRef<HTMLDivElement>(null);
  const confettiIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const triggerConfetti = (x: number, y: number) => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true
    });

    myConfetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { 
        x: x / window.innerWidth, 
        y: y / window.innerHeight 
      },
      colors: ['#5F4CBC', '#F36C21', '#FFD700', '#FF69B4', '#00CED1'],
      gravity: 0.8,
      scalar: 0.8,
      drift: 0,
      ticks: 200
    });

    setTimeout(() => {
      document.body.removeChild(canvas);
    }, 3000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHovered) {
      triggerConfetti(e.clientX, e.clientY);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (confettiIntervalRef.current) {
      clearInterval(confettiIntervalRef.current);
      confettiIntervalRef.current = null;
    }
  };

  // Animation variants for the ribbon wrapping effect
  const topRibbonVariants = {
    initial: { 
      clipPath: "inset(0 100% 0 0)" // Hidden, will reveal left to right
    },
    animate: { 
      clipPath: "inset(0 0% 0 0)", // Fully visible
      transition: { 
        duration: 1.0, 
        ease: [0.45, 0.05, 0.55, 0.95] // Custom easing for smooth ribbon-like motion
      }
    }
  };

  const bottomRibbonVariants = {
    initial: { 
      clipPath: "inset(0 0 0 100%)" // Hidden, will reveal right to left
    },
    animate: { 
      clipPath: "inset(0 0 0 0%)", // Fully visible
      transition: { 
        duration: 1.0, 
        delay: 1.0, // Starts immediately after top ribbon finishes
        ease: [0.45, 0.05, 0.55, 0.95] // Matching easing for consistency
      }
    }
  };

  const textVariants = {
    initial: { 
      opacity: 0
    },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: 2.0 // Starts right after bottom ribbon finishes
      }
    }
  };

  return (
    <div 
      ref={ribbonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      {/* Orange "Join Us!" element - rendered first so it appears behind */}
      {isHovered && (
        <>
          <div className="absolute flex h-[93.86px] items-center justify-center left-[16px] top-[76px] w-[113.817px] transition-all duration-300 animate-in fade-in zoom-in z-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-22.89deg]">
              <div className="h-[60.505px] relative w-[98px]">
                <Ellipse />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[39.354px] items-center justify-center left-[49px] top-[108px] w-[56.893px] transition-all duration-300 animate-in fade-in zoom-in z-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-25.95deg]">
              <a href="" className="decoration-solid font-['Lato:Black',sans-serif] leading-[normal] not-italic relative text-[14px] text-white tracking-[0.7px] underline whitespace-nowrap hover:opacity-80 transition-opacity">
                Join Us!
              </a>
            </div>
          </div>
        </>
      )}

      <a className="block cursor-pointer relative size-full z-10" data-name="Ribbon" href="https://codepen.io/RobotsPlay/pen/MagEeO">
        {/* Top ribbon piece - animates first */}
        <motion.div 
          className="absolute flex h-[96.092px] items-center justify-center left-0 top-0 w-[132.238px]" 
          style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}
          variants={topRibbonVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex-none rotate-30">
            <div className="h-[34.199px] relative w-[132.951px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.951 34.1649">
                <path d={svgPaths.p2dbef900} fill="url(#paint0_linear_1_19)" id="Rectangle 6" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_19" x1="0" x2="132.951" y1="17.0656" y2="17.0656">
                    <stop stopColor="#5F4CBC" />
                    <stop offset="1" stopColor="#212151" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Bottom ribbon piece - animates second */}
        <motion.div 
          className="absolute flex h-[95.103px] items-center justify-center left-[2.36px] top-[53.12px] w-[130.724px]" 
          style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}
          variants={bottomRibbonVariants}
          initial="initial"
          animate="animate"
        >
          <div className="-rotate-30 -scale-y-100 flex-none">
            <div className="h-[34px] relative w-[131.317px]">
              <div className="absolute inset-[0.43%_0.52%_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.633 33.8549">
                  <path d={svgPaths.pd727900} fill="url(#paint0_linear_1_17)" id="Rectangle 7" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_17" x1="130.722" x2="0" y1="16.8549" y2="16.8549">
                      <stop stopColor="#5F4CBC" />
                      <stop offset="1" stopColor="#212151" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text elements - fade in after ribbon animation */}
        <motion.div 
          className="absolute flex h-[51.559px] items-center justify-center left-[22.36px] top-[19.85px] w-[84.028px]" 
          style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <RibbonHelper additionalClassNames="rotate-[26.67deg]">{`CELEBRATING `}</RibbonHelper>
        </motion.div>

        <motion.div 
          className="absolute flex h-[55.929px] items-center justify-center left-[20.17px] top-[73.28px] w-[95.138px]" 
          style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <RibbonHelper additionalClassNames="rotate-[-25.96deg]">
            {isHovered ? "YOU!" : "OUR MEMBERS!"}
          </RibbonHelper>
        </motion.div>
      </a>
    </div>
  );
}