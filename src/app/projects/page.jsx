import { GoArrowUpRight } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import blur from "../../../public/blur.png";
import project1 from "../../../public/project1.png";
import project2 from "../../../public/project2.png";
import project3 from "../../../public/project3.png";
import project4 from "../../../public/project4.png";
import atom from "../../../public/icons/atom.png";
import css from "../../../public/icons/css-3.png";
import express from "../../../public/icons/express.png";
import firebase from "../../../public/icons/firebase.png";
import html from "../../../public/icons/html-5.png";
import js from "../../../public/icons/js.png";
import jwt from "../../../public/icons/jwt.png";
import mongodb from "../../../public/icons/mongodb.png";
import node from "../../../public/icons/nodejs.png";
import mt from "../../../public/icons/mt.png";
import tailwind from "../../../public/icons/tailwind.png";
import daisy from "../../../public/icons/daisy.png";
import Link from "next/link";
const page = () => {
  return (
    <div className="min-h-screen container mx-auto pb-20 md:px-20 px-5">
      <div className="flex mb-10 lg:mt-32 mt-28 justify-start items-center">
        <h1 className="lg:text-6xl text-4xl text-primary font-clash">
          Projects
        </h1>
        <GoArrowUpRight className="lg:text-5xl text-4xl text-primary" />
      </div>

      <div className="flex flex-col gap-y-28">
        <div className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row justify-start items-center gap-10 font-normal transition-all duration-200 lg:hover:scale-95">
            <Image
              className="absolute left-1/2 -z-10"
              src={blur}
              alt="blur"
              priority
            />

            <div className="lg:text-5xl text-4xl text-primary font-clash flex flex-col lg:gap-y-4 gap-y-3">
              Netcomm
              <h2 className="lg:text-4xl text-3xl">June, 2024</h2>
              <p className="lg:text-xl text-lg">
                NetComm is a telecommunications equipment manufacturer known for
                producing a range of networking devices, including modems,
                routers, and gateways. The company specializes in providing
                reliable and innovative solutions for broadband, mobile, and
                fixed wireless access. NetComm&apos;s products are widely used
                by internet service providers and businesses to deliver
                high-speed internet connectivity and support various
                communication needs.
              </p>
              <h2 className="lg:text-4xl text-3xl mt-2">Technology Used</h2>
              <div className="flex gap-2 xl:gap-4 lg:gap-3">
                <Image
                  src={html}
                  alt="html"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={css}
                  alt="css"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={tailwind}
                  alt="tailwind"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={atom}
                  alt="react"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={js}
                  alt="js"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={firebase}
                  alt="firebase"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={mongodb}
                  alt="mongodb"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={express}
                  alt="express"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={node}
                  alt="node"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-3 lg:gap-4 gap-2 mt-5">
                <Link
                  href={"https://netcomm.netlify.app/"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  View Website <CgWebsite className="hidden lg:block" />
                </Link>
                <Link
                  href={"https://github.com/Israfil6580/client"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  Client Side <FaGithub />
                </Link>
                <Link
                  href={"https://github.com/Israfil6580/server"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  Server Side <FaGithub />
                </Link>
              </div>
            </div>

            <Image
              src={project4}
              className="lg:w-1/2 w-full lg:rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row justify-start items-center gap-10 font-normal transition-all duration-200 lg:hover:scale-95">
            <Image
              className="absolute left-1/2 -z-10"
              src={blur}
              alt="blur"
              priority
            />

            <Image
              src={project1}
              className="lg:w-1/2 w-full lg:rounded-lg"
              alt=""
            />
            <div className="lg:text-5xl text-4xl text-primary font-clash flex flex-col lg:gap-y-4 gap-y-3">
              Knowledge HUB
              <h2 className="lg:text-4xl text-3xl">February, 2024</h2>
              <p className="lg:text-xl text-lg">
                KnowledgeHUB is your premier online coaching center where you
                can enhance your skills and knowledge through a variety of
                courses. Whether you&apos;re looking to advance your career or
                explore new interests, KnowledgeHUB offers a diverse range of
                courses taught by experts in their fields.
              </p>
              <h2 className="lg:text-4xl text-3xl mt-2">Technology Used</h2>
              <div className="flex gap-2 xl:gap-4 lg:gap-3">
                <Image
                  src={html}
                  alt="html"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={css}
                  alt="css"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={tailwind}
                  alt="tailwind"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={mt}
                  alt="material tailwind"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={atom}
                  alt="react"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={js}
                  alt="js"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={firebase}
                  alt="firebase"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={mongodb}
                  alt="mongodb"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={express}
                  alt="express"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={jwt}
                  alt="jwt"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={node}
                  alt="node"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-3 lg:gap-4 gap-2 mt-5">
                <Link
                  href={"https://euphonious-centaur-a9c57b.netlify.app/"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  View Website <CgWebsite className="hidden lg:block" />
                </Link>
                <Link
                  href={"https://github.com/Israfil6580/knowledgeHUB_Client"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  Client Side <FaGithub />
                </Link>
                <Link
                  href={"https://github.com/Israfil6580/knowledgeHUB_Server"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  Server Side <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row justify-start items-center gap-10 font-normal transition-all duration-200 lg:hover:scale-95">
            <div className="lg:text-5xl text-4xl text-primary font-clash flex flex-col gap-y-3 lg:gap-y-4">
              Foodie App
              <h2 className="lg:text-4xl text-3xl">April, 2024</h2>
              <p className="lg:text-xl text-lg">
                FoddieApp is a web platform dedicated to food enthusiasts,
                offering a curated collection of recipes, cooking tips, and
                culinary inspirations.
              </p>
              <h2 className="lg:text-4xl text-3xl">Technology Used</h2>
              <div className="flex gap-2 lg:gap-3 xl:gap-4">
                <Image
                  src={html}
                  alt="html"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={css}
                  alt="css"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={tailwind}
                  alt="tailwind"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={daisy}
                  alt="daisy ui"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={atom}
                  alt="react"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={js}
                  alt="js"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={firebase}
                  alt="firebase"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={mongodb}
                  alt="mongodb"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={express}
                  alt="express"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={jwt}
                  alt="jwt"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={node}
                  alt="node"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-3 mt-5 lg:gap-4 gap-2">
                <Link
                  href={"https://foddieapp.netlify.app/"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  View Website <CgWebsite className="hidden lg:block" />
                </Link>
                <Link
                  href={"https://github.com/Israfil6580/Foodie_Client"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  Client Side <FaGithub />
                </Link>
                <Link
                  href={"https://github.com/Israfil6580/Foodie_Server"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  Server Side <FaGithub />
                </Link>
              </div>
            </div>
            <Image
              src={project2}
              className="lg:w-1/2 w-full lg:rounded-lg"
              alt=""
            />
            <Image
              className="absolute left-0 -z-10"
              src={blur}
              alt="blur"
              priority
            />
          </div>
        </div>
        <div className="relative z-10">
          <div className="flex lg:flex-row flex-col justify-start items-center gap-10 font-normal transition-all duration-200 lg:hover:scale-95">
            <Image
              className="absolute left-1/2 -z-10"
              src={blur}
              alt="blur"
              priority
            />
            <Image
              src={project3}
              className="lg:w-1/2 w-full lg:rounded-lg"
              alt=""
            />
            <div className="lg:text-5xl text-4xl text-primary font-clash flex flex-col lg:gap-y-4 gap-y-2">
              EuroGuide
              <h2 className="lg:text-4xl text-3xl">January, 2024</h2>
              <p className="lg:text-xl text-lg">
                A web application for exploring European travel destinations.
              </p>
              <h2 className="lg:text-4xl text-3xl">Technology Used</h2>
              <div className="flex gap-2 lg:gap-3 xl:gap-4">
                <Image
                  src={html}
                  alt="html"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={css}
                  alt="css"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={tailwind}
                  alt="tailwind"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={mt}
                  alt="material tailwind"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={atom}
                  alt="react"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={js}
                  alt="js"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={firebase}
                  alt="firebase"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={mongodb}
                  alt="mongodb"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={express}
                  alt="express"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={jwt}
                  alt="jwt"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
                <Image
                  src={node}
                  alt="node"
                  className=" h-4 lg:h-6 xl:h-7 w-auto"
                />
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-3 lg:gap-4 gap-2 mt-5">
                <Link
                  href={"https://magnificent-bavarois-f6e8db.netlify.app/"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  View Website <CgWebsite className="hidden lg:block" />
                </Link>
                <Link
                  href={"https://github.com/Israfil6580/EuroGuide_Client"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  Client Side <FaGithub />
                </Link>
                <Link
                  href={"https://github.com/Israfil6580/EuroGuide_Server"}
                  target="_blank"
                  className="btn btn-ghost glassmorphism lg:text-lg text-base font-normal text-primary flex items-center p-0"
                >
                  Server Side <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
