import Link from "next/link";
import { ReactNode } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CodingBracketsLogo from "./svg/CodingBracketsLogo";

const socials: { id: number; href: string; Icon: ReactNode }[] = [
  { id: 1, href: "", Icon: <FaFacebook className="w-6 h-6" /> },
  { id: 2, href: "", Icon: <AiFillInstagram className="w-6 h-6" /> },
  { id: 3, href: "", Icon: <FaYoutube className="w-6 h-6" /> },
  { id: 4, href: "", Icon: <FaXTwitter className="w-5 h-5" /> },
];

const companyLinks: { id: number; href: string; name: string }[] = [
  { id: 1, href: "", name: "About Company" },
  { id: 2, href: "", name: "Terms & Conditions" },
  { id: 3, href: "", name: "Privacy Policy" },
  { id: 4, href: "", name: "Refund Policy" },
  { id: 5, href: "", name: "Contact Us" },
  { id: 6, href: "", name: "Services" },
];

const contacts: { id: number; heading: string; details: string }[] = [
  {
    id: 1,
    heading: "Location",
    details:
      "4/453,Vibhav Khand Gomti Nagar Lucknow 226010 , India (OPEN 24 HOURS)",
  },
  { id: 2, heading: "Phone", details: "+919616782253" },
  { id: 3, heading: "MailTo", details: "sales@codingbrackets.dev" },
];

const Footer = () => {
  return (
    <footer className="bg-[#F5F8FF] pt-[130px] footer-skewed">
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          {/* Column One Sart */}
          <div className="flex flex-col space-y-10 mb-[80px]">
            <CodingBracketsLogo />

            <p className="text-[#7A7A7A] font-medium text-xl">
              Connect with CodingBrackets{"–"} Your Trusted Web Development
              Partner 🌐 | Let's turn your digital dreams into reality. Contact
              us for cutting-edge web solutions and tech expertise. 💻 |
            </p>

            <ul className="flex space-x-5">
              {socials.map((social) => (
                <li
                  key={social.id}
                  className="bg-[#0788A5] text-white p-2 rounded-xl flex items-center justify-center align-middle hover:text-[#0788A5] hover:bg-transparent hover:ring-1 hover:ring-[#0788A5] transition-all ease-in-out"
                >
                  <Link href={social.href} target="_blank">
                    {social.Icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column One end. */}

          {/* Column two start */}
          <div className="w-full h-full flex align-middle justify-end">
            <ul className="flex flex-col w-1/2 h-full pt-5 pb-14 align-middle justify-around">
              <h4 className="text-[#000333] font-bold text-lg">Company</h4>
              {companyLinks.map((link) => (
                <li
                  className="text-[#7A7A7A] font-normal text-base hover:text-[#0788A5] hover:font-medium transition-all ease-in-out"
                  key={link.id}
                >
                  <Link href={link.href} target="_blank">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column two end */}

          {/* Column Three start */}
          <div className="flex justify-end">
            <ul className="flex flex-col w-1/2 h-full pt-5 pb-14 align-middle justify-around">
              <h4 className="text-[#000333] font-bold text-lg">Locations</h4>
              {contacts.map((link) => (
                <li
                  key={link.id}
                  className="text-[#7A7A7A] font-normal text-base"
                >
                  <div className="flex flex-col space-y-2">
                    <h6 className="text-black font-medium text-base">
                      {link.heading}:
                    </h6>
                    <p>{link.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Clumn Three end. */}
        </div>
      </div>

      <div className="bg-[#E3E9F5]">
        <div className="container mx-auto font-medium text-base text-black py-3">
          © 2015 - 2023 QLOUDIN Technologies Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
