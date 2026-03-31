import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  
  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-between items-center self-stretch px-36 py-2"
      style={{
        background: "linear-gradient(180deg, #110C3B, #2B1F8F)"
      }}>
      {/* Logo Section */}
      <Link to="/" className="flex shrink-0 items-center no-underline">
        <img
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/z2t1y5k3_expires_30_days.png"}
          className="w-10 h-10 mr-[13px] object-fill"
          alt="LMS Logo"
        />
        <span className="text-white text-[28px] font-bold">
          {"LMS"}
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex shrink-0 items-center gap-8">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className="flex flex-col shrink-0 items-start no-underline"
          >
            <span className={`text-base ${isActive(item.path) ? 'text-[#FF9A3C]' : 'text-white'}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex shrink-0 items-center gap-5">
        <Link to="/login" className="flex flex-col shrink-0 items-start py-1 px-[1px] no-underline">
          <span className={`text-base ${isActive('/login') ? 'text-[#FF9A3C]' : 'text-white'}`}>
            {"Login"}
          </span>
        </Link>
        <Link 
          to="/signup" 
          className={`flex flex-col shrink-0 items-start text-left py-[15px] px-[26px] rounded border border-solid border-[#FFFFFF33] no-underline ${
            isActive('/signup') ? 'bg-[#FF9A3C]' : 'bg-[#FFFFFF1A]'
          }`}
        >
          <span className="text-white text-base font-bold">
            {"Signup"}
          </span>
        </Link>
      </div>
    </div>
  );
}
