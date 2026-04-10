import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
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
      title: "General",
      content: "All products, prices, and offers listed on the website are subject to change without prior notice. We reserve the right to accept or reject any order at our sole discretion.",
    },
    {
      title: "Use of Website",
      content: "You agree not to misuse the website for fraudulent transactions, spamming, or activities that may harm the website's integrity. Content, images, and product descriptions are the property of Karom Edusupplies Private Limited and cannot be copied without permission.",
    },
    {
      title: "Pricing & Payment",
      content: "All prices are inclusive of applicable taxes unless stated otherwise. Payments must be made through the secure gateways provided on our platform.",
    },
    {
      title: "Shipping & Delivery",
      content: "Delivery timelines are indicative and may vary due to logistics, holidays, or unforeseen delays. We are not liable for delays caused by courier partners or force majeure events.",
    },
    {
      title: "Returns & Refunds",
      content: "Refer to our Refund Policy for details on returns, cancellations, and refunds.",
    },
    {
      title: "Limitation of Liability",
      content: "Karom Edusupplies Private Limited is not liable for indirect, incidental, or consequential damages arising from the use of our products or website.",
    },
    {
      title: "Jurisdiction",
      content: "These terms shall be governed by and interpreted under the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Indore, Madhya Pradesh.",
    },
  ];

  return (
    <div className="relative flex flex-col overflow-hidden bg-white">
      <div className="self-stretch bg-[#F7FCFF]">
        {/* Hero Section */}
        <div className="flex flex-col items-center self-stretch bg-white py-[1px] px-4 sm:px-8 md:px-16 lg:px-36 pt-20 pb-12">
          <div className="flex flex-col items-center self-stretch py-1.5 mb-[11px] mx-8">
            <span className="text-[#111b2f] text-3xl sm:text-4xl lg:text-[48px] font-bold text-center">
              Terms & Conditions
            </span>
          </div>
          <div className="flex flex-col items-start py-1 px-[17px] mb-3">
            <span className="text-slate-500 text-[15px] text-center max-w-[584px]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Terms Content Section */}
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
                  Terms & Conditions of Use
                </h1>
                <p className="text-slate-600 text-base leading-relaxed">
                  Welcome to <span className="font-semibold text-[#0b8276]">Karom Edusupplies Private Limited</span>. 
                  By accessing or using our website, you agree to the following terms.
                </p>
              </div>
            </motion.div>

            {/* Terms Sections */}
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
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0b8276]/10 flex items-center justify-center">
                      <span className="text-[#0b8276] font-bold text-sm">{index + 1}</span>
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

            {/* Acknowledgment Section */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111b2f] mb-1">
                      Acknowledgment
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. 
                      If you do not agree with any part of these terms, please do not use our website.
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
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="mt-3 space-y-1 text-sm text-slate-600">
                  <p>📧 <span className="text-[#0b8276]">karominfo@kacpl.in</span></p>
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

export default TermsAndConditions;