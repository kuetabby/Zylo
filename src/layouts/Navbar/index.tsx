"use client";
import { useState } from "react";
import { Button } from "@/components";
import Link from "next/link";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import Logo from "@/assets/img/logo.png";
import { findUsLink, socialsLink } from "@/constant/links";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={
        "sticky top-0 px-8 py-2 lg:py-0 sm:py-4 xs:py-4 mb-10 z-20 bg-black bg-opacity-50"
      }
    >
      <div className="m-auto max-w-screen-2xl flex items-center justify-between">
        <Image width={200} alt="Logo Img" src={Logo} />
        <div className="flex items-center gap-8 justify-between md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col gap-8 justify-between absolute top-full left-0 w-full bg-black bg-opacity-50 p-8 md:flex md:flex-row md:static md:w-auto md:bg-transparent`}
        >
          <Link
            href={"#home"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white no-underline text-[16px] font-medium"
          >
            Home
          </Link>
          <Link
            href={"#about"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white no-underline text-[16px] font-medium"
          >
            About
          </Link>
          <Link
            href={"#faq"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white no-underline text-[16px] font-medium"
          >
            FAQ
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={socialsLink.whitepaper}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white no-underline text-[16px] font-medium"
          >
            Documentation
          </Link>
          <div className="md:hidden">
            <Link
              href={findUsLink.uniswap}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button
                // onClick={() => window.open(findUsLink.uniswap, '_blank')}
                label="$WASH"
                variant="primary"
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Link
            href={findUsLink.uniswap}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              // onClick={() => window.open(findUsLink.uniswap, '_blank')}
              label="$WASH"
              variant="primary"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
