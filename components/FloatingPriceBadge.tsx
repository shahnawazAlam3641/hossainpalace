"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingPriceBadge() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the badge after scrolling past the hero section
      if (window.scrollY > window.innerHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsAppInquiry = () => {
    // Create the message for the quick inquiry
    const message = `*Quick Venue Inquiry*
    
I'm interested in booking your luxury venue.
Please provide more details about what's included.

Thank you!`;

    // Create the WhatsApp URL with the phone number and message
    // Using the phone number from your previous example
    const whatsappUrl = `https://wa.me/917003743778?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-8 right-8 z-30"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="price-badge shadow-lg flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }}
            onClick={handleWhatsAppInquiry}
          >
            <span className="text-xs uppercase font-medium">Book Now</span>
            <span className="text-xl font-bold">₹44,999</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
