import Iso from "../assets/iso.svg";
import One from "../assets/one.svg";
import Nine from "../assets/nine.svg";
import Thousand from "../assets/thousand.svg";
import FourFive from "../assets/fourFive.svg";
import Hundred from "../assets/hundred.svg";

const Results = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto lg:h-[920px] mx-auto bg-[#FFD02F] text-[#050038] flex flex-col justify-center p-4">
      <h1 className="font-bold font-inter text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] text-center mb-4">
        Why companies large <br /> and small trust Miro
      </h1>
      <p className="font-normal font-inter text-[16px] lg:text-[18px] leading-[24px] text-center underline underline-offset-3">
        Contact Sales to request a demo
      </p>
      <div className="w-full max-w-[1140px] h-auto mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-y-30 mt-25 mb-10">
        {[
          { img: Iso, text: "ISO-27001 enterprise-grade security compliant" },
          { img: One, text: "Visual Collaboration Platform on G2" },
          { img: Nine, text: "of the Fortune 100 are customers" },
          { img: Thousand, text: "community- and expert-built templates" },
          { img: FourFive, text: "users around the world" },
          { img: Hundred, text: "integrations with technology partners" }
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-y-5 justify-center items-center pt-5 hover:scale-105 transition-transform duration-300">
            <img className="max-w-[250px] max-h-[46px]" src={item.img} alt="result" />
            <p className="font-normal font-inter text-[16px] lg:text-[18px] leading-[24px] text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
