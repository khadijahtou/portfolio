import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_u2oni9f", // EmailJS Service ID
        "template_zh7i1g6", //  EmailJS Template ID
        form.current,
        "ejVzOALvmSNE6fKwJ", //  EmailJS Public Key
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

  return (
    <div className="p-3 bg-gray-50 flex gap-3 flex-col">
      <h3 className="text-center font-bold text-xl lg:text-4xl">
        Let's Work Together
      </h3>
      <p className="text-center mt-2 text-[18px] md:text-[24px] text-gray-500 mx-auto max-w-2xl">
        Have a project in mind? I'd love to hear about it. Get in touch and
        let's create something amazing together.
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-sm rounded p-4 w-full md:w-1/2 mx-auto"
      >
        <div className="flex flex-col md:flex-col gap-4 mt-6 ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded w-full"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded w-full"
          />
        </div>
        <label htmlFor="text"> Message</label>
        <textarea
          placeholder="tell me about your project"
          name="message"
          className="p-3 border border-gray-300 rounded w-full mt-4 h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-400 rounded p-3 text-gray-200 w-full mt-4"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"} {/* Send Message */}
        </button>
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </form>
      <div className="flex justify-center gap-4 mt-4 mb-4">
        <a href="https://www.linkedin.com/in/khadijah-ahmad-bala-5551672a4">
          <Linkedin className="text-black hover:text-purple-700 cursor-pointer text-center bg-white rounded p-2 h-12 w-12" />
        </a>
        <a href="https://github.com/khadijahtou" title="Visit my GitHub">
          <Github className="text-black hover:text-purple-700 cursor-pointer bg-white rounded-full p-2 h-12 w-12" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=khadijahtouu@gmail.com"
          title="Send me an email"
        >
          <Mail className="text-black hover:text-purple-700 cursor-pointer bg-white rounded-full h-12 w-12 p-2" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
