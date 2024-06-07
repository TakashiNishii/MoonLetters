import React from "react";
import SignBaseInfo from "../SignBaseInfo";

interface HoroscopeData {
  signInfo: {
    name: string;
    dates: string;
  };
  compatibility?: string;
  mood?: string;
}

const LeftInformation = ({ signInfo, compatibility, mood }: HoroscopeData) => {
  return (
    <div className="md:max-w-sm flex flex-col  items-center text-center">
      <SignBaseInfo sign={signInfo} />
      <h2 className="text-sm md:text-2xl font-bold text-primary">
        Compatibility
      </h2>
      <p className="text-xs md:text-lg text-base-100">{compatibility}</p>

      <h2 className="text-sm md:text-2xl font-bold text-primary">Mood</h2>
      <p className="text-xs md:text-lg text-base-100">{mood}</p>
    </div>
  );
};

export default LeftInformation;
