"use client";

import Link from "next/link";
import CodingBracketsLogo from "./svg/CodingBracketsLogo";

const navLinks: { id: number; link: string; href: string }[] = [
  { id: 1, link: "Home", href: "" },
  { id: 2, link: "Services", href: "" },
  { id: 3, link: "Contact us", href: "" },
  { id: 4, link: "Testimonials", href: "" },
];

const NavBar = () => {
  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto flex w-full justify-between py-1">
        <div className="flex align-middle space-x-20">
          <Link href="/">
            <CodingBracketsLogo />
          </Link>
          <ul className="flex space-x-20 items-center font-semibold text-gray-500 text-xl text-center pt-3">
            {navLinks.map((navItem) => (
              <li
                key={navItem.id}
                className="hover:text-gray-900 transition-all ease-in-out"
              >
                <Link href={navItem.href}>{navItem.link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <button className="w-fit h-fit my-auto rounded-xl text-white px-8 py-4 bg-cyan-600 font-semibold text-xl hover:bg-white hover:text-cyan-600 hover:ring-1 hover:ring-cyan-600 transition-all ease-in-out">
          Free Quote!
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
