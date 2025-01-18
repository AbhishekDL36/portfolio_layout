import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white fade-in">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold">Contact Me</h3>
        <form className="mt-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full p-3 border rounded mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full p-3 border rounded mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full p-3 border rounded mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;