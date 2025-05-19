"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import LightGallery from "@/components/LightGallery";
import Img1 from "@/assets/images/gallery/gallery1.jpg";
import Img2 from "@/assets/images/gallery/gallery2.jpg";
import Img3 from "@/assets/images/gallery/gallery3.jpg";
import Img4 from "@/assets/images/gallery/gallery4.jpg";
import Img5 from "@/assets/images/gallery/gallery5.jpg";
import Img6 from "@/assets/images/gallery/gallery6.jpg";

// Gallery images with captions
const galleryItems = [
  {
    src: Img1,
    caption: "",
    alt: "Luxurious garden venue with elegant decorations",
  },
  {
    src: Img2,
    caption: "",
    alt: "Elegant banquet hall with chandeliers",
  },
  {
    src: Img3,
    caption: "",
    alt: "Beautifully decorated wedding ceremony stage",
  },
  {
    src: Img4,
    caption: "",
    alt: "Formal dining setup with fine china and candles",
  },
  {
    src: Img5,
    caption: "",
    alt: "Stylish reception area with upscale furniture",
  },
  {
    src: Img6,
    caption: "",
    alt: "Outdoor venue illuminated with string lights at night",
  },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Set up parallax effects for gallery items
      const items = sectionRef.current.querySelectorAll(".gallery-item");

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play none none none",
            },
            delay: index * 0.1,
          }
        );
      });
    }
  }, []);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 md:py-24 bg-black min-w-[100vw]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-white">Explore Our Venue</h2>
          <p className="text-ivory-light max-w-2xl mx-auto">
            Step into the world of luxury and elegance. Our venue offers the
            perfect backdrop for your special day.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item overflow-hidden h-[300px] md:h-[400px] rounded-sm cursor-pointer relative group"
              onClick={() => handleImageClick(index)}
            >
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  {item?.caption && (
                    <h3 className="text-white font-playfair text-xl">
                      {item.caption}
                    </h3>
                  )}
                  <p className="text-gold mt-2 text-sm">Click to enlarge</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox component */}
      {selectedImage !== null && (
        <LightGallery
          images={galleryItems}
          currentIndex={selectedImage}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
