import React from "react";

const Ad = () => {
  return (
    <div className="w-full max-w-[1120px] h-auto lg:h-[440px] mx-auto rounded-[16px] bg-[#050038] flex flex-col items-center justify-center my-20 p-4">
      <h3 className="font-bold font-inter text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] text-white text-center">Join 45M+ users today</h3>
      <p className="font-normal font-inter text-[16px] lg:text-[18px] leading-[24px] text-[#FFFFFF99] my-4 text-center">Start for free — upgrade anytime.</p>
      <p className="font-normal font-inter text-[16px] lg:text-[18px] leading-[24px] text-[#FFFFFF99] text-center">Joining as an organization? Contact Sales</p>
      <button className="font-helvetiva font-normal text-[16px] lg:text-[18px] w-[174px] h-[48px] bg-[#4262FF] leading-[24px] text-white hover:bg-[#FFF] hover:text-[#4262FF] hover:border hover:border-[#4262FF] rounded-[32px] mt-10">
        Sign up free →
      </button>
    </div>
  );
};

export default Ad;
