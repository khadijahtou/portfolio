import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

function Contact() {
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
        action=""
        className="bg-white shadow-sm rounded p-4 w-full md:w-1/2 mx-auto"
      >
        <div className="flex flex-col md:flex-col gap-4 mt-6 ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded w-full"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded w-full"
          />
        </div>
        <label htmlFor="text"> Message</label>
        <textarea
          placeholder="tell me about your project"
          className="p-3 border border-gray-300 rounded w-full mt-4 h-32"
        ></textarea>
        <button className="bg-purple-400 rounded p-3 text-gray-200 w-full mt-4">
          Send Message
        </button>
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
