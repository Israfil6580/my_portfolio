import Image from "next/image";
import blur from "../../../public/blur.png";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="min-h-[84vh] container mx-auto relative">
      <Image className="absolute" src={blur} alt="blur" priority />
      <RiArrowRightDoubleLine className="absolute right-0 top-1/2 -translate-y-1/2 h-60 w-auto text-[#111B2D]" />
      <div className="flex mb-10 mt-20 justify-center">
        <h1 className="lg:text-7xl text-5xl text-primary font-clash">
          Contact
        </h1>
      </div>
      <div>
        <form className="max-w-screen-md mx-auto lg:p-10 p-4 glassmorphism rounded-md">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Johndoe@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave your discussion..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
