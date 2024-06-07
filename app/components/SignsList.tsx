"use client";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Signs = [
  {
    name: "Aries",
    dates: "Mar 21 - Apr 19",
  },
  {
    name: "Taurus",
    dates: "Apr 20 - May 20",
  },
  {
    name: "Gemini",
    dates: "May 21 - Jun 20",
  },
  {
    name: "Cancer",
    dates: "Jun 21 - Jul 22",
  },
  {
    name: "Leo",
    dates: "Jul 23 - Aug 22",
  },
  {
    name: "Virgo",
    dates: "Aug 23 - Sep 22",
  },
  {
    name: "Libra",
    dates: "Sep 23 - Oct 22",
  },
  {
    name: "Scorpio",
    dates: "Oct 23 - Nov 21",
  },
  {
    name: "Sagittarius",
    dates: "Nov 22 - Dec 21",
  },
  {
    name: "Capricorn",
    dates: "Dec 22 - Jan 19",
  },
  {
    name: "Aquarius",
    dates: "Jan 20 - Feb 18",
  },
  {
    name: "Pisces",
    dates: "Feb 19 - Mar 20",
  },
];

const SignsList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 animate-fade">
      {Signs.map((sign, index) => (
        <Link
          key={`${sign}-${index}`}
          href={`/${sign.name}`.toLowerCase()}
          className="flex flex-row lg:flex-col items-center justify-center gap-2 p-2 lg:p-4 border rounded-lg text-center  group hover:border-neutral hover:link transition-colors duration-300 ease-in-out"
        >
          <div className="avatar">
            <div className="w-12 md:w-24 rounded-full bg-base-100 group-hover:bg-neutral transition-colors duration-300 ease-in-out">
              <Image
                width={90}
                height={90}
                src={`/images/${sign.name}.png`}
                alt={`${sign.name} symbol`}
              />
            </div>
          </div>
          <div className="flex-1 min-w-[135px]">
            <h2 className="text-sm md:text-2xl font-bold text-neutral">
              {sign.name}
            </h2>
            <p className="text-xs md:text-lg text-neutral">{sign.dates}</p>
          </div>
          <div className="lg:hidden">
            <ChevronRightIcon className="w-5 h-5 text-neutral" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SignsList;
