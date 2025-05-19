"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-16 bg-ivory-light min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-heading mb-8">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">1. Information We Collect</h2>
                <p className="mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name and contact information</li>
                  <li>Event details and preferences</li>
                  <li>Payment information</li>
                  <li>Communications with us</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Process your bookings and payments</li>
                  <li>Communicate with you about your events</li>
                  <li>Improve our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">3. Information Sharing</h2>
                <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">4. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">5. Contact Us</h2>
                <p className="mb-4">For any privacy-related questions or concerns, please contact us at:</p>
                <ul className="list-none mb-4">
                  <li>Email: palacehossain@gmail.com</li>
                  <li>Phone: 8100499711</li>
                  <li>WhatsApp: 7003743778</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}