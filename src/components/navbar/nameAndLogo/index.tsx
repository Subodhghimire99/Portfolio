import Image from "next/image";
import React from "react";

const NameAndLogo = () => {
  return (
    <div className="flex">
      <div className="h-[5rem] flex rounded-md items-center gap-[2rem]">
        <div className="h-[4.5rem] w-[4.5rem] rounded-full overflow-hidden">
          <div className="relative width-[100%] h-[100%] rounded-full logo-image">
            <Image
              alt="logo"
              src="/assets/logo.png"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="h-[59px] w-[20rem] flex flex-col justify-between items-center">
          <div className="w-[100%] text-cardPrimary h-[30px] px-2 text-title1 font-medium name">
            Subodh Ghimire
          </div>
          <div className="w-[100%] text-cardPrimary h-[25px] px-2 text-title2 profession">
            Computer Engineer
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameAndLogo;
