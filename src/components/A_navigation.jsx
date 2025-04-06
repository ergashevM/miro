"use client";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import Globus from "../assets/globus.svg";
import MenuIcon from "../assets/menu.svg";
import Close from "../assets/menuClose.gif";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="w-full max-w-[1440px] h-auto lg:h-[90px] mx-auto flex items-center justify-between bg-white lg:border-b-2 lg:border-[#F5F5F5] flex-wrap p-4">
        <div className="flex items-center justify-between gap-x-7 w-full md:w-auto">
          <img src={Logo} alt="logo" />

          <ul className="hidden lg:flex font-helvetiva font-normal text-base items-center gap-x-3 w-full md:w-auto">
            <li>
              <select className="outline-none rounded-md">
                <option value="1">Products</option>
                <option value="2">Products</option>
                <option value="3">Products</option>
              </select>
            </li>
            <li>
              <select className="outline-none rounded-md">
                <option value="1">Solutions</option>
                <option value="2">Solutions</option>
                <option value="3">Solutions</option>
              </select>
            </li>
            <li>
              <select className="outline-none rounded-md">
                <option value="1">Resources</option>
                <option value="2">Resources</option>
                <option value="3">Resources</option>
              </select>
            </li>
            <li>Enterprise</li>
            <li>Pricing</li>
          </ul>

          <div
            className="flex cursor-pointer lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={MenuIcon} alt="Menu" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-x-4 mt-4 md:mt-0">
          <div className="flex items-center justify-between gap-x-1">
            <img src={Globus} alt="globus" />
            <select className="outline-none rounded-md">
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
          </div>
          <ul className="hidden lg:flex font-inter font-normal text-base items-center gap-x-5">
            <li>Contact Sales</li>
            <li>Login</li>
          </ul>
          <button className="font-helvetiva font-normal text-base w-[150px] h-[50px] bg-[#4262FF] text-white hover:bg-[#FFF] hover:text-[#4262FF] hover:border hover:border-[#4262FF] rounded-[24px]">
            Sign up free →
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-[0.1px] pb-5 left-0 w-full bg-white border-b-2 border-[#F0F0F0] z-10 lg:hidden">
            <div className="flex justify-between items-center p-2">
              <h2 className="font-bold">Menu</h2>
              <img
                src={Close}
                alt="Close"
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <ul className="flex flex-col items-start ml-1 gap-y-2 font-inter font-normal text-base">
              <li>
                <select className="outline-none rounded-md">
                  <option value="1">Products</option>
                  <option value="2">Products</option>
                  <option value="3">Products</option>
                </select>
              </li>
              <li>
                <select className="outline-none rounded-md">
                  <option value="1">Solutions</option>
                  <option value="2">Solutions</option>
                  <option value="3">Solutions</option>
                </select>
              </li>
              <li>
                <select className="outline-none rounded-md">
                  <option value="1">Resources</option>
                  <option value="2">Resources</option>
                  <option value="3">Resources</option>
                </select>
              </li>
              <li className="ml-1">Enterprise</li>
              <li className="ml-1">Pricing</li>
              <li className="ml-1">Contact Sales</li>
              <li className="ml-1">Login</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
