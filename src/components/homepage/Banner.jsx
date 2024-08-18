"use client";
import React from "react";
import Image from "next/image";
import card from "../../../public/card.svg";
import icon from "../../../public/icon.svg";
import blur from "../../../public/blur.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Typed from "typed.js";
import { GoDownload } from "react-icons/go";
const Banner = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Junior MERN Stack Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      fadeOut: true,
      loop: true,
      showCursor: false,
    });

    // Clean up the animation when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/5 object-cover">
        <Image
          className="object-cover h-full rotate-180"
          src={blur}
          alt="Blur Effect"
          priority
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 object-cover">
        <Image
          className="object-cover h-full"
          src={blur}
          alt="Blur Effect"
          priority
        />
      </div>
      <div className="container mx-auto lg:flex items-center min-h-screen relative">
        <div className="lg:w-6/12 w-full">
          <div className="lg:pt-0 pt-40">
            <h1 className="text-primary text-4xl lg:pb-0 pb-2 uppercase font-clash">
              Hey there 👋,
            </h1>
            <h1 className="lg:text-6xl text-5xl text-primary uppercase font-clash">
              I Am Israfil Hossain
            </h1>
            <h1
              className="text-primary lg:text-4xl text-3xl uppercase lg:h-20 font-clash"
              ref={el}
            />
            <button>
              {" "}
              <a
                href={"/Demo_resume.pdf"}
                download
                className="btn btn-ghost glassmorphism font-normal text-base mb-8 lg:mt-0 mt-8 flex items-center rounded-md px-6 font-clash  text-primary"
              >
                Download CV <GoDownload className="text-lg" />
              </a>
            </button>
          </div>
          <Image src={icon} alt="Icon" />
          <p className="text-normal font-normal lg:w-7/12 w-full text-primary text-base">
            A passionate frontend web developer from Bangladesh with a keen eye
            for detail and a love for creating visually stunning and
            user-friendly web applications.
          </p>
        </div>
        <div className="lg:w-6/12 w-full flex items-center justify-between">
          <Image
            className="p-2 w-2/3 h-auto pt-10"
            src={card}
            alt="Banner Card"
            priority
          />
          <div className="flex md:flex-col flex-row gap-4 fixed z-50 glassmorphism py-4 rounded-xl md:bottom-auto  bottom-2 left-1/2 md:left-auto -translate-x-1/2 md:-translate-x-0 md:top-1/3 md:right-12 ">
            <a
              href="https://www.facebook.com/israfil6580/"
              target="_blank"
              className="btn btn-ghost hover:bg-transparent"
            >
              <FaFacebookSquare className="text-4xl text-primary" />
            </a>
            <a
              href="https://www.instagram.com/mohammadisrafil6580/"
              target="_blank"
              className="btn btn-ghost hover:bg-transparent"
            >
              <FaSquareInstagram className="text-4xl text-primary" />
            </a>
            <a
              href="https://github.com/Israfil6580/"
              target="_blank"
              className="btn btn-ghost hover:bg-transparent"
            >
              <FaSquareGithub className="text-4xl text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/mdisrafilhossain/"
              target="_blank"
              className="btn btn-ghost hover:bg-transparent"
            >
              <FaLinkedin className="text-4xl text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
