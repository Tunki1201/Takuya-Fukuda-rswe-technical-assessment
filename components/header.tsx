import React from "react";
import Image from "next/image";

const HeaderCpn: React.FC = () => {
  return (
    <div className="flex items-center gap-[0px] px-[24px] h-[66px] justify-between">
      <div>
        <Image width={56} height={25} src="/img/logo.svg" alt="logo" />
      </div>
      <div className="bg-[#EFF0F4] flex items-center rounded-[20px] px-[16px] py-[10px]">
        <span className="text-[14px]">Search for a property</span>
        <Image
          width={20}
          height={17}
          src={"/img/option.svg"}
          alt="option"
          className="ml-[25px]"
        />
      </div>
      <div>
        <Image width={40} height={40} src="/img/avatar.svg" alt="logo" />
      </div>
    </div>
  );
};
export default HeaderCpn;
