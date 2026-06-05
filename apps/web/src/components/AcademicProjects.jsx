"use client";

import { BookOpen, Database, Zap, GitBranch } from "lucide-react";

export default function AcademicProjects() {
  const academicProjects = [
    {
      icon: Zap,
      title: "AI Readiness Research",
      type: "Final-Year Research Project",
      description: "Investigated AI readiness among academic staff across multiple faculties at the University of Technology, Jamaica.",
      details: [
        "Survey research methodology",
        "Data analysis and interpretation",
        "AI adoption recommendations",
      ],
      color: "#6366F1",
      bgColor: "#EEF2FF",
    },
    {
      icon: GitBranch,
      title: "Path-Finder AI",
      type: "Artificial Intelligence Project",
      description: "Implemented multiple pathfinding algorithms to model and optimize road-network navigation.",
      details: [
        "Dijkstra's Algorithm",
        "A* Algorithm",
        "BFS & DFS Implementation",
        "Road-network optimization",
      ],
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
    },
    {
      icon: Database,
      title: "Shortest Route System",
      type: "Analysis of Algorithms Project",
      description: "Focused on route optimization and transportation efficiency using advanced graph algorithms.",
      details: [
        "Graph algorithm analysis",
        "Runtime complexity analysis",
        "Optimization techniques",
        "Performance comparison",
      ],
      color: "#3B82F6",
      bgColor: "#EFF6FF",
    },
    {
      icon: Database,
      title: "HRM System Design",
      type: "Software Engineering Project",
      description: "Comprehensive system design project involving database and application architecture.",
      details: [
        "Entity-Relationship Diagrams",
        "UML Diagrams",
        "Database normalization",
        "System architecture design",
      ],
      color: "#F59E0B",
      bgColor: "#FEF3C7",
    },
    {
      icon: BookOpen,
      title: "JHT Trucking System",
      type: "Java-Based Application",
      description: "Logistics and trucking management application with comprehensive management features.",
      details: [
        "Employee management",
        "Route management",
        "Trip tracking",
        "Java backend development",
      ],
      color: "#10B981",
      bgColor: "#ECFDF5",
    },
    {
      icon: Zap,
      title: "Route Optimization System",
      type: "Course Project",
      description: "Advanced analysis of transportation networks and logistics optimization.",
      details: [
        "Network analysis",
        "Algorithm optimization",
        "Performance metrics",
        "Real-world applications",
      ],
      color: "#DC2626",
      bgColor: "#FEE2E2",
    },
  ];

  return (
    <section
      id="academic"
      className="bg-gradient-to-br from-[#F9FAFB] to-white py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#BFDBFE] rounded-full opacity-10 blur-3xl"></div>

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
            Academic Projects
            <div className="inline-block ml-3">
              <svg
                width="100"
                height="12"
                viewBox="0 0 100 12"
                className="inline-block"
              >
                <path
                  d="M2 6C25 4 50 3 75 6C85 7 95 8 98 6"
                  stroke="#C7D2FE"
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
            Key course projects and research work demonstrating academic excellence and application of computer science principles.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:shadow-xl hover:border-[#6366F1] transition-all duration-300 flex flex-col"
              >
                {/* Icon and title section */}
                <div className="mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: project.bgColor }}
                  >
                    <IconComponent
                      size={28}
                      style={{ color: project.color }}
                      strokeWidth={2}
                    />
                  </div>

                  <h3
                    className="text-[22px] font-bold text-[#1F2937] mb-1"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[13px] font-semibold text-[#6B7280]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {project.type}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-[15px] text-[#4B5563] mb-6 flex-grow"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {project.description}
                </p>

                {/* Details list */}
                <div className="pt-6 border-t border-[#E5E7EB]">
                  <ul className="space-y-2">
                    {project.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                          style={{ backgroundColor: project.color }}
                        ></div>
                        <span
                          className="text-[14px] text-[#374151]"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
