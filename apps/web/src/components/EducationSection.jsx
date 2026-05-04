import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function EducationSection() {
  const courses = [
    "Programming I & II",
    "Web Development",
    "Software Engineering",
    "Operating Systems",
    "Computer Security",
    "Computer Logic & Design",
    "Data Structures",
    "Bioinformatics",
    "Artificial Intelligence",
    "Object-Oriented & Advanced Programming",
    "Computer Networking",
    "Information Technology Fundamentals",
    "Discrete Mathematics",
    "Linear Algebra",
    "Statistics",
    "Calculus",
    "Academic Reading & Writing",
    "Critical Thinking",
  ];

  const csecSubjects = [
    { name: "English A", grade: "2" },
    { name: "Mathematics", grade: "1" },
    { name: "Industrial Technology (C.A.D)", grade: "2" },
    { name: "Mechanical Engineering", grade: "3" },
    { name: "Social Studies", grade: "3" },
    { name: "Spanish", grade: "3" },
    { name: "Physics", grade: "3" },
  ];

  const capeSubjects = [
    { name: "Communication Studies", grade: "3" },
    { name: "Caribbean Studies", grade: "2" },
    { name: "Environmental Science", grade: "2" },
    { name: "Building & Mechanical Engineering Drawing (Unit 1)", grade: "3" },
    { name: "Building & Mechanical Engineering Drawing (Unit 2)", grade: "5" },
    { name: "Green Engineering (Unit 1)", grade: "2" },
    { name: "Green Engineering (Unit 2)", grade: "3" },
    { name: "Integrated Mathematics", grade: "3" },
  ];

  return (
    <section
      id="education"
      className="bg-white py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#F5F3FF] rounded-full opacity-40 blur-3xl"></div>

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
            Education
            <div className="inline-block ml-3">
              <svg
                width="100"
                height="12"
                viewBox="0 0 100 12"
                className="inline-block"
              >
                <path
                  d="M2 6C25 4 50 3 75 6C85 7 95 8 98 6"
                  stroke="#DDD6FE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </h2>
        </div>

        {/* University Education - Featured */}
        <div className="mb-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <GraduationCap size={32} className="text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3
                className="font-bold text-[28px] md:text-[32px] mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                University of Technology, Jamaica
              </h3>
              <p
                className="text-[20px] font-semibold text-white/90 mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Bachelor of Science in Computer Science
              </p>
              <p
                className="text-[16px] text-white/80 mb-4"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Ongoing – Final Year
              </p>
              <div className="space-y-1 text-white/90">
                <p
                  className="text-[15px]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Faculty of Engineering and Computing
                </p>
                <p
                  className="text-[15px]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  School of Computing and Information Technology (SCIT)
                </p>
              </div>
            </div>
          </div>

          {/* Relevant Courses */}
          <div className="mt-8">
            <h4
              className="font-bold text-[20px] mb-4 flex items-center gap-2"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <BookOpen size={20} />
              Relevant Courses & Projects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-[14px] hover:bg-white/20 transition-colors duration-200"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSEC and CAPE in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CSEC */}
          <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-2xl p-8 border border-[#BFDBFE]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                <Award size={24} className="text-white" strokeWidth={2} />
              </div>
              <h3
                className="font-bold text-[22px] text-[#1F2937]"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Caribbean Examinations Council (CSEC)
              </h3>
            </div>
            <div className="space-y-3">
              {csecSubjects.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white rounded-lg px-4 py-3"
                >
                  <span
                    className="text-[15px] text-[#374151]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {subject.name}
                  </span>
                  <span
                    className="font-bold text-[15px] text-[#3B82F6] bg-[#EFF6FF] px-3 py-1 rounded-full"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Grade {subject.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CAPE */}
          <div className="bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] rounded-2xl p-8 border border-[#DDD6FE]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center">
                <Award size={24} className="text-white" strokeWidth={2} />
              </div>
              <h3
                className="font-bold text-[22px] text-[#1F2937]"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Caribbean Advanced Proficiency Examination (CAPE)
              </h3>
            </div>
            <div className="space-y-3">
              {capeSubjects.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white rounded-lg px-4 py-3"
                >
                  <span
                    className="text-[15px] text-[#374151]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {subject.name}
                  </span>
                  <span
                    className="font-bold text-[15px] text-[#8B5CF6] bg-[#F5F3FF] px-3 py-1 rounded-full"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Grade {subject.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
