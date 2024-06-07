import React from "react";
import Header from "../components/Header";
import Horoscope from "../components/Horoscope";
import { getDataHoroscope } from "../components/functions/getDataHoroscope";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";

interface HoroscopePageProps {
  params: {
    sign: string;
  };
}

const HoroscopePage = async ({ params: { sign } }: HoroscopePageProps) => {
  const horoscopeData = await getDataHoroscope(sign);
  return (
    <div className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <Header />
      <Horoscope signSelected={sign} horoscopeData={horoscopeData} />
      <Link
        href="/"
        className="font-extrabold text-3xl text-neutral flex gap-2"
      >
        <ArrowLeftCircleIcon className="w-10 h-10 cursor-pointer" />
        Go back
      </Link>
    </div>
  );
};

export default HoroscopePage;
