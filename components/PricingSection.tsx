"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Exclusive use of the entire venue",
  "Professional event coordination",
  "Luxury decoration and floral arrangements",
  "Premium catering service (up to 200 guests)",
  "Professional photography and videography",
  "Live music and entertainment",
  "Complimentary bridal suite",
  "Custom lighting and sound system",
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-20 md:py-24 bg-black-light text-white min-w-[100vw]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading text-white">All-Inclusive Package</h2>
          <p className="text-ivory-light max-w-2xl mx-auto">
            Everything you need for your perfect celebration at one simple
            price.
          </p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-black border-2 border-gold p-8 md:p-12 rounded-sm shadow-xl">
            <div className="flex flex-col items-center">
              <h3 className="font-playfair text-3xl mb-2">
                Royal Celebration Package
              </h3>
              <div className="mb-8 text-center">
                <p className="text-gold-light text-lg mb-2">Starting from</p>
                <div className="flex items-center justify-center">
                  <span className="text-gold text-7xl font-bold font-playfair">
                    ₹44,999
                  </span>
                </div>
                <p className="text-ivory-light mt-2">
                  One-time payment for complete service
                </p>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="mr-3 text-gold mt-1">
                      <Check size={18} />
                    </span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full"
              >
                <a
                  href="#contact"
                  className="w-full block text-center luxury-btn"
                >
                  Book Your Date Now
                </a>
              </motion.div>
            </div>
          </div>

          <p className="text-center mt-6 text-ivory-light/80 text-sm">
            * Additional charges may apply for events with more than 200 guests
            or specialized requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
