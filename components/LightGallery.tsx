"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface GalleryImage {
  src: string | StaticImageData;
  caption: string;
  alt: string;
}

interface LightGalleryProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
}

export default function LightGallery({
  images,
  currentIndex,
  onClose,
}: LightGalleryProps) {
  const [index, setIndex] = useState(currentIndex);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gold p-2 z-10"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={32} />
        </button>

        <button
          className="absolute left-4 text-white hover:text-gold p-2 z-10"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={48} />
        </button>

        <button
          className="absolute right-4 text-white hover:text-gold p-2 z-10"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next image"
        >
          <ChevronRight size={48} />
        </button>

        <div
          className="max-w-7xl mx-auto p-4 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              className="max-h-[80vh] mx-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
              <h3 className="font-playfair text-xl">{images[index].caption}</h3>
              <p className="text-gold mt-1">{`${index + 1} / ${
                images.length
              }`}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
