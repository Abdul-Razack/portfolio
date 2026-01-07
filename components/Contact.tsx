"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleWhatsAppClick = () => {
    if (!message.trim()) return;

    const phone = "+971544971861";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-0 max-w-6xl mx-auto px-4 py-10 my-10 bg-white shadow-lg rounded-3xl will-change-opacity-transform dark:bg-gray-900"
    >
      {/* Section Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Contact Information */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
            <span className="w-8 h-1 bg-blue-500 rounded-full" />
            Contact Info
          </h3>

          <div className="grid grid-cols-1 gap-3">
            <a
              href="mailto:abdulrazack.it@gmail.com"
              className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent transition-all hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 group"
            >
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Email Me
                </p>
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  abdulrazack.it@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/abdul-razack"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent transition-all hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 group"
            >
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  LinkedIn
                </p>
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  in/abdul-razack
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Abdul-Razack"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent transition-all hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 group"
            >
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Github size={20} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  GitHub
                </p>
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  github/Abdul-Razack
                </p>
              </div>
            </a>

            <a
              href="tel:+971556602353"
              className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent transition-all hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 group"
            >
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Call Me
                </p>
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  +971 54 497 1861
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Status Card */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
            <span className="w-8 h-1 bg-green-500 rounded-full" />
            Availability
          </h3>

          <div className="flex-1 p-6 rounded-3xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 flex flex-col justify-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I am currently based in Dubai, UAE, and open to remote
              opportunities worldwide or on-site roles in the region.
            </p>
            <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold bg-white dark:bg-gray-800 px-5 py-3 rounded-2xl shadow-sm w-fit border border-blue-100 dark:border-blue-900/30 text-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              Open for new roles
            </div>

            {/* WhatsApp Quick Send Input */}
            <div className="mt-8 w-full">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Quick Chat on WhatsApp
              </p>
              <div className="flex gap-2">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="
    w-full rounded-2xl px-5 py-4 text-slate-100 placeholder:text-slate-400
    bg-slate-900/35 border border-emerald-400/25
    shadow-[0_0_0_1px_rgba(16,185,129,0.20)]
    ring-1 ring-emerald-400/15
    focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-300/40
    transition-all duration-200
    [text-shadow:0_1px_0_rgba(0,0,0,0.25)]
    relative
    before:content-[''] before:absolute before:inset-0 before:rounded-2xl
    before:shadow-[0_0_24px_rgba(16,185,129,0.28),0_0_70px_rgba(16,185,129,0.12)]
    before:opacity-100 before:-z-10
  "
                />

                <button
                  onClick={handleWhatsAppClick}
                  disabled={!message.trim()}
                  className="
  relative rounded-2xl px-6 py-4 font-semibold
  border transition-all duration-200 select-none
  focus:outline-none

  /* ✅ Default: crisp border + darker edge, lower inside light */
  enabled:text-white
  enabled:bg-emerald-500/10
  enabled:border-emerald-300/35
  enabled:shadow-[inset_0_0_0_1px_rgba(16,185,129,0.18)]
  enabled:before:content-[''] enabled:before:absolute enabled:before:inset-0 enabled:before:rounded-2xl
  enabled:before:shadow-[0_0_10px_rgba(16,185,129,0.14),0_0_26px_rgba(16,185,129,0.08)]
  enabled:before:opacity-100 enabled:before:-z-10

  /* Hover: border pops more, inside still calm */
  enabled:hover:bg-emerald-500/12
  enabled:hover:border-emerald-200/45
  enabled:hover:shadow-[inset_0_0_0_1px_rgba(16,185,129,0.22)]
  enabled:hover:before:shadow-[0_0_14px_rgba(16,185,129,0.18),0_0_34px_rgba(16,185,129,0.10)]
  enabled:hover:-translate-y-[1px]

  /*  Click: small pop + burst glow */
  enabled:active:translate-y-0
  enabled:active:scale-[0.97]

  enabled:after:content-[''] enabled:after:absolute enabled:after:inset-[-5px] enabled:after:rounded-[22px]
  enabled:after:opacity-0 enabled:after:-z-20
  enabled:active:after:opacity-100
  enabled:active:after:shadow-[0_0_16px_rgba(16,185,129,0.26),0_0_52px_rgba(16,185,129,0.16)]

  /* Disabled: still premium but subtle */
  disabled:text-slate-300/80
  disabled:bg-slate-900/28
  disabled:border-emerald-300/18
  disabled:shadow-[inset_0_0_0_1px_rgba(16,185,129,0.12)]
  disabled:before:content-[''] disabled:before:absolute disabled:before:inset-0 disabled:before:rounded-2xl
  disabled:before:shadow-[0_0_10px_rgba(16,185,129,0.10),0_0_24px_rgba(16,185,129,0.06)]
  disabled:before:opacity-100 disabled:before:-z-10
"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Abdul Razack. All rights reserved.
        </p>
      </footer>
    </motion.section>
  );
}
