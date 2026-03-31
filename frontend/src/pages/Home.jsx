import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7FCFF]">
				<div className="self-stretch">
					<div className="flex items-center self-stretch pb-25 pl-36 pr-36 pt-15 gap-[60px]"
						style={{
							background: "linear-gradient(180deg, #110C3B, #2B1F8F, #4834DF)"
						}}>
						<div className="flex flex-1 flex-col items-start gap-6">
							<div className="flex flex-col items-start pb-[1px]">
								<span className="text-white text-[64px] font-bold w-[484px]" >
									{"Learn, Play &\nGrow With\nFun Courses!"}
								</span>
							</div>
							<div className="flex flex-col self-stretch py-1.5 px-[1px] mr-[46px]">
								<span className="text-white text-xl" >
									{"A magical learning world for kids! Schools, teachers, and parents can create amazing courses where children love to learn."}
								</span>
							</div>
							<div className="flex items-start self-stretch pt-6 gap-5">
								<button className="flex flex-col shrink-0 items-start bg-[#FF8A33] text-left py-4 px-7 rounded-xl border-0"
									onClick={() => alert("Pressed!")}>
									<span className="text-white text-base font-bold" >
										{"Start Free Trial"}
									</span>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-transparent text-left py-3.5 px-7 rounded-xl border-2 border-solid border-white"
									onClick={() => alert("Pressed!")}>
									<span className="text-white text-base font-bold" >
										{"Watch a Demo"}
									</span>
								</button>
							</div>
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/0lfkrcpg_expires_30_days.png"}
							className="flex-1 h-[364px] object-fill"
						/>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch bg-[#F0F4F8] py-[95px] px-36 gap-4">
					<div className="flex flex-col items-center self-stretch py-3.5">
						<span className="text-slate-900 text-[40px] font-bold" >
							{"Awesome Features"}
						</span>
					</div>
					<div className="flex flex-col items-start py-1 px-[51px]">
						<span className="text-slate-400 text-lg text-center w-[496px]" >
							{"Everything you need to make learning fun and easy for kids!"}
						</span>
					</div>
					<div className="flex flex-col self-stretch pb-10 gap-8">
						<div className="flex items-center self-stretch gap-[33px]">
							<div className="flex flex-1 flex-col items-center bg-white py-[41px] rounded-lg"
								style={{
									boxShadow: "0px 10px 40px #00000005"
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/npx0odro_expires_30_days.png"}
									className="w-[72px] h-[72px] mb-[30px] rounded-lg object-fill"
								/>
								<div className="flex flex-col items-start pb-[1px] mb-[21px]">
									<span className="text-slate-900 text-xl font-bold" >
										{"Kid-Friendly Portals"}
									</span>
								</div>
								<div className="flex flex-col self-stretch pb-[1px] mx-[42px]">
									<span className="text-slate-400 text-base text-center" >
										{"Each school or branch gets a colorful,\nsafe learning space for children."}
									</span>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-center bg-white py-[41px] rounded-lg"
								style={{
									boxShadow: "0px 10px 40px #00000005"
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/s185n108_expires_30_days.png"}
									className="w-[72px] h-[72px] mb-[30px] rounded-lg object-fill"
								/>
								<div className="flex flex-col items-start pb-[1px] mb-[21px]">
									<span className="text-slate-900 text-xl font-bold" >
										{"Fun Live Classes"}
									</span>
								</div>
								<div className="flex flex-col self-stretch pb-[1px] mx-[41px]">
									<span className="text-slate-400 text-base text-center" >
										{"Interactive live sessions and recorded\ncartoons, stories & lessons."}
									</span>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-center bg-white py-[41px] rounded-lg"
								style={{
									boxShadow: "0px 10px 40px #00000005"
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/nt5izrsd_expires_30_days.png"}
									className="w-[72px] h-[72px] mb-[31px] rounded-lg object-fill"
								/>
								<div className="flex flex-col items-start pb-[1px] mb-[22px]">
									<span className="text-slate-900 text-xl font-bold" >
										{"Safe Payments"}
									</span>
								</div>
								<div className="flex flex-col self-stretch pb-[1px] mx-[33px]">
									<span className="text-slate-400 text-base text-center" >
										{"Easy and secure payments for parents\nwith Razorpay & Stripe."}
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-center self-stretch gap-[33px]">
							<div className="flex flex-1 flex-col items-center bg-white py-[41px] rounded-lg"
								style={{
									boxShadow: "0px 10px 40px #00000005"
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/syxw21sd_expires_30_days.png"}
									className="w-[72px] h-[72px] mb-[30px] rounded-lg object-fill"
								/>
								<div className="flex flex-col items-start pb-[1px] mb-[21px]">
									<span className="text-slate-900 text-xl font-bold" >
										{"Course Store"}
									</span>
								</div>
								<div className="flex flex-col self-stretch pb-[1px] mx-[47px]">
									<span className="text-slate-400 text-base text-center" >
										{"A fun store to find and buy the best\nlearning courses for your child."}
									</span>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-center bg-white py-[41px] rounded-lg"
								style={{
									boxShadow: "0px 10px 40px #00000005"
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/bxeot43w_expires_30_days.png"}
									className="w-[72px] h-[72px] mb-[30px] rounded-lg object-fill"
								/>
								<div className="flex flex-col items-start pb-[1px] mb-[21px]">
									<span className="text-slate-900 text-xl font-bold" >
										{"Progress Reports"}
									</span>
								</div>
								<div className="flex flex-col items-start pb-[1px]">
									<span className="text-slate-400 text-base text-center w-[244px]" >
										{"Track how much your child has learned\nwith fun stars and badges!"}
									</span>
								</div>
							</div>
							<div className="flex-1 h-[266px]">
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch bg-[#F7FCFF] py-[100px] px-[120px] mb-[1px] gap-4">
					<div className="flex flex-col items-center self-stretch py-3.5 mx-6">
						<span className="text-slate-900 text-[40px] font-bold" >
							{"Who is it for?"}
						</span>
					</div>
					<div className="flex flex-col items-start py-1 px-[63px]">
						<span className="text-slate-400 text-lg" >
							{"Made for everyone who helps children learn and grow."}
						</span>
					</div>
					<div className="flex items-start self-stretch pt-[47px] mx-6 gap-[39px]">
						<div className="flex flex-1 flex-col items-center">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/zdfkwoq9_expires_30_days.png"}
								className="w-[357px] h-[292px] mb-[1px] object-fill"
							/>
							<div className="flex flex-col items-start pt-1.5 pb-[22px] px-[1px]">
								<span className="text-slate-900 text-2xl font-bold" >
									{"Schools & Classes"}
								</span>
							</div>
							<div className="flex flex-col self-stretch py-[3px] px-1 mx-[1px]">
								<span className="text-slate-400 text-base text-center" >
									{"Bring your school online! Manage classes,\nteachers, and create a fun learning journey."}
								</span>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/y2ugpgwn_expires_30_days.png"}
								className="w-[357px] h-[292px] mb-[1px] object-fill"
							/>
							<div className="flex flex-col items-start pt-2 pb-6">
								<span className="text-slate-900 text-2xl font-bold" >
									{"Teachers & Tutors"}
								</span>
							</div>
							<div className="flex flex-col self-stretch py-[3px] px-[1px]">
								<span className="text-slate-400 text-base text-center" >
									{"Create magical lessons and share your knowledge\nwith young learners around the world."}
								</span>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/pb4ocxvm_expires_30_days.png"}
								className="w-[357px] h-[292px] mb-[1px] object-fill"
							/>
							<div className="flex flex-col items-start pt-[9px] pb-[25px]">
								<span className="text-slate-900 text-2xl font-bold" >
									{"Kids & Parents"}
								</span>
							</div>
							<div className="flex flex-col self-stretch py-[3px] px-[25px]">
								<span className="text-slate-400 text-base text-center" >
									{"A safe, colorful, and exciting place where\nchildren love to learn new things."}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch py-[100px] px-36 gap-4"
					style={{
						background: "linear-gradient(180deg, #5B3CFFF2, #2E1A6FF2)"
					}}>
					<div className="flex flex-col items-center self-stretch py-[15px]">
						<span className="text-white text-[40px] font-bold" >
							{"How It Works"}
						</span>
					</div>
					<div className="flex flex-col items-start py-1 px-[50px]">
						<span className="text-white text-lg" >
							{"Four simple steps to start your learning adventure!"}
						</span>
					</div>
					<div className="flex items-start self-stretch pt-12 gap-8">
						<div className="flex flex-1 flex-col items-center pb-1">
							<button className="flex flex-col items-start bg-[#FFFFFF1A] text-left py-[30px] px-[37px] mb-[30px] rounded-[44px] border-2 border-solid border-[#FFFFFF4D]"
								onClick={() => alert("Pressed!")}>
								<span className="text-white text-4xl font-bold" >
									{"1"}
								</span>
							</button>
							<div className="flex flex-col items-start pb-[1px] mb-[21px]">
								<span className="text-white text-xl font-bold" >
									{"Create Your World"}
								</span>
							</div>
							<div className="flex flex-col self-stretch pb-[1px] mx-[15px]">
								<span className="text-white text-[15px] text-center" >
									{"Set up your own colorful learning\nplatform in just a few clicks!"}
								</span>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center pb-1">
							<button className="flex flex-col items-start bg-[#FFFFFF1A] text-left py-[30px] px-[34px] mb-[30px] rounded-[44px] border-2 border-solid border-[#FFFFFF4D]"
								onClick={() => alert("Pressed!")}>
								<span className="text-white text-4xl font-bold" >
									{"2"}
								</span>
							</button>
							<div className="flex flex-col items-start pb-[1px] mb-[21px]">
								<span className="text-white text-xl font-bold" >
									{"Add Fun Lessons"}
								</span>
							</div>
							<div className="flex flex-col self-stretch pb-[1px] mx-[11px]">
								<span className="text-white text-[15px] text-center" >
									{"Upload videos, quizzes, stories,\nand fun activities for kids."}
								</span>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center pb-1">
							<button className="flex flex-col items-start bg-[#FFFFFF1A] text-left py-[30px] px-[33px] mb-[30px] rounded-[44px] border-2 border-solid border-[#FFFFFF4D]"
								onClick={() => alert("Pressed!")}>
								<span className="text-white text-4xl font-bold" >
									{"3"}
								</span>
							</button>
							<div className="flex flex-col items-start pb-[1px] mb-[25px]">
								<span className="text-white text-xl font-bold" >
									{"Share & Shine"}
								</span>
							</div>
							<div className="flex flex-col self-stretch pb-[1px] mx-3">
								<span className="text-white text-[15px] text-center" >
									{"Share your courses with students\nand help them learn and grow."}
								</span>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center pb-1">
							<button className="flex flex-col items-start bg-[#FFFFFF1A] text-left py-[30px] px-[33px] mb-[30px] rounded-[44px] border-2 border-solid border-[#FFFFFF4D]"
								onClick={() => alert("Pressed!")}>
								<span className="text-white text-4xl font-bold" >
									{"4"}
								</span>
							</button>
							<div className="flex flex-col items-start pb-[1px] mb-[25px]">
								<span className="text-white text-xl font-bold" >
									{"Kids Learn & Play"}
								</span>
							</div>
							<div className="flex flex-col self-stretch pb-[1px] mx-7">
								<span className="text-white text-[15px] text-center" >
									{"Children get a fun, safe, and amazing\nlearning experience every day!"}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch bg-[#F7FCFF] py-[94px]">
					<div className="flex flex-col items-center self-stretch max-w-[1152px] py-2.5 mb-4 mx-auto">
						<span className="text-slate-900 text-[40px] font-bold" >
							{"Simple, transparent pricing"}
						</span>
					</div>
					<div className="flex flex-col items-start py-1 px-[47px] mb-[51px]">
						<span className="text-slate-400 text-lg" >
							{"Choose the perfect plan for your learning community."}
						</span>
					</div>
					<div className="flex items-center self-stretch max-w-[1152px] mx-auto">
						<div className="flex flex-1 flex-col items-start py-[49px] mr-[33px] gap-4 rounded-lg border border-solid border-[#00000012]">
							<div className="flex flex-col items-center self-stretch py-2 mx-[41px]">
								<span className="text-slate-900 text-2xl font-bold" >
									{"Starter Plan"}
								</span>
							</div>
							<div className="flex items-start ml-[76px]">
								<div className="w-8 h-[15px] mt-[47px] mr-[3px]">
								</div>
								<span className="text-slate-900 text-[56px] font-bold my-[15px] mr-[3px]" >
									{"$29"}
								</span>
								<span className="text-slate-400 text-lg mt-[47px] mr-[69px]" >
									{"/mo"}
								</span>
							</div>
							<div className="flex flex-col self-stretch py-[19px] mx-[41px] gap-[15px]">
								<div className="flex items-center self-stretch gap-[13px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/pvfwdbgh_expires_30_days.png"}
										className="w-6 h-6 object-fill"
									/>
									<span className="text-slate-900 text-base" >
										{"Up to 100 students"}
									</span>
								</div>
								<div className="flex items-center self-stretch gap-[13px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/l2j0obqq_expires_30_days.png"}
										className="w-6 h-6 object-fill"
									/>
									<span className="text-slate-900 text-base" >
										{"5 Courses"}
									</span>
								</div>
								<div className="flex items-center self-stretch gap-3">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/6ofzl4vd_expires_30_days.png"}
										className="w-6 h-6 object-fill"
									/>
									<span className="text-slate-900 text-base" >
										{"Standard Support"}
									</span>
								</div>
							</div>
							<button className="flex flex-col items-center self-stretch bg-transparent text-left py-[21px] mx-[41px] rounded border-2 border-solid border-[#00000012]"
								onClick={() => alert("Pressed!")}>
								<span className="text-slate-900 text-base font-bold" >
									{"Choose Starter"}
								</span>
							</button>
						</div>
						<div className="flex-1 relative mr-[15px]">
							<div className="flex flex-col items-start self-stretch bg-slate-900 py-[59px] gap-[17px] rounded-lg"
								style={{
									boxShadow: "0px 20px 50px #00000026"
								}}>
								<div className="flex flex-col items-center self-stretch py-[9px] mx-[42px]">
									<span className="text-[#F7FCFF] text-2xl font-bold" >
										{"Pro Plan"}
									</span>
								</div>
								<div className="flex items-start ml-[82px]">
									<div className="w-[33px] h-4 mt-[50px] mr-[3px]">
									</div>
									<span className="text-[#F7FCFF] text-[56px] font-bold my-4 mr-[3px]" >
										{"$79"}
									</span>
									<span className="text-white text-lg mt-[50px] mr-[76px]" >
										{"/mo"}
									</span>
								</div>
								<div className="flex flex-col self-stretch py-5 mx-[41px] gap-4">
									<div className="flex items-center self-stretch gap-3.5">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/nhxhg5xw_expires_30_days.png"}
											className="w-[25px] h-[25px] object-fill"
										/>
										<span className="text-[#F7FCFF] text-base" >
											{"Unlimited students"}
										</span>
									</div>
									<div className="flex items-center self-stretch gap-3.5">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/hzzmuy09_expires_30_days.png"}
											className="w-[25px] h-[25px] object-fill"
										/>
										<span className="text-[#F7FCFF] text-base" >
											{"Unlimited Courses"}
										</span>
									</div>
									<div className="flex items-center self-stretch gap-[13px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/jvllqhem_expires_30_days.png"}
											className="w-[25px] h-[25px] object-fill"
										/>
										<span className="text-[#F7FCFF] text-base" >
											{"Custom Domain"}
										</span>
									</div>
									<div className="flex items-center self-stretch gap-3.5">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/s5hbyste_expires_30_days.png"}
											className="w-[25px] h-[25px] object-fill"
										/>
										<span className="text-[#F7FCFF] text-base" >
											{"Priority Support"}
										</span>
									</div>
								</div>
								<button className="flex flex-col items-center self-stretch bg-[#FF8A33] text-left py-3.5 mx-[42px] rounded border-0"
									onClick={() => alert("Pressed!")}>
									<span className="text-white text-base font-bold" >
										{"Choose Pro"}
									</span>
								</button>
							</div>
							<div className="flex flex-col items-center self-stretch absolute top-[-20px] right-0 left-0">
								<button className="flex flex-col items-start bg-[#FF8A33] text-left py-[7px] px-6 rounded-xl border-0"
									onClick={() => alert("Pressed!")}>
									<span className="text-white text-sm font-bold" >
										{"Most Popular"}
									</span>
								</button>
							</div>
						</div>
						<div className="flex flex-1 flex-col py-[49px] gap-4 rounded-lg border border-solid border-[#00000012]">
							<div className="flex flex-col items-center self-stretch py-1.5 mx-[41px]">
								<span className="text-slate-900 text-2xl font-bold" >
									{"Enterprise Plan"}
								</span>
							</div>
							<div className="flex flex-col items-center self-stretch py-[21px] mx-[41px]">
								<span className="text-slate-900 text-[56px] font-bold" >
									{"Custom"}
								</span>
							</div>
							<div className="flex flex-col self-stretch py-[19px] mx-10 gap-[15px]">
								<div className="flex items-center self-stretch gap-[13px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/rog5oi83_expires_30_days.png"}
										className="w-6 h-6 object-fill"
									/>
									<span className="text-slate-900 text-base" >
										{"Multi-Tenant setup"}
									</span>
								</div>
								<div className="flex items-center self-stretch gap-[13px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/fepgjc9p_expires_30_days.png"}
										className="w-6 h-6 object-fill"
									/>
									<span className="text-slate-900 text-base" >
										{"Dedicated Manager"}
									</span>
								</div>
								<div className="flex items-center self-stretch gap-3">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/ibqboa75_expires_30_days.png"}
										className="w-6 h-6 object-fill"
									/>
									<span className="text-slate-900 text-base" >
										{"Advanced Integrations"}
									</span>
								</div>
							</div>
							<button className="flex flex-col items-center self-stretch bg-transparent text-left py-[22px] mx-[41px] rounded border-2 border-solid border-[#00000012]"
								onClick={() => alert("Pressed!")}>
								<span className="text-slate-900 text-base font-bold" >
									{"Contact Us"}
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch bg-[#F0F4F8] py-[100px] px-[120px] gap-4">
					<div className="flex flex-col items-center self-stretch py-3.5 mx-6">
						<span className="text-slate-900 text-[40px] font-bold" >
							{"Happy Stories"}
						</span>
					</div>
					<div className="flex flex-col items-start py-1 px-36">
						<span className="text-slate-400 text-lg" >
							{"What teachers, parents, and kids are saying about us."}
						</span>
					</div>
					<div className="flex items-start self-stretch pt-12 px-[1px] mx-6">
						<div className="flex flex-1 flex-col items-start bg-white py-[39px] pr-[39px] mr-8 gap-[23px] rounded-lg"
							style={{
								boxShadow: "0px 4px 20px #00000005"
							}}>
							<div className="flex items-center ml-[39px] gap-4">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/344cmw5b_expires_30_days.png"}
									className="w-14 h-14 object-fill"
								/>
								<div className="flex flex-col shrink-0 items-start py-[5px] gap-[11px]">
									<span className="text-slate-900 text-lg font-bold" >
										{"Ms. Sarah"}
									</span>
									<span className="text-slate-400 text-[15px] mr-[17px]" >
										{"2nd Grade Teacher"}
									</span>
								</div>
								<div className="w-14 h-14">
								</div>
							</div>
							<div className="flex flex-col self-stretch pb-[1px] ml-[39px]">
								<span className="text-slate-900 text-base" >
									{"“My students love the colorful lessons!\nSetting up my class was super easy,\nand now learning feels like playtime.”"}
								</span>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/1te5y34d_expires_30_days.png"}
								className="w-[282px] h-4 ml-[39px] rounded-lg object-fill"
							/>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white py-[39px] pr-[39px] mr-[33px] gap-[23px] rounded-lg"
							style={{
								boxShadow: "0px 4px 20px #00000005"
							}}>
							<div className="flex items-center ml-[39px] gap-4">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/atih781j_expires_30_days.png"}
									className="w-14 h-14 object-fill"
								/>
								<div className="flex flex-col shrink-0 items-start py-1 gap-[11px]">
									<span className="text-slate-900 text-lg font-bold mr-[22px]" >
										{"Mr. David"}
									</span>
									<span className="text-slate-400 text-[15px]" >
										{"Coding School"}
									</span>
								</div>
								<div className="w-14 h-14">
								</div>
							</div>
							<div className="flex flex-col self-stretch pb-[1px] ml-[39px]">
								<span className="text-slate-900 text-base" >
									{"“The multi-tenant feature is amazing!\nWe created custom portals for each\nschool. A game changer for us!”"}
								</span>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/4vpqu26y_expires_30_days.png"}
								className="w-[282px] h-4 ml-[39px] rounded-lg object-fill"
							/>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-[39px] gap-[23px] rounded-lg"
							style={{
								boxShadow: "0px 4px 20px #00000005"
							}}>
							<div className="flex items-center self-stretch mx-[39px] gap-4">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/xz2lhbfq_expires_30_days.png"}
									className="w-14 h-14 object-fill"
								/>
								<div className="flex flex-col shrink-0 items-start py-1 gap-2">
									<span className="text-slate-900 text-lg font-bold" >
										{"Mrs. Elena"}
									</span>
									<span className="text-slate-400 text-[15px] mr-[21px]" >
										{"Language Parent"}
									</span>
								</div>
								<div className="w-14 h-14">
								</div>
							</div>
							<div className="flex flex-col self-stretch pb-[1px] mx-[39px]">
								<span className="text-slate-900 text-base" >
									{"“My son is learning Spanish with so\nmuch joy! The platform is safe, easy\nto use, and he asks to learn every day.”"}
								</span>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/fs6n7ac3_expires_30_days.png"}
								className="w-[282px] h-4 rounded-lg object-fill"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
