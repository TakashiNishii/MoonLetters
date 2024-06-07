import React from "react";
import Header from "../components/Header";
import Horoscope from "../components/Horoscope";
import { getDataHoroscope } from "../components/functions/getDataHoroscope";

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
    </div>
  );
};

export default HoroscopePage;
