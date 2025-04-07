import LogoOne from "../assets/vmware.svg";
import LogoTwo from "../assets/Docusign.svg";
import LogoTree from "../assets/frog.svg";
import Roxanne from "../assets/roxanne.svg";
import Jane from "../assets/jane.svg";
import Laura from "../assets/laura.svg";

const Comments = () => {
  return (
    <div className="w-full max-w-[1120px] h-auto lg:h-[530px] mx-auto mt-10 flex flex-col items-center p-4">
      <h3 className="font-inter font-bold text-[32px] lg:text-[48px] leading-[40px] text-[#050038] mb-4 text-center">
        Loved by the world's best teams
      </h3>
      <button className="font-helvetiva font-normal text-[16px] lg:text-[18px] w-[282px] h-[48px] hover:bg-[#4262FF] leading-[24px] hover:text-white bg-[#FFF] text-[#4262FF] border border-[#4262FF] rounded-[24px] mt-3">
        See all customer stories →
      </button>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-x-15 mt-20">
        {[
          {
            logo: LogoOne,
            text: "“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”",
            name: "Roxanne Mustafa",
            position: "Design Team Lead at VMware",
            profile: Roxanne
          },
          {
            logo: LogoTwo,
            text: "“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”",
            name: "Jane Ashley",
            position: "Head of Design at DocuSign",
            profile: Jane
          },
          {
            logo: LogoTree,
            text: "“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”",
            name: "Laura Baird",
            position: "Associate Design Director at frog",
            profile: Laura
          }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-start mb-5 lg:mb-0">
            <img src={item.logo} alt="logo" />
            <p className="font-helvetiva font-normal text-[16px] lg:text-[18px] leading-[24px] text-[#05003899] mt-4 mb-6 text-left">
              {item.text}
            </p>
            <div className="flex justify-start gap-x-3">
              <img src={item.profile} alt="profile" className="rounded-full w-10 h-10" />
              <span className="flex flex-col gap-y-1">
                <p className="font-helvetiva font-normal text-[14px] leading-[20px] text-[#05003899]">
                  {item.name}
                </p>
                <p className="font-helvetiva font-normal text-[14px] leading-[20px] text-[#05003899]">
                  {item.position}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
