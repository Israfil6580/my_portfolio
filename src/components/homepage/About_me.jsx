import { GoArrowUpRight } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import about from "../../../public/about.jpg";
import Image from "next/image";
import Link from "next/link";
const About_me = () => {
  const phoneNumber = "+8801314543312";
  const message = "Hello, I would like to get in touch with you";
  return (
    <div className="min-h-[70vh] container mx-auto my-16">
      <div className="flex lg:justify-end justify-center mb-11">
        <h1 className="lg:text-6xl text-4xl text-primary font-clash uppercase">
          About me
        </h1>
        <GoArrowUpRight className="lg:text-6xl text-4xl" />
      </div>
      <div className="flex lg:flex-row flex-col items-center gap-10">
        <div className="lg:w-6/12 w-full">
          <Image
            src={about}
            className="w-full h-full object-cover lg:rounded-full"
            alt="About Me"
            priority
          />
        </div>
        <div className="lg:w-6/12 w-full flex flex-col items-start gap-5">
          <p className="text-primary">
            I specialize in using React JS, Next JS, and Tailwind CSS to bring
            your vision to life. Whether it&apos;s a personal project or a
            business website, I am dedicated to delivering high-quality,
            responsive, and engaging web applications that resonate with your
            audience.
          </p>
          <p className="text-primary">
            As a tech enthusiast, I am constantly exploring new technologies and
            staying up-to-date with industry trends. I believe in the power of
            innovation and strive to incorporate the latest advancements into my
            projects.
          </p>
          <Link
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost glassmorphism font-normal text-base mb-8 lg:mt-0 mt-2 flex items-center rounded-md px-6 font-clash text-primary"
          >
            WhatsApp <FaWhatsapp className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About_me;
