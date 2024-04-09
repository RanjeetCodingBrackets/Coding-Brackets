import React from "react";

const ServiceFeaturesPage = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col space space-y-6 items-center align-middle justify-center text-center ">
        <h3 className="text-[#FE765D] font-extrabold text-2xl">
          Comprehensive Service Offerings
        </h3>

        <h2 className="text-[#000333] font-extrabold text-5xl tracking-normal">
          What Included With Our Services
        </h2>
      </div>

      <div className="">
        <div className="grid grid-cols-2 bg-gray-200">
          <div className="">col 1</div>
          <div className="">col 2</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeaturesPage;
