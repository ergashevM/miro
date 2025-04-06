import Devices from "../assets/devices.svg";
import Right from "../assets/right.svg";

const Unity = () => {
  return (
    <div className="w-full max-w-[1140px] lg:h-[535px] h-auto mx-auto flex flex-wrap items-center justify-between px-3 overflow-hidden">
      <div className="max-w-[500px] w-full">
        <h2 className="font-bold font-inter text-[48px] leading-[56px] text-[#050038]">
          Work together, <br /> wherever you work
        </h2>
        <p className="font-inter font-normal text-[18px] text-[#05003899] leading-[24px] mt-5 mb-8">
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <button className="flex items-center gap-x-2 underline underline-offset-2 font-inter font-normal text-[18px] text-[#4262FF]">
          Learn more
          <img src={Right} alt="right" />
        </button>
      </div>
      <div>
        <img src={Devices} alt="devices" />
      </div>
    </div>
  );
};

export default Unity;
