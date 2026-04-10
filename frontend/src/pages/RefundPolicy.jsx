import React from "react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
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
      title: "Eligibility for Refund",
      icon: "✅",
      color: "#0b8276",
      points: [
        "Products must be returned in unused condition, with original packaging and invoice.",
        "Refund requests must be raised within 7 days of delivery.",
        "Items damaged due to misuse, mishandling, or normal wear & tear are not eligible.",
      ],
    },
    {
      title: "Process for Refund",
      icon: "🔄",
      color: "#FF8A33",
      points: [
        "Raise a refund/return request via our website or customer support email within the eligible period.",
        "Once we receive and inspect the returned product, the refund will be initiated to your original mode of payment within 7–10 working days.",
      ],
    },
    {
      title: "Non-Refundable Items",
      icon: "🚫",
      color: "#e74c3c",
      points: [
        "Customized products, perishable items, or products marked as 'non-returnable' are not eligible.",
      ],
    },
    {
      title: "Cancellation",
      icon: "❌",
      color: "#f39c12",
      points: [
        "Orders can be cancelled before dispatch. Once shipped, cancellation will be treated as a return.",
      ],
    },
  ];

  return (
    <div className="relative flex flex-col overflow-hidden bg-white">
      <div className="self-stretch bg-[#F7FCFF]">
        {/* Hero Section */}
        <div className="flex flex-col items-center self-stretch bg-white py-[1px] px-4 sm:px-8 md:px-16 lg:px-36 pt-20 pb-12">
          <div className="flex flex-col items-center self-stretch py-1.5 mb-[11px] mx-8">
            <span className="text-[#111b2f] text-3xl sm:text-4xl lg:text-[48px] font-bold text-center">
              Refund & Cancellation Policy
            </span>
          </div>
          <div className="flex flex-col items-start py-1 px-[17px] mb-3">
            <span className="text-slate-500 text-[15px] text-center max-w-[584px]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Refund Policy Content Section */}
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
                  Refund & Cancellation Policy
                </h1>
                <p className="text-slate-600 text-base leading-relaxed">
                  At <span className="font-semibold text-[#0b8276]">Karom Edusupplies Private Limited</span>, we strive to provide our customers with quality products and smooth services. 
                  However, if you are not entirely satisfied with your purchase, our Refund Policy is as follows:
                </p>
              </div>
            </motion.div>

            {/* Policy Sections */}
            <motion.div
              className="w-full space-y-5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {sections.map((section) => (
                <motion.div
                  key={section.title}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow border border-[#00000008]"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl"
                      style={{ backgroundColor: `${section.color}15` }}
                    >
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h2 
                        className="text-lg sm:text-xl font-bold mb-3"
                        style={{ color: section.color }}
                      >
                        {section.title}
                      </h2>
                      <ul className="space-y-2">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-500 text-sm sm:text-base leading-relaxed">
                            <span className="text-[#0b8276] mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Important Note */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="w-full mt-4"
            >
              <div className="bg-[#FF8A33]/10 rounded-xl p-6 sm:p-8 border border-[#FF8A33]/30">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#FF8A33] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111b2f] mb-1">
                      Important Note
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Please ensure you check all products upon delivery. For any issues, contact our customer support immediately 
                      to ensure a smooth refund or replacement process.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Summary Table */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="w-full"
            >
              <div className="bg-[#f7efeb] rounded-xl p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-[#111b2f] mb-4">
                  Quick Summary
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">⏱️</span>
                    <div>
                      <p className="font-medium text-[#111b2f]">Return Window</p>
                      <p className="text-sm text-slate-500">Within 7 days of delivery</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💰</span>
                    <div>
                      <p className="font-medium text-[#111b2f]">Refund Timeline</p>
                      <p className="text-sm text-slate-500">7-10 working days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📦</span>
                    <div>
                      <p className="font-medium text-[#111b2f]">Condition</p>
                      <p className="text-sm text-slate-500">Unused with original packaging</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🚫</span>
                    <div>
                      <p className="font-medium text-[#111b2f]">Non-Refundable</p>
                      <p className="text-sm text-slate-500">Customized & perishable items</p>
                    </div>
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
                  Raise a Request
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-2">
                  To raise a refund or return request, please contact us:
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

export default RefundPolicy;