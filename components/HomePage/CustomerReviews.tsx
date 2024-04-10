import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const reviews: {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}[] = [
  {
    id: 1,
    name: "Ernest Smith",
    role: "Developer at Unixity",
    image: "/review@1.png",
    rating: 5,
    comment:
      "Outstanding dedication to excellence, exceptional support received. Impressive service!",
  },
  {
    id: 2,
    name: "Stella Smith",
    role: "Engineer at Unify",
    image: "/review@2.png",
    rating: 5,
    comment:
      "Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations.",
  },
  {
    id: 3,
    name: "Thomas Smith",
    role: "Designer at Converta",
    image: "/review@3.png",
    rating: 5,
    comment:
      "I highly recommend this agency. Testing for our project was done everything top-notch",
  },
];

const CustomerReviewsSection = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="flex justify-center align-middle items-center w-full">
        <h2 className="text-5xl font-extrabold text-[#000333]">
          What our customers are saying
        </h2>
      </div>

      <div className="flex justify-between align-middle items-center w-full py-12">
        <div className="border border-[#0788A5] rounded-full p-4 flex align-middle justify-center items-center cursor-pointer group hover:bg-[#0788A5] hover:text-white transition-all ease-in-out">
          <FaAngleLeft className="w-6 h-6 text-[#0788A5] group-hover:text-white" />
        </div>

        <div className="flex flex-grow space-x-5 justify-evenly align-middle items-center mx-5">
          {reviews.map((review) => (
            <div className="flex flex-col space-y-6 align-middle justify-center bg-[#F8FAFC] py-8 px-8 border border-[#E7E5EA] rounded-[40px] hover:-translate-y-1 hover:shadow-lg transition-all ease-in-out">
              <div className="flex space-x-5 align-middle justify-start">
                <div className="">
                  <Image
                    alt={review.name}
                    src={review.image}
                    width={1000}
                    height={1000}
                    quality={100}
                    className="static w-auto max-h-full"
                  />
                </div>

                <div className="flex flex-col space-y-3 align-middle">
                  <h4 className="text-[#000333] text-2xl font-semibold">
                    {review.name}
                  </h4>
                  <p className="text-[#A7AFC5] font-medium text-xl">
                    {review.role}
                  </p>

                  <div className="flex space-x-3 align-middle justify-start">
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                  </div>
                </div>
              </div>

              <p className="text-[#818DAC] text-xl font-medium">
                {review.comment}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-[#0788A5] rounded-full p-4 flex align-middle justify-center items-center cursor-pointer group hover:bg-[#0788A5] hover:text-white transition-all ease-in-out">
          <FaAngleRight className="w-6 h-6 text-[#0788A5] group-hover:text-white" />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
