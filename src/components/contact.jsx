import { Github, Linkedin, Mail } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_u2oni9f",
        "template_zh7i1g6",
        form.current,
        "ejVzOALvmSNE6fKwJ",
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess("Failed to send. Try again later.");
          console.error(error.text);
        },
      );
  };

  // Animation Variants
  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <div
      className="p-6 bg-gray-50 flex flex-col items-center gap-8"
      id="contact"
    >
      {/* Heading */}
      <motion.h3
        className="text-center font-bold text-xl lg:text-4xl"
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        Let's Work Together
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        className="text-center mt-2 text-[18px] md:text-[24px] text-gray-500 max-w-2xl"
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        Have a project in mind? I'd love to hear about it. Get in touch and
        let's create something amazing together.
      </motion.p>

      {/* Form Card */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white rounded-2xl p-8 w-full md:w-1/2 flex flex-col gap-6 cursor-pointer"
        variants={formVariants}
        initial="hidden"
        whileInView="show"
        whileHover="hover"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="peer p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <label className="absolute left-3 -top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
            Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="peer p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <label className="absolute left-3 -top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
            Email
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            placeholder="Tell me about your project"
            className="peer p-3 border border-gray-300 rounded w-full h-32 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
            required
          ></textarea>
          <label className="absolute left-3 -top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
            Message
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="bg-purple-400 rounded-xl p-3 text-white w-full font-semibold hover:bg-purple-500 transition-all"
          disabled={loading}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {success && (
          <p className="text-green-500 mt-2 text-center">{success}</p>
        )}
      </motion.form>

      {/* Social Icons */}
      <motion.div className="flex justify-center gap-4 mt-4 mb-4">
        <motion.a
          href="https://www.linkedin.com/in/khadijah-ahmad-bala-5551672a4"
          variants={iconVariants}
          whileHover="hover"
        >
          <Linkedin className="text-black hover:text-purple-700 cursor-pointer bg-white rounded-full p-3 h-12 w-12" />
        </motion.a>
        <motion.a
          href="https://github.com/khadijahtou"
          variants={iconVariants}
          whileHover="hover"
        >
          <Github className="text-black hover:text-purple-700 cursor-pointer bg-white rounded-full p-3 h-12 w-12" />
        </motion.a>
        <motion.a
          href="mailto:khadijahtouu@gmail.com"
          variants={iconVariants}
          whileHover="hover"
        >
          <Mail className="text-black hover:text-purple-700 cursor-pointer bg-white rounded-full p-3 h-12 w-12" />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Contact;
