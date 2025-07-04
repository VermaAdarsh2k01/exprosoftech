import React from "react";
// import {
//   DeviceMobile,
//   Plugs,
//   ArrowsClockwise,
//   Shield,
//   Users,
// } from "@phosphor-icons/react";
import { FaArrowRight } from "react-icons/fa";

interface MobileFeature {
  title: string;
  description: string;
  // icon: React.ForwardRefExoticComponent<any>;
  iconName: string;
}

const mobileFeatures: MobileFeature[] = [
  {
    title: "Enhanced Field Productivity",
    description:
      "By streamlining tasks and reducing manual work, sales reps can focus more on customer interactions and revenue-generating activities. Our AI-powered tools help increase daily customer visits by up to 40%.",
    // icon: DeviceMobile,
    iconName: "DeviceMobile",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "The analytics and reporting features empower managers to make informed decisions based on real-time insights, enabling strategic planning that aligns with business goals.",
    // icon: ArrowsClockwise,
    iconName: "ArrowsClockwise",
  },
  {
    title: "Boosted Customer Satisfaction",
    description:
      "Through optimized routes, personalized service, and real-time inventory updates, customers experience faster, more reliable service, building trust and brand loyalty.",
    // icon: Users,
    iconName: "Users",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption and compliance with global data protection standards ensure your sensitive business data remains secure and protected.",
    // icon: Shield,
    iconName: "Shield",
  },
];

interface MobileComponentSFAProps {
  className?: string;
}

export const MobileComponentSFA: React.FC<MobileComponentSFAProps> = ({
  className,
}) => {
  return (
    <section className="w-full h-fit lg:h-[100vh] px-4 lg:px-32 py-16 bg-white flex items-center justify-center">
      <div className="w-full h-fit bg-[#E9F2FF] rounded-[2rem] px-6 py-12 relative md:px-24 md:py-16">
        {/* SVG Background */}
        <svg
          className="absolute top-0 left-0 w-full h-full z-0"
          width="1302"
          height="344"
          viewBox="0 0 1302 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_49_131)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0.817397C34.1237 52.6033 84.1307 100.247 147.799 141.14C275.002 222.839 452.816 274.5 651 274.5C849.184 274.5 1027 222.839 1154.2 141.14C1217.87 100.247 1267.88 52.6033 1302 0.817383V109.892C1270.09 142.689 1232.86 172.628 1191.49 199.197C1051.59 289.052 860.402 343.5 651 343.5C441.598 343.5 250.412 289.052 110.511 199.197C69.144 172.628 31.9124 142.689 0 109.892L0 0.817397Z"
              fill="url(#paint0_linear_49_131)"
              fillOpacity="0.95"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_49_131"
              x="-78.1"
              y="-77.2826"
              width="1458.2"
              height="498.883"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="39.05"
                result="effect1_foregroundBlur_49_131"
              />
            </filter>
            <linearGradient
              id="paint0_linear_49_131"
              x1="651"
              y1="0.817383"
              x2="651"
              y2="343.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#0059FF" stopOpacity="0.14" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 flex items-center">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 w-full">
            <div className="order-2 lg:order-1">
              <span
                className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-wide text-primary bg-primary/10 rounded-full"
                data-aos="fade-up-sm"
              >
                Why Choose Fieldkonnect
              </span>
              <h2
                className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent"
                data-aos="fade-up-sm"
              >
                Transform Your Sales Operations
              </h2>
              <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                Fieldkonnect offers a powerful way to enhance field
                productivity, boost sales efficiency, and drive customer
                satisfaction. From real-time order management to intelligent
                route planning and data-driven insights, we empower your sales
                force with everything they need to succeed.
              </p>
              <div className="space-y-8">
                {mobileFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-6 group"
                    data-aos="fade-up-sm"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        {/* <feature.icon size={28} weight="duotone" /> */}
                        <div className="w-7 h-7 bg-current rounded"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative" data-aos="fade-left">
                {/* Image Container */}
                <div className="flex items-end justify-center h-[400px]">
                  <img
                    src="/images/handOnly.png"
                    alt="Fieldkonnect Mobile App Interface"
                    className="object-contain w-auto h-full max-w-[65%]"
                  />
                </div>

                {/* Floating Stats */}
                <div className="mt-6 bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg max-w-[90%] mx-auto">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-xl font-bold text-primary">40%</div>
                      <div className="text-sm text-gray-600">
                        Increased Productivity
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">3x</div>
                      <div className="text-sm text-gray-600">
                        Faster Time-to-Market
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">85%</div>
                      <div className="text-sm text-gray-600">
                        Customer Retention
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileComponentSFA;
