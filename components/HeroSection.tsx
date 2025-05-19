"use client";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/images/hero2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  // const heroRef = useRef<HTMLDivElement>(null);
  // const textRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (heroRef.current && textRef.current) {
  //     const ctx = gsap.context(() => {
  //       gsap.to(textRef.current, {
  //         yPercent: 20,
  //         opacity: 0.7,
  //         ease: "",
  //         scrollTrigger: {
  //           trigger: heroRef.current,
  //           start: "top top",
  //           end: "bottom top",
  //           scrub: true,
  //         },
  //       });
  //     }, heroRef);

  //     // Important: refresh ScrollTrigger measurements once everything is loaded
  //     ScrollTrigger.refresh();

  //     return () => ctx.revert();
  //   }
  // }, []);

  return (
    <section
      id="hero"
      // ref={heroRef}
      className="h-screen relative flex items-center justify-center min-w-[100vw] max-w-[100vw] overflow-hidden"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div
        // ref={textRef}
        style={{ willChange: "transform, opacity" }}
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <h1 className="hero-heading text-white mb-6">
          <span className="block pb-4">Welcome to</span>
          <span className="text-gold shimmer rounded-xl">Hossain Palace</span>
        </h1>

        <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
          Celebrate Your Royal Moments Here
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#gallery" className="luxury-btn">
            Explore Our Venue
          </a>
          <a href="#contact" className="luxury-btn-outline text-white">
            Book Your Event
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
