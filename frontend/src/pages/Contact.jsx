import React, { useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;

export default (props) => {

  const [input1, onChangeInput1] = useState('');
  const [input2, onChangeInput2] = useState('');
  const [input3, onChangeInput3] = useState('');
  const [input4, onChangeInput4] = useState('');
  const [input5, onChangeInput5] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Validation checks
  const isFirstNameValid = input1.trim().length > 0;
  const isLastNameValid = input2.trim().length > 0;
  const isEmailValid = EMAIL_REGEX.test(input3);
  const isPhoneValid = PHONE_REGEX.test(input4);
  const isCompanyValid = input5.trim().length > 0;
  const isMessageValid = message.trim().length > 0;

  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isCompanyValid && isMessageValid;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (isFormValid) {
      console.log('Contact form submitted:', {
        firstName: input1,
        lastName: input2,
        email: input3,
        phone: input4,
        company: input5,
        message
      });
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="self-stretch bg-[#F5F7FA]">
        <div className="self-stretch pb-[125px] mb-[1px] pt-[30px]"

          style={{

            background: "linear-gradient(180deg, #110C3B, #2B1F8F, #4834DF)"

          }}>
          <div className="flex items-center self-stretch max-w-[1134px] mx-auto gap-14">
            <div className="flex flex-1 flex-col items-start">
              <button className="flex flex-col items-start bg-[#FFFFFF1C] text-left py-[11px] px-3.5 mb-[22px] rounded-[999px] border-0"

                onClick={() => alert("Pressed!")}>
                <span className="text-white text-[13px]" >

                  {"Contact our team"}
                </span>
              </button>
              <div className="flex flex-col items-start pb-[1px] mb-[27px] ml-[3px]">
                <span className="text-white text-[56px] font-bold w-[502px]" >

                  {"Let’s talk about your\nlearning platform"}
                </span>
              </div>
              <div className="flex flex-col items-start pb-[1px] mb-[38px]">
                <span className="text-white text-[17px] w-[514px]" >

                  {"Whether you’re launching your first academy, migrating from\nanother LMS, or scaling a multi-tenant setup, our team is here to\nhelp you choose the right path."}
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <button className="flex flex-col shrink-0 items-start bg-[#FF8A33] text-left py-3.5 px-[18px] rounded border-0"

                  onClick={() => alert("Pressed!")}>
                  <span className="text-white text-sm" >

                    {"Send message"}
                  </span>
                </button>
                <button className="flex flex-col shrink-0 items-start bg-transparent text-left py-4 px-5 rounded border border-solid border-[#FFFFFF36]"

                  onClick={() => alert("Pressed!")}>
                  <span className="text-white text-sm" >

                    {"Talk to sales"}
                  </span>
                </button>
              </div>
            </div>
            <img

              src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/n3lb85s4_expires_30_days.png"}

              className="flex-1 h-[438px] object-fill"

            />
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch bg-[#F5F7FA] py-[88px] px-[120px]">
          <div className="flex flex-col items-center self-stretch py-1.5 mb-[11px] mx-8">
            <span className="text-[#0F1724] text-[40px] font-bold" >

              {"Get in touch"}
            </span>
          </div>
          <div className="flex flex-col items-start py-1 px-[17px] mb-3">
            <span className="text-slate-400 text-[15px] text-center w-[584px]" >

              {"Tell us about your institution, audience, and goals. We’ll help you find the best LMS\nsetup for your team."}
            </span>
          </div>
          <div className="flex items-start self-stretch pt-[45px] mx-8 gap-8">
            <div className="flex flex-col shrink-0 items-start pb-[1px]">
              <div className="flex flex-col items-start bg-white py-[29px] px-7 mb-[19px] gap-[30px] rounded-lg"

                style={{

                  boxShadow: "0px 6px 22px #0F17240D"

                }}>
                <div className="flex items-start gap-4">
                  <img

                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/mwkw9r9b_expires_30_days.png"}

                    className="w-12 h-12 object-fill"

                  />
                  <div className="flex flex-col shrink-0 items-start py-1 gap-[11px]">
                    <span className="text-[#0F1724] text-lg font-bold ml-[1px] mr-[161px]" >

                      {"Email us"}
                    </span>
                    <span className="text-slate-400 text-sm w-[232px]" >

                      {"Share your needs, migration\nquestions, or partnership ideas and\nwe’ll reply within one business day."}
                    </span>
                  </div>
                </div>
                <span className="text-violet-800 text-sm" >

                  {"hello@lmsplatform.com"}
                </span>
              </div>
              <div className="flex flex-col items-start bg-white py-[29px] px-7 mb-5 gap-[30px] rounded-lg"

                style={{

                  boxShadow: "0px 6px 22px #0F17240D"

                }}>
                <div className="flex items-start gap-4">
                  <img

                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/iy0hc2ur_expires_30_days.png"}

                    className="w-12 h-12 object-fill"

                  />
                  <div className="flex flex-col shrink-0 items-start">
                    <div className="flex flex-col items-start py-[5px] pr-[120px]">
                      <span className="text-[#0F1724] text-lg font-bold" >

                        {"Call our team"}
                      </span>
                    </div>
                    <div className="flex flex-col items-start py-1">
                      <span className="text-slate-400 text-sm w-[233px]" >

                        {"Speak with sales for plan guidance,\nonboarding support, and enterprise\nrequirements."}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-violet-800 text-sm" >

                  {"+1 (800) 245-1948"}
                </span>
              </div>
              <div className="flex items-start bg-white pt-[27px] pb-[41px] px-7 rounded-lg"

                style={{

                  boxShadow: "0px 6px 22px #0F17240D"

                }}>
                <img

                  src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/9h7mafvm_expires_30_days.png"}

                  className="w-12 h-12 mr-4 object-fill"

                />
                <div className="flex flex-col shrink-0 items-start py-1 mr-[11px] gap-[9px]">
                  <span className="text-[#0F1724] text-lg font-bold mr-[104px]" >

                    {"Support hours"}
                  </span>
                  <span className="text-slate-400 text-sm w-[228px]" >

                    {"Monday to Friday, 9:00 AM to 6:00\nPM EST. Priority support available\non Pro and Enterprise plans."}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white py-[35px] px-9 rounded-lg"

              style={{

                boxShadow: "0px 10px 28px #0F172412"

              }}>
              <div className="flex flex-col items-start self-stretch pb-[1px] mb-[26px] gap-[9px]">
                <div className="flex flex-col items-start self-stretch pb-[1px]">
                  <span className="text-[#0F1724] text-[28px] font-bold" >

                    {"Send us a message"}
                  </span>
                </div>
                <div className="flex flex-col items-start py-1 pr-[75px]">
                  <span className="text-slate-400 text-[15px] w-[484px]" >

                    {"We’ll connect you with the right specialist for product demos, pricing\nquestions, onboarding, or learner support."}
                  </span>
                </div>
              </div>
              <div className="self-stretch pb-[1px] mb-6">
                <div className="flex justify-center items-center self-stretch mb-4 gap-[18px]">
                  <div className="flex flex-col shrink-0 items-start gap-2">
                    <div className="flex flex-col items-start pb-[1px] pr-[264px]">
                      <span className="text-[#0F1724] text-[13px]" >

                        {"First name"}
                      </span>
                    </div>
                    <input

                      placeholder={"Ava"}

                      value={input1}

                      onChange={(event) => onChangeInput1(event.target.value)}

                      className="text-slate-400 bg-white text-sm py-5 px-[17px] rounded-md border border-solid border-[#00000012]"

                    />
                  </div>
                  <div className="flex flex-col shrink-0 items-start gap-2">
                    <div className="flex flex-col items-start pb-[1px] pr-[265px]">
                      <span className="text-[#0F1724] text-[13px]" >

                        {"Last name"}
                      </span>
                    </div>
                    <input

                      placeholder={"Turner"}

                      value={input2}

                      onChange={(event) => onChangeInput2(event.target.value)}

                      className="text-slate-400 bg-white text-sm py-5 px-[17px] rounded-md border border-solid border-[#00000012]"

                    />
                  </div>
                </div>
                <div className="flex justify-center items-center self-stretch mb-[17px] gap-[18px]">
                  <div className="flex flex-col shrink-0 items-start gap-2">
                    <div className="flex flex-col items-start pb-[1px] pr-[260px]">
                      <span className="text-[#0F1724] text-[13px]" >

                        {"Work email"}
                      </span>
                    </div>
                    <input

                      placeholder={"ava@brightpathacademy.com"}

                      value={input3}

                      onChange={(event) => onChangeInput3(event.target.value)}

                      className="text-slate-400 bg-white text-sm py-[18px] px-[17px] rounded-md border border-solid border-[#00000012]"

                    />
                  </div>
                  <div className="flex flex-col shrink-0 items-start gap-2">
                    <div className="flex flex-col items-start pb-[1px] pr-[290px]">
                      <span className="text-[#0F1724] text-[13px]" >

                        {"Phone"}
                      </span>
                    </div>
                    <input

                      placeholder={"+1 (555) 210-4488"}

                      value={input4}

                      onChange={(event) => onChangeInput4(event.target.value)}

                      className="text-slate-400 bg-white text-sm py-[19px] px-[18px] rounded-md border border-solid border-[#00000012]"

                    />
                  </div>
                </div>
                <div className="flex flex-col self-stretch mb-4 gap-2">
                  <div className="flex flex-col items-start self-stretch pb-[1px]">
                    <span className="text-[#0F1724] text-[13px]" >

                      {"Institution or company"}
                    </span>
                  </div>
                  <input

                    placeholder={"BrightPath Learning Academy"}

                    value={input5}

                    onChange={(event) => onChangeInput5(event.target.value)}

                    className="self-stretch text-slate-400 bg-white text-sm p-[18px] rounded-md border border-solid border-[#00000012]"

                  />
                </div>
                <div className="flex flex-col self-stretch gap-2">
                  <div className="flex flex-col items-start self-stretch pb-[1px]">
                    <span className="text-[#0F1724] text-[13px]" >

                      {"How can we help?"}
                    </span>
                  </div>
                  <div className="flex flex-col items-start self-stretch bg-white pt-5 pl-[17px] rounded-md border border-solid border-[#00000012]">
                    <span className="text-slate-400 text-sm w-[606px] mb-[67px]" >

                      {"We’re evaluating LMS platforms for a growing coaching business with live classes, recorded\ncourses, and branded student portals. We’d love to understand onboarding, pricing, and\nmigration options."}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <div className="flex flex-col shrink-0 items-start py-[3px] px-[1px]">
                  <span className="text-slate-400 text-[13px]" >

                    {"By submitting, you agree to hear back from our team about your request."}
                  </span>
                </div>
                <button className="flex flex-col shrink-0 items-start bg-[#FF8A33] text-left py-[15px] px-[19px] rounded border-0"

                  onClick={() => alert("Pressed!")}>
                  <span className="text-white text-sm" >

                    {"Send message"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch bg-white py-[88px] px-[120px]">
          <div className="flex flex-col items-center self-stretch py-[3px] mb-[11px] mx-8">
            <span className="text-[#0F1724] text-[40px] font-bold" >

              {"Choose the right way to reach us"}
            </span>
          </div>
          <div className="flex flex-col items-start py-[5px] px-[7px] mb-3">
            <span className="text-slate-400 text-[15px]" >

              {"From product questions to onboarding help, our team is organized to get you answers\nfaster."}
            </span>
          </div>
          <div className="flex items-start self-stretch pt-[45px] mx-8 gap-7">
            <div className="flex-1 bg-[#F5F7FA] py-[27px] px-7 rounded-lg"

              style={{

                boxShadow: "0px 6px 18px #0F172408"

              }}>
              <div className="flex items-center self-stretch mb-3.5 gap-3.5">
                <img

                  src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/0whcppz2_expires_30_days.png"}

                  className="w-[46px] h-[46px] object-fill"

                />
                <div className="flex flex-col shrink-0 items-start py-1.5">
                  <span className="text-[#0F1724] text-lg font-bold" >

                    {"Sales"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch pb-[1px] mb-[15px]">
                <span className="text-slate-400 text-sm w-[279px]" >

                  {"Best for pricing, plan comparisons, demos,\nand large team rollouts."}
                </span>
              </div>
              <div className="flex flex-col self-stretch gap-[7px]">
                <div className="flex flex-col items-start self-stretch pb-[1px]">
                  <span className="text-[#0F1724] text-sm" >

                    {"sales@lmsplatform.com"}
                  </span>
                </div>
                <div className="flex flex-col items-start self-stretch pb-[1px]">
                  <span className="text-[#0F1724] text-sm" >

                    {"Average response: under 4 hours"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[#F5F7FA] py-[27px] px-7 rounded-lg"

              style={{

                boxShadow: "0px 6px 18px #0F172408"

              }}>
              <div className="flex items-center self-stretch mb-3.5 gap-3.5">
                <img

                  src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/86jzda7h_expires_30_days.png"}

                  className="w-[46px] h-[46px] object-fill"

                />
                <div className="flex flex-col shrink-0 items-start py-[5px]">
                  <span className="text-[#0F1724] text-lg font-bold" >

                    {"Support"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch pb-[1px] mb-[15px]">
                <span className="text-slate-400 text-sm w-[276px]" >

                  {"Best for product guidance, account setup,\nand platform troubleshooting."}
                </span>
              </div>
              <div className="flex flex-col self-stretch gap-[7px]">
                <div className="flex flex-col items-start self-stretch pb-[1px]">
                  <span className="text-[#0F1724] text-sm" >

                    {"support@lmsplatform.com"}
                  </span>
                </div>
                <div className="flex flex-col items-start self-stretch pb-[1px]">
                  <span className="text-[#0F1724] text-sm" >

                    {"Average response: under 2 hours"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[#F5F7FA] py-[27px] px-7 rounded-lg"

              style={{

                boxShadow: "0px 6px 18px #0F172408"

              }}>
              <div className="flex items-center self-stretch mb-3.5 gap-3.5">
                <img

                  src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/vo983e9u_expires_30_days.png"}

                  className="w-[46px] h-[46px] object-fill"

                />
                <div className="flex flex-col shrink-0 items-start py-1 px-[1px]">
                  <span className="text-[#0F1724] text-lg font-bold" >

                    {"Partnerships"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch pb-[1px] mb-[15px]">
                <span className="text-slate-400 text-sm w-72" >

                  {"Best for integrations, reseller programs, and\nstrategic education partnerships."}
                </span>
              </div>
              <div className="flex flex-col self-stretch gap-[7px]">
                <div className="flex flex-col items-start self-stretch pb-[1px]">
                  <span className="text-[#0F1724] text-sm" >

                    {"partners@lmsplatform.com"}
                  </span>
                </div>
                <div className="flex flex-col items-start self-stretch pb-[1px]">
                  <span className="text-[#0F1724] text-sm" >

                    {"Enterprise and channel inquiries"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch bg-[#F5F7FA] py-[91px] px-[120px] mb-[1px] gap-[11px]">
          <div className="flex flex-col items-center self-stretch pt-1.5 mx-8">
            <span className="text-[#0F1724] text-[40px] font-bold" >

              {"Frequently asked questions"}
            </span>
          </div>
          <div className="flex flex-col items-start py-1 px-[158px]">
            <span className="text-slate-400 text-[15px]" >

              {"A few quick answers before you reach out."}
            </span>
          </div>
          <div className="self-stretch pt-[45px] mx-8">
            <div className="flex justify-between items-start self-stretch bg-white py-[23px] px-7 mb-[17px] rounded-lg"

              style={{

                boxShadow: "0px 6px 18px #0F172408"

              }}>
              <div className="flex flex-col shrink-0 items-start gap-2">
                <div className="flex flex-col items-start py-1 pl-[1px] pr-[528px]">
                  <span className="text-[#0F1724] text-[17px] font-bold" >

                    {"How quickly can we launch our LMS?"}
                  </span>
                </div>
                <div className="flex flex-col items-start py-[5px] px-[1px]">
                  <span className="text-slate-400 text-sm" >

                    {"Most teams can get started in a few days. Larger migrations and multi-tenant setups usually require a guided onboarding plan."}
                  </span>
                </div>
              </div>
              <img

                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/gq4ya56i_expires_30_days.png"}

                className="w-9 h-9 rounded-lg object-fill"

              />
            </div>
            <div className="flex justify-between items-start self-stretch bg-white py-[23px] px-7 mb-4 rounded-lg"

              style={{

                boxShadow: "0px 6px 18px #0F172408"

              }}>
              <div className="flex flex-col shrink-0 items-start gap-2">
                <div className="flex flex-col items-start py-1 pl-[1px] pr-[360px]">
                  <span className="text-[#0F1724] text-[17px] font-bold" >

                    {"Do you support live classes and recorded content?"}
                  </span>
                </div>
                <div className="flex flex-col items-start py-[5px]">
                  <span className="text-slate-400 text-sm" >

                    {"Yes. You can combine live sessions, pre-recorded lessons, quizzes, certificates, and digital resources in one platform."}
                  </span>
                </div>
              </div>
              <img

                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/pm2e7x7z_expires_30_days.png"}

                className="w-9 h-9 rounded-lg object-fill"

              />
            </div>
            <div className="flex justify-between items-start self-stretch bg-white py-[23px] px-7 rounded-lg"

              style={{

                boxShadow: "0px 6px 18px #0F172408"

              }}>
              <div className="flex flex-col shrink-0 items-start gap-2">
                <div className="flex flex-col items-start py-1 pr-[429px]">
                  <span className="text-[#0F1724] text-[17px] font-bold" >

                    {"Can we use our own domain and branding?"}
                  </span>
                </div>
                <div className="flex flex-col items-start py-[5px]">
                  <span className="text-slate-400 text-sm" >

                    {"Absolutely. Pro and Enterprise plans support branded experiences, custom domains, and flexible portal configurations."}
                  </span>
                </div>
              </div>
              <img

                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/r575nt0z_expires_30_days.png"}

                className="w-9 h-9 rounded-lg object-fill"

              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
