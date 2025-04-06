import React, { useState } from "react";
import Right from "../assets/right.svg";
import Brainstorming from "../assets/brainstorming.svg";
import Diagram from "../assets/diagram.avif";
import Meeting from "../assets/meeting.avif";
import Scrum from "../assets/scrum.png";
import Mapping from "../assets/mapping.webp";
import Research from "../assets/research.webp";
import Strategic from "../assets/strategic.webp";

const Construction = () => {
  const [selected, setSelected] = useState("Brainstorming");

  const content = {
    Brainstorming: {
      title: "Brainstorming",
      description:
        "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
      image: Brainstorming,
    },
    Diagramming: {
      title: "Diagramming",
      description:
        "It's time to use a single diagramming space and achieve great things together. Achieve shared understanding and achieve better results with Miro's diagramming toolset.",
      image: Diagram,
    },
    "Meetings & Workshops": {
      title: "Meetings & Workshops",
      description:
        "Need to hold a brainstorming session or a workshop? Creative energy you can feel, presentations you can’t take your eyes off of, and teams coming together and working as one – Miro will help you bring that in-person experience online.",
      image: Meeting,
    },
    "Scrum Events": {
      title: "Scrum Events",
      description:
        "Scrum events — previously referred to as Scrum ceremonies — are structured meetings that occur before, during, and after Sprints to help guide Agile teams through a product cycle.",
      image: Scrum,
    },
    Mapping: {
      title: "Mapping",
      description:
        "Miro’s mind map maker is the quickest, easiest way for teams to capture, organize, and map out their ideas in a structured way.",
      image: Mapping,
    },
    "Research & Design": {
      title: "Research & Design",
      description:
        "Embrace design thinking and collaborate on design sprints, customer journey maps, wireframes, and more. Generate ideas, uncover insights, and transform the way your team builds products with Miro’s online design tool.",
      image: Research,
    },
    "Strategic Planning": {
      title: "Strategic Planning",
      description:
        "Propel your plans from strategy through execution. Run engaging kickoff sessions, build visual presentations, and manage and track progress collaboratively, all in one online planning tool.",
      image: Strategic,
    },
  };

  return (
    <div className="w-full max-w-[1120px] lg:h-auto h-auto mx-auto flex flex-col justify-center mb-6 overflow-hidden p-5">
      <h1 className="font-bold font-inter text-[32px] md:text-[48px] leading-[56px] text-[#050038] text-left">
        Built for the way you work
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
          <h4 className="font-normal font-helvetiva text-[18px] leading-[24px] text-[#050038]">
            {content[selected].title}
          </h4>
          <p className="font-normal font-helvetiva text-[18px] leading-[24px] text-[#050038B2] my-10">
            {content[selected].description}
          </p>
          <button className="flex items-center gap-x-2 font-helvetiva font-normal text-[18px] text-[#4262FF]">
            Learn more
            <img src={Right} alt="right" />
          </button>
        </div>
        <div className="max-w-[700px] lg:h-[515px] lg:ml-0 ml-5">
          <img
            className="rounded-md"
            src={content[selected].image}
            alt={content[selected].title}
          />
        </div>
      </div>
    </div>
  );
};

export default Construction;
