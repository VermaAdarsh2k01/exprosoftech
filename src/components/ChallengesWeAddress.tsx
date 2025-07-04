import React from "react";
import SectionHeader from "./SectionHeader";
import { sanityClient } from "sanity:client";

interface HeadingProps {
  subtitle: string;
  title: string;
  description: string;
}

interface ChallengeType {
  title: string;
  description: string;
  icon: string;
}

interface ChallengesWeAddressProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    challengesList: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  }
}

// const challengesData: ChallengesData = {
//   sectionTitle: "Challenges We Address",
//   subtitle:
//     "We address the critical challenges organizations face across industries, enabling them to achieve operational excellence and financial success",
//   challenges: [
//     {
//       title: "Stagnant Sales Growth",
//       description:
//         "Experience tailored financial counsel that maximizes your assets and secures your financial future.",
//       icon: "/images/consulting/demand-driven-business-transformation/challenges/stagnant-sales-growth.png",
//     },
//     {
//       title: "Market Share Stagnation",
//       description:
//         "Optimize inventory for a competitive edge—boost accuracy, cut costs, and streamline the supply chain.",
//       icon: "/images/consulting/demand-driven-business-transformation/challenges/market-share-stagnation.png",
//     },
//     {
//       title: "Poor Cash Flow",
//       description:
//         "Optimized procurement and faster deliveries enhance revenue cycles while streamlining vendor payments and minimizing capital tie-ups.",
//       icon: "/images/consulting/demand-driven-business-transformation/challenges/poor-cash-flow.png",
//     },
//     {
//       title: "Demand Variability",
//       description:
//         "DDMRP stabilizes demand by buffering fluctuations, ensuring steady supply, reducing stockouts, and improving responsiveness for smoother operations.",
//       icon: "/images/consulting/demand-driven-business-transformation/challenges/demand-variability.png",
//     },
//     {
//       title: "Delayed Customer Deliveries",
//       description:
//         "Navigate your projects with precision using our strategic project management solutions.",
//       icon: "/images/consulting/demand-driven-business-transformation/challenges/delayed-customer-deliveries.png",
//     },
//     {
//       title: "High Inventory Cost",
//       description:
//         "Discover tailored solutions to strategically optimize your operations and enhance business efficiency.",
//       icon: "/images/consulting/demand-driven-business-transformation/challenges/high-inventory-cost.png",
//     },
//   ],
// };

const ChallengesWeAddress = ({ content }: ChallengesWeAddressProps) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8">
        <div
          className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-slate-50/95 to-white/40"
          style={{
            background: `url('/images/consulting/demand-driven-business-transformation/challenges/bg.png') no-repeat center center`,
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10 px-4 py-12 sm:px-6 md:px-12 lg:px-16 lg:py-24">
            <SectionHeader
              tagline={content.subtitle}
              heading={content.title}
              subheading={content.description}
              className="mb-10 lg:mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {content.challengesList.map((challenge, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 transition-all duration-300 hover:shadow-xl hover:bg-white border border-white/60 hover:border-white/80"
                >
                  <div className="flex flex-row sm:flex-col items-start sm:items-stretch gap-5 sm:gap-6">
                    <div className="flex-shrink-0 pt-1 sm:pt-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#E6F0FF] rounded-xl sm:rounded-2xl group-hover:bg-[#CCE3FF] transition-colors duration-300">
                        <img
                          src={challenge.icon}
                          alt={challenge.title}
                          width={48}
                          height={48}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 space-y-2.5 sm:space-y-3">
                      <h3 className="text-[15px] sm:text-xl font-semibold text-gray-900 group-hover:text-[#0066FF] transition-colors duration-300 leading-tight">
                        {challenge.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />
        </div>
      </div>
    </section>
  );
};

export default ChallengesWeAddress;
