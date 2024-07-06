import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import atom from "../../../public/icons/atom.png";
import bootstrap from "../../../public/icons/bootstrap.png";
import css from "../../../public/icons/css-3.png";
import devtools from "../../../public/icons/devtools.png";
import express from "../../../public/icons/express.png";
import figma from "../../../public/icons/figma.png";
import firebase from "../../../public/icons/firebase.png";
import html from "../../../public/icons/html-5.png";
import js from "../../../public/icons/js.png";
import jwt from "../../../public/icons/jwt.png";
import mongodb from "../../../public/icons/mongodb.png";
import netlify from "../../../public/icons/netlify.webp";
import next from "../../../public/icons/next.svg";
import node from "../../../public/icons/nodejs.png";
import servers from "../../../public/icons/servers.png";
import tailwind from "../../../public/icons/tailwind.png";
import vscode from "../../../public/icons/vscode.png";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="min-h-[80vh] container mx-auto my-16">
      <div className="flex lg:justify-start justify-center mb-12">
        <h1 className="lg:text-6xl text-4xl text-primary font-clash uppercase">
          My skills
        </h1>
        <GoArrowUpRight className="lg:text-6xl text-4xl" />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="bg-[#111B2D] border border-[#FFFFFF20] lg:p-10 p-7 rounded-md">
          <h1 className="text-2xl text-primary font-clash tracking-wider mb-6 flex items-center justify-start">
            Frontend Side <IoIosArrowRoundForward className="text-3xl" />
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-5">
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image className="w-auto lg:h-14 h-6" src={html} alt="html" />
              Html5
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image className="w-auto lg:h-14 h-6" src={css} alt="css" />
              Css3
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image className="w-auto lg:h-14 h-6" src={js} alt="Js" />
              Javascript
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image
                className=" lg:h-14 h-6 w-auto"
                src={tailwind}
                alt="tailwind"
              />
              Tailwind
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image
                className="w-auto lg:h-14 h-6"
                src={bootstrap}
                alt="bootstrap"
              />
              Bootstrap
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image className="w-auto lg:h-14 h-6" src={atom} alt="atom" />
              React
            </div>
          </div>
        </div>
        <div className="bg-[#111B2D] border border-[#FFFFFF20] lg:p-10 p-7 rounded-md">
          <h1 className="text-2xl text-primary font-clash tracking-wider mb-6 flex items-center justify-start">
            Backend Side <IoIosArrowRoundForward className="text-3xl" />
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-5">
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image className="w-auto lg:h-14 h-6" src={node} alt="Node js" />
              Node
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image
                className="w-auto lg:h-14 h-6"
                src={express}
                alt="Express js"
              />
              Express
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image
                className=" lg:h-14 h-6 w-auto"
                src={jwt}
                alt="Json Web Token"
              />
              Jwt
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image
                className="w-auto lg:h-14 h-6"
                src={firebase}
                alt="Firebase"
              />
              Firebase
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image className="w-auto lg:h-14 h-6" src={next} alt="next" />
              Next JS
            </div>
          </div>
        </div>
        <div className="bg-[#111B2D] border border-[#FFFFFF20] lg:p-10 p-7 rounded-md">
          <h1 className="text-2xl text-primary font-clash tracking-wider mb-6 flex items-center justify-start">
            Used Tools <IoIosArrowRoundForward className="text-3xl" />
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-5">
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <FaGithub className="text-2xl" />
              Github
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image
                className="w-auto lg:h-14 h-6"
                src={netlify}
                alt="Netlify"
              />
              Netlify
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image
                className="lg:h-12 h-6 w-auto"
                src={vscode}
                alt="Vs Code"
              />
              VS Code
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image
                className="w-auto lg:h-14 h-6"
                src={figma}
                alt="Firebase"
              />
              Figma
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image className="w-auto lg:h-14 h-6" src={devtools} alt="atom" />
              Devtools
            </div>
          </div>
        </div>
        <div className="bg-[#111B2D] border border-[#FFFFFF20] lg:p-10 p-7 rounded-md">
          <h1 className="text-2xl text-primary font-clash tracking-wider mb-6 flex items-center justify-start">
            Database <IoIosArrowRoundForward className="text-3xl" />
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-5">
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image
                className="w-auto lg:h-14 h-6"
                src={mongodb}
                alt="Mongodb"
              />
              Mongodb
            </div>
            <div className="flex gap-2 items-center bg-[#111B2D] border border-[#FFFFFF20] p-4 justify-center rounded-md text-sm lg:text-base">
              <Image
                className="w-auto lg:h-14 h-6"
                src={servers}
                alt="Local Storage"
              />
              Local Storage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
