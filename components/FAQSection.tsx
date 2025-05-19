"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the venue capacity?",
    answer: "Hossain Palace can comfortably accommodate up to 200 guests for a seated event. For larger celebrations, we can arrange additional outdoor seating in our garden area."
  },
  {
    question: "What's included in the ₹44,999 package?",
    answer: "Our all-inclusive package includes venue rental, professional event coordination, luxury decorations, catering for up to 200 guests, photography, videography, live music, and complimentary access to our bridal suite."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 6-8 months in advance for peak season dates (October-February). For off-peak seasons, 3-4 months advance booking is usually sufficient."
  },
  {
    question: "Do you provide catering services?",
    answer: "Yes, our package includes premium catering services with a wide selection of cuisines. We can accommodate dietary restrictions and customize the menu to your preferences."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we offer complimentary valet parking for all guests. Our secure parking area can accommodate up to 100 vehicles."
  },
  {
    question: "Can we bring our own vendors?",
    answer: "While our package includes trusted vendors, we're open to working with your preferred vendors. They must be licensed and insured, and we'll need to approve them in advance."
  }
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 md:py-24 bg-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-ivory-light/80 max-w-2xl mx-auto">
            Find answers to common questions about hosting your event at Hossain Palace.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-black-dark border border-gold/20 rounded-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-gold transition-colors">
                  <span className="text-left font-playfair">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-ivory-light/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-ivory-light/80 mb-6">
            Still have questions? We're here to help!
          </p>
          <a href="#contact" className="luxury-btn">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}