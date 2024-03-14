import Image from 'next/image';
import React from 'react';


const NameAndLogo = ()=>{
    return(
        <div className="flex gap-10">
      <div className="h-[5rem] px-[2rem] bg-card flex rounded-md items-center gap-[2rem]">
        <div className="h-[4.5rem] w-[4.5rem] rounded-full overflow-hidden">
          <div className='relative width-[100%] h-[100%] rounded-full logo-image'>
          <Image alt="logo" src="/assets/logo.png" fill  className='object-contain'/>
          </div>
        </div>
        <div className="w-[200px] h-[59px] flex flex-col justify-between items-center">
          <div className="w-[100%] text-cardPrimary h-[30px] px-2 text-lg font-medium name">Subodh Ghimire</div>
          <div className="w-[100%] text-cardPrimary h-[25px] px-2 text-sm profession">Computer Engineer</div>
        </div>
      </div>
    </div>
    )
}

export default NameAndLogo;