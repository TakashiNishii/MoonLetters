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
    <main className="flex flex-col min-h-[calc(100dvh-25px)] items-center p-6 md:p-24">
      <Header />
      <Horoscope signSelected={sign} horoscopeData={horoscopeData} />
      <Link
        href="/"
        className="font-extrabold md:text-3xl text-neutral flex items-center gap-2  "
      >
        <ArrowLeftCircleIcon className="w-10 h-10 cursor-pointer" />
        Go back
      </Link>
    </main>
  );
};

export default HoroscopePage;
