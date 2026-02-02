import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function IntroductionSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center gap-12 py-12 lg:py-20">
        {/* Text Content Area - Centered on mobile, left-aligned on desktop */}
        <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
          <span className="text-muted-foreground italic text-xl">
            Evan de Leon
          </span>

          <h1 className="text-5xl md:text-7xl md:leading-[1.1] font-semibold tracking-tight leading-[1.05] text-foreground">
            I prioritize scalability and readability in{" "}
            <span className="text-muted-foreground/80">Next.js projects</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-md">
            Bringing your ideas to life with clean, efficient, and scalable
            code. Whether it&apos;s building web apps, optimizing performance,
            or solving complex technical challenges.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
            <Button size="lg" className="px-8 rounded-sm">
              Contact me
            </Button>
            <Link
              href="#projects"
              className="text-sm font-medium underline underline-offset-8 hover:opacity-70 transition-opacity"
            >
              View projects
            </Link>
          </div>
        </div>

        {/* Visual/Image Area - Centered container for flex-col (mobile) */}
        <div className="flex items-center justify-center w-full">
          {/* Main container that holds the image and the grid background */}
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            {/* Technical Grid Decoration - Centered behind the image */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <div className="w-full h-full border border-foreground/30 grid grid-cols-6 grid-rows-6">
                {[...Array(36)].map((_, i) => (
                  <div
                    key={i}
                    className="border-[0.5px] border-foreground/20"
                  />
                ))}
              </div>
              {/* Decorative Squares */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-muted/40" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-muted/20" />
            </div>

            {/* Image Container - Centered vertically and horizontally */}
            <div className="relative z-10 w-4/5 h-4/5 z-0">
              <Image
                src="/devMan.png"
                alt="Humanoid"
                fill
                className="object-contain" // Removed object-right-bottom to keep it centered
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import { LazyMotion, domAnimation, useInView } from "framer-motion";
// import { useScrollTo } from "hooks";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { useMediaQuery } from "utils";
// import { WelcomeAnimation } from "./IntroAnimation";

// export function WelcomeSection() {
//   const ref = useRef(null);
//   const introRef = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const { scrollToEl } = useScrollTo();
//   const isTabletUp = useMediaQuery("min-width: 768px");

//   let [count, setCount] = useState(0);
//   const [text] = useState([
//     "specialize in building scalable Next.js applications",
//     "craft interactive and intuitive React UIs",
//     "turn design concepts into maintainable code",
//     "focus on readable, future-proof web architecture",
//   ]);

//   const onClick = (e) => scrollToEl(e);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setCount(count + 1);

//       if (count === 3) {
//         setCount(0);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [count]);

//   return (
//     <LazyMotion features={domAnimation}>
//       <section id="intro" className="section" ref={introRef}>
//         <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
//           <div className="py-5 md:py-10">
//             <h1
//               tabIndex="0"
//               ref={ref}
//               className="text-3xl md:text-5xl xl:text-6xl font-bold"
//               style={{
//                 transform: isInView ? "none" : "translateX(-200px)",
//                 opacity: isInView ? 1 : 0,
//                 transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//               }}
//             >
//               <p className="leading-tight">
//                 Hi, I’m <mark>Evan</mark>. I craft Next.js apps that scale
//                 without sacrificing clarity.
//               </p>
//             </h1>

//             <div className="mt-3 relative flex flex-col overflow-hidden">
//               <p
//                 ref={ref}
//                 className="text-[17px] md:text-2xl transform-none opacity-100"
//                 style={{
//                   transform: isInView ? "none" : "translateX(-200px)",
//                   opacity: isInView ? 1 : 0,
//                   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//                 }}
//               >
//                 I
//                 <span
//                   className="absolute flex flex-col transition-all duration-500 ease-in-expo"
//                   style={{
//                     top:
//                       count === 0
//                         ? "0"
//                         : count === 1
//                           ? "-100%"
//                           : count === 2
//                             ? "-200%"
//                             : count === 3
//                               ? "-300%"
//                               : "0",
//                     left: "13px",
//                   }}
//                 >
//                   {text.map((element) => (
//                     <TextElement key={element} element={element} />
//                   ))}
//                 </span>
//               </p>
//             </div>

//             <p
//               tabIndex="0"
//               ref={ref}
//               className="mt-3 mb-10 text-gray-500 text-xl"
//               style={{
//                 transform: isInView ? "none" : "translateX(-200px)",
//                 opacity: isInView ? 1 : 0,
//                 transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//               }}
//             >
//               Stick around to see some of my work.
//             </p>
//             <div
//               ref={ref}
//               style={{
//                 transform: isInView ? "none" : "translateY(50px)",
//                 opacity: isInView ? 1 : 0,
//                 transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//               }}
//             >
//               <Link
//                 href="#projects"
//                 onClick={onClick}
//                 tabIndex="0"
//                 className="btn"
//                 aria-label="Latest projects"
//               >
//                 See my latest projects
//               </Link>
//             </div>
//           </div>

//           {isTabletUp && <WelcomeAnimation />}
//         </div>
//       </section>
//     </LazyMotion>
//   );
// }

// function TextElement({ element }) {
//   const firstWord = <b>{element.split(" ").at(0)}</b>;
//   const restWords = element.split(" ").slice(1).join(" ");
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <span
//       tabIndex="0"
//       ref={ref}
//       className="text-[17px] md:text-2xl"
//       style={{
//         transform: isInView ? "none" : "translateX(-200px)",
//         opacity: isInView ? 1 : 0,
//         transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//       }}
//     >
//       {firstWord} {restWords}
//     </span>
//   );
// }
