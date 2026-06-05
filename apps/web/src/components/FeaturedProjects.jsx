"use client";

import { ExternalLink, Github, Code2 } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "PULSEOS-SAAS",
      description: "AI-powered life assistant platform that combines productivity, planning, goal tracking, reflection, and personal intelligence.",
      longDescription: "A comprehensive full-stack application designed to help users manage their lives with AI-powered insights. Features include intelligent task management, goal tracking with progress visualization, and personal analytics.",
      tags: ["AI Integration", "Productivity System", "Full-Stack Architecture"],
      status: "Active Development",
      github: "https://github.com/coolieobowley95",
      tech: ["React", "Node.js", "AI", "Full-Stack"],
      bgColor: "#EEF2FF",
      accentColor: "#6366F1",
    },
    {
      id: 2,
      title: "Notiq",
      description: "AI-powered note-taking and knowledge management platform with intelligent organization and retrieval.",
      longDescription: "A modern note-taking application leveraging AI to help users organize, search, and synthesize their knowledge. Built with a modern tech stack for optimal performance.",
      tags: ["React", "Vite", "AI", "Knowledge Management"],
      tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "Cohere AI"],
      status: "Deployment In Progress",
      github: "https://github.com/coolieobowley95",
      bgColor: "#F5F3FF",
      accentColor: "#8B5CF6",
    },
    {
      id: 3,
      title: "FirstAid AI Assistant",
      description: "AI-powered first aid and emergency guidance platform providing real-time assistance during medical emergencies.",
      longDescription: "An intelligent first aid companion that provides immediate guidance for common injuries and medical emergencies. Features planned improvements including an expanded medical knowledge base.",
      tags: ["Injury Guidance", "Emergency Support", "AI-Powered"],
      tech: ["Python", "AI", "Medical Knowledge", "Full-Stack"],
      status: "Active",
      github: "https://github.com/coolieobowley95/firstaid-ai-assistant",
      bgColor: "#FEE2E2",
      accentColor: "#DC2626",
    },
    {
      id: 4,
      title: "NOVALANG",
      description: "Custom programming language and interpreter built from scratch with AI-assisted interpretation.",
      longDescription: "A complete compiler/interpreter project implementing lexing, parsing, and tree-walking interpretation. Demonstrates deep understanding of language design and implementation principles.",
      tags: ["Lexer", "Parser", "Interpreter", "OOP"],
      tech: ["Python", "PLY", "Flask", "OpenAI API"],
      status: "Completed",
      github: "https://github.com/coolieobowley95/NOVALANG",
      bgColor: "#FEF3C7",
      accentColor: "#F59E0B",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DDD6FE] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BFDBFE] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2
            className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-bold text-[#1F2937] mb-4"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            Featured Projects
            <div className="inline-block ml-3">
              <svg
                width="100"
                height="12"
                viewBox="0 0 100 12"
                className="inline-block"
              >
                <path
                  d="M2 6C25 4 50 3 75 6C85 7 95 8 98 6"
                  stroke="#6366F1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </h2>
          <p
            className="text-[18px] text-[#6B7280] max-w-2xl mx-auto"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Showcasing my most impactful projects that demonstrate technical expertise, creativity, and problem-solving abilities.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#6366F1] transition-all duration-300 hover:shadow-xl"
            >
              {/* Background */}
              <div
                className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                style={{ backgroundColor: project.bgColor }}
              ></div>

              {/* Content */}
              <div className="relative p-8 flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-[24px] md:text-[28px] font-bold text-[#1F2937] leading-tight"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="text-[12px] font-bold px-3 py-1 rounded-full whitespace-nowrap ml-2"
                      style={{
                        backgroundColor: project.accentColor,
                        color: "white",
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p
                    className="text-[15px] font-semibold text-[#4B5563] leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-[15px] text-[#6B7280] mb-6 flex-grow"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {project.longDescription}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[12px] px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#374151] font-medium"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="mb-6 pb-6 border-t border-[#D1D5DB]">
                  <p
                    className="text-[12px] font-semibold text-[#6B7280] mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    TECHNOLOGIES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-[13px] px-2.5 py-1 rounded-md text-[#374151] font-medium"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.6)",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#E5E7EB] hover:border-[#6366F1] text-[#1F2937] font-semibold transition-all duration-200 hover:bg-white hover:shadow-md"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <Github size={16} />
                    <span className="text-[13px]">GitHub</span>
                  </a>
                  {project.status === "Active" && (
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-md"
                      style={{
                        backgroundColor: project.accentColor,
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <ExternalLink size={16} />
                      <span className="text-[13px]">View</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/coolieobowley95"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#6366F1] font-semibold text-[16px] hover:text-[#4F46E5] transition-colors duration-200 group"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            View all projects on GitHub
            <Code2 size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
