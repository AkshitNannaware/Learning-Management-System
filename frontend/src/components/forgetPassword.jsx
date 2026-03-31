import React, { useState } from "react";
export default (props) => {
    const [input1, onChangeInput1] = useState('');
    return (
        <div className="flex flex-col bg-white">
            <div className="self-stretch py-28 px-[120px]"
                style={{
                    background: "linear-gradient(180deg, #1C113B, #3A2286, #5D3DF0)"
                }}>
                <div className="flex justify-between items-center self-stretch max-w-[1200px]">
                    <div className="flex flex-col shrink-0 items-start">
                        <div className="flex flex-col items-start pb-[1px] pr-[76px] mb-[23px]">
                            <span className="text-white text-[64px] font-bold w-[484px]" >
                                {"Build, Sell &\nScale Your\nOnline Courses"}
                            </span>
                        </div>
                        <div className="flex flex-col items-start py-[5px] pr-3 mb-6 mr-20">
                            <span className="text-white text-lg w-[467px]" >
                                {"Multi-tenant LMS SaaS platform designed for institutes,\neducators, and learners. Launch your own learning\nplatform in minutes."}
                            </span>
                        </div>
                        <div className="flex flex-col items-start pt-6">
                            <div className="flex items-center mb-[19px]">
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/i3b6odit_expires_30_days.png"}
                                    className="w-8 h-8 mr-4 object-fill"
                                />
                                <div className="flex flex-col shrink-0 items-start py-0.5 px-[1px] mr-[316px]">
                                    <span className="text-white text-base" >
                                        {"Multi-Tenant LMS System"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center mb-[19px]">
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/zn3ubi05_expires_30_days.png"}
                                    className="w-8 h-8 mr-4 object-fill"
                                />
                                <div className="flex flex-col shrink-0 items-start py-0.5 px-[1px] mr-[317px]">
                                    <span className="text-white text-base" >
                                        {"Live & Recorded Learning"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center mb-[1px]">
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/1a9inalk_expires_30_days.png"}
                                    className="w-8 h-[31px] mr-4 object-fill"
                                />
                                <div className="flex flex-col shrink-0 items-start py-0.5 mr-[292px]">
                                    <span className="text-white text-base" >
                                        {"Secure Payments Integration"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#FFFFFF00] py-[85px] rounded-3xl"
                        style={{
                            boxShadow: "0px 25px 50px #0000004D"
                        }}>
                        <div className="flex items-center mb-9 ml-10 gap-[11px]">
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/lzvakqul_expires_30_days.png"}
                                className="w-9 h-9 object-fill"
                            />
                            <span className="text-[#8B8696] text-sm font-bold" >
                                {"Back to login"}
                            </span>
                        </div>
                        <div className="flex flex-col items-start pb-[1px] pr-[129px] mb-2.5 mx-10">
                            <span className="text-[#0B0B0B] text-3xl font-bold" >
                                {"Forgot password?"}
                            </span>
                        </div>
                        <div className="flex flex-col items-start pt-1 pb-[5px] pr-[19px] mb-[31px] ml-10">
                            <span className="text-[#8B8696] text-sm w-[319px]" >
                                {"Enter the email address associated with your\naccount and we’ll send you a secure link to reset\nyour password."}
                            </span>
                        </div>
                        <div className="flex flex-col items-start mb-6 ml-10 gap-2">
                            <div className="flex flex-col items-start pb-[1px] pr-[293px]">
                                <span className="text-[#0B0B0B] text-[13px] font-bold" >
                                    {"Email Address"}
                                </span>
                            </div>
                            <input
                                placeholder={"you@example.com"}
                                value={input1}
                                onChange={(event) => onChangeInput1(event.target.value)}
                                className="text-[#8B8696] bg-white text-sm py-[19px] px-[17px] rounded-[10px] border border-solid border-[#00000012]"
                            />
                        </div>
                        <div className="flex items-start bg-gray-100 py-[18px] mb-7 ml-10 rounded-xl">
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/galyddi5_expires_30_days.png"}
                                className="w-[18px] h-[19px] ml-4 mr-3 rounded-xl object-fill"
                            />
                            <div className="flex flex-col shrink-0 items-start pb-[1px] mr-[31px]">
                                <span className="text-[#8B8696] text-[13px] w-[301px]" >
                                    {"Reset instructions typically arrive within a few\nminutes. Be sure to check your spam folder if you\ndon’t see the email."}
                                </span>
                            </div>
                        </div>
                        <button className="flex flex-col items-start bg-[#FF8A2B] text-left py-[19px] px-[137px] mb-[23px] ml-10 rounded-[10px] border-0"
                            onClick={() => alert("Pressed!")}>
                            <span className="text-white text-[15px] font-bold" >
                                {"Send reset link"}
                            </span>
                        </button>
                        <div className="flex flex-col items-start pb-[1px] ml-[87px]">
                            <span className="text-[#8B8696] text-sm" >
                                {"Remembered your password? Back to login"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}