"use client";

import { type faqs } from "@/lib/schema/faq";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Collapsible = ({ faq }: { faq: (typeof faqs)[0] }) => {
  const [isOpen, setFaqOpen] = useState(false);

  return (
    <div
      className={`my-3 border-[#E7E5EA] border rounded-3xl group hover:bg-[#F8FAFC] hover:shadow-md transition-all duration-300 ease-in-out ${
        isOpen ? "bg-[#F8FAFC]" : "bg-transparent"
      }`}
    >
      <button className="w-full px-7 py-6" onClick={() => setFaqOpen(!isOpen)}>
        <div className="flex justify-between align-middle ">
          <div className="flex space-x-4 align-middle justify-center my-auto">
            <span className="flex align-middle w-6 h-6 justify-center items-center text-sm bg-[#0788A5] text-white font-semibold p-2 rounded-full my-auto">
              {faq.id}
            </span>

            <span className="flex align-middle justify-center font-semibold text-xl text-black my-auto">
              {faq.question}
            </span>
          </div>

          {isOpen ? (
            <FaAngleUp className="w-6 h-6 my-auto group-hover:text-[#0788A5] transition-all duration-300 ease-in-out" />
          ) : (
            <FaAngleDown className="w-6 h-6 my-auto group-hover:text-[#0788A5] transition-all duration-300 ease-in-out" />
          )}
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#818DAC] text-start text-lg ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 pt-2 pl-9"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">{faq.answer}</div>
        </div>
      </button>
    </div>
  );
};

export default Collapsible;
