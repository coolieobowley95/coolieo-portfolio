"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactFooter() {
  return (
    <>
      <section
        id="contact"
        className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] py-20 md:py-32 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative text-center text-white">
          <h2
            className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] font-bold mb-6"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            Let's Connect! 🚀
          </h2>
          <p
            className="text-[18px] md:text-[20px] mb-12 text-white/90 max-w-2xl mx-auto"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:coolieobowley95@gmail.com"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-6 transition-all duration-200 hover:scale-105"
            >
              <Mail size={32} className="mx-auto mb-3" />
              <p
                className="font-semibold text-[16px]"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                coolieobowley95@gmail.com
              </p>
            </a>
            <a
              href="tel:+18765372226"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-6 transition-all duration-200 hover:scale-105"
            >
              <Phone size={32} className="mx-auto mb-3" />
              <p
                className="font-semibold text-[16px]"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                (876) 537-2226
              </p>
            </a>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <MapPin size={32} className="mx-auto mb-3" />
              <p
                className="font-semibold text-[16px]"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                St. Catherine, Jamaica
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1F2937] py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p
              className="text-[#9CA3AF] text-[15px]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              © 2026 Coolieo Giovanni Bowley. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-[#9CA3AF] hover:text-white transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="#"
                className="text-[#9CA3AF] hover:text-white transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="#"
                className="text-[#9CA3AF] hover:text-white transition-colors"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
