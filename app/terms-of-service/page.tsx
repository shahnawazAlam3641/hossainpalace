"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
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
            <h1 className="section-heading mb-8">Terms of Service</h1>
            
            <div className="prose max-w-none">
              <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">1. Venue Rules and Regulations</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Outside service personnel are strictly prohibited on the premises.</li>
                  <li>External flower decorations and lighting are not permitted under any circumstances.</li>
                  <li>Full payment for bookings must be made at least 15 days prior to the event.</li>
                  <li>The use of firecrackers is strictly prohibited.</li>
                  <li>The use of music boxes and DJ systems is strictly prohibited within the venue.</li>
                  <li>An additional charge of ₹1000/- per hour will be levied for any extensions beyond the scheduled event hours.</li>
                  <li>Any damages incurred will be deducted from the security deposit of ₹5000.</li>
                  <li>The distribution, consumption, and spitting of pan masala is strictly prohibited. A fine of ₹500 will be imposed for any violations.</li>
                  <li>Booking cancellations will be subject to a 20% cancellation fee.</li>
                  <li>Please note: A Dulhan room will not be available during the Walima event.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">2. Booking and Payment</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>A security deposit of ₹5000 is required for all bookings</li>
                  <li>Full payment must be made 15 days before the event</li>
                  <li>Accepted payment methods: Bank transfer, Cash</li>
                  <li>Cancellation policy: 20% fee of total booking amount</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">3. Liability</h2>
                <p className="mb-4">Hossain Palace is not liable for:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Personal injury during the event</li>
                  <li>Loss or damage to personal property</li>
                  <li>Weather-related disruptions</li>
                  <li>Third-party vendor issues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">4. Contact Information</h2>
                <p className="mb-4">For any questions or concerns, please contact us at:</p>
                <ul className="list-none mb-4">
                  <li>Address: 32a/1r, Raicharan Ghosh Ln, Block C, Picnic Garden, Topsia, Kolkata, West Bengal 700039</li>
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