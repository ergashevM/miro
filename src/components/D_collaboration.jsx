import Rotate from "../assets/rotate.svg";

const Collaboration = () => {
  return (
    <div className="w-full max-w-[1140px] mx-auto mt-12 lg:mb-6 mb-12 pt-22 px-4">
      <div className="relative text-center mb-2">
        <h2 className="font-bold font-inter text-[32px] md:text-[48px] leading-[56px] text-[#050038]">
          Collaborate without <br /> constraints
        </h2>
        <img
          className="hidden lg:block lg:absolute -top-20 lg:right-70"
          src={Rotate}
          alt="rotate"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-8">
        <div className="text-left flex flex-col justify-between p-3 hover:shadow-lg bg-white rounded-lg">
          <h3 className="font-bold font-inter text-[20px] md:text-[24px] leading-[28px] text-[#050038]">
            Free forever
          </h3>
          <p className="font-helvetiva font-normal text-[16px] md:text-[18px] text-[#05003899] leading-[24px]">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our pricing plans for more features.
          </p>
        </div>
        <div className="text-left flex flex-col justify-between p-3 hover:shadow-lg bg-white rounded-lg">
          <h3 className="font-bold font-inter text-[20px] md:text-[24px] leading-[28px] text-[#050038]">
            Easy integrations
          </h3>
          <p className="font-helvetiva font-normal text-[16px] md:text-[18px] text-[#05003899] leading-[24px]">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our Marketplace.
          </p>
        </div>
        <div className="text-left flex flex-col justify-between p-3 hover:shadow-lg bg-white rounded-lg">
          <h3 className="font-bold font-inter text-[20px] md:text-[24px] leading-[28px] text-[#050038]">
            Security first
          </h3>
          <p className="font-helvetiva font-normal text-[16px] md:text-[18px] text-[#05003899] leading-[24px]">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our Trust Center.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="font-helvetiva font-normal text-[16px] w-[150px] h-[50px] bg-[#4262FF] text-white hover:bg-[#FFF] hover:text-[#4262FF] hover:border hover:border-[#4262FF] rounded-[24px]">
          Sign up free →
        </button>
      </div>
    </div>
  );
};

export default Collaboration;
