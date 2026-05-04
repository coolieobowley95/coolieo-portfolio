import { Briefcase, Trophy, Star, Music, Palette, Cpu } from "lucide-react";

export default function ExperienceAwardsSection() {
  const awards = [
    {
      icon: Trophy,
      title: "1st Deputy Head Boy",
      org: "Jose Marti Technical High School",
      period: "2 years",
      color: "#F59E0B",
    },
    {
      icon: Star,
      title: "Prefect",
      org: "Served for 4 years with no demerits or negative reviews",
      period: "4 years",
      color: "#6366F1",
    },
    {
      icon: Trophy,
      title: "5th Place on Caribbean Merit List",
      org: "Green Engineering",
      period: "Academic Excellence",
      color: "#10B981",
    },
  ];

  const hobbies = [
    { icon: Palette, title: "Creative Arts", desc: "Drawing and painting" },
    {
      icon: Music,
      title: "Music",
      desc: "Listening to, writing, and creating music",
    },
    {
      icon: Cpu,
      title: "Technology",
      desc: "Repair and hands-on technical work",
    },
    {
      icon: Star,
      title: "AI & Innovation",
      desc: "Interest in artificial intelligence",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-[#F9FAFB] to-white py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#DBEAFE] rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Work Experience Section */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2
              className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-bold text-[#1F2937] mb-4"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                letterSpacing: "-0.5px",
              }}
            >
              Work Experience
              <div className="inline-block ml-3">
                <svg
                  width="100"
                  height="12"
                  viewBox="0 0 100 12"
                  className="inline-block"
                >
                  <path
                    d="M2 6C25 4 50 3 75 6C85 7 95 8 98 6"
                    stroke="#BFDBFE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#E5E7EB]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase size={28} className="text-white" strokeWidth={2} />
              </div>
              <div>
                <h3
                  className="font-bold text-[24px] text-[#1F2937] mb-1"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Community Wholesale
                </h3>
                <p
                  className="text-[18px] font-semibold text-[#6366F1] mb-1"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Cashier
                </p>
                <p
                  className="text-[15px] text-[#6B7280]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Sligoville P.O, Jamaica
                </p>
              </div>
            </div>

            <ul className="space-y-3 ml-2">
              {[
                "Processed customer orders and handled payments accurately",
                "Balanced cash drawers at the beginning and end of shifts",
                "Investigated and resolved cash discrepancies",
                "Maintained clean, organized, and well-stocked checkout areas",
                "Delivered excellent customer service through friendly interactions",
                "Supported team operations during peak periods",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6366F1] mt-2 flex-shrink-0"></div>
                  <span
                    className="text-[16px] text-[#374151]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2
              className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-bold text-[#1F2937] mb-4"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                letterSpacing: "-0.5px",
              }}
            >
              Awards & Recognition
              <div className="inline-block ml-3">
                <svg
                  width="100"
                  height="12"
                  viewBox="0 0 100 12"
                  className="inline-block"
                >
                  <path
                    d="M2 6C25 4 50 3 75 6C85 7 95 8 98 6"
                    stroke="#FDE68A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md border border-[#E5E7EB] hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${award.color}20` }}
                  >
                    <IconComponent
                      size={24}
                      style={{ color: award.color }}
                      strokeWidth={2}
                    />
                  </div>
                  <h3
                    className="font-bold text-[18px] text-[#1F2937] mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {award.title}
                  </h3>
                  <p
                    className="text-[15px] text-[#6B7280] mb-1"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {award.org}
                  </p>
                  <p
                    className="text-[14px] font-semibold"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      color: award.color,
                    }}
                  >
                    {award.period}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div>
          <div className="mb-12 text-center">
            <h2
              className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-bold text-[#1F2937] mb-4"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                letterSpacing: "-0.5px",
              }}
            >
              Hobbies & Interests
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-xl p-6 border border-[#E5E7EB] hover:border-[#6366F1] transition-all duration-200 text-center"
                >
                  <IconComponent
                    size={32}
                    className="text-[#6366F1] mx-auto mb-3"
                    strokeWidth={2}
                  />
                  <h3
                    className="font-bold text-[17px] text-[#1F2937] mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {hobby.title}
                  </h3>
                  <p
                    className="text-[14px] text-[#6B7280]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {hobby.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
