import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";
import HeroVector from "./svg/HeroVector";

const HomePageHeroSection = () => {
  return (
    <section
      className="max-w-[100vw] bg-center xl:h-[750px] h-[800px] bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(HomePageBg.png)" }}
    >
      <div
        className="bg-contain bg-center bg-no-repeat h-full"
        style={{ backgroundImage: "url(Banner.png)" }}
      >
        <div className="container h-full mx-auto grid grid-cols-2 justify-center">
          <div className="flex flex-col my-auto space-y-7">
            <h3 className="text-[#FE765D] font-bold text-2xl">
              Trusted Digital Agency!
            </h3>

            <div className="space-y-5">
              <h1 className="text-[#000333] font-extrabold text-6xl">
                Your Business Deserves
              </h1>
              <div className="">
                <h1 className="text-[#000333] font-extrabold text-6xl">
                  A <span className="text-[#0788A5]">Great Website </span>
                </h1>
                <div className="flex shrink-0 ml-[80px]">
                  <HeroVector />
                </div>
              </div>
            </div>

            <p className="text-[#7A7A7A] font-medium text-xl xl:pr-16">
              Our success in creating business solutions is due in large part to
              our talented and highly committed team.
            </p>

            <div className="flex space-x-7">
              <button className="px-5 py-3 rounded-xl bg-[#0788A5] text-white font-bold text-xl text-center align-middle items-center hover:text-[#0788A5] hover:bg-transparent hover:ring-1 hover:ring-[#0788A5] transition-all ease-in-out">
                Request a Free Quote!
              </button>
              <button className="flex px-5 py-3 rounded-xl bg-[#000333] text-white font-bold text-xl text-center align-middle items-center hover:text-[#000333] hover:bg-transparent hover:ring-1 hover:ring-[#000333] transition-all ease-in-out">
                <BiSolidPhoneCall className="w-8 h-8 mr-3" />{" "}
                <span>+91 9616782253</span>
              </button>
            </div>
          </div>

          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHeroSection;
