"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arjun",
    text: "Our wedding at Hossain Palace was nothing short of magical. The staff attention to detail and the beautiful venue made our special day absolutely perfect. We couldn't have asked for a more elegant setting.",
    rating: 5,
    image: "https://images.pexels.com/photos/2912695/pexels-photo-2912695.jpeg",
  },
  {
    name: "Zara & Farhan",
    text: "We celebrated our 25th anniversary at Hossain Palace and were blown away by the exceptional service and gorgeous surroundings. Our guests are still talking about how beautiful everything was!",
    rating: 5,
    image: "https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg",
  },
  {
    name: "Aisha & Omar",
    text: "The team at Hossain Palace went above and beyond to make our wedding reception unforgettable. The venue is stunning and the ambiance was exactly what we dreamed of for our celebration.",
    rating: 5,
    image: "https://images.pexels.com/photos/1208024/pexels-photo-1208024.jpeg",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-24 bg-ivory-light"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Guests Say</h2>
          <p className="text-black-light max-w-2xl mx-auto">
            Hear from couples who celebrated their special moments at Hossain
            Palace.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="testimonial-slider h-[400px] md:h-[300px] relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center bg-white shadow-lg rounded-sm overflow-hidden"
              >
                <div className="w-full md:w-1/3 h-40 md:h-full relative">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${testimonials[current].image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex mb-3">
                    {Array.from({ length: testimonials[current].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="#d4af37"
                          color="#d4af37"
                        />
                      )
                    )}
                  </div>
                  <p className="italic text-black-light mb-4">
                    &quot;{testimonials[current].text}&quot;
                  </p>
                  <h3 className="font-playfair text-xl text-black">
                    {testimonials[current].name}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg text-black hover:text-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg text-black hover:text-gold transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-gold" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
