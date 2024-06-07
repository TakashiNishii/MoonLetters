"use client";
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
    <div className="my-10 p-6 md:p-12 w-full max-w-7xl bg-secondary  flex flex-col md:flex-row rounded-3xl">
      {signInfo && (
        <>
          <div className="md:max-w-sm flex flex-col  items-center text-center">
            <SignBaseInfo sign={signInfo} />
            <h2 className="text-sm md:text-2xl font-bold text-primary">
              Compatibility
            </h2>
            <p className="text-xs md:text-lg text-base-100">
              {horoscopeData?.compatibility}
            </p>

            <h2 className="text-sm md:text-2xl font-bold text-primary">Mood</h2>
            <p className="text-xs md:text-lg text-base-100">
              {horoscopeData?.mood}
            </p>
          </div>
          <div className="divider divider-vertical md:divider-horizontal divider-neutral" />
          <div className="flex flex-col flex-1 text-center md:text-start md:gap-10">
            <div>
              <h2 className="text-sm md:text-2xl font-bold text-primary">
                Prediction
              </h2>
              <p className="text-xs md:text-lg text-base-100">
                {horoscopeData?.description}
              </p>
            </div>

            <div className="flex flex-col justify-center flex-wrap  md:flex-row md:justify-between">
              <div>
                <h2 className="text-sm md:text-2xl font-bold text-primary">
                  Color
                </h2>
                <p className="text-xs md:text-lg text-base-100">
                  {horoscopeData?.color}
                </p>
              </div>

              <div>
                <h2 className="text-sm md:text-2xl font-bold text-primary">
                  Lucky Time
                </h2>
                <p className="text-xs md:text-lg text-base-100">
                  {horoscopeData?.lucky_time}
                </p>
              </div>

              <div>
                <h2 className="text-sm md:text-2xl font-bold text-primary">
                  Lucky Number
                </h2>
                <p className="text-xs md:text-lg text-base-100">
                  {horoscopeData?.lucky_number}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Horoscope;
