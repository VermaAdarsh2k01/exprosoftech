import React from "react";
import SectionHeader from "./SectionHeader";
import { sanityClient } from "sanity:client";
import {
  FiUsers,
  FiSettings,
  FiBox,
  FiTrendingUp,
  FiTarget,
  FiShield,
  FiZap,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiDatabase,
  FiCloud,
  FiCode,
  FiBriefcase,
  FiBarChart2,
} from "react-icons/fi";
import { HiLightBulb, HiOutlineCog } from "react-icons/hi";
import { BiRocket } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";

// Icon mapping for offerings
const iconMap: { [key: string]: React.ComponentType<any> } = {
  // Consulting related icons
  FiLightbulb: HiLightBulb, 
  Users: FiUsers,
  Lightbulb: HiLightBulb,
  TrendingUp: FiTrendingUp,
  Target: FiTarget,
  Shield: FiShield,
  Brain: GiBrain,
  
  // Services related icons
  Settings: FiSettings,
  Cpu: FiCpu,
  Globe: FiGlobe,
  Layers: FiLayers,
  Gear: HiOutlineCog,
  Database: FiDatabase,
  Cloud: FiCloud,
  Code: FiCode,
  
  // Products related icons
  Box: FiBox,
  Zap: FiZap,
  Rocket: BiRocket,
  Lightning: FiZap,
  Briefcase: FiBriefcase,
  
  // Chart related icons
  ChartLineUp: FiTrendingUp,
  ChartBar: FiBarChart2,
  
  // Default icons for each category
  consulting: FiUsers,
  services: FiSettings,
  products: FiBox,
};

// interface OfferingsItem {
//   icon: string;
//   title: string;
//   description: string;
// }

// interface OfferingsData {
//   title: string;
//   subtitle: string;
//   description: string;
//   list: OfferingsItem[];
// }

// interface Heading {
//   _id: string;
//   subtitle?: string;  // Optional since it's not required in schema
//   title: string;
//   description: string;
// }

// interface Card {
//   _id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
// }

interface OfferingsProps {
  data: {
    heading: {
      title: string;
      subtitle: string;
      description: string;
    };
    offerings: Array<{
      title: string;
      description: string;
      iconName: string;  // Changed from icon to iconName
    }>;
  };
}

interface OfferingCard {
  title: string;
  description: string;
  iconName: string;  // Changed from icon to iconName
}

// const offeringsData: OfferingsData = {
//   subtitle: "Comprehensive Offerings",
//   title: "Leverage Our Expertise",
//   description:
//     "Partner with Exprosoftech - From strategy to execution, we empower businesses with expert consulting, hands-on service support, and cutting-edge technology. Whether it's sales acceleration, operations efficiency, supply chain transformation, or digital innovation, our tailored solutions drive sustainable growth and competitive advantage.",
//   list: [
//     {
//       icon: "/images/OfferingsOne.png",
//       title: "Consulting",
//       description: "Expert Guidance, Transformative Results",
//     },
//     {
//       icon: "/images/OfferingsThree.png",
//       title: "Services",
//       description: "Tailored solutions and Turnkey implementation",
//     },
//     {
//       icon: "/images/OfferingsTwo.png",
//       title: "Products",
//       description: "Innovative Tools to Drive Excellence",
//     },
//   ],
// };

// const CARDS_QUERY = `*[_type == "card"]{
//   _id,
//   title,
//   description,
//   "imageUrl": image.asset->url
// }`;

// const HEADINGS_QUERY = `*[_type == "heading"] | order(_createdAt asc) {
//   _id,
//   subtitle,
//   title,
//   description
// }`;

export const Offerings: React.FC<OfferingsProps> = ({ data }) => {

  // Fetch cards with revalidation
  // const cards = await sanityClient.fetch<Card[]>(CARDS_QUERY);

  // const headings = await sanityClient.fetch<Heading[]>(HEADINGS_QUERY, {});

  // const heading = headings[0];

  // Function to render icons based on icon name
  const renderIcon = (iconName: string) => {
    // Try to find the icon in the iconMap
    const IconComponent = iconMap[iconName];
    
    if (IconComponent) {
      return <IconComponent className="text-white w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10" />;
    }
    
    // Default fallback icon
    return <FiTarget className="text-primary w-10 h-10 md:w-12 md:h-12" />;
  };

  return (
    <section className="section">
      <div className="max-w-[75rem] mx-auto px-3">
        <div className="row">
          <div className="mx-auto ">
            <SectionHeader
              tagline={data.heading?.subtitle || ''}
              heading={data.heading?.title || ''}
              subheading={data.heading?.description || ''}
              alignment="center"
            />
          </div>
          <div className="col-12 pt-20 mt-10 ">
            <div className="row g-4 justify-start">
                {data.offerings.map((card: OfferingCard, index: number) => (
                <div
                  key={index}
                  className="md:col-6 lg:col-4 flex justify-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                <div className="min-h-full p-6 shadow-lg rounded-3xl border-2 border-[#c7c7c7] w-[90%] lg:w-full">
                    <div className="mb-6 flex justify-start">
                      <div className="flex h-16 w-16 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-primary">
                        {renderIcon(card.iconName)}
                      </div>
                    </div>
                    <div className="text-left">
                      {card.title && (
                        <h3
                          className="h5 mb-3 md:text-2xl font-medium text-dark tracking-wide"
                          dangerouslySetInnerHTML={{ __html: card.title }}
                        />
                      )}
                      {card.description && (
                        <p
                          className="text-text"
                          dangerouslySetInnerHTML={{ __html: card.description }}
                        />
                      )}
                    </div>
                  </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
