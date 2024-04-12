import React from "react";

const GetInTouchSection = () => {
  return (
    <section className="container mx-auto px-[210px] my-28">
      <div
        className="flex flex-col space-y-5 align-middle justify-around items-center p-10 bg-cover bg-no-repeat bg-center rounded-3xl"
        style={{ backgroundImage: "url(/GetInTouchBg.png)" }}
      >
        <h4 className="text-white text-2xl font-extrabold text-center">
          Let's work with us!
        </h4>

        <h2 className="text-white font-extrabold text-5xl text-center">
          Let's Talk About Your Dream Project?
        </h2>

        <p className="text-white text-xl text-center w-[60%] tracking-normal">
          CodingBrackets a trusted name for providing assistants. Initially
          their main objective was
        </p>

        <div className="flex align-middle justify-center space-x-6 pt-3">
          <button className="text-[#0788A5] font-bold text-xl items-center align-middle bg-white px-16 py-4 rounded-xl hover:bg-[#0788A5] hover:text-white hover:ring-2 hover:ring-white transition-all duration-200 ease-in-out">
            Get In Touch
          </button>

          <button className="text-[#0788A5] font-bold text-xl items-center align-middle bg-white px-16 py-4 rounded-xl hover:bg-[#0788A5] hover:text-white hover:ring-2 hover:ring-white transition-all duration-200 ease-in-out">
            Our Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
