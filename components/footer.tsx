"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ITEMS = ["Listings", "Research", "Engage", "Community", "Apps"];
const FooterCpn: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex px-[24px] pt-[12px] pb-[27px] justify-between border-[#DFDFE1] border-t-[2px]">
      {ITEMS.map((aItem, key) => (
        <div
          key={key}
          className="text-center  text-[12px]"
          onClick={() => {
            router.push(key === 4 ? "/appStore/Tools" : "/other");
          }}
        >
          <div className="flex w-[22px] h-[22px] items-center m-auto justify-center">
            <Image
              src={`/img/footer/${aItem}.svg`}
              width={22}
              height={22}
              alt="listings"
              className="m-auto cursor-pointer"
            />
          </div>
          <span className="cursor-pointer">{aItem}</span>
        </div>
      ))}
    </div>
  );
};
export default FooterCpn;
