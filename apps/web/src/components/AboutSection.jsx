export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#EEF2FF] rounded-full opacity-40 blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2
            className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-bold text-[#1F2937] mb-4"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            About Me
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
        </div>

        {/* Content */}
        <div className="space-y-6 text-center md:text-left">
          <p
            className="text-[17px] md:text-[19px] leading-relaxed text-[#374151]"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            I am{" "}
            <span className="font-bold text-[#1F2937]">
              Coolieo Giovanni Bowley
            </span>
            , a final-year{" "}
            <span className="font-bold text-[#1F2937]">
              Bachelor of Science in Computer Science
            </span>{" "}
            student at the{" "}
            <span className="font-bold text-[#1F2937]">
              University of Technology, Jamaica
            </span>
            , within the{" "}
            <span className="font-semibold text-[#6366F1]">
              School of Computing and Information Technology (SCIT)
            </span>{" "}
            under the{" "}
            <span className="font-semibold text-[#6366F1]">
              Faculty of Engineering and Computing (FENC)
            </span>
            .
          </p>

          <p
            className="text-[17px] md:text-[19px] leading-relaxed text-[#374151]"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            I am motivated, disciplined, and eager to work in a challenging
            professional environment where my{" "}
            <span className="font-semibold text-[#1F2937]">
              technical expertise
            </span>
            ,{" "}
            <span className="font-semibold text-[#1F2937]">
              problem-solving abilities
            </span>
            , and{" "}
            <span className="font-semibold text-[#1F2937]">
              interpersonal skills
            </span>{" "}
            can contribute to organizational growth and efficiency.
          </p>

          <div className="bg-gradient-to-r from-[#EEF2FF] to-[#E0E7FF] rounded-2xl p-8 my-8">
            <p
              className="text-[17px] md:text-[19px] leading-relaxed text-[#374151]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              My academic background has exposed me to a wide range of computing
              disciplines, including{" "}
              <span className="font-semibold text-[#6366F1]">
                software development
              </span>
              ,{" "}
              <span className="font-semibold text-[#6366F1]">
                operating systems
              </span>
              ,{" "}
              <span className="font-semibold text-[#6366F1]">
                computer security
              </span>
              ,{" "}
              <span className="font-semibold text-[#6366F1]">
                artificial intelligence
              </span>
              , <span className="font-semibold text-[#6366F1]">networking</span>
              ,{" "}
              <span className="font-semibold text-[#6366F1]">
                data structures
              </span>
              , and{" "}
              <span className="font-semibold text-[#6366F1]">
                bioinformatics
              </span>
              . I enjoy applying both theoretical knowledge and practical skills
              to solve real-world problems efficiently.
            </p>
          </div>

          <p
            className="text-[17px] md:text-[19px] leading-relaxed text-[#374151]"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            In addition to my technical interests, I am friendly and
            customer-oriented, with experience working in team-based
            environments. I value{" "}
            <span className="font-semibold text-[#1F2937]">
              continuous learning
            </span>
            ,{" "}
            <span className="font-semibold text-[#1F2937]">
              professional growth
            </span>
            , and{" "}
            <span className="font-semibold text-[#1F2937]">
              clear communication
            </span>
            .
          </p>
        </div>

        {/* Special Skills highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🎯",
              title: "Problem Solving",
              desc: "Strong analytical and critical-thinking abilities",
            },
            {
              icon: "🤝",
              title: "Team Player",
              desc: "Work independently and collaboratively in teams",
            },
            {
              icon: "💬",
              title: "Communication",
              desc: "Excellent interpersonal skills",
            },
            {
              icon: "📊",
              title: "Organization",
              desc: "Time management and attention to detail",
            },
            {
              icon: "🚀",
              title: "Adaptability",
              desc: "Quick to learn new technologies",
            },
            {
              icon: "✨",
              title: "Excellence",
              desc: "Commitment to quality in all work",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:shadow-lg hover:border-[#6366F1] transition-all duration-200"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3
                className="font-bold text-[18px] text-[#1F2937] mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {skill.title}
              </h3>
              <p
                className="text-[15px] text-[#6B7280]"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
