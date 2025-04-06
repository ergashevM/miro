import React, { useState } from "react";
import Right from "../assets/right.svg";
import Checked from "../assets/checked.svg";
import UX from "../assets/ux.svg";
import Marketing from "../assets/marketing.webp";
import Management from "../assets/management.webp";
import Engineering from "../assets/engineering.webp";
import Consultants from "../assets/consultants.webp";
import Agile from "../assets/tree.jpg";
import Sales from "../assets/sales.webp";
import Diamond from "../assets/diamond.svg";
import Xd from "../assets/xd.jpg";
import Figma from "../assets/figma.svg";
import Notion from "../assets/notion.svg";

const Teams = () => {
  const [selected, setSelected] = useState("UX & Design");

  const content = {
    "UX & Design": {
      description: [
        "Build low-fi wireframes",
        "Involve stakeholders in the design process",
        "Run engaging design workshops",
      ],
      image: UX,
    },
    Marketing: {
      description: [
        "Create compelling marketing campaigns",
        "Analyze market trends",
        "Engage customers effectively",
      ],
      image: Marketing,
    },
    "Product Management": {
      description: [
        "Manage product lifecycles",
        "Coordinate with cross-functional teams",
        "Define product vision and strategy",
      ],
      image: Management,
    },
    Engineering: {
      description: [
        "Develop robust software solutions",
        "Collaborate with product teams",
        "Ensure high-quality code delivery",
      ],
      image: Engineering,
    },
    "Consultants": {
        description: [
          "Develop robust software solutions",
          "Collaborate with product teams",
          "Ensure high-quality code delivery",
        ],
        image: Consultants,
      },
    "Agile Coaches": {
      description: [
        "Facilitate agile practices",
        "Coach teams on agile methodologies",
        "Promote continuous improvement",
      ],
      image: Agile,
    },
    Sales: {
      description: [
        "Build customer relationships",
        "Achieve sales targets",
        "Provide product demonstrations",
      ],
      image: Sales,
    },
  };

  return (
    <div className="w-full max-w-[1120px] lg:h-auto h-auto mx-auto flex flex-col justify-center mb-6 overflow-hidden mt-20 px-4">
      <h1 className="font-bold font-inter text-[32px] md:text-[48px] leading-[56px] text-[#050038] text-left">
        Built for all kinds of teams
      </h1>
      <div className="flex items-center justify-between flex-wrap mt-10 mb-10">
        {Object.keys(content).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`w-auto h-[48px] px-6 ${
              selected === key
                ? "bg-[#F1F3FD] border border-[#F2F2F2] text-[#050038]"
                : "bg-white text-[#050038]"
            } font-helvetiva font-normal text-sm leading-[20px] rounded-[24px] transition duration-300`}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex items-start justify-between flex-col lg:flex-row">
        <div className="w-full max-w-[360px] px-5">
          {content[selected].description.map((item, index) => (
            <p key={index} className="font-normal font-helvetiva text-[18px] leading-[24px] text-[#050038B2] flex items-start mb-5 gap-x-4">
              <img src={Checked} alt="checked" /> {item}
            </p>
          ))}
          <button className="flex items-center gap-x-2 font-helvetiva font-normal text-[18px] text-[#4262FF] mt-12">
            Learn more
            <img src={Right} alt="right" />
          </button>
          <div>
            <h4 className="font-normal font-helvetiva text-[18px] leading-[24px] text-[#050038B2] mt-12 mb-5">
              Integrate your favorite tools
            </h4>
            <span className="max-w-[203px] flex items-center justify-between">
              <img src={Diamond} alt="diamond" />
              <img src={Xd} alt="xd" />
              <img src={Figma} alt="figma" />
              <img src={Notion} alt="notion" />
            </span>
          </div>
        </div>
        <div className="max-w-[700px] lg:h-[515px] lg:ml-0 ml-5">
          <img src={content[selected].image} alt={selected} />
        </div>
      </div>
    </div>
  );
};

export default Teams;
