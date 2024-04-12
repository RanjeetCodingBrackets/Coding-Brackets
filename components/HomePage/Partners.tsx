import React from "react";
import PartnersLogos from "../svg/PartnersLogos";

const PartnersSection = () => {
  return (
    <section className="container mx-auto mb-10">
      <div className="flex flex-col space-y-8 align-middle items-center justify-around">
        <h3 className="text-[#000333] text-3xl font-extrabold text-center">
          Trusted by nearly 5000+ customers & startups
        </h3>

        <div className="flex space-x-10 align-middle justify-around pt-3">
          <PartnersLogos />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
