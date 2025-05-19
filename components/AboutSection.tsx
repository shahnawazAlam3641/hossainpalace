"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import aboutImg from "@/assets/images/about.jpg";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && imageRef.current) {
      // Parallax effect on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.fromTo(imageRef.current, { y: -30 }, { y: 30, ease: "none" });
    }
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-24 bg-ivory-light"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Image */}
          <div
            ref={imageRef}
            className="order-2 md:order-1 overflow-hidden rounded-sm shadow-xl h-[400px] md:h-[500px] relative"
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform"
              style={{
                backgroundImage: `url(${aboutImg.src})`,
              }}
            >
              {/* Gold border accent */}
              <div className="absolute inset-0 border-8 border-gold/20 pointer-events-none"></div>
            </div>
          </div>

          {/* About Content */}
          <motion.div
            className="order-1 md:order-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h2 className="section-heading" variants={fadeInVariants}>
              About Hossain Palace
            </motion.h2>

            <motion.p
              className="mb-6 text-black-light"
              variants={fadeInVariants}
            >
              Welcome to Hossain Palace, where luxury meets tradition.
              Established in 1995, our venue has become synonymous with elegance
              and grandeur in celebrating life&apos;s most precious moments.
            </motion.p>

            <motion.p
              className="mb-6 text-black-light"
              variants={fadeInVariants}
            >
              Nestled in the heart of the city, our palace combines classical
              architecture with modern amenities to create an atmosphere of
              timeless sophistication. Every corner of Hossain Palace tells a
              story of heritage and luxury.
            </motion.p>

            <motion.p
              className="mb-8 text-black-light"
              variants={fadeInVariants}
            >
              Our dedicated team of event specialists ensures that every detail
              of your celebration is meticulously planned and executed, creating
              memories that will be cherished for a lifetime.
            </motion.p>

            <motion.div variants={fadeInVariants}>
              <a href="#contact" className="luxury-btn">
                Book a Tour
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
