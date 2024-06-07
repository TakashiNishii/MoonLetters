import React from "react";
import Header from "../components/Header";

interface HoroscopePageProps {
  params: {
    sign: string;
  };
}

const HoroscopePage = ({ params: { sign } }: HoroscopePageProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <Header />
      <p className="text-xs md:text-2xl text-neutral text-center">
        Your horoscope for {sign}
      </p>
    </div>
  );
};

export default HoroscopePage;
