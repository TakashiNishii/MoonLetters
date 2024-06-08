"use client";
import LeftInformation from "./Horoscope/LeftInformation";
import RightInformation from "./Horoscope/RightInformation";
import SignBaseInfo from "./SignBaseInfo";
import { HoroscopeData } from "./enum/HoroscopeData";
import { Signs } from "./enum/Signs";

interface HoroscopeProps {
  signSelected: string;
  horoscopeData?: HoroscopeData;
}
const Horoscope = ({ signSelected, horoscopeData }: HoroscopeProps) => {
  const signInfo = Signs.find(
    (sign) => sign.name.toLowerCase() === signSelected
  );

  return (
    <div className="animate-leftToRightFade my-10 p-6 md:p-12 w-full max-w-7xl bg-secondary  flex flex-col md:flex-row rounded-3xl">
      {signInfo && (
        <>
          <LeftInformation
            signInfo={signInfo}
            compatibility={horoscopeData?.compatibility}
            mood={horoscopeData?.mood}
          />
          <div className="divider divider-vertical md:divider-horizontal divider-neutral" />
          <RightInformation horoscopeData={horoscopeData} />
        </>
      )}
    </div>
  );
};

export default Horoscope;
