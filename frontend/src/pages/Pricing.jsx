import React, { useState } from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F5F7FA]">
				<div className="self-stretch bg-[#F5F7FA]">
					<div className="self-stretch">
						<div className="flex items-center self-stretch pt-[38px] pb-24 px-[145px] gap-14"
							style={{
								background: "linear-gradient(180deg, #110C3B, #2B1F8F, #4834DF)"
							}}>
							<div className="flex flex-1 flex-col items-start pb-[1px]">
								<div className="flex items-center mb-[23px]">
									<button className="flex flex-col shrink-0 items-start bg-[#FFFFFF1A] text-left py-[9px] px-3.5 mr-3 rounded-xl border border-solid border-[#FFFFFF1C]"
										onClick={() => alert("Pressed!")}>
										<span className="text-white text-[13px] font-bold" >
											{"14-day free trial"}
										</span>
									</button>
									<button className="flex flex-col shrink-0 items-start bg-[#FFFFFF1A] text-left py-[9px] px-[15px] mr-[13px] rounded-xl border border-solid border-[#FFFFFF1C]"
										onClick={() => alert("Pressed!")}>
										<span className="text-white text-[13px] font-bold" >
											{"No setup fee"}
										</span>
									</button>
									<button className="flex flex-col shrink-0 items-start bg-[#FFFFFF1A] text-left py-2.5 px-[15px] rounded-xl border border-solid border-[#FFFFFF1C]"
										onClick={() => alert("Pressed!")}>
										<span className="text-white text-[13px] font-bold" >
											{"Made for happy learning"}
										</span>
									</button>
								</div>
								<div className="flex flex-col items-start pb-[1px] mb-7">
									<span className="text-white text-[64px] font-bold w-[501px]" >
										{"Simple pricing to\nstart, share, and\ngrow your happy LMS"}
									</span>
								</div>
								<div className="flex flex-col items-start pb-[1px] mb-7">
									<span className="text-white text-[17px] w-[531px]" >
										{"Pick a plan that fits your school or learning center today, then upgrade as your\nstudents, teachers, and fun activities grow. Everything is made for educational\nbusinesses that want clarity and speed!"}
									</span>
								</div>
								<div className="flex items-center gap-4">
									<button className="flex flex-col shrink-0 items-start bg-[#FF8A33] text-left py-[18px] px-[21px] rounded-md border-0"
										onClick={() => alert("Pressed!")}>
										<span className="text-white text-sm font-bold" >
											{"Start Free Trial"}
										</span>
									</button>
									<button className="flex flex-col shrink-0 items-start bg-[#FFFFFF12] text-left py-[18px] px-[23px] rounded-md border border-solid border-[#FFFFFF26]"
										onClick={() => alert("Pressed!")}>
										<span className="text-white text-sm font-bold" >
											{"Book Demo"}
										</span>
									</button>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-start bg-[#FFFFFF12] py-7 pr-7 gap-6 rounded-lg"
								style={{
									boxShadow: "0px 24px 60px #070A1E47"
								}}>
								<div className="flex items-center bg-[#FFFFFF12] p-1.5 ml-7 gap-[7px] rounded-xl">
									<button className="flex flex-col shrink-0 items-start bg-white text-left py-[11px] px-4 rounded-xl border-0"
										onClick={() => alert("Pressed!")}>
										<span className="text-[#15192D] text-[13px] font-bold" >
											{"Monthly billing"}
										</span>
									</button>
									<div className="flex flex-col shrink-0 items-start py-[11px] px-[15px] rounded-xl">
										<span className="text-white text-[13px] font-bold" >
											{"Yearly billing"}
										</span>
									</div>
								</div>
								<div className="flex flex-col self-stretch bg-white py-7 ml-7 gap-5 rounded-lg">
									<div className="flex justify-between items-center self-stretch mx-7">
										<div className="flex flex-col shrink-0 items-start gap-1.5">
											<div className="flex flex-col items-start py-[5px] px-[1px]">
												<span className="text-gray-500 text-sm" >
													{"Most schools choose"}
												</span>
											</div>
											<div className="flex flex-col items-start py-2 pl-[1px] pr-[42px]">
												<span className="text-[#0B1220] text-[22px] font-bold" >
													{"Pro Plan"}
												</span>
											</div>
										</div>
										<button className="flex flex-col shrink-0 items-start bg-[#FF8A3324] text-left py-[9px] px-3.5 rounded-xl border-0"
											onClick={() => alert("Pressed!")}>
											<span className="text-[#FF8A33] text-[13px] font-bold" >
												{"Most Popular"}
											</span>
										</button>
									</div>
									<div className="flex justify-between items-start self-stretch mx-7">
										<div className="flex shrink-0 items-start gap-2">
											<div className="flex flex-col shrink-0 items-start py-0.5 px-[1px]">
												<span className="text-[#0B1220] text-[56px] font-bold" >
													{"$79"}
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start py-2 mt-[25px]">
												<span className="text-gray-500 text-[15px]" >
													{"/month"}
												</span>
											</div>
										</div>
										<div className="flex flex-col shrink-0 items-start py-[3px] mt-9">
											<span className="text-green-600 text-[13px] font-bold" >
												{"Save 18% yearly"}
											</span>
										</div>
									</div>
									<div className="flex justify-center items-center self-stretch mx-7 gap-3">
										<div className="flex flex-col shrink-0 items-start bg-[#F3F6F9] pt-3.5 px-[13px] rounded-md">
											<div className="flex flex-col items-start pb-[1px] mb-[3px]">
												<span className="text-[#0B1220] text-lg font-bold" >
													{"Unlimited"}
												</span>
											</div>
											<div className="flex flex-col items-start pb-[1px] pr-[38px] mb-[33px]">
												<span className="text-gray-500 text-[13px]" >
													{"Students"}
												</span>
											</div>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-[#F3F6F9] py-3.5 px-[13px] gap-[3px] rounded-md">
											<div className="flex flex-col items-start pb-[1px] pr-[52px]">
												<span className="text-[#0B1220] text-lg font-bold" >
													{"24/7"}
												</span>
											</div>
											<div className="flex flex-col items-start pb-[1px] pr-[45px]">
												<span className="text-gray-500 text-[13px] w-[46px]" >
													{"Priority\nsupport"}
												</span>
											</div>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-[#F3F6F9] py-3.5 px-[13px] gap-[3px] rounded-md">
											<div className="flex flex-col items-start pb-[1px] pr-[34px]">
												<span className="text-[#0B1220] text-lg font-bold" >
													{"1-click"}
												</span>
											</div>
											<div className="flex flex-col items-start pb-[1px] pr-[46px]">
												<span className="text-gray-500 text-[13px] w-[45px]" >
													{"Custom\ndomain"}
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col self-stretch mx-[27px] gap-3.5">
										<div className="flex items-center self-stretch gap-[13px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/nxulcuv4_expires_30_days.png"}
												className="w-5 h-5 object-fill"
											/>
											<span className="text-[#0B1220] text-sm" >
												{"Unlimited courses and fun pages"}
											</span>
										</div>
										<div className="flex items-center self-stretch gap-3">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/8973s6ul_expires_30_days.png"}
												className="w-5 h-5 object-fill"
											/>
											<span className="text-[#0B1220] text-sm" >
												{"Safe payment support (Stripe & Razorpay)"}
											</span>
										</div>
										<div className="flex items-center self-stretch gap-3">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/qz5imtdx_expires_30_days.png"}
												className="w-5 h-5 object-fill"
											/>
											<span className="text-[#0B1220] text-sm" >
												{"Reports, coupons, and team seats"}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col self-stretch bg-[#F0F4F8] py-[88px] px-36 mb-[1px] gap-14">
						<div className="flex flex-col items-center self-stretch gap-4">
							<button className="flex flex-col items-start bg-[#7C4DFF1C] text-left py-[9px] px-3.5 rounded-xl border-0"
								onClick={() => alert("Pressed!")}>
								<span className="text-[#7C4DFF] text-[13px] font-bold" >
									{"Pricing"}
								</span>
							</button>
							<div className="flex flex-col items-start pt-[5px] px-[53px]">
								<span className="text-[#0B1220] text-[44px] font-bold text-center w-[654px]" >
									{"Pick the plan that fits your\nhappy learning journey"}
								</span>
							</div>
							<div className="flex flex-col items-start py-1 px-[29px]">
								<span className="text-gray-500 text-base text-center w-[582px]" >
									{"Clear monthly pricing, all the fun LMS features included, and room to grow without\nchanging platforms."}
								</span>
							</div>
						</div>
						<div className="flex items-center self-stretch gap-6">
							<div className="flex flex-1 flex-col items-start bg-white py-[31px] pr-8 rounded-lg"
								style={{
									boxShadow: "0px 18px 40px #0E12200D"
								}}>
								<div className="flex flex-col self-stretch mb-6 ml-8 gap-2.5">
									<div className="flex flex-col items-start self-stretch pb-[1px]">
										<span className="text-[#0B1220] text-2xl font-bold" >
											{"Starter"}
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch pb-[1px]">
										<span className="text-gray-500 text-sm w-[251px]" >
											{"For new teachers and small schools\nlaunching their first fun courses."}
										</span>
									</div>
								</div>
								<div className="flex items-start self-stretch mb-[17px] ml-8 gap-[9px]">
									<div className="flex flex-col shrink-0 items-start py-0.5 px-[1px]">
										<span className="text-[#0B1220] text-[56px] font-bold" >
											{"$29"}
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start py-2 mt-[25px]">
										<span className="text-gray-500 text-[15px]" >
											{"/mo"}
										</span>
									</div>
								</div>
								<span className="text-gray-500 text-[13px] mb-[29px] ml-[33px]" >
									{"Up to 100 happy students"}
								</span>
								<div className="flex flex-col self-stretch pb-[18px] mb-6 ml-8 gap-3.5">
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/gpwlobgx_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[3px]">
											<span className="text-[#0B1220] text-sm" >
												{"5 published courses"}
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/ss5djwbn_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[3px]">
											<span className="text-[#0B1220] text-sm" >
												{"Video, quiz, and fun activities"}
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/blr70v7d_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[3px] px-[1px]">
											<span className="text-[#0B1220] text-sm" >
												{"Simple coupons and checkout"}
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/dewhpy6x_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[3px] px-[1px]">
											<span className="text-[#0B1220] text-sm" >
												{"Email support"}
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/40japh7b_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[5px]">
											<span className="text-[#0B1220] text-sm" >
												{"Custom domain"}
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/cas72wdr_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[3px]">
											<span className="text-[#0B1220] text-sm" >
												{"Basic reports"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col self-stretch ml-8 gap-3.5">
									<input
										placeholder={"Perfect for solo teachers starting their first fun course."}
										value={input1}
										onChange={(event) => onChangeInput1(event.target.value)}
										className="self-stretch text-gray-800 bg-[#F3F6F9] text-[13px] py-[18px] px-3.5 rounded-md border-0"
									/>
									<button className="flex flex-col items-center self-stretch bg-transparent text-left py-[18px] rounded-md border border-solid border-[#00000012]"
										onClick={() => alert("Pressed!")}>
										<span className="text-[#0B1220] text-sm font-bold" >
											{"Choose Starter"}
										</span>
									</button>
								</div>
							</div>
							<div className="flex-1 relative">
								<div className="flex flex-col items-start self-stretch bg-[#141B2D] py-[31px] pr-8 rounded-lg"
									style={{
										boxShadow: "0px 28px 64px #12192C36"
									}}>
									<div className="flex flex-col self-stretch mb-6 ml-8 gap-2.5">
										<div className="flex flex-col items-start self-stretch pb-[1px]">
											<span className="text-white text-2xl font-bold" >
												{"Pro"}
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch pb-[1px]">
											<span className="text-white text-sm w-[262px]" >
												{"For growing schools that want\nautomation, more features, and premium control."}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch mb-[17px] ml-8 gap-2">
										<div className="flex flex-col shrink-0 items-start py-0.5 px-[1px]">
											<span className="text-white text-[56px] font-bold" >
												{"$79"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start py-2 mt-[25px]">
											<span className="text-gray-500 text-[15px]" >
												{"/mo"}
											</span>
										</div>
									</div>
									<span className="text-white text-[13px] mb-8 ml-[33px]" >
										{"Unlimited students and courses"}
									</span>
									<div className="flex flex-col self-stretch mb-6 ml-8 gap-3.5">
										<div className="flex items-center self-stretch py-[1px] gap-3">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/2une7vr2_expires_30_days.png"}
												className="w-5 h-5 object-fill"
											/>
											<div className="flex flex-col shrink-0 items-start py-[3px] px-[1px]">
												<span className="text-white text-sm" >
													{"Unlimited published courses"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch py-[1px] gap-3">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/uvh9xu2n_expires_30_days.png"}
												className="w-5 h-5 object-fill"
											/>
											<div className="flex flex-col shrink-0 items-start py-[5px]">
												<span className="text-white text-sm" >
													{"Custom domain and branded site"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch gap-[13px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/3avotvwn_expires_30_days.png"}
												className="w-[19px] h-5 object-fill"
											/>
											<div className="flex flex-1 flex-col items-start py-[5px]">
												<span className="text-white text-sm w-[219px]" >
													{"Automation, certificates, and\nfun drip content"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch py-[1px] gap-3">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/44whzh12_expires_30_days.png"}
												className="w-5 h-5 object-fill"
											/>
											<div className="flex flex-col shrink-0 items-start py-[3px] px-[1px]">
												<span className="text-white text-sm" >
													{"Priority support and team seats"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch py-[1px] gap-3">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/ep8p2utz_expires_30_days.png"}
												className="w-5 h-5 object-fill"
											/>
											<div className="flex flex-col shrink-0 items-start py-[3px]">
												<span className="text-white text-sm" >
													{"Advanced reports and analytics"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch py-[1px] gap-3">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/7xnnrlu4_expires_30_days.png"}
												className="w-5 h-5 object-fill"
											/>
											<div className="flex flex-col shrink-0 items-start py-[3px]">
												<span className="text-white text-sm" >
													{"API and connections"}
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col self-stretch ml-8 gap-3.5">
										<input
											placeholder={"Ideal for serious schools and modern academies."}
											value={input2}
											onChange={(event) => onChangeInput2(event.target.value)}
											className="self-stretch text-white bg-[#FFFFFF12] text-[13px] py-[18px] px-3.5 rounded-md border-0"
										/>
										<button className="flex flex-col items-center self-stretch bg-[#FF8A33] text-left py-[18px] rounded-md border-0"
											onClick={() => alert("Pressed!")}>
											<span className="text-white text-sm font-bold" >
												{"Choose Pro"}
											</span>
										</button>
									</div>
								</div>
								<div className="flex flex-col items-center self-stretch absolute top-[-14px] right-0 left-0">
									<button className="flex flex-col items-start bg-[#FF8A33] text-left py-2 px-[11px] rounded-xl border-0"
										onClick={() => alert("Pressed!")}>
										<span className="text-white text-xs font-bold" >
											{"Most Popular"}
										</span>
									</button>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white py-[31px] pr-8 rounded-lg"
								style={{
									boxShadow: "0px 18px 40px #0E12200D"
								}}>
								<div className="flex flex-col self-stretch mb-6 ml-8 gap-2.5">
									<div className="flex flex-col items-start self-stretch pb-[1px]">
										<span className="text-[#0B1220] text-2xl font-bold" >
											{"Enterprise"}
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch pb-[1px]">
										<span className="text-gray-500 text-sm w-[286px]" >
											{"For big schools, franchises, and multi-brand\nlearning businesses with special needs."}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch pb-[1px] mb-[17px] ml-8">
									<span className="text-[#0B1220] text-[46px] font-bold" >
										{"Custom"}
									</span>
								</div>
								<span className="text-gray-500 text-[13px] mb-[29px] ml-8" >
									{"Tailored setup just for you"}
								</span>
								<div className="flex flex-col self-stretch pb-7 mb-6 ml-8 gap-3.5">
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/rciozmjo_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[3px] px-[1px]">
											<span className="text-[#0B1220] text-sm" >
												{"Multi-school setup"}
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/bx5mjimu_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[3px] px-[1px]">
											<span className="text-[#0B1220] text-sm" >
												{"Dedicated success manager"}
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/gb6jil35_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[3px]">
											<span className="text-[#0B1220] text-sm" >
												{"Advanced security and permissions"}
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch py-[1px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/tc648xi2_expires_30_days.png"}
											className="w-5 h-5 mr-3 object-fill"
										/>
										<div className="flex flex-1 flex-col items-center py-[3px] mr-11">
											<span className="text-[#0B1220] text-sm" >
												{"Migration and setup help"}
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/1w818b29_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[3px]">
											<span className="text-[#0B1220] text-sm" >
												{"Custom agreements and security review"}
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch py-[1px] gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/sig2tpg6_expires_30_days.png"}
											className="w-5 h-5 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-start py-[3px] px-[1px]">
											<span className="text-[#0B1220] text-sm" >
												{"Private setup options"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col self-stretch ml-8 gap-3.5">
									<div className="flex flex-col items-start self-stretch bg-[#F3F6F9] py-[18px] pl-3.5 rounded-md">
										<span className="text-gray-800 text-[13px] w-[250px]" >
											{"Built for larger schools, partner networks,\nand custom learning journeys."}
										</span>
									</div>
									<button className="flex flex-col items-center self-stretch bg-transparent text-left py-[18px] rounded-md border border-solid border-[#00000012]"
										onClick={() => alert("Pressed!")}>
										<span className="text-[#0B1220] text-sm font-bold" >
											{"Contact Sales"}
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="self-stretch bg-[#F5F7FA] py-[88px] px-36 mb-[1px]">
						<div className="flex flex-col items-center self-stretch bg-white max-w-[1152px] pt-10 rounded-lg"
							style={{
								boxShadow: "0px 18px 40px #0E12200D"
							}}>
							<div className="flex flex-col items-center mb-[33px]">
								<button className="flex flex-col items-start bg-[#FF8A331C] text-left py-[9px] px-3.5 mb-4 rounded-xl border-0"
									onClick={() => alert("Pressed!")}>
									<span className="text-[#FF8A33] text-[13px] font-bold" >
										{"Compare plans"}
									</span>
								</button>
								<span className="text-[#0B1220] text-[38px] font-bold mb-3" >
									{"Everything you need, clearly compared"}
								</span>
								<div className="flex flex-col items-start py-[3px] px-2">
									<span className="text-gray-500 text-base text-center w-[623px]" >
										{"A simple side-by-side look at the LMS features that matter most when choosing\nyour plan."}
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch mb-[37px] mx-10">
								<div className="flex flex-1 flex-col items-start py-[5px] pl-[1px] mr-[13px]">
									<span className="text-[#0B1220] text-sm font-bold" >
										{"Features"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start pt-[5px] pb-1.5 px-[95px] mr-3">
									<span className="text-[#0B1220] text-[15px] font-bold" >
										{"Starter"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start pt-[5px] pb-1.5 px-[103px] mr-3">
									<span className="text-[#0B1220] text-[15px] font-bold" >
										{"Pro"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start pt-1 pb-[5px] px-[77px]">
									<span className="text-[#0B1220] text-[15px] font-bold" >
										{"Enterprise"}
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch mb-[37px] mx-10">
								<div className="flex flex-1 flex-col items-start py-[3px] mr-[13px]">
									<span className="text-[#0B1220] text-sm font-bold" >
										{"Student capacity"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start py-1.5 px-[103px] mr-3">
									<span className="text-gray-500 text-sm" >
										{"100"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start py-1.5 px-[84px] mr-3">
									<span className="text-gray-500 text-sm" >
										{"Unlimited"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start py-1.5 px-[84px]">
									<span className="text-gray-500 text-sm" >
										{"Unlimited"}
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch mb-9 mx-10">
								<div className="flex flex-1 flex-col items-start py-[5px] pl-[1px] mr-[13px]">
									<span className="text-[#0B1220] text-sm font-bold" >
										{"Published courses"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start py-1.5 px-[111px] mr-3">
									<span className="text-gray-500 text-sm" >
										{"5"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start py-1.5 px-[84px] mr-3">
									<span className="text-gray-500 text-sm" >
										{"Unlimited"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start py-1.5 px-[84px]">
									<span className="text-gray-500 text-sm" >
										{"Unlimited"}
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch mb-9 mx-10 gap-3">
								<div className="flex flex-1 flex-col items-start py-[5px]">
									<span className="text-[#0B1220] text-sm font-bold" >
										{"Custom domain"}
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/ttt7zy82_expires_30_days.png"}
									className="w-[230px] h-6 object-fill"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/wcp1vi84_expires_30_days.png"}
									className="w-[230px] h-6 object-fill"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/4qslfmeg_expires_30_days.png"}
									className="w-[230px] h-6 object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch mb-9 mx-10 gap-3">
								<div className="flex flex-1 flex-col items-start py-[3px]">
									<span className="text-[#0B1220] text-sm font-bold" >
										{"Advanced reports"}
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/jram7mev_expires_30_days.png"}
									className="w-[230px] h-6 object-fill"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/ls8fih8a_expires_30_days.png"}
									className="w-[230px] h-6 object-fill"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/7rpj7m2u_expires_30_days.png"}
									className="w-[230px] h-6 object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch mb-[37px] mx-10">
								<div className="flex flex-1 flex-col items-start py-[3px] pl-[1px] mr-3">
									<span className="text-[#0B1220] text-sm font-bold" >
										{"Multi-school setup"}
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/wwkc0c92_expires_30_days.png"}
									className="w-[230px] h-6 mr-3 object-fill"
								/>
								<div className="flex flex-col shrink-0 items-start py-[5px] px-[87px] mr-[11px]">
									<span className="text-gray-500 text-sm" >
										{"Optional"}
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/1xtslfas_expires_30_days.png"}
									className="w-[230px] h-6 object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch mb-[57px] mx-10">
								<div className="flex flex-1 flex-col items-start py-[3px] pl-[1px] mr-[13px]">
									<span className="text-[#0B1220] text-sm font-bold" >
										{"Support level"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start py-1.5 px-[98px] mr-3">
									<span className="text-gray-500 text-sm" >
										{"Email"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start py-[5px] px-[92px] mr-3">
									<span className="text-gray-500 text-sm" >
										{"Priority"}
									</span>
								</div>
								<div className="flex flex-col shrink-0 items-start py-[5px] px-14">
									<span className="text-gray-500 text-sm" >
										{"Success manager"}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col self-stretch bg-[#F0F4F8] py-[78px] gap-4">
						<div className="flex items-start self-stretch max-w-[1152px] mx-auto gap-8">
							<div className="flex flex-1 flex-col items-start gap-[18px]">
								<button className="flex flex-col items-start bg-[#7C4DFF1C] text-left py-2.5 px-3.5 rounded-xl border-0"
									onClick={() => alert("Pressed!")}>
									<span className="text-[#7C4DFF] text-[13px] font-bold" >
										{"FAQ"}
									</span>
								</button>
								<div className="flex flex-col items-start pt-[7px] pl-[1px] pr-[92px]">
									<span className="text-[#0B1220] text-[40px] font-bold w-[326px]" >
										{"Frequently asked\nquestions about\npricing"}
									</span>
								</div>
								<div className="flex flex-col items-start py-1 pl-[1px] pr-[22px]">
									<span className="text-gray-500 text-base w-[396px]" >
										{"Everything your school usually asks before choosing a\nplan or booking a demo."}
									</span>
								</div>
								<button className="flex flex-col items-start bg-transparent text-left py-[18px] px-[23px] rounded-md border border-solid border-[#00000012]"
									onClick={() => alert("Pressed!")}>
									<span className="text-[#0B1220] text-sm font-bold" >
										{"Talk to sales"}
									</span>
								</button>
							</div>
							<div className="flex flex-1 flex-col gap-4">
								<div className="flex flex-col self-stretch bg-white py-[23px] px-6 gap-[9px] rounded-lg"
									style={{
										boxShadow: "0px 16px 36px #0E122008"
									}}>
									<div className="flex flex-col items-start self-stretch pb-[1px]">
										<span className="text-[#0B1220] text-[17px] font-bold" >
											{"Can I start with a free trial before paying?"}
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch pb-[1px]">
										<span className="text-gray-500 text-sm w-[548px]" >
											{"Yes! Every new account gets a 14-day free trial so you can explore course creation,\ncheckout, and student management before subscribing."}
										</span>
									</div>
								</div>
								<div className="flex flex-col self-stretch bg-white py-[23px] px-6 gap-[9px] rounded-lg"
									style={{
										boxShadow: "0px 16px 36px #0E122008"
									}}>
									<div className="flex flex-col items-start self-stretch pb-[1px]">
										<span className="text-[#0B1220] text-[17px] font-bold" >
											{"Do you charge extra fees on course sales?"}
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch pb-[1px]">
										<span className="text-gray-500 text-sm w-[535px]" >
											{"No extra fees! Standard payment gateway charges from Stripe or Razorpay still apply."}
										</span>
									</div>
								</div>
								<div className="flex flex-col self-stretch bg-white py-[23px] px-6 gap-[9px] rounded-lg"
									style={{
										boxShadow: "0px 16px 36px #0E122008"
									}}>
									<div className="flex flex-col items-start self-stretch pb-[1px]">
										<span className="text-[#0B1220] text-[17px] font-bold" >
											{"What happens when I grow beyond the Starter plan?"}
										</span>
									</div>
									<div className="flex flex-col self-stretch pb-[1px]">
										<span className="text-gray-500 text-sm" >
											{"You can upgrade anytime and keep all your content, students, and storefront settings\nwithout needing to move anything!"}
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-end self-stretch">
							<div className="flex flex-col items-start bg-white py-[23px] px-6 mr-36 gap-[9px] rounded-lg"
								style={{
									boxShadow: "0px 16px 36px #0E122008"
								}}>
								<div className="flex flex-col items-start pb-[1px] pr-[119px]">
									<span className="text-[#0B1220] text-[17px] font-bold" >
										{"Is Enterprise needed for multiple schools?"}
									</span>
								</div>
								<div className="flex flex-col items-start pb-[1px] pr-[22px]">
									<span className="text-gray-500 text-sm w-[546px]" >
										{"Enterprise is best for complex multi-school or franchise setups, but some Pro\ncustomers can add lighter multi-school features as an add-on."}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="self-stretch py-16 px-36"
						style={{
							background: "linear-gradient(180deg, #5B3CFFF2, #2E1A6FF2)"
						}}>
						<div className="flex justify-between items-center self-stretch bg-[#FFFFFF0D] max-w-[1152px] py-[31px] px-9 rounded-lg">
							<div className="flex flex-col shrink-0 items-start gap-3">
								<div className="flex flex-col items-start py-[3px]">
									<span className="text-white text-[32px] font-bold w-[637px]" >
										{"Need a custom setup for your school,\nfranchise, or learning center?"}
									</span>
								</div>
								<div className="flex flex-col items-start py-1 pr-[34px]">
									<span className="text-white text-[15px] w-[603px]" >
										{"Get a personalized walkthrough, pricing guidance, and implementation plan from our team.\nWe'll help you choose the right setup from day one!"}
									</span>
								</div>
							</div>
							<div className="flex shrink-0 items-center gap-4">
								<button className="flex flex-col shrink-0 items-start bg-[#FF8A33] text-left py-[18px] px-[22px] rounded-md border-0"
									onClick={() => alert("Pressed!")}>
									<span className="text-white text-sm font-bold" >
										{"Book Demo"}
									</span>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-[#FFFFFF12] text-left py-[18px] px-[23px] rounded-md border border-solid border-[#FFFFFF26]"
									onClick={() => alert("Pressed!")}>
									<span className="text-white text-sm font-bold" >
										{"Contact Us"}
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