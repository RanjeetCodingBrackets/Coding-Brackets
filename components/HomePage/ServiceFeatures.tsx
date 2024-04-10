import { serviceFeatures } from "@/lib/schema/serviceFeatures";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceFeaturesPage = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col space space-y-6 items-center align-middle justify-center text-center mb-10">
        <h3 className="text-[#FE765D] font-extrabold text-2xl">
          Comprehensive Service Offerings
        </h3>

        <h2 className="text-[#000333] font-extrabold text-5xl tracking-normal">
          What Included With Our Services
        </h2>
      </div>

      <div className="">
        {serviceFeatures.map((feature) => (
          <div
            className="grid grid-cols-2 px-[140px] py-16 place-items-center gap-10"
            key={feature.id}
          >
            <div
              className={`flex flex-col space-y-7 align-middle justify-center ${
                feature.id % 2 === 0 ? "order-last" : ""
              }`}
            >
              <h2 className="text-[#000333] font-extrabold text-4xl text-nowrap">
                {feature.title}
              </h2>
              <p className="text-[#7A7A7A] font-medium text-lg ">
                {feature.description}
              </p>

              <button className="bg-[#000333] max-w-fit px-5 py-3 rounded-xl text-white font-bold text-xl text-center align-middle items-center justify-center hover:bg-transparent hover:text-[#000333] hover:ring-1 hover:ring-[#000333] transition-all ease-in-out">
                <Link href={feature.href}>Get Started</Link>
              </button>
            </div>

            <div className="relative h-full w-auto">
              <Image
                alt={feature.title}
                src={feature.image}
                quality={100}
                style={{ position: "static" }}
                className="max-h-full w-auto z-10"
                width={10000}
                height={10000}
              />

              {feature.id % 2 !== 0 && (
                <Image
                  alt=""
                  src={"/Ellipse1.png"}
                  style={{
                    top: "-120px",
                    left: "-140px",
                    position: "absolute",
                    zIndex: -99,
                  }}
                  className="w-[900px] h-[700px] max-w-none"
                  width={1000}
                  height={1000}
                />
              )}

              {feature.id % 2 === 0 && (
                <Image
                  alt=""
                  src={"/Ellipse2.png"}
                  style={{
                    top: "-120px",
                    left: "-350px",
                    position: "absolute",
                    zIndex: -99,
                  }}
                  className="w-[900px] h-[700px] max-w-none"
                  width={1000}
                  height={1000}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeaturesPage;
