"use client"; // if you're in app/ dir

import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch("http://localhost:1337/api/subscriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { email } }),
      });

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      setMessage("✅ Subscribed successfully!");
      setEmail("");
    } catch (err) {
      setMessage("❌ Error subscribing. Try again.");
    }
  };

  return (
    <footer className="bg-[#4C2A1B] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-500 pb-6">
          {/* Subscribe */}
          <form onSubmit={handleSubscribe} className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-3 py-2 rounded text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-[#4C2A1B] font-medium rounded hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>

          {/* Contacts + Social Icons */}
          <div className="flex items-center gap-6">
            <span className="text-sm">Contacts</span>
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaGooglePlusG />
              </a>
            </div>
          </div>
        </div>

        {/* Message */}
        {message && <p className="text-center mt-4">{message}</p>}

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm gap-4">
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Our Strategy
            </a>
            <a href="#" className="hover:text-gray-300">
              Our Advantages
            </a>
            <a href="#" className="hover:text-gray-300">
              Social Responsibility
            </a>
            <a href="#" className="hover:text-gray-300">
              Our Services
            </a>
          </div>
          <p className="text-gray-300">© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
