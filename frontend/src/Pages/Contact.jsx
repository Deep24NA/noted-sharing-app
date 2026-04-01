import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-purple-800 to-gray-500 text-white px-6 py-16">

      {/* TITLE */}
      <h1 className="text-center text-5xl md:text-6xl font-bold mb-14">
        Contact Us
      </h1>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE INFO */}
        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-semibold text-pink-200">📞 Phone</h3>
            <p className="text-lg mt-2">+91-8989595022</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-200">📍 Address</h3>
            <p className="text-lg mt-2">Indore, Madhya Pradesh</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-200">✉ Email</h3>
            <p className="text-lg mt-2">contact@onlinenotes.in</p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-xl space-y-6">

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name *"
              className="w-full p-4 rounded-full bg-white/20 outline-none placeholder-white"
            />

            <input
              type="email"
              placeholder="E-mail *"
              className="w-full p-4 rounded-full bg-white/20 outline-none placeholder-white"
            />
          </div>

          <textarea
            placeholder="Message *"
            className="w-full h-40 p-4 rounded-2xl bg-white/20 outline-none placeholder-white"
          />

          <button
            className="w-full py-4 rounded-full font-semibold text-lg
            bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500
            hover:scale-105 transition duration-300"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;