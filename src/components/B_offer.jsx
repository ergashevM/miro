import Star from "../assets/star.svg";
import HalfStar from "../assets/halfStar.svg";
import G2 from "../assets/g2.svg";
import GetApp from "../assets/get.svg";
import Capterra from "../assets/capterra.svg";
import Workflow from "../assets/workflow.gif";

const OfferForRegister = () => {
  return (
    <section className="w-full max-w-[1200px] h-auto mx-auto flex flex-col lg:flex-row items-center justify-around mt-12 mb-8 px-4">
      <div className="w-full max-w-[440px] flex flex-col justify-between mb-8 lg:mb-0">
        <h3 className="font-inter font-bold text-2xl lg:text-[48px] text-[#050038] leading-[56px]">
          Take ideas from better to best
        </h3>
        <p className="font-helvetiva font-normal text-base lg:text-[18px] text-[#050038B8] mt-5 mb-8">
          Miro is your team's visual platform to connect, collaborate, and
          create — together.
        </p>
        <input
          type="email"
          className="w-full h-[48px] font-inter font-normal text-lg border border-[#9B99AF] text-[#5F5C80] hover:text-[#fff] hover:bg-[#5F5C80] hover:placeholder:text-white outline-none rounded-[24px] pl-7 mb-2"
          placeholder="Enter your work email"
        />
        <button className="font-helvetiva font-normal text-lg w-full h-[50px] bg-[#4262FF] text-white hover:bg-[#FFF] hover:text-[#4262FF] hover:border hover:border-[#4262FF] rounded-[24px]">
          Sign up free →
        </button>
        <p className="font-helvetica font-normal text-sm text-[#05003866] mt-2">
          Collaborate with your team within minutes
        </p>
        <div className="w-full max-w-[350px] h-[60px] flex items-center justify-around bg-[#F5F5F7] rounded-[8px] mt-5">
          <span className="flex flex-col items-start gap-y-1">
            <span className="flex items-center justify-between">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={HalfStar} alt="half star" />
            </span>
            <p className="font-helvetica font-normal text-[11px] text-[#050038]">
              Based on 5149+ reviews:
            </p>
          </span>
          <img src={G2} alt="logo" className="h-6" />
          <img src={GetApp} alt="logo" className="h-6" />
          <img src={Capterra} alt="logo" className="h-6" />
        </div>
      </div>
      <div className="w-full max-w-[640px] flex justify-center lg:justify-end">
        <img
          className="max-h-[430px] rounded-md"
          src={Workflow}
          alt="workflow"
        />
      </div>
    </section>
  );
};

export default OfferForRegister;
