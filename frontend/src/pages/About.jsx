import React from "react";

export default (props) => {

    return (
        <div className="flex flex-col bg-white">
            <div className="self-stretch bg-[#F5F7FA]">
                <div className="flex flex-col items-start self-stretch pb-[73px] mb-[3px] pt-10"
                    style={{
                        background: "linear-gradient(180deg, #110C3B, #2B1F8F, #4834DF)"
                    }}>
                    <button className="flex flex-col items-start bg-[#FFFFFF1C] text-left py-[13px] px-3.5 mb-4 ml-[152px] rounded-xl border-0"
                        onClick={() => alert("Pressed!")}>
                        <span className="text-white text-[15px]">
                            {"About Us"}
                        </span>
                    </button>
                    <div className="flex items-start self-stretch max-w-[1136px] mx-auto gap-14">
                        <div className="flex-1">
                            <div className="flex flex-col self-stretch pb-[1px] mb-[17px]">
                                <span className="text-white text-[58px] font-bold">
                                    {"We help educators\ncreate magical\nlearning experiences!"}
                                </span>
                            </div>
                            <div className="flex flex-col items-start self-stretch py-[7px] mb-[18px]">
                                <span className="text-white text-[17px] w-[545px]">
                                    {"LMS was created to make online education fun, easy to start,\nsimple to manage, and exciting to grow! From individual teachers\nto big schools with many branches, we give teams the tools to\nteach, share, and succeed with confidence and joy."}
                                </span>
                            </div>
                            <div className="flex items-start self-stretch pt-[15px] gap-3.5">
                                <button className="flex flex-col shrink-0 items-start bg-[#FF8A33] text-left py-[17px] px-5 rounded-md border-0"
                                    onClick={() => alert("Pressed!")}>
                                    <span className="text-white text-sm">
                                        {"Get Started"}
                                    </span>
                                </button>
                                <button className="flex flex-col shrink-0 items-start bg-transparent text-left py-[17px] px-[22px] rounded-md border border-solid border-[#FFFFFF36]"
                                    onClick={() => alert("Pressed!")}>
                                    <span className="text-white text-sm">
                                        {"Book Demo"}
                                    </span>
                                </button>
                            </div>
                        </div>
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/tiz0xrlu_expires_30_days.png"}
                            className="flex-1 h-[394px] mt-[51px] object-fill"
                            alt="Kids learning illustration"
                        />
                    </div>
                    <div className="flex items-center ml-[152px] gap-4 pt-10">
                        <div className="flex flex-col shrink-0 items-start bg-[#FFFFFF12] py-[19px] px-5 gap-0.5 rounded-lg">
                            <div className="flex flex-col items-start pb-[1px] pr-[76px]">
                                <span className="text-white text-[28px] font-bold">
                                    {"12k+"}
                                </span>
                            </div>
                            <div className="flex flex-col items-start pb-[1px] pr-9">
                                <span className="text-white text-[13px]">
                                    {"Happy Educators"}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col shrink-0 items-start bg-[#FFFFFF12] py-[19px] px-5 gap-0.5 rounded-lg">
                            <div className="flex flex-col items-start pb-[1px] pr-[76px]">
                                <span className="text-white text-[28px] font-bold">
                                    {"1.8M"}
                                </span>
                            </div>
                            <div className="flex flex-col items-start pb-[1px] pr-8">
                                <span className="text-white text-[13px]">
                                    {"Happy Learners"}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col shrink-0 items-start bg-[#FFFFFF12] py-[19px] px-5 gap-0.5 rounded-lg">
                            <div className="flex flex-col items-start pb-[1px] pr-[103px]">
                                <span className="text-white text-[28px] font-bold">
                                    {"48"}
                                </span>
                            </div>
                            <div className="flex flex-col items-start pb-[1px] pr-[34px]">
                                <span className="text-white text-[13px]">
                                    {"Countries Served"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center self-stretch bg-white py-[88px] px-[152px] mb-[1px] gap-9">
                    <div className="flex-1 bg-white pt-10 px-10 rounded-lg"
                        style={{
                            boxShadow: "0px 10px 30px #0F17240D"
                        }}>
                        <div className="flex flex-col items-start self-stretch">
                            <button className="flex flex-col items-start bg-indigo-50 text-left py-[11px] px-3.5 rounded-xl border-0"
                                onClick={() => alert("Pressed!")}>
                                <span className="text-indigo-900 text-[13px]">
                                    {"Our Story"}
                                </span>
                            </button>
                            <div className="flex flex-col items-start self-stretch pb-[1px]">
                                <span className="text-[#0F1724] text-[28px] font-bold w-[426px]">
                                    {"Built for the people shaping the\nfuture of happy learning!"}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start self-stretch pt-4 mb-[1px]">
                            <span className="text-slate-400 text-[15px] w-[451px]">
                                {"What started as a small platform for a handful of online teachers\ngrew into a full learning world for schools, academies,\nand digital course creators. We noticed the same challenge\neverywhere: powerful learning tools were either too confusing\nor too hard to use."}
                            </span>
                        </div>
                        <div className="flex flex-col items-start self-stretch pt-3.5 mb-[55px]">
                            <span className="text-slate-400 text-[15px] w-[459px]">
                                {"So we designed LMS to feel simple, trustworthy, and joyful from\nday one — giving learning teams one place to manage courses,\nstudents, payments, reports, and growth!"}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start bg-white pt-10 pr-10 rounded-lg"
                        style={{
                            boxShadow: "0px 10px 30px #0F17240D"
                        }}>
                        <button className="flex flex-col items-start bg-indigo-50 text-left py-[11px] px-3.5 mb-[23px] ml-10 rounded-xl border-0"
                            onClick={() => alert("Pressed!")}>
                            <span className="text-indigo-900 text-[13px]">
                                {"Why teams love us"}
                            </span>
                        </button>
                        <div className="flex flex-col self-stretch mb-[67px] ml-10 gap-[15px]">
                            <div className="flex items-start self-stretch gap-3.5">
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/bhewvn19_expires_30_days.png"}
                                    className="w-10 h-10 object-fill"
                                    alt="All-in-one operations icon"
                                />
                                <div className="flex flex-1 flex-col gap-1">
                                    <div className="flex flex-col items-start self-stretch py-1">
                                        <span className="text-[#0F1724] text-base font-bold">
                                            {"Everything in one place"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col self-stretch py-[3px]">
                                        <span className="text-slate-400 text-sm">
                                            {"Course delivery, payments, student management, and reports -\nall in one easy-to-use workspace!"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start self-stretch">
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/wl4z82nr_expires_30_days.png"}
                                    className="w-10 h-10 mr-3.5 object-fill"
                                    alt="Built for scale icon"
                                />
                                <div className="flex flex-1 flex-col mr-[13px] gap-1">
                                    <div className="flex flex-col items-start self-stretch py-[5px] pl-[1px]">
                                        <span className="text-[#0F1724] text-base font-bold">
                                            {"Grows with you"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col self-stretch py-[5px]">
                                        <span className="text-slate-400 text-sm">
                                            {"Perfect for solo teachers, growing academies, and big\nschool networks with multiple branches!"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start self-stretch">
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/mur6nhdk_expires_30_days.png"}
                                    className="w-10 h-10 mr-3.5 object-fill"
                                    alt="Reliable and secure icon"
                                />
                                <div className="flex flex-1 flex-col mr-9 gap-1">
                                    <div className="flex flex-col items-start self-stretch py-[5px] pl-[1px]">
                                        <span className="text-[#0F1724] text-base font-bold">
                                            {"Safe and secure"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col self-stretch py-[3px]">
                                        <span className="text-slate-400 text-sm">
                                            {"Trusted infrastructure, secure payments, and kid-\nfriendly experiences built right in!"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center self-stretch bg-[#F5F7FA] py-[87px] px-[120px] mb-[1px] gap-[57px]">
                    <div className="flex flex-col items-center pb-[3px] px-2.5">
                        <button className="flex flex-col items-start bg-indigo-50 text-left py-[11px] px-3.5 mb-[19px] rounded-xl border-0"
                            onClick={() => alert("Pressed!")}>
                            <span className="text-indigo-900 text-[13px]">
                                {"Our Values"}
                            </span>
                        </button>
                        <div className="flex flex-col items-start pb-[1px] mb-[17px]">
                            <span className="text-[#0F1724] text-[42px] font-bold">
                                {"What guides every decision we make"}
                            </span>
                        </div>
                        <div className="flex flex-col items-start pb-[1px]">
                            <span className="text-slate-400 text-base text-center w-[736px]">
                                {"We believe learning platforms should be simple to use, joyful to explore, and powerful enough to\nsupport happy growth for years to come!"}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center self-stretch mx-8">
                        <div className="flex flex-1 flex-col items-start bg-white py-[34px] pr-[46px] mr-6 rounded-lg"
                            style={{
                                boxShadow: "0px 10px 30px #0F17240D"
                            }}>
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/2ueyrujl_expires_30_days.png"}
                                className="w-[52px] h-[52px] mb-[26px] ml-8 rounded-lg object-fill"
                                alt="Clarity first icon"
                            />
                            <div className="flex flex-col items-start pb-[1px] mb-[19px] ml-8">
                                <span className="text-[#0F1724] text-xl font-bold">
                                    {"Simple & Clear"}
                                </span>
                            </div>
                            <div className="flex flex-col self-stretch pb-[1px] ml-8">
                                <span className="text-slate-400 text-sm">
                                    {"We remove confusion so educators can focus\non teaching, not on managing complicated\nsoftware."}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start bg-white py-[34px] mr-[25px] rounded-lg"
                            style={{
                                boxShadow: "0px 10px 30px #0F17240D"
                            }}>
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/gfi4vl2l_expires_30_days.png"}
                                className="w-[52px] h-[52px] mb-[26px] ml-8 rounded-lg object-fill"
                                alt="Human-centered learning icon"
                            />
                            <div className="flex flex-col items-start pb-[1px] mb-[19px] ml-[33px]">
                                <span className="text-[#0F1724] text-xl font-bold">
                                    {"Kids First"}
                                </span>
                            </div>
                            <div className="flex flex-col items-start pb-[1px] ml-[33px]">
                                <span className="text-slate-400 text-sm w-[273px]">
                                    {"Every feature is designed around better\noutcomes for teachers, schools, and most\nimportantly — happy learners!"}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start bg-white py-[34px] pr-[46px] rounded-lg"
                            style={{
                                boxShadow: "0px 10px 30px #0F17240D"
                            }}>
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/lqmlgkjp_expires_30_days.png"}
                                className="w-[52px] h-[52px] mb-[26px] ml-8 rounded-lg object-fill"
                                alt="Growth with confidence icon"
                            />
                            <div className="flex flex-col items-start pb-[1px] mb-[23px] ml-[33px]">
                                <span className="text-[#0F1724] text-xl font-bold">
                                    {"Grow with Confidence"}
                                </span>
                            </div>
                            <div className="flex flex-col self-stretch pb-[1px] ml-8">
                                <span className="text-slate-400 text-sm">
                                    {"We help learning businesses expand with\ntools that are dependable, scalable, and\neasily measurable!"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch relative mb-[653px]">
                    <div className="flex flex-col items-center self-stretch pt-24 pb-[97px] px-[120px] gap-14"
                        style={{
                            background: "linear-gradient(180deg, #5B3CFFF2, #2E1A6FF2)"
                        }}>
                        <div className="flex flex-col items-center pb-[3px] px-[39px]">
                            <button className="flex flex-col items-start bg-[#FFFFFF1C] text-left py-[11px] px-[15px] mb-[19px] rounded-xl border-0"
                                onClick={() => alert("Pressed!")}>
                                <span className="text-white text-[13px]">
                                    {"Our Journey"}
                                </span>
                            </button>
                            <div className="flex flex-col items-start pb-[1px] mb-[18px]">
                                <span className="text-white text-[42px] font-bold text-center w-[670px]">
                                    {"From a simple course tool to a full\nhappy learning world!"}
                                </span>
                            </div>
                            <div className="flex flex-col items-start pb-[1px]">
                                <span className="text-white text-base text-center w-[679px]">
                                    {"We have grown alongside the teachers and schools who trust us to power their learning\nexperience every day!"}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center self-stretch mx-8 gap-6">
                            <div className="flex flex-1 flex-col items-start bg-[#FFFFFF12] pt-7 pr-6 rounded-lg">
                                <button className="flex flex-col items-start bg-[#FFFFFF1C] text-left py-[13px] px-[21px] mb-[22px] ml-6 rounded-xl border-0"
                                    onClick={() => alert("Pressed!")}>
                                    <span className="text-white text-[13px] font-bold">
                                        {"2021"}
                                    </span>
                                </button>
                                <div className="flex flex-col items-start pb-[1px] mb-6 ml-6">
                                    <span className="text-white text-[19px] font-bold">
                                        {"The Big Idea"}
                                    </span>
                                </div>
                                <div className="flex flex-col self-stretch pb-[1px] mb-[53px] ml-6">
                                    <span className="text-white text-sm">
                                        {"We launched our first version to\nhelp teachers publish and share\ntheir courses faster and easier!"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start bg-[#FFFFFF12] pt-7 pr-6 rounded-lg">
                                <button className="flex flex-col items-start bg-[#FFFFFF1C] text-left py-[13px] px-5 mb-[22px] ml-6 rounded-xl border-0"
                                    onClick={() => alert("Pressed!")}>
                                    <span className="text-white text-[13px] font-bold">
                                        {"2022"}
                                    </span>
                                </button>
                                <div className="flex flex-col items-start pb-[1px] mb-6 ml-[25px]">
                                    <span className="text-white text-[19px] font-bold">
                                        {"Multi-School Magic"}
                                    </span>
                                </div>
                                <div className="flex flex-col self-stretch pb-[1px] mb-[50px] ml-6">
                                    <span className="text-white text-sm">
                                        {"Schools got their own colorful\nportals, flexible controls,\nand better organization tools!"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start bg-[#FFFFFF12] py-[30px] pr-[38px] gap-[23px] rounded-lg">
                                <button className="flex flex-col items-start bg-[#FFFFFF1C] text-left py-[13px] px-[19px] ml-6 rounded-xl border-0"
                                    onClick={() => alert("Pressed!")}>
                                    <span className="text-white text-[13px] font-bold">
                                        {"2023"}
                                    </span>
                                </button>
                                <div className="flex flex-col items-start pb-[1px] ml-6">
                                    <span className="text-white text-[19px] font-bold">
                                        {"Around the World"}
                                    </span>
                                </div>
                                <div className="flex flex-col self-stretch pb-[1px] ml-6">
                                    <span className="text-white text-sm">
                                        {"Better payments, reports,\nand connections helped our\ncustomers reach learners\neverywhere!"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start bg-[#FFFFFF12] py-7 pr-[37px] rounded-lg">
                                <button className="flex flex-col items-start bg-[#FFFFFF1C] text-left py-[13px] px-[19px] mb-[23px] ml-6 rounded-xl border-0"
                                    onClick={() => alert("Pressed!")}>
                                    <span className="text-white text-[13px] font-bold">
                                        {"2024"}
                                    </span>
                                </button>
                                <div className="flex flex-col items-start pb-[1px] mb-[19px] ml-6">
                                    <span className="text-white text-[19px] font-bold">
                                        {"Smarter & Happier"}
                                    </span>
                                </div>
                                <div className="flex flex-col self-stretch pb-[1px] ml-6">
                                    <span className="text-white text-sm">
                                        {"Today LMS powers modern\nlearning businesses with better\nautomation, insights, and\nsupport than ever before!"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch bg-white absolute bottom-[-652px] right-0 left-0 py-[87px] px-[120px]">
                        <div className="flex flex-col items-center self-stretch max-w-[1200px] gap-[57px]">
                            <div className="flex flex-col items-center pb-0.5 px-2">
                                <button className="flex flex-col items-start bg-indigo-50 text-left py-[13px] px-[15px] mb-5 rounded-xl border-0"
                                    onClick={() => alert("Pressed!")}>
                                    <span className="text-indigo-900 text-[13px]">
                                        {"Our Team"}
                                    </span>
                                </button>
                                <div className="flex flex-col items-start pb-[1px] mb-[18px]">
                                    <span className="text-[#0F1724] text-[42px] font-bold">
                                        {"Meet the people behind LMS"}
                                    </span>
                                </div>
                                <div className="flex flex-col items-start pb-[1px]">
                                    <span className="text-slate-400 text-base text-center w-[740px]">
                                        {"A small, caring team of builders, education lovers, and problem-solvers helping\nlearning businesses grow and succeed!"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center self-stretch mx-8 gap-6">
                                <div className="flex flex-1 flex-col items-center bg-white py-6 rounded-lg"
                                    style={{
                                        boxShadow: "0px 10px 30px #0F17240D"
                                    }}>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/vwiue9y6_expires_30_days.png"}
                                        className="w-24 h-24 mb-6 rounded-lg object-fill"
                                        alt="Sarah Jenkins"
                                    />
                                    <div className="flex flex-col items-start pb-[1px] mb-[18px]">
                                        <span className="text-[#0F1724] text-lg font-bold">
                                            {"Sarah Jenkins"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-start pb-[1px] mb-2.5">
                                        <span className="text-slate-400 text-sm">
                                            {"Co-Founder & CEO"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col self-stretch pb-[1px] mx-[35px]">
                                        <span className="text-slate-400 text-sm text-center">
                                            {"Creates the big vision and\nworks closely with schools\non platform strategy."}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col items-center bg-white py-[26px] rounded-lg"
                                    style={{
                                        boxShadow: "0px 10px 30px #0F17240D"
                                    }}>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/wzh17xdx_expires_30_days.png"}
                                        className="w-24 h-24 mb-6 rounded-lg object-fill"
                                        alt="David Chen"
                                    />
                                    <div className="flex flex-col items-start pb-[1px] mb-[17px]">
                                        <span className="text-[#0F1724] text-lg font-bold">
                                            {"David Chen"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-start pb-[1px] mb-[11px]">
                                        <span className="text-slate-400 text-sm">
                                            {"Head of Product"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col self-stretch pb-[1px] mx-[33px]">
                                        <span className="text-slate-400 text-sm text-center">
                                            {"Leads planning and keeps\nthe platform joyful and\neasy for everyone!"}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col items-center bg-white py-[26px] rounded-lg"
                                    style={{
                                        boxShadow: "0px 10px 30px #0F17240D"
                                    }}>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/x943adnz_expires_30_days.png"}
                                        className="w-24 h-24 mb-6 rounded-lg object-fill"
                                        alt="Priya Nair"
                                    />
                                    <div className="flex flex-col items-start pb-[1px] mb-[15px]">
                                        <span className="text-[#0F1724] text-lg font-bold">
                                            {"Priya Nair"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-start pb-[1px] mb-2.5">
                                        <span className="text-slate-400 text-sm">
                                            {"Customer Success Lead"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col self-stretch pb-[1px] mx-[35px]">
                                        <span className="text-slate-400 text-sm text-center">
                                            {"Helps schools and teachers\nlaunch smoothly and grow\nwith confidence!"}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col items-center bg-white py-6 rounded-lg"
                                    style={{
                                        boxShadow: "0px 10px 30px #0F17240D"
                                    }}>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/3jop35i9_expires_30_days.png"}
                                        className="w-24 h-24 mb-6 rounded-lg object-fill"
                                        alt="Lucas Rivera"
                                    />
                                    <div className="flex flex-col items-start pb-[1px] mb-[17px]">
                                        <span className="text-[#0F1724] text-lg font-bold">
                                            {"Lucas Rivera"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-start pb-[1px] mb-2">
                                        <span className="text-slate-400 text-sm">
                                            {"Engineering Lead"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col self-stretch pb-[1px] mx-8">
                                        <span className="text-slate-400 text-sm text-center">
                                            {"Builds safe, reliable systems\nthat support happy learning\nexperiences at any size!"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch">
                    <div className="self-stretch py-16 px-36"
                        style={{
                            background: "linear-gradient(180deg, #5B3CFFF2, #2E1A6FF2)"
                        }}>
                        <div className="flex justify-between items-center self-stretch bg-[#FFFFFF0D] max-w-[1152px] py-[31px] px-9 rounded-lg">
                            <div className="flex flex-col shrink-0 items-start gap-3">
                                <div className="flex flex-col items-start py-0.5 pr-[65px]">
                                    <span className="text-white text-[32px] font-bold w-[572px]">
                                        {"Ready to build your own happy learning\nplatform?"}
                                    </span>
                                </div>
                                <div className="flex flex-col items-start py-1 pr-[78px]">
                                    <span className="text-white text-[15px] w-[559px]">
                                        {"Join thousands of teachers, schools, and training businesses already using\nLMS to launch courses, manage students, and grow with joy!"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex shrink-0 items-center gap-4">
                                <button className="flex flex-col shrink-0 items-start bg-[#FF8A33] text-left py-[13px] px-[22px] rounded-md border-0"
                                    onClick={() => alert("Pressed!")}>
                                    <span className="text-white text-sm font-bold">
                                        {"Start for Free"}
                                    </span>
                                </button>
                                <button className="flex flex-col shrink-0 items-start bg-[#FFFFFF12] text-left py-[13px] px-[23px] rounded-md border border-solid border-[#FFFFFF26]"
                                    onClick={() => alert("Pressed!")}>
                                    <span className="text-white text-sm font-bold">
                                        {"Talk to Sales"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}