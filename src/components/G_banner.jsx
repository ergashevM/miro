import Banner from "../assets/banner.png";

const Box = () => {
  return (
    <div
      className="w-full max-w-[1050px] lg:h-[500px] min-h-[300px] h-auto mx-auto flex items-center justify-end pr-5 mb-8 lg:mb-20"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hidden text-center lg:block">
        <h3 className="font-bold font-inter text-[22px] leading-[38px] text-[#050038]">
          The Ways <br /> We Work
        </h3>
        <p className="font-normal font-helvetiva text-[18px] leading-[24px] text-[#050038]">
          How has our relationship with work changed?
        </p>
        <button className="font-helvetiva font-normal text-sm w-[164px] h-[40px] bg-[#4262FF] leading-[20px] text-white hover:bg-[#FFF] hover:text-[#4262FF] hover:border hover:border-[#4262FF] rounded-[24px] mt-3">
          View the report →
        </button>
      </div>
    </div>
  );
};

export default Box;
