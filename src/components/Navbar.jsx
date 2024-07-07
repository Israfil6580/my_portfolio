"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (pathName) => {
    return pathname === pathName;
  };
  const navlinks = (
    <>
      <li className={isActive("/") ? "active" : ""}>
        <Link
          className="text-base text-primary font-normal btn btn-ghost hover:bg-transparent"
          href={"/"}
        >
          Home
        </Link>
      </li>
      <li className={isActive("/projects") ? "active" : ""}>
        <Link
          className="text-base text-primary font-normal btn btn-ghost hover:bg-transparent"
          href={"/projects"}
        >
          Projects
        </Link>
      </li>
    </>
  );

  return (
    <div className="fixed lg:top-0 w-full z-40 W-glassmorphism md:px-20 px-4">
      <div className="navbar container mx-auto py-0 shadow-none">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-transparent lg:hidden p-0 pr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-[#2F3847] rounded-box z-[1] mt-3 w-64 p-2"
            >
              {navlinks}
            </ul>
          </div>
          <Link
            href={"/"}
            className="btn text-primary btn-ghost text-4xl font-clash font-semibold tracking-wide p-0 hover:bg-transparent"
          >
            Mironic
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end gap-5 items-center">
          {/* light/dark theme */}
          {/* <label className="flex cursor-pointer gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={"#fff"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={"#fff"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label> */}
          <Link
            href={"/contact"}
            className="btn btn-neutral bg-[#111B2D] rounded-md px-6 font-normal text-base text-primary min-h-6 h-12 hidden lg:flex"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
