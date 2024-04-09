import { ReactNode } from "react";
import { FaWordpressSimple } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { GoLaw } from "react-icons/go";
import { SiYourtraveldottv } from "react-icons/si";
import { IoSchoolSharp } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";

const services: {
  id: number;
  Icon: ReactNode;
  background: string;
  title: string;
  dscription: string;
}[] = [
  {
    id: 1,
    Icon: <FaWordpressSimple className="w-12 h-12 text-[#4669FF]" />,
    background: "DFE5FF",
    title: "Telecom/ IT Websites",
    dscription:
      "Empower your Telecom and IT business with our dynamic, user-friendly websites. Elevate your online presence.",
  },
  {
    id: 2,
    Icon: <IoHome className="w-12 h-12 text-[#DB58B4]" />,
    background: "FFD3F2",
    title: "Real Estate Website",
    dscription:
      "Explore endless real estate possibilities on our innovative, user-friendly property websites. Your dream home awaits!",
  },
  {
    id: 3,
    Icon: <GoLaw className="w-12 h-12 text-[#408B33]" />,
    background: "D1EECC",
    title: "Law Firm Websites",
    dscription:
      "Trustworthy, professional law firm websites—your legal partner in a digital world. Expertise you can rely on.",
  },
  {
    id: 4,
    Icon: <SiYourtraveldottv className="w-12 h-12 text-[#03709F]" />,
    background: "88DBFF",
    title: "Travel Websites",
    dscription:
      "Embark on your journey with immersive travel websites. Discover, plan, and experience the world like never before.",
  },
  {
    id: 5,
    Icon: <IoSchoolSharp className="w-12 h-12 text-[#CF6022]" />,
    background: "FFDBC7",
    title: "Educational Websites",
    dscription:
      "Educational websites: Unleash your learning potential. Access resources, engage, and excel in your educational journey.",
  },
  {
    id: 6,
    Icon: <GiShoppingCart className="w-12 h-12 text-[#3295AC]" />,
    background: "AEF0FF",
    title: "E-commerce Websites",
    dscription:
      "Elevate your business with our Ecommerce website services. A complete solution for online retail success.",
  },
];

const ServicesPage = () => {
  return (
    <section className="container mx-auto mt-5 mb-16">
      <div
        className="h-full w-full bg-contain bg-top bg-no-repeat"
        style={{ backgroundImage: "url(/ServicesSectionBg.png)" }}
      >
        <div className="flex flex-col space-y-5 text-center py-14 align-middle justify-center">
          <h2 className="text-[#000333] font-extrabold text-5xl ">
            What You Get with Our Services
          </h2>

          <p className="text-[#7A7A7A] font-medium text-2xl ">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and
            <br /> publishing industries for previewing layouts and visual
            mockups
          </p>
        </div>

        <div className="grid grid-cols-4 place-items-center align-middle px-16 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col group space-y-5 text-center align-middle justify-center items-center bg-white py-12 px-7 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-300 transition-all ease-in-out"
            >
              <div
                className="p-5 flex align-middle justify-center items-center rounded-full"
                style={{ background: `#${service.background}` }}
              >
                {service.Icon}
              </div>

              <h4 className="text-[#000333] font-semibold text-xl align-middle">
                {service.title}
              </h4>

              <p className="text-[#7A7A7A] font-medium text-base align-middle">
                {service.dscription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
