import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutCompanyPage = () => {
  return (
    <section className="container mx-auto my-24">
      <div className="flex justify-center align-middle w-full h-full ">
        <div className="grid grid-cols-2 place-items-center">
          <div className="relative object-contain">
            <Image
              alt="About Company"
              src={"/AboutCompanyImage.png"}
              quality={100}
              style={{ position: "static" }}
              className="max-h-full w-auto"
              width={10000}
              height={10000}
            />
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-[#FE765D] font-extrabold text-2xl ">
              About Our Company!
            </h3>

            <h2 className="text-[#000333] font-extrabold text-5xl leading-snug tracking-normal">
              About CodingBrackets - An Innovative Team That Works Back-Stage
              For You
            </h2>

            <p className="text-[#7A7A7A] font-medium text-xl pr-20">
              CodingBrackets is a leading web development services provider.
              With a dedicated team, we craft visually appealing, user-friendly
              websites that drive success for businesses in the online world.
            </p>

            <button className="flex px-5 py-3 rounded-xl justify-center items-center align-middle text-white font-bold text-xl bg-[#000333] text- max-w-fit hover:bg-transparent hover:text-[#000333] hover:ring-1 hover:ring-[#000333] transition-all ease-in-out">
              <Link className="" href="/">
                Request a Free Quote!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanyPage;
