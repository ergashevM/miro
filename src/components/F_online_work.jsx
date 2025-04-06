import Connection from "../assets/connection.svg";
import Right from "../assets/right.svg";

const Online_work = () => {
  return (
    <div className="w-full max-w-[1140px] lg:h-[535px] h-auto mx-auto flex-wrap flex items-center justify-between px-3 overflow-hidden mb-10 lg:mb-0">
      <div>
        <img src={Connection} alt="connection" />
      </div>
      <div className="max-w-[500px] w-full">
        <h2 className="font-bold font-inter text-[48px] leading-[56px] text-[#050038]">
          Connect <br /> your tools, <br />
          close your tabs
        </h2>
        <p className="font-inter font-normal text-[18px] text-[#05003899] leading-[24px] mt-5 mb-8">
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <button className="flex items-center gap-x-2 underline underline-offset-2 font-inter font-normal text-[18px] text-[#4262FF]">
          Learn more
          <img src={Right} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default Online_work;
