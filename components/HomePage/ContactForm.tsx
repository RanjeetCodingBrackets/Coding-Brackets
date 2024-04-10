"use client";

import { contactSchema } from "@/lib/validation/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type contact = z.infer<typeof contactSchema>;

const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contact>();

  return (
    <section className="container mx-auto px-16">
      <div
        className="bg-top bg-no-repeat bg-cover min-w-full min-h-fit py-10 px-28 rounded-[40px] overflow-hidden"
        style={{ backgroundImage: "url(/ContactFormBg.png)" }}
      >
        <div className="flex flex-col space-y-7 items-center align-middle justify-center">
          <h5 className="text-white font-extrabold text-2xl">
            Lets have a project with us!
          </h5>
          <h2 className="text-white font-extrabold text-5xl">
            Let&apos;s Discuss Your Project
          </h2>
        </div>

        <form onSubmit={handleSubmit((data) => console.log(data))} className="">
          <div className="w-full flex pt-10 space-x-20">
            <div className="flex flex-col w-full space-y-4">
              <label htmlFor="name" className="text-white font-medium text-xl">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="px-4 py-5 rounded-lg placeholder:text-[#B3B3B3] placeholder:text-xl placeholder:font-medium outline-none text-gray-700 text-xl font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out"
              />
            </div>

            <div className="flex flex-col w-full space-y-4">
              <label htmlFor="email" className="text-white font-medium text-xl">
                Email
              </label>
              <input
                {...register("email")}
                type="text"
                id="email"
                placeholder="Enter Your Email Address"
                className="px-4 py-5 rounded-lg placeholder:text-[#B3B3B3] placeholder:text-xl placeholder:font-medium outline-none text-gray-700 text-xl font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out"
              />
            </div>
          </div>

          <div className="w-full flex pt-10 space-x-20">
            <div className="flex flex-col w-full space-y-4">
              <label htmlFor="phone" className="text-white font-medium text-xl">
                Phone
              </label>
              <input
                {...register("phone")}
                type="text"
                id="phone"
                placeholder="Enter Your Phone Number"
                className="px-4 py-5 rounded-lg placeholder:text-[#B3B3B3] placeholder:text-xl placeholder:font-medium outline-none text-gray-700 text-xl font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out"
              />
            </div>

            <div className="flex flex-col w-full space-y-4">
              <label
                htmlFor="budget"
                className="text-white font-medium text-xl"
              >
                Budget
              </label>
              <input
                {...register("budget")}
                type="number"
                id="budget"
                placeholder="Enter Your Budget"
                className="px-4 py-5 rounded-lg placeholder:text-[#B3B3B3] placeholder:text-xl placeholder:font-medium outline-none text-gray-700 text-xl font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out"
              />
            </div>
          </div>

          <div className="flex flex-col w-full space-y-4 pt-10">
            <label
              htmlFor="services"
              className="text-white font-medium text-xl"
            >
              Services
            </label>
            <select
              {...register("services")}
              //   type="text"
              id="services"
              //   placeholder="Telecom/ IT Websites"
              className="px-4 py-5 appearance-none rounded-lg placeholder:text-[#B3B3B3] placeholder:text-xl placeholder:font-medium outline-none text-gray-700 text-xl font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out"
            >
              <option hidden value="" className="text-gray-400 opacity-50">
                Select an option
              </option>
              <option value="Telecom/IT Websites" className="">
                Telecom/IT Websites
              </option>
            </select>
          </div>

          <div className="flex flex-col w-full space-y-4 pt-10">
            <label htmlFor="comment" className="text-white font-medium text-xl">
              Comment or Message
            </label>
            <textarea
              {...register("comment")}
              rows={3}
              id="comment"
              placeholder="Write Us a Message"
              className="px-4 py-5 rounded-lg placeholder:text-[#B3B3B3] placeholder:text-xl placeholder:font-medium outline-none text-gray-700 text-xl font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out"
            />
          </div>

          <div className="pt-10 w-full flex justify-center align-middle items-center">
            <button
              type="submit"
              className="text-[#0788A5] font-bold text-xl items-center align-middle px-7 py-4 rounded-xl bg-white hover:bg-[#0788A5] hover:text-white hover:ring-1 hover:ring-white transition-all ease-in-out"
            >
              Request Proposal
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
