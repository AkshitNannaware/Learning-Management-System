// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col self-stretch bg-slate-900 pt-[79px] pb-10 px-36 gap-[39px]">
      <div className="flex justify-between items-start self-stretch">
        <div className="flex shrink-0 items-center mb-[41px]">
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/8khssezv_expires_30_days.png"}
            className="w-12 h-12 mr-[13px] object-fill"
            alt="Logo"
          />
          <span className="text-white text-[32px] font-bold mr-[63px]">
            {"LMS"}
          </span>
        </div>
        <div className="flex shrink-0 items-center mt-3">
          <div className="flex flex-col shrink-0 items-start py-1.5 mr-[41px]">
            <span className="text-white text-base cursor-pointer hover:text-gray-300 transition-colors">
              {"About Us"}
            </span>
          </div>
          <div className="flex flex-col shrink-0 items-start py-1.5 mr-10">
            <span className="text-white text-base cursor-pointer hover:text-gray-300 transition-colors">
              {"Contact"}
            </span>
          </div>
          <div className="flex flex-col shrink-0 items-start py-1 px-[1px] mr-10">
            <span className="text-white text-base cursor-pointer hover:text-gray-300 transition-colors">
              {"Privacy Policy"}
            </span>
          </div>
          <div className="flex flex-col shrink-0 items-start py-1.5">
            <span className="text-white text-base cursor-pointer hover:text-gray-300 transition-colors">
              {"Terms"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch py-1">
        <span className="text-white text-[15px]">
          {"© 2025 EduKids Platform. All rights reserved."}
        </span>
      </div>
    </div>
  );
};

export default Footer;