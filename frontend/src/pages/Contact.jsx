import React, { useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[6-9]\d{9}$|^\+91[6-9]\d{9}$|^0\d{10}$/;
const PINCODE_REGEX = /^[1-9][0-9]{5}$/;

export default (props) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    schoolName: '',
    class: '',
    subject: '',
    board: '',
    address: '',
    pincode: '',
    parentsMobile: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Validation checks
  const isFullNameValid = formData.fullName.trim().length > 0;
  const isEmailValid = EMAIL_REGEX.test(formData.email);
  const isPhoneValid = PHONE_REGEX.test(formData.phone);
  const isSchoolNameValid = formData.schoolName.trim().length > 0;
  const isClassValid = formData.class.trim().length > 0;
  const isSubjectValid = formData.subject.trim().length > 0;
  const isBoardValid = formData.board.trim().length > 0;
  const isAddressValid = formData.address.trim().length > 0;
  const isPincodeValid = PINCODE_REGEX.test(formData.pincode);
  const isParentsMobileValid = PHONE_REGEX.test(formData.parentsMobile);
  const isMessageValid = formData.message.trim().length > 0;

  const isFormValid = isFullNameValid && isEmailValid && isPhoneValid && isSchoolNameValid && 
                      isClassValid && isSubjectValid && isBoardValid && isAddressValid && 
                      isPincodeValid && isParentsMobileValid && isMessageValid;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (isFormValid) {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1'}/inquire/contact`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          }
        );
        if (res.ok) {
          alert('Thank you for contacting us! We will get back to you soon.');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            schoolName: '',
            class: '',
            subject: '',
            board: '',
            address: '',
            pincode: '',
            parentsMobile: '',
            message: ''
          });
          setSubmitted(false);
        } else {
          alert('Failed to submit inquiry. Please try again later.');
        }
      } catch (err) {
        alert('Failed to submit inquiry. Please try again later.');
      }
    }
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="self-stretch bg-[#F7FCFF]">
        {/* Hero Section - Contact Us */}
        <div className="flex flex-col items-center self-stretch bg-white py-[1px] px-4 sm:px-8 md:px-16 lg:px-36 pt-16 pb-8">
          <div className="flex flex-col items-center self-stretch py-1.5 mb-[11px] mx-8">
            <span className="text-[#111b2f] text-3xl sm:text-4xl lg:text-[40px] font-bold text-center">
              {"Contact Us"}
            </span>
          </div>
          <div className="flex flex-col items-start py-1 px-[17px] mb-3">
            <span className="text-slate-500 text-[15px] text-center max-w-[584px]">
              {"We are committed to providing reliable support and assistance across all our services."}
            </span>
          </div>
        </div>

        {/* Contact Form and Info Section */}
        <div className="flex flex-col items-center self-stretch py-8 px-4 sm:px-8 md:px-16 lg:px-36">
          <div className="flex flex-col lg:flex-row items-start self-stretch pt-[45px] mx-8 gap-8">
            {/* Contact Info Cards - Left Side */}
            <div className="flex flex-col shrink-0 items-start pb-[1px] w-full lg:w-auto lg:min-w-[320px]">
              {/* Registered Office Card */}
              <div className="flex flex-col items-start bg-[#f7efeb] py-[29px] px-7 mb-[19px] gap-[30px] rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
                <div className="flex items-start gap-4">
                  <img
                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/mwkw9r9b_expires_30_days.png"}
                    className="w-12 h-12 object-fill"
                    alt="office"
                  />
                  <div className="flex flex-col shrink-0 items-start py-1 gap-[11px]">
                    <span className="text-[#111b2f] text-lg font-bold">
                      {"Registered Office"}
                    </span>
                    <span className="text-slate-500 text-sm max-w-[232px]">
                      {"Scheme No 54, Vijay Nagar, Indore, Madhya Pradesh, India – 452010"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex flex-col items-start bg-[#f7efeb] py-[29px] px-7 mb-5 gap-[30px] rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
                <div className="flex items-start gap-4">
                  <img
                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/iy0hc2ur_expires_30_days.png"}
                    className="w-12 h-12 object-fill"
                    alt="phone"
                  />
                  <div className="flex flex-col shrink-0 items-start">
                    <div className="flex flex-col items-start py-[5px]">
                      <span className="text-[#111b2f] text-lg font-bold">
                        {"Phone"}
                      </span>
                    </div>
                    <div className="flex flex-col items-start py-1">
                      <span className="text-slate-500 text-sm max-w-[233px]">
                        {"+91 78987 81533"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email & Website Card */}
              <div className="flex flex-col items-start bg-[#f7efeb] py-[29px] px-7 mb-5 gap-[30px] rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
                <div className="flex items-start gap-4">
                  <img
                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/9h7mafvm_expires_30_days.png"}
                    className="w-12 h-12 object-fill"
                    alt="email"
                  />
                  <div className="flex flex-col shrink-0 items-start gap-[9px]">
                    <span className="text-[#111b2f] text-lg font-bold">
                      {"Email & Website"}
                    </span>
                    <span className="text-slate-500 text-sm">karominfo@kacpl.in</span>
                    <span className="text-[#0b8276] text-sm font-medium">https://edu-mart.com/</span>
                  </div>
                </div>
              </div>

              {/* Support Hours Card */}
              <div className="flex items-start bg-[#f7efeb] pt-[27px] pb-[41px] px-7 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
                <img
                  src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/0whcppz2_expires_30_days.png"}
                  className="w-12 h-12 mr-4 object-fill"
                  alt="support"
                />
                <div className="flex flex-col shrink-0 items-start py-1 gap-[9px]">
                  <span className="text-[#111b2f] text-lg font-bold">
                    {"Support Availability"}
                  </span>
                  <span className="text-slate-500 text-sm max-w-[228px]">
                    {"Monday – Saturday, 10:00 AM – 6:30 PM"}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="flex-1 bg-[#f7efeb] py-[35px] px-6 sm:px-9 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col items-start self-stretch pb-[1px] mb-[26px] gap-[9px]">
                  <div className="flex flex-col items-start self-stretch pb-[1px]">
                    <span className="text-[#111b2f] text-2xl sm:text-[28px] font-bold">
                      {"Send us a message"}
                    </span>
                  </div>
                  <div className="flex flex-col items-start py-1">
                    <span className="text-slate-500 text-[15px] max-w-[484px]">
                      {"Fill in the details below and we'll get back to you as soon as possible."}
                    </span>
                  </div>
                </div>

                <div className="self-stretch pb-[1px] mb-6">
                  {/* Full Name */}
                  <div className="flex flex-col self-stretch mb-4 gap-2">
                    <div className="flex flex-col items-start self-stretch pb-[1px]">
                      <span className="text-[#111b2f] text-[13px] font-medium">
                        {"Full Name *"}
                      </span>
                    </div>
                    <input
                      name="fullName"
                      placeholder={"Enter your full name"}
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full text-slate-600 bg-white text-sm py-5 px-[17px] rounded-md border ${
                        submitted && !isFullNameValid ? 'border-red-500' : 'border-[#00000012]'
                      } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent`}
                    />
                    {submitted && !isFullNameValid && (
                      <span className="text-red-500 text-xs">Full name is required</span>
                    )}
                  </div>

                  {/* Email and Phone Row */}
                  <div className="flex flex-col sm:flex-row justify-center items-stretch self-stretch mb-4 gap-[18px]">
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <div className="flex flex-col items-start pb-[1px]">
                        <span className="text-[#111b2f] text-[13px] font-medium">
                          {"Email Address *"}
                        </span>
                      </div>
                      <input
                        name="email"
                        placeholder={"you@school.com"}
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full text-slate-600 bg-white text-sm py-5 px-[17px] rounded-md border ${
                          submitted && !isEmailValid ? 'border-red-500' : 'border-[#00000012]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent`}
                      />
                      {submitted && !isEmailValid && (
                        <span className="text-red-500 text-xs">Valid email is required</span>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <div className="flex flex-col items-start pb-[1px]">
                        <span className="text-[#111b2f] text-[13px] font-medium">
                          {"Phone Number *"}
                        </span>
                      </div>
                      <input
                        name="phone"
                        placeholder={"+91 98765 43210"}
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full text-slate-600 bg-white text-sm py-5 px-[17px] rounded-md border ${
                          submitted && !isPhoneValid ? 'border-red-500' : 'border-[#00000012]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent`}
                      />
                      {submitted && !isPhoneValid && (
                        <span className="text-red-500 text-xs">Valid 10-digit phone number is required</span>
                      )}
                    </div>
                  </div>

                  {/* School Name and Class Row */}
                  <div className="flex flex-col sm:flex-row justify-center items-stretch self-stretch mb-4 gap-[18px]">
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <div className="flex flex-col items-start pb-[1px]">
                        <span className="text-[#111b2f] text-[13px] font-medium">
                          {"School Name *"}
                        </span>
                      </div>
                      <input
                        name="schoolName"
                        placeholder={"Enter school name"}
                        value={formData.schoolName}
                        onChange={handleChange}
                        className={`w-full text-slate-600 bg-white text-sm py-5 px-[17px] rounded-md border ${
                          submitted && !isSchoolNameValid ? 'border-red-500' : 'border-[#00000012]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent`}
                      />
                      {submitted && !isSchoolNameValid && (
                        <span className="text-red-500 text-xs">School name is required</span>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <div className="flex flex-col items-start pb-[1px]">
                        <span className="text-[#111b2f] text-[13px] font-medium">
                          {"Class *"}
                        </span>
                      </div>
                      <input
                        name="class"
                        placeholder={"e.g., 10th, 12th"}
                        value={formData.class}
                        onChange={handleChange}
                        className={`w-full text-slate-600 bg-white text-sm py-5 px-[17px] rounded-md border ${
                          submitted && !isClassValid ? 'border-red-500' : 'border-[#00000012]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent`}
                      />
                      {submitted && !isClassValid && (
                        <span className="text-red-500 text-xs">Class is required</span>
                      )}
                    </div>
                  </div>

                  {/* Subject and Board Row */}
                  <div className="flex flex-col sm:flex-row justify-center items-stretch self-stretch mb-4 gap-[18px]">
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <div className="flex flex-col items-start pb-[1px]">
                        <span className="text-[#111b2f] text-[13px] font-medium">
                          {"Subject *"}
                        </span>
                      </div>
                      <input
                        name="subject"
                        placeholder={"e.g., Mathematics, Science"}
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full text-slate-600 bg-white text-sm py-5 px-[17px] rounded-md border ${
                          submitted && !isSubjectValid ? 'border-red-500' : 'border-[#00000012]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent`}
                      />
                      {submitted && !isSubjectValid && (
                        <span className="text-red-500 text-xs">Subject is required</span>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <div className="flex flex-col items-start pb-[1px]">
                        <span className="text-[#111b2f] text-[13px] font-medium">
                          {"Board *"}
                        </span>
                      </div>
                      <input
                        name="board"
                        placeholder={"e.g., CBSE, ICSE, State Board"}
                        value={formData.board}
                        onChange={handleChange}
                        className={`w-full text-slate-600 bg-white text-sm py-5 px-[17px] rounded-md border ${
                          submitted && !isBoardValid ? 'border-red-500' : 'border-[#00000012]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent`}
                      />
                      {submitted && !isBoardValid && (
                        <span className="text-red-500 text-xs">Board is required</span>
                      )}
                    </div>
                  </div>

                  {/* Address and Pincode Row */}
                  <div className="flex flex-col sm:flex-row justify-center items-stretch self-stretch mb-4 gap-[18px]">
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <div className="flex flex-col items-start pb-[1px]">
                        <span className="text-[#111b2f] text-[13px] font-medium">
                          {"Address *"}
                        </span>
                      </div>
                      <input
                        name="address"
                        placeholder={"Street address, city, district"}
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full text-slate-600 bg-white text-sm py-5 px-[17px] rounded-md border ${
                          submitted && !isAddressValid ? 'border-red-500' : 'border-[#00000012]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent`}
                      />
                      {submitted && !isAddressValid && (
                        <span className="text-red-500 text-xs">Address is required</span>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <div className="flex flex-col items-start pb-[1px]">
                        <span className="text-[#111b2f] text-[13px] font-medium">
                          {"Pincode *"}
                        </span>
                      </div>
                      <input
                        name="pincode"
                        placeholder={"6-digit pincode"}
                        value={formData.pincode}
                        onChange={handleChange}
                        className={`w-full text-slate-600 bg-white text-sm py-5 px-[17px] rounded-md border ${
                          submitted && !isPincodeValid ? 'border-red-500' : 'border-[#00000012]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent`}
                      />
                      {submitted && !isPincodeValid && (
                        <span className="text-red-500 text-xs">Valid 6-digit pincode is required</span>
                      )}
                    </div>
                  </div>

                  {/* Parents Mobile Number */}
                  <div className="flex flex-col self-stretch mb-4 gap-2">
                    <div className="flex flex-col items-start self-stretch pb-[1px]">
                      <span className="text-[#111b2f] text-[13px] font-medium">
                        {"Parents Mobile Number *"}
                      </span>
                    </div>
                    <input
                      name="parentsMobile"
                      placeholder={"+91 98765 43210"}
                      value={formData.parentsMobile}
                      onChange={handleChange}
                      className={`w-full text-slate-600 bg-white text-sm py-5 px-[17px] rounded-md border ${
                        submitted && !isParentsMobileValid ? 'border-red-500' : 'border-[#00000012]'
                      } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent`}
                    />
                    {submitted && !isParentsMobileValid && (
                      <span className="text-red-500 text-xs">Valid parent's mobile number is required</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col self-stretch gap-2">
                    <div className="flex flex-col items-start self-stretch pb-[1px]">
                      <span className="text-[#111b2f] text-[13px] font-medium">
                        {"Message *"}
                      </span>
                    </div>
                    <textarea
                      name="message"
                      placeholder={"Tell us how we can help you..."}
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full text-slate-600 bg-white text-sm p-[18px] rounded-md border ${
                        submitted && !isMessageValid ? 'border-red-500' : 'border-[#00000012]'
                      } focus:outline-none focus:ring-2 focus:ring-[#0b8276] focus:border-transparent resize-vertical`}
                    />
                    {submitted && !isMessageValid && (
                      <span className="text-red-500 text-xs">Message is required</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center self-stretch gap-4">
                  <div className="flex flex-col shrink-0 items-start py-[3px] px-[1px]">
                    <span className="text-slate-500 text-[13px]">
                      {"* Required fields. We'll get back to you within 24-48 hours."}
                    </span>
                  </div>
                  <button 
                    type="submit"
                    className="flex flex-col shrink-0 items-start bg-[#FF8A33] text-left py-[15px] px-[19px] rounded border-0 hover:bg-[#e07a2e] transition-colors cursor-pointer"
                  >
                    <span className="text-white text-sm font-medium">
                      {"Send message"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};