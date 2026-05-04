import { Code, Layers, Wrench, Lightbulb } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Development",
      color: "#6366F1",
      bgColor: "#EEF2FF",
      skills: ["C", "C++", "C#", "Java", "Python", "HTML"],
    },
    {
      icon: Layers,
      title: "Web & Software Concepts",
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
      skills: [
        "Web Development",
        "Software Engineering Principles",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Productivity",
      color: "#3B82F6",
      bgColor: "#EFF6FF",
      skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
    },
    {
      icon: Lightbulb,
      title: "Additional Technical Skills",
      color: "#06B6D4",
      bgColor: "#ECFEFF",
      skills: ["Small appliance repair", "Basic technical maintenance"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-[#F9FAFB] to-white py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DDD6FE] rounded-full opacity-20 blur-3xl"></div>

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
            Technical Skills
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
            Proficient in several programming languages and development tools,
            with the ability to adapt quickly to new technologies.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] hover:shadow-xl hover:border-[#6366F1] transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: category.bgColor }}
                  >
                    <IconComponent
                      size={28}
                      style={{ color: category.color }}
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[20px] text-[#1F2937] leading-tight"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-200"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <span
                        className="text-[16px] text-[#374151] group-hover:text-[#1F2937] group-hover:translate-x-1 transition-all duration-200"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages section */}
        <div className="mt-12 bg-gradient-to-r from-[#EEF2FF] via-[#F5F3FF] to-[#EFF6FF] rounded-2xl p-8">
          <h3
            className="font-bold text-[24px] text-[#1F2937] mb-6 text-center"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Languages 🌍
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="inline-block px-6 py-3 bg-white rounded-full shadow-sm border border-[#E5E7EB]">
                <span
                  className="font-bold text-[18px] text-[#1F2937]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  English
                </span>
                <span
                  className="ml-2 text-[16px] text-[#6B7280]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  — Native
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block px-6 py-3 bg-white rounded-full shadow-sm border border-[#E5E7EB]">
                <span
                  className="font-bold text-[18px] text-[#1F2937]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Spanish
                </span>
                <span
                  className="ml-2 text-[16px] text-[#6B7280]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  — Conversational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
