"use client";

import {
  Download,
  MessageCircle,
  Briefcase,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function PortfolioHero() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF] relative flex items-center justify-center px-6 py-32 md:py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#DDD6FE] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#BFDBFE] rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Main content */}
        <div className="text-center mb-12">
          {/* Greeting */}
          <div className="mb-6">
            <p
              className="text-[18px] md:text-[20px] font-medium text-[#6366F1] mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Hi there! 👋 I'm
            </p>
          </div>

          {/* Name - Large and bold */}
          <h1
            className="text-[44px] md:text-[72px] lg:text-[88px] leading-[0.95] font-extrabold text-[#1F2937] tracking-tight mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="block">COOLIEO GIOVANNI</span>
            <span className="block relative inline-block">
              BOWLEY
              {/* Decorative underline */}
              <div className="absolute left-0 right-0 -bottom-2 h-2 bg-[#C7D2FE] opacity-60 rounded-full transform -rotate-1"></div>
            </span>
          </h1>

          {/* Title/Role */}
          <div className="mb-8">
            <p
              className="text-[20px] md:text-[26px] font-semibold text-[#4B5563] leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Final-Year Computer Science Student
              <br />
              <span className="text-[#6366F1]">
                Aspiring Software & Web Developer
              </span>
            </p>
          </div>

          {/* Contact info badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <MapPin size={16} className="text-[#6366F1]" />
              <span
                className="text-[14px] font-medium text-[#1F2937]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                St. Catherine, Jamaica
              </span>
            </div>
            <a
              href="mailto:coolieobowley95@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:border-[#6366F1] hover:shadow-md transition-all duration-200"
            >
              <Mail size={16} className="text-[#6366F1]" />
              <span
                className="text-[14px] font-medium text-[#1F2937]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                coolieobowley95@gmail.com
              </span>
            </a>
            <a
              href="tel:+18765372226"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:border-[#6366F1] hover:shadow-md transition-all duration-200"
            >
              <Phone size={16} className="text-[#6366F1]" />
              <span
                className="text-[14px] font-medium text-[#1F2937]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                (876) 537-2226
              </span>
            </a>
          </div>

          {/* Tagline */}
          <div className="max-w-3xl mx-auto mb-12">
            <p
              className="text-[16px] md:text-[18px] font-normal text-[#4B5563] leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Motivated and detail-oriented final-year Computer Science student
              at the{" "}
              <span className="font-semibold text-[#1F2937]">
                University of Technology, Jamaica
              </span>
              , with a strong foundation in{" "}
              <span className="font-semibold text-[#1F2937]">
                programming, web development, and software engineering
                principles
              </span>
              .
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="group bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#6366F1]/30 flex items-center gap-2 min-w-[200px] justify-center"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <MessageCircle size={18} />
              Contact Me
            </button>
            <button
              onClick={() => window.print()}
              className="group bg-white hover:bg-gray-50 text-[#1F2937] border-2 border-[#E5E7EB] hover:border-[#6366F1] font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg flex items-center gap-2 min-w-[200px] justify-center"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Download size={18} />
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#6366F1] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#6366F1] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
