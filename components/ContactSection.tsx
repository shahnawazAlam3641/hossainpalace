"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Check, MapPin, Phone, Mail } from "lucide-react";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  date: Yup.string().required("Event date is required"),
  guests: Yup.number().required("Number of guests is required"),
  message: Yup.string(),
});

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      message: "",
    },
    validationSchema: ContactSchema,
    // In the onSubmit handler
    onSubmit: (values) => {
      // Create the WhatsApp message with form details
      const message = `*New Event Inquiry*
  
*Name:* ${values.name}
*Email:* ${values.email}
*Phone:* ${values.phone}
*Event Date:* ${values.date}
*Number of Guests:* ${values.guests}
*Additional Information:* ${values.message || "None provided"}`;

      // Create the WhatsApp URL with the phone number and message
      const whatsappUrl = `https://wa.me/917003743778?text=${encodeURIComponent(
        message
      )}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Mark form as submitted and reset it
      setSubmitted(true);
      formik.resetForm();
    },
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-24 bg-ivory-light min-w-[100vw]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Book Your Event</h2>
          <p className="text-black-light max-w-2xl mx-auto">
            Fill out the form below to inquire about availability and schedule a
            tour of our venue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="bg-white p-8 rounded-sm shadow-lg h-full flex flex-col items-center justify-center text-center">
                <div className="mb-4 text-gold">
                  <Check size={64} />
                </div>
                <h3 className="font-playfair text-2xl mb-4">Thank You!</h3>
                <p className="text-black-light mb-8">
                  Your inquiry has been submitted. We will contact you within 24
                  hours to discuss your event details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="luxury-btn"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={formik.handleSubmit}
                className="bg-white p-8 rounded-sm shadow-lg"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-black-light mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full p-3 border-2 border-gray-200 rounded-sm focus:border-gold focus:outline-none"
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-black-light mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full p-3 border-2 border-gray-200 rounded-sm focus:border-gold focus:outline-none"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-black-light mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full p-3 border-2 border-gray-200 rounded-sm focus:border-gold focus:outline-none"
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.phone}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-black-light mb-2"
                    >
                      Event Date *
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full p-3 border-2 border-gray-200 rounded-sm focus:border-gold focus:outline-none"
                    />
                    {formik.touched.date && formik.errors.date ? (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.date}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="guests"
                    className="block text-black-light mb-2"
                  >
                    Number of Guests *
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    value={formik.values.guests}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full p-3 border-2 border-gray-200 rounded-sm focus:border-gold focus:outline-none"
                  />
                  {formik.touched.guests && formik.errors.guests ? (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.guests}
                    </p>
                  ) : null}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-black-light mb-2"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full p-3 border-2 border-gray-200 rounded-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <button type="submit" className="w-full luxury-btn">
                  Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black-light p-8 rounded-sm shadow-lg h-full flex flex-col">
              <h3 className="font-playfair text-2xl text-white mb-8">
                Contact Information
              </h3>

              <div className="flex items-start mb-8">
                <div className="mr-4 text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Our Location</h4>
                  <p className="text-ivory-light/80">
                    32a/1r, Raicharan Ghosh Ln, Block C, Picnic Garden, Topsia,
                    <br />
                    West Bengal, Kolkata 700039
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <div className="mr-4 text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Call Us</h4>
                  <p className="text-ivory-light/80">
                    +91 8100499711
                    <br />
                    +91 7003743778
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-10">
                <div className="mr-4 text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Email Us</h4>
                  <p className="text-ivory-light/80">palacehossain@gmail.com</p>
                </div>
              </div>

              <div className="mt-auto">
                <h4 className="text-white text-lg mb-3">Business Hours</h4>
                <table className="w-full text-ivory-light/80">
                  <tbody>
                    <tr>
                      <td className="py-1">Monday - Friday:</td>
                      <td className="py-1">10:00 AM - 8:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1">Saturday:</td>
                      <td className="py-1">10:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1">Sunday:</td>
                      <td className="py-1">12:00 PM - 5:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
