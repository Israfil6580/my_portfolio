import Image from "next/image";
import blur from "../../../public/blur.png";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="min-h-[91vh] container mx-auto relative mt-4">
      <Image className="absolute" src={blur} alt="blur" priority />
      <RiArrowRightDoubleLine className="absolute right-0 top-1/2 -translate-y-1/2 h-60 w-auto text-[#111B2D]" />
      <div className="flex justify-center mb-10 pt-20">
        <h1 className="lg:text-7xl text-5xl text-primary font-clash">
          Contact me
        </h1>
      </div>
      <div>
        <form className="max-w-screen-md mx-auto lg:p-10 p-4 glassmorphism rounded-md">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-primary"
            >
              Your Name
            </label>
            <input
              type="text"
              id="sendername"
              className="bg-gray-700 border border-gray-600 text-primary text-base rounded-md focus:border-blue-500 block w-full p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-primary"
            >
              Your email
            </label>
            <input
              type="email"
              id="replyto"
              className="bg-gray-700 border border-gray-600 text-primary text-base rounded-md focus:border-blue-500 block w-full p-2.5"
              placeholder="Johndoe@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 text-base font-medium text-primary"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-base text-primary bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-primary bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-base w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
