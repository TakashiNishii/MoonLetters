"use client";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Signs } from "./enum/Signs";
import SignBaseInfo from "./SignBaseInfo";

const SignsList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-3 animate-fade">
      {Signs.map((sign, index) => (
        <Link
          key={`${sign}-${index}`}
          href={`/${sign.name}`.toLowerCase()}
          className="flex flex-row lg:flex-col items-center justify-center gap-2 p-2 lg:p-4 border rounded-lg text-center  group hover:border-neutral hover:link transition-colors duration-300 ease-in-out"
        >
          <SignBaseInfo sign={sign} />
          <div className="lg:hidden">
            <ChevronRightIcon className="w-5 h-5 text-neutral" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SignsList;
