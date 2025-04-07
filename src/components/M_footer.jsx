import Right from "../assets/anotherRight.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/in.svg";
import Instagram from "../assets/insta.svg";
import Youtube from "../assets/youtube.svg";
import Store from "../assets/store.svg";
import Playmarket from "../assets/playmarket.svg";
import Miro from "../assets/miro.svg";
import Globus from "../assets/anotherGlobus.svg";

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto lg:h-[690px] mx-auto bg-[#050038] text-white pt-10">
      <div className="w-full max-w-[1380px] mx-auto flex flex-col lg:flex-row items-start justify-between pb-20 border-b border-[#9B99AF] pr-30">
        <ul className="flex flex-col gap-y-3 mb-10 lg:mb-0">
          <li className="font-bold font-inter text-[18px] leading-[24px] mb-5">Product</li>
          <li className="font-inter font-normal text-base leading-[24px]">Online whiteboard</li>
          <li className="font-inter font-normal text-base leading-[24px]">Apps & Integrations</li>
          <li className="font-inter font-normal text-base leading-[24px]">Templates</li>
          <li className="font-inter font-normal text-base leading-[24px]">Miroverse</li>
          <li className="font-inter font-normal text-base leading-[24px]">Miro Developer Platform</li>
          <li className="font-inter font-normal text-base leading-[24px]">Miro for Devices</li>
          <li className="font-inter font-normal text-base leading-[24px]">Security & Compliance</li>
          <li className="font-inter font-normal text-base leading-[24px]">Accessibility</li>
          <li className="font-inter font-normal text-base leading-[24px]">Changelog</li>
          <li className="flex gap-x-2 font-inter font-normal text-base leading-[24px] mt-2">
            <p className="underline underline-offset-3">View demo</p>
            <img src={Right} alt="right" />
          </li>
        </ul>

        <ul className="flex flex-col gap-y-3 mb-10 lg:mb-0">
          <li className="font-bold font-inter text-[18px] leading-[24px] mb-5">Solutions</li>
          <li className="font-inter font-normal text-base leading-[24px]">Meetings and Workshops</li>
          <li className="font-inter font-normal text-base leading-[24px]">Brainstorming & Ideation</li>
          <li className="font-inter font-normal text-base leading-[24px]">Agile Workflows</li>
          <li className="font-inter font-normal text-base leading-[24px]">Diagramming</li>
          <li className="font-inter font-normal text-base leading-[24px]">Research & Design</li>
          <li className="font-inter font-normal text-base leading-[24px]">Strategy & Planning</li>
          <li className="font-inter font-normal text-base leading-[24px]">Mind Map</li>
          <li className="font-inter font-normal text-base leading-[24px]">Concept Map</li>
          <li className="font-inter font-normal text-base leading-[24px]">Online Sticky Notes</li>
          <li className="font-inter font-normal text-base leading-[24px]">Flowchart</li>
          <li className="font-inter font-normal text-base leading-[24px]">Wireframing</li>
        </ul>

        <ul className="flex flex-col gap-y-3 mb-10 lg:mb-0">
          <li className="font-bold font-inter text-[18px] leading-[24px] mb-5">Resources</li>
          <li className="font-inter font-normal text-base leading-[24px]">Miro Academy</li>
          <li className="font-inter font-normal text-base leading-[24px]">Help Center</li>
          <li className="font-inter font-normal text-base leading-[24px]">Blog</li>
          <li className="font-inter font-normal text-base leading-[24px]">Status</li>
          <li className="font-inter font-normal text-base leading-[24px]">Miro Community</li>
          <li className="font-inter font-normal text-base leading-[24px]">Miro Professional Network</li>
          <li className="font-inter font-normal text-base leading-[24px]">Miro Experts Directory</li>
          <li className="font-inter font-normal text-base leading-[24px]">Miro Events</li>
        </ul>

        <ul className="flex flex-col gap-y-3 mb-10 lg:mb-0">
          <li className="font-bold font-inter text-[18px] leading-[24px] mb-5">Company</li>
          <li className="font-inter font-normal text-base leading-[24px]">About us</li>
          <li className="font-inter font-normal text-base leading-[24px]">Careers 🚀</li>
          <li className="font-inter font-normal text-base leading-[24px]">Miro in the News</li>
          <li className="font-inter font-normal text-base leading-[24px]">Customer Stories</li>
        </ul>

        <ul className="flex flex-col gap-y-3">
          <li className="font-bold font-inter text-[18px] leading-[24px] mb-5">Plans and Pricing</li>
          <li className="font-inter font-normal text-base leading-[24px]">Pricing</li>
          <li className="font-inter font-normal text-base leading-[24px]">Business</li>
          <li className="font-inter font-normal text-base leading-[24px]">Enterprise</li>
          <li className="font-inter font-normal text-base leading-[24px]">Consultants</li>
          <li className="font-inter font-normal text-base leading-[24px]">Education</li>
          <li className="font-inter font-normal text-base leading-[24px]">Startups</li>
          <li className="font-inter font-normal text-base leading-[24px]">NPOs</li>
          <li className="flex gap-x-2 font-inter font-normal text-base leading-[24px] mt-2">
            <p className="underline underline-offset-3">Contact sales</p>
            <img src={Right} alt="right" />
          </li>
        </ul>
      </div>

      <div className="w-full max-w-[1380px] mx-auto h-[82px] flex flex-col lg:flex-row items-center justify-between mt-5">
        <div className="flex items-center gap-x-5">
          <img src={Twitter} alt="twitter" />
          <img src={Facebook} alt="facebook" />
          <img src={LinkedIn} alt="linkedin" />
          <img src={Instagram} alt="instagram" />
          <img src={Youtube} alt="youtube" />
          <div className="flex items-center justify-between gap-x-1">
            <img src={Globus} alt="globus" />
            <select className="outline-none rounded-md">
              <option className="text-[#050038]" value="en">EN</option>
              <option className="text-[#050038]" value="uz">UZ</option>
              <option className="text-[#050038]" value="ru">RU</option>
            </select>
          </div>
          <p>© 2022 Miro</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Manage Cookies</p>
        </div>
        <div className="flex items-center gap-x-5">
          <a href="https://apps.apple.com/ru/app/miro-your-visual-workspace/id1180074773" target="_blank" rel="noopener noreferrer">
            <img src={Store} alt="Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.realtimeboard&hl=ru" target="_blank" rel="noopener noreferrer">
            <img src={Playmarket} alt="Playmarket" />
          </a>
          <img src={Miro} alt="Miro" />
        </div>
      </div>
    </div>
  );
};

export default Footer;