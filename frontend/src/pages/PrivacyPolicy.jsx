import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const sections = [
    {
      title: "Information We Collect",
      icon: "📋",
      content: "The App may collect basic information such as your name, email, phone number, delivery address, and payment details when you place an order. We may also collect app usage data (like device type and logs) to improve the service.",
    },
    {
      title: "How We Use Information",
      icon: "⚙️",
      content: "To process and deliver your orders. To provide customer support and updates about your purchases. To improve the App's performance and features.",
    },
    {
      title: "Sharing of Information",
      icon: "🔄",
      content: "We do not sell or rent your personal information. Information may be shared with trusted partners such as delivery services and payment providers. Information may be disclosed if required by law.",
    },
    {
      title: "Data Security",
      icon: "🔒",
      content: "We use reasonable measures to keep your information safe. However, no online service is 100% secure.",
    },
    {
      title: "Your Choices",
      icon: "✅",
      content: "You can update or delete your account information by contacting support. You can opt out of promotional messages anytime.",
    },
  ];

  return (
    <div className="relative flex flex-col overflow-hidden bg-white">
      <div className="self-stretch bg-[#F7FCFF]">
        {/* Hero Section */}
        <div className="flex flex-col items-center self-stretch bg-white py-[1px] px-4 sm:px-8 md:px-16 lg:px-36 pt-20 pb-12">
          <div className="flex flex-col items-center self-stretch py-1.5 mb-[11px] mx-8">
            <span className="text-[#111b2f] text-3xl sm:text-4xl lg:text-[48px] font-bold text-center">
              Privacy Policy
            </span>
          </div>
          <div className="flex flex-col items-start py-1 px-[17px] mb-3">
            <span className="text-slate-500 text-[15px] text-center max-w-[584px]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Privacy Policy Content Section */}
        <div className="flex flex-col items-center self-stretch py-8 px-4 sm:px-8 md:px-16 lg:px-36">
          <div className="flex flex-col items-start self-stretch pt-[45px] mx-8 gap-8 max-w-4xl mx-auto">
            
            {/* Introduction */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="w-full"
            >
              <div className="bg-[#f7efeb] rounded-xl p-6 sm:p-8">
                <h1 className="text-xl sm:text-2xl font-bold text-[#111b2f] mb-3">
                  Privacy Policy for Karom Edusupplies Private Limited
                </h1>
                <p className="text-slate-600 text-base leading-relaxed">
                  <span className="font-semibold text-[#0b8276]">Karom Edumart</span> (“the App”) is an online shopping application 
                  that allows users to buy various products. We are committed to protecting your privacy and ensuring the security 
                  of your personal information.
                </p>
              </div>
            </motion.div>

            {/* Privacy Sections */}
            <motion.div
              className="w-full space-y-5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow border border-[#00000008]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0b8276]/10 flex items-center justify-center text-xl">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl font-bold text-[#111b2f] mb-2">
                        {section.title}
                      </h2>
                      <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Summary Section */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="w-full mt-4"
            >
              <div className="bg-[#0b8276]/5 rounded-xl p-6 sm:p-8 border border-[#0b8276]/20">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0b8276] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111b2f] mb-1">
                      Our Commitment
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      We value your trust and are committed to protecting your personal information. 
                      We continuously update our security measures to ensure your data remains safe and confidential.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="w-full"
            >
              <div className="bg-[#f7efeb] rounded-xl p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-[#111b2f] mb-3">
                  Contact Us
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-2">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-3 space-y-1 text-sm text-slate-600">
                  <p>📧 <span className="text-[#0b8276]">support@karom-edusupplies.com</span></p>
                  <p>📞 +91 78987 81533</p>
                  <p>📍 Scheme No 54, Vijay Nagar, Indore, Madhya Pradesh, India – 452010</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;