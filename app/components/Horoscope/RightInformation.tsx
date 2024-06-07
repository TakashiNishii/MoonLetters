import { HoroscopeData } from "../enum/HoroscopeData";

interface HoroscopeDataProps {
  horoscopeData?: HoroscopeData;
}
const RightInformation = ({ horoscopeData }: HoroscopeDataProps) => {
  return (
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
          <h2 className="text-sm md:text-2xl font-bold text-primary">Color</h2>
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
  );
};

export default RightInformation;
