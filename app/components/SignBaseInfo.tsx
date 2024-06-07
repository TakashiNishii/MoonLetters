import Image from "next/image";
import React from "react";

interface SignBaseInfoProps {
  sign: {
    name: string;
    dates: string;
  };
}

const SignBaseInfo = ({ sign }: SignBaseInfoProps) => {
  return (
    <>
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
      <div className="min-w-[135px]">
        <h2 className="text-sm md:text-2xl font-bold text-neutral">
          {sign.name}
        </h2>
        <p className="text-xs md:text-lg text-neutral">{sign.dates}</p>
      </div>
    </>
  );
};

export default SignBaseInfo;
